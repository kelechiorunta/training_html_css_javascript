In this exercise you'll be — printing out product names and prices on an invoice, then totaling the prices and printing them at the bottom. Follow the steps below to implement the logic to do so.
Below the // Part 1 comment are a number of strings, each one containing a product name and price separated by a colon. We'd like you to uncomment these and turn them into an array called products.
Below the // Part 2 comment, start a for...of() loop to go through every item in the products array.
Below the // Part 3 comment we want you to write a line of code that splits the current array item (name:price) into two separate items, one containing the name and one containing the price. If you are not sure how to do this, look at the Converting between strings and arrays section of this article.
As part of the above line of code, you'll also want to convert the price from a string to a number using the Number function.
There is a variable called total that is created and given a value of 0 at the top of the code. Inside the loop (below // Part 4) we want you to add a line that adds the current item price to that total in each iteration of the loop, so that at the end of the code the correct total is printed onto the invoice. You might need an assignment operator to do this.
We want you to change the next line after // Part 5 so that the itemText variable is made equal to "current item name — $current item price", for example "Shoes — $23.99" in each case, so the correct information for each item is printed on the invoice. This is basic string concatenation, which should be familiar to you if you've followed the learning material so far.
Finally, below the // Part 6 comment, you'll need to add a } to mark the end of the for...of() loop.


const list = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list.textContent = "";
totalBox.textContent = "";


// Part 1 - Convert this to a product array with block
// "Underpants:6.99",
// "Socks:5.99",
// "T-shirt:14.99",
// "Trousers:31.99",
// "Shoes:23.99",

// Part 2 - Use a for of loop

// Part 3 - Split the each item to be an array

// Part 4 - compute the total price by adding the total with the price of each item

// Part 5 - display each item separated by a "-" using join("-") and console.table() 
let itemText = 0;

const listItem = document.createElement("li");
listItem.textContent = itemText;
list.appendChild(listItem);

// Part 6

totalBox.textContent = `Total: $${total.toFixed(2)}`;
