# JavaScript Arrays Assessment (Beginner)

## Instructions
Complete each task using JavaScript. Focus on:
- Array access
- Looping / iteration
- push()
- pop()
- splice()
- unshift()
- shift()
- for...of
- map()
- filter()

---

## Part 1: Array Access

```js
const fruits = ["apple", "banana", "orange", "grape"];

```

### Task 1
Print the first item in the array.
console.log(fruits[0]);

### Task 2
Print the last item in the array.
console.log(fruits[3]);

### Task 3
Change `"orange"` to `"mango"`.
fruits[2] = "mango";
console.log(shopping);



---

## Part 2: Adding and Removing Items

```js
const numbers = [1, 2, 3];
```

### Task 4 - push()
Add `4` to the end of the array.
numbers.push(4);


### Task 5 - pop()
Remove the last item and store it in a variable called `removedItem`.
const removedItem = numbers.pop();

### Task 6 - unshift()
Add `0` to the beginning of the array.
numbers.unshift(0);

### Task 7 - shift()
Remove the first item and store it in a variable called `firstRemoved`.
const firstRemoved = numbers.shift();

### Task 8 - splice()
Insert `10` and `20` at index `1`.
numbers.splice(1, 0, 10, 20);

---

## Part 3: Looping with for...of

```js
const colors = ["red", "blue", "green"];
```

### Task 9
Use a `for...of` loop to print each color.
for (const color of colors) {console.log(color);}

### Task 10
Use a `for...of` loop to print each color in uppercase.
for (const color of colors) {console.log(color.toUpperCase());}

---

## Part 4: map()

```js
const prices = [10, 20, 30];
```

### Task 11
Create a new array where every price is doubled.
const doubledPrices = prices.map(price => price * 2);console.log(doubledPrices);

### Task 12
Create a new array of strings:

```txt
["$10", "$20", "$30"]
```

using `map()`.
const priceStrings = prices.map(price => `$${price}`);console.log(priceStrings);

---

## Part 5: filter()

```js
const ages = [12, 18, 21, 15, 30];
```

### Task 13
Create a new array containing only ages that are 18 or older.
const adults = ages.filter(age => age >= 18);console.log(adults);

### Task 14
Create a new array containing only ages below 18.
const minors = ages.filter(age => age < 18);console.log(minors);

---

## Part 6: Challenge

```js
const students = [
  { name: "Ada", score: 80 },
  { name: "Tunde", score: 45 },
  { name: "Ngozi", score: 92 },
  { name: "Kola", score: 60 }
];
```

### Task 15
Use `filter()` to get all students with scores of 60 or higher.
const passedStudents = students.filter(student => student.score >= 60);console.log(passedStudents);

### Task 16
Use `map()` to create an array containing only student names.
const studentNames = students.map(student => student.name);console.log(studentNames);

### Task 17
Use a `for...of` loop to print:

```txt
Ada scored 80
Tunde scored 45
Ngozi scored 92
Kola scored 60
```
for (const student of students) {
  console.log(`${student.name} scored ${student.score}`);}

---

## Bonus Challenge

```js
const queue = [];
```

Perform these operations in order:

1. Add `"Alice"` and `"Bob"` to the end of the array.
2. Add `"Admin"` to the beginning of the array.
3. Remove the first person.
4. Remove the last person.
5. Print the final array.

1) 
queue.push("Alice");
queue.push("Bob");

2)
queue.unshift("Admin");

3)
queue.shift();

4)
queue.pop();

5)
console.log(queue);

### Question
What should the final array contain?
["Alice"]
