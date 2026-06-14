// Difference between arrays and objects

// Arrays are indexed by numbers (indexed collections)
// Objects are indexed by strings or variables (associative arrays)

// Arrays are list of values of any datatypes separated by commas
// Objects are encapsulated collections of members(properties and methods) denoted by a key/value pair and separated by commas

// The only similarity is that their lists are separated by commas

// To study the different index structure of an array and object, run
// console.table(objectVariable)
// console.table(arrayVariable)

const personIds = [234, 123, 345, 567];

const person = { name: "John Doe", age: 42, gender: "male" };

// Assigning a new property for the person object
person.address = "Ago, Lagos";

console.table(personIds);
console.table(person);

// How to access object properties and methods using the

// Dot notation syntax
const user = { name: "Johnny" };
console.log(user.name);

// Bracket notation syntax
const odd = { 123: "job", "3w4": "Simon" };

console.log(odd[123]);
console.log(odd["3w4"]);

const names = ["T", "K", "M", "N"];

names.splice(1, 1, 10, 20);

console.log(names);
