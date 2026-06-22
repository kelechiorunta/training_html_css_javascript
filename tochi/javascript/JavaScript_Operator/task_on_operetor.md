
// OTHER LOGIC OPERATORS
// logic operators
let isRaining = true;
let isSunny = false;

// AND operator
let areWeHavingAGoodDay = isRaining && isSunny;
console.log(areWeHavingAGoodDay);

// OR operator
let areWeHavingABadDay = isRaining || isSunny;
console.log(areWeHavingABadDay);

// NOT operator
let isItNotRaining = !isRaining;
console.log(isItNotRaining);

// logical OR assignment operator
let isWeekend = false;
isWeekend ||= true;
console.log(isWeekend);

// logical AND assignment operator
let isHoliday = true;
isHoliday &&= false;
console.log(isHoliday);

// logical nullish assignment operator
let userName = null;
userName ??= "Guest";
console.log(userName);

