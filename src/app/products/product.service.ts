import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.updatedAt = new Date(1998, 1, 2) // malicious action stopped by the readonly property
  products.push(data);
}
