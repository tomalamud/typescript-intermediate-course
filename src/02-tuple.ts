// List with types
const prices: (number | string)[] = [1,2,3, '2ffas'];
prices.push(25);
prices.push("wer234");

// Tuple
let user: [string, number];
user = ['Tomi', 23];
// user = ['432', 43, 3425] WGRONG
const [username, age] = user;
console.log(username, age);




