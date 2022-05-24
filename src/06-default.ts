export const createProduct = (
  id: string | number,
  stock: number = 100,
  isNew: boolean = true
) => {
  return {
    id,
    stock,
    isNew
  }
}

const p1 = createProduct(1, 12, true);
const p2 = createProduct(2, 3);
const p3 = createProduct(234, 0, false);
console.log(p1);
console.log(p2);
console.log(p3);
