const person1 = {
    name: "John",
    age: 30,
    city: "New York",
    fullName: function() {
        return `${this.name} ${this.age}`;
    }
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
        lastName: "Doe"
    },
    age: 30,
    city: "New York",
    fullName: function() {
        return `${this.name.firstName} ${this.name.lastName}`;
    }
};
console.log(person);
console.table(person);
console.log(person.name.firstName);
console.log(person.name.lastName);
console.log(person.fullName());


const person3 = {
   "my name": "Tochi", 
   "9ice": "John"
}

console.log(person3["my name"]); // Accessing property with space in its name
console.log(person3["9ice"]); // Accessing property with special characters in its name

// add two properties  to the object one Gender, 2) state of origin, ensure that the properties are showing and also assign values to the properties and display them in the console.
person.gender = "Male";
person["state Of Origin"] = "Lagos";
console.log(person);
console.table(person);
console.log(person.gender);
console.log(person.stateOfOrigin);


