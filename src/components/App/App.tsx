import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { createSingleProduct, deleteSingleProduct, getAllProducts, updateSingleProduct } from '../../services/Products.service';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import { Product } from '../../shared/Table/Table.mockdata';
import Header from '../Header';
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import './App.css';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)

  async function fetchData() {
    const _products = await getAllProducts()
    setProducts(_products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  async function handleProductSubmit(product: ProductCreator) {
    try {
      await createSingleProduct(product)
      fetchData()
    } catch (err) {
      if (err instanceof Error)
        Swal.fire('Oops!', err.message, 'error')
    }
  }

  async function handleProductUpdate(newProduct: Product) {
    try {
      await updateSingleProduct(newProduct)
      setUpdatingProduct(undefined)
      fetchData()
    } catch (err) {
      if (err instanceof Error)
        Swal.fire('Oops!', err.message, 'error')
    }

  }

  async function deleteProduct(id: string) {
    try {
      await deleteSingleProduct(id)
      fetchData()
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

  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table
          headers={headers}
          data={products}
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
      </Container>
    </div>
  );
}

export default App;