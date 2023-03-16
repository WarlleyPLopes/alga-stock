import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getAllProducts } from '../../services/Products.service';
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

  useEffect(() => {
    async function fetchData() {
      const _products = await getAllProducts()
      setProducts(_products)
    }
    fetchData()
  }, [])

  function handleProductSubmit(product: ProductCreator) {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...product
      }
    ])
  }

  function handleProductUpdate(newProduct: Product) {
    setProducts(products.map(product =>
      product.id === newProduct.id
        ? newProduct
        : product
    ))

    setUpdatingProduct(undefined)
  }

  function deleteProduct(id: number) {
    setProducts(products.filter(product => product.id !== id))
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
          deleteProduct(product.id)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
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