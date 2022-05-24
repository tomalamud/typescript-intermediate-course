import { addProduct, products } from "./products/product.service";

addProduct({
  id: 23,
  title: "p23",
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 234,
  category: {
    id: "d",
    name: "deps"
  }
})

console.log(products);
