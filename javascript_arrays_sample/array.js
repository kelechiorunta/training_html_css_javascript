/**
 * Assessment on arrays
 */

const products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];
const newProducts = [];
let total = 0;

for (const product of products) {
  const splitProduct = product.split(":");
  const newObject = {
    name: splitProduct[0],
    price: Number(splitProduct[1]),
  };
  const printProduct = splitProduct.join(" - £");
  console.table(printProduct);
  total += newObject.price;
  newProducts.push({ ...newObject, total: total });
}

console.log("total", total);
console.log(newProducts);
console.table(newProducts);

