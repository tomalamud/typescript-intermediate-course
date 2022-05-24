export type Sizes = "S" | "M" | "L" | "XL";

export interface Product {
  id: number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];
products.push()
