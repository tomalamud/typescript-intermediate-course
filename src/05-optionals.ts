export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    stock: stock || 40, // bad operator, because verifies only false and its pseudonims
    isNew: isNew ?? true // this verifies null or undefined
  }
}

const p1 = createProduct(1, 12, true);
const p2 = createProduct(2, 3);
const p3 = createProduct(234, 0, false);
console.log(p1);
console.log(p2);
console.log(p3);
