const person = {
    name: "John",
    age: 30,
    city: "New York",
    fullName: function() {
        return `${this.name} ${this.age}`;
    }
};
console.log(person);
console.table(person);
console.log(person.name);
console.log(person.fullName);
console.log(person.fullName());