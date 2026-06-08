1. String Literals
String literals represent text. You can write them using single quotes, double quotes, or backticks.

JavaScript
const single = 'Hello';
const double = "World";
const template = `Hello World`; // Template literal

(Template Literals): Backticks allow for template literals. These are incredibly powerful because they support multiline strings and interpolation (dropping variables right into the string using ${}).

JavaScript
const name = "Alice";
console.log(`Hello, ${name}! 
Welcome to the team.`);
2. Numeric Literals
Numeric literals include integers, floating-point (decimal) numbers, and even different number bases (binary, octal, hexadecimal).

JavaScript
const integer = 42;
const decimal = 3.14;

// Advanced numeric literals
const binary = 0b1010;       // 10 in binary
const hex = 0x1A;            // 26 in hexadecimal
const bigInt = 9007199254740991n; // BigInt literal (ends with 'n')
3. Boolean Literals
The simplest of the bunch. The Boolean type has only two literal values: true and false.

JavaScript
const isCoding = true;
const isBored = false;
4. Object Literals
An object literal is a comma-separated list of name-value pairs enclosed in curly braces ({}). It’s the easiest way to create a structured object on the fly.

JavaScript
const user = {
  name: "Alex",
  age: 28,
  isAdmin: true
};
5. Array Literals
An array literal is a list of expressions, each representing an array element, enclosed in square brackets ([]).

JavaScript
const fruits = ['apple', 'banana', 'cherry'];
const mixedBag = [42, 'hello', true, { id: 1 }]; // Can hold any type
6. RegExp (Regular Expression) Literals
If you need to pattern-match text, you can define a regular expression literal by enclosing the pattern between forward slashes (/).

JavaScript
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const simplePattern = /abc/gi; // Matches 'abc' globally and case-insensitively
7. Special Literals
Null Literal
The null literal represents the intentional absence of any object value. It has exactly one value: null.

JavaScript
const emptySlot = null; 
Undefined? (The Odd One Out)
While undefined represents a missing value just like null, it is actually a global variable, not a literal. However, in practice, it is used similarly.