import { ProductCreator } from "../components/Products/ProductForm";
import { Product } from "../shared/Table/Table.mockdata";
import http from "../utils/http";

export function getAllProducts() {
  return http
    .get<Product[]>("http://localhost:3024/products")
    .then((res) => res.data);
}

export function createSingleProduct(product: ProductCreator) {
  return http.post("http://localhost:3024/products", product);
}

export function updateSingleProduct({ _id, name, price, stock }: Product) {
  return http.patch(`http://localhost:3024/products/${_id}`, {
    ...(name && { name }),
    ...(price && { price }),
    ...(stock && { stock }),
  });
}

export function deleteSingleProduct(id: string) {
  return http.delete(`http://localhost:3024/products/${id}`);
}
