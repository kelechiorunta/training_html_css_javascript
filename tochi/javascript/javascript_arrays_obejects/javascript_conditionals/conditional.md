1) The Core Conditional: if, else if, and else
The most common way to control code flow is using the if statement and its companion clauses.

The "if" Statement
An if statement executes a block of code only if the specified condition evaluates to true (or a "truthy" value).E.g

let temperature = 25;

if (temperature > 20) {
  console.log("It's a warm day!");
}


The "else" Clause
You can add an else block to specify what should happen when the if condition is false.
E.g:
let isRaining = false;

if (isRaining) {
  console.log("Grab an umbrella.");
} else {
  console.log("Enjoy the sunshine!");
}

The "else if" Clause
When you have multiple mutually exclusive conditions to test, use else if. JavaScript will check them sequentially from top to bottom and execute only the first block that evaluates to true.

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // This will execute
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

2) The "switch" Statement
When you need to compare a single variable or expression against a long list of specific, static values, an if-else chain can become bloated. A switch statement is a cleaner alternative.
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  case "Saturday":
  case "Sunday": // Multiple cases can trigger the same block
    console.log("It's the weekend!");
    break;
  default: // Runs if no cases match
    console.log("Just another regular day.");
}

Crucial "switch" Mechanics:
The break keyword: You must include break at the end of each case. If you omit it, JavaScript will "fall through" and execute the next case's code regardless of whether it matches, until it hits a break or the end of the statement.

Strict Comparison: switch statements use strict equality (===). A case of case 5: will not match the string "5".

3) The Ternary Operator (? :)
The ternary operator is a shorthand, one-liner substitute for a simple if-else statement. It is unique because it is the only JavaScript operator that takes three operands.

Syntax: condition ? expressionIfTrue : expressionIfFalse
let age = 20;
let canVote = age >= 18 ? "Yes, you can vote!" : "Too young.";

console.log(canVote); // "Yes, you can vote!"

4) Under the Hood: "Truthy" vs "Falsy"
In JavaScript, a condition doesn't strictly have to be a boolean (true or false). JavaScript coercive power means it will evaluate any value inside a conditional as either truthy or falsy.

Falsy Values
There are exactly 8 values that JavaScript evaluates as false:

1) false

2) 0 (and -0, 0n as BigInt)

3) "" (Empty string)

4) null

5) undefined

6) NaN (Not a Number)