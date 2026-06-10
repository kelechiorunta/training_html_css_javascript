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

### Task 2
Print the last item in the array.

### Task 3
Change `"orange"` to `"mango"`.

---

## Part 2: Adding and Removing Items

```js
const numbers = [1, 2, 3];
```

### Task 4 - push()
Add `4` to the end of the array.

### Task 5 - pop()
Remove the last item and store it in a variable called `removedItem`.

### Task 6 - unshift()
Add `0` to the beginning of the array.

### Task 7 - shift()
Remove the first item and store it in a variable called `firstRemoved`.

### Task 8 - splice()
Insert `10` and `20` at index `1`.

---

## Part 3: Looping with for...of

```js
const colors = ["red", "blue", "green"];
```

### Task 9
Use a `for...of` loop to print each color.

### Task 10
Use a `for...of` loop to print each color in uppercase.

---

## Part 4: map()

```js
const prices = [10, 20, 30];
```

### Task 11
Create a new array where every price is doubled.

### Task 12
Create a new array of strings:

```txt
["$10", "$20", "$30"]
```

using `map()`.

---

## Part 5: filter()

```js
const ages = [12, 18, 21, 15, 30];
```

### Task 13
Create a new array containing only ages that are 18 or older.

### Task 14
Create a new array containing only ages below 18.

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

### Task 16
Use `map()` to create an array containing only student names.

### Task 17
Use a `for...of` loop to print:

```txt
Ada scored 80
Tunde scored 45
Ngozi scored 92
Kola scored 60
```

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

### Question
What should the final array contain?
