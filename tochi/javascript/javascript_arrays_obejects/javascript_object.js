const person1 = {
  name: "John",
  age: 30,
  city: "New York",
  fullName: function () {
    return `${this.name} ${this.age}`;
  },
};
console.log(person1);
console.table(person1);
console.log(person1.name);
console.log(person1.fullName);
console.log(person1.fullName());

// Task... Create an object inside name object with properties firstName and lastName, and a method fullName that returns the full name of the person.
const person = {
  name: {
    firstName: "John",
    lastName: "Doe",
  },
  age: 30,
  city: "New York",
  fullName: function () {
    return `${this.name.firstName} ${this.name.lastName}`;
  },
};
console.log(person);
console.table(person);
console.log(person.name.firstName);
console.log(person.name.lastName);
console.log(person.fullName());
