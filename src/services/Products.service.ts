import { Product } from "../shared/Table/Table.mockdata";
import http from "../utils/http";

export function getAllProducts() {
  return http
    .get<Product[]>("http://localhost:3024/products")
    .then((res) => res.data);
}
