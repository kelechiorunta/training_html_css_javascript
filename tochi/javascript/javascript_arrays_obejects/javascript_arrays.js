const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
console.log(array1 == array2);

const shoppingitems = ["milk", "bread", "eggs", "cheese"];
console.log(shoppingitems);

const randomitems = [1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]];

console.log(randomitems.length);

console.log(shoppingitems[0]);

console.log(randomitems[5].name);

console.log(shoppingitems.indexOf("bread"));
console.log(shoppingitems.indexOf("rice"));

shoppingitems.push("rice");
console.log(shoppingitems);

shoppingitems.unshift("yam");
console.log(shoppingitems);

shoppingitems.pop();
console.log(shoppingitems);

shoppingitems.shift();
console.log(shoppingitems);

// shoppingitems.splice(1, 3);
// console.log(shoppingitems);

// for (const item of shoppingitems) {
//   console.log(item);
// }

function multiplyByTwo(n) {
  return n * 2;
}

function isgreaterthanthree(n) {
  return n > 3;
}
const numbers = [1, 2, 3, 4, 5];
const filterednumbers = numbers.filter(isgreaterthanthree);
console.log(filterednumbers);
// const multipliednumbers = numbers.map(multiplyByTwo);
// console.log(multipliednumbers);

// Solution
const products = ["Underpants:6.99", "Socks:5.99", "T-shirt:14.99", "Trousers:31.99", "Shoes:23.99"];

let total = 0;
const itemTexts = [];

for (const product of products) {
  console.log(product);
  const itemArray = product.split(":");
  const name = itemArray[0];
  const price = Number(itemArray[1]);
  total += price;
  itemTexts.push(`${name} - $${price.toFixed(2)}`);
}

console.log(itemTexts.join(" - "));
console.table(products.map((product) => {
  const [name, price] = product.split(":");
  return { name, price: Number(price) };
}));
console.log(`Total: $${total.toFixed(2)}`);


