export interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
}

const Products: Product[] = [
  {
    _id: "1",
    name: "Cookie",
    price: 1.25,
    stock: 20,
  },
  {
    _id: "2",
    name: "Milk",
    price: 0.99,
    stock: 10,
  },
  {
    _id: "3",
    name: "Detergent",
    price: 0.75,
    stock: 65,
  },
  {
    _id: "4",
    name: "Water 1l",
    price: 0.3,
    stock: 150,
  },
];

export default Products;
