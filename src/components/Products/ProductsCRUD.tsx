import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { RootState } from '../../redux'
import * as ProductsAction from '../../redux/Products/Products.actions'
import Table, { TableHeader } from "../../shared/Table"
import { Product } from '../../shared/Table/Table.mockdata'
import ProductForm, { ProductCreator } from './ProductForm'


const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

declare interface ProductsCRUDProps {
  products: Product[]
}

function ProductsCRUD(props: ProductsCRUDProps) {
  const dispatch = useDispatch()
  // const [products, setProducts] = useState<Product[]>([])
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)

  async function fetchData() {
    try {
      await dispatch(ProductsAction.getProducts())
    } catch (err) {
      if (err instanceof Error)
        Swal.fire('Oops!', err.message, 'error')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  async function handleProductSubmit(product: ProductCreator) {
    try {
      dispatch(ProductsAction.insertNewProduct(product))
    } catch (err) {
      if (err instanceof Error)
        Swal.fire('Oops!', err.message, 'error')
    }
  }

  async function handleProductUpdate(newProduct: Product) {
    try {
      await dispatch(ProductsAction.updateProduct(newProduct))
      setUpdatingProduct(undefined)
    } catch (err) {
      if (err instanceof Error)
        Swal.fire('Oops!', err.message, 'error')
    }

  }

  async function deleteProduct(id: string) {
    try {
      await dispatch(ProductsAction.deleteProduct(id))
      Swal.fire('Uhul!', 'Product successfully deleted', 'success')
    } catch (err) {
      if (err instanceof Error)
        Swal.fire('Oops!', err.message, 'error')
    }
  }

  function handleProductDelete(product: Product) {
    Swal
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#09f',
        cancelButtonColor: '#d33',
        confirmButtonText: `Yes, delete ${product.name}!`
      })
      .then((result) => {
        if (result.value) {
          deleteProduct(product._id)
        }
      })
  }

  function handleProductDetail(product: Product) {
    Swal.fire(
      'Product details',
      `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
      'info'
    )
  }

  function handleProductEdit(product: Product) {
    setUpdatingProduct(product)
  }

  return <>
    <Table
      headers={headers}
      data={props.products}
      enableActions
      onDelete={handleProductDelete}
      onDetail={handleProductDetail}
      onEdit={handleProductEdit}
    />

    <ProductForm
      form={updatingProduct}
      onSubmit={handleProductSubmit}
      onUpdate={handleProductUpdate}
    />
  </>
}

const mapStateToProps = (state: RootState) => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)