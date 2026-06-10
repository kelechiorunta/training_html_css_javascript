const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
console.log(array1 == array2);

const shoppingitems = ["milk", "bread", "eggs", "cheese"];

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


