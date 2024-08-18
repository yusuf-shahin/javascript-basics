//! ================
//? Conditional Statements
//! ================

//! https://www.freecodecamp.org/news/javascript-operators/#heading-logical-operators

//? Equal	x == y	Returns true if the operands are equal
//? Not equal	x != y	Returns true if the operands are not equal
//? Strict equal	x === y	Returns true if the operands are equal and have the same type
//? Strict not equal	x !== y	Returns true if the operands are not equal, or have different types
//? Greater than	x > y	Returns true if the left operand is greater than the right operand
//? Greater than or equal	x >= y	Returns true if the left operand is greater than or equal to the right operand
//? Less than	x < y	Returns true if the left operand is less than the right operand
//? Less than or equal	x <= y	Returns true if the left operand is less than or equal to the right operand

//# console.log(9 == 9); // true
//# console.log(9 != 20); // true
//# console.log(2 > 10); // false
//# console.log(2 < 10); // true
//# console.log(5 >= 10); // false
//# console.log(10 <= 10); // true
//# console.log("9" == 9); // true

const value = 2 > 1;
// console.log(typeof value);
const valueS = "";
if (!value !== false) {
  console.log("hello world");
} else {
  console.log("hello people");
}

//! ===============
//? more example
//! ===============

const num1 = 6;
const num2 = 6;
const result = num1 >= num2;

const value2 = false;

if (!value2) {
  console.log("value2 is false, consition is correct...");
  //# in that condition value2 === false and !value means false , so condition is true
}

//? value2 === false and !value2 are same...

if (num1 > num2) {
  console.log("first number is bigger than second");
} else if (result) {
  console.log("first number equal to a second");
} else {
  console.log("second number is bigger than first");
}

//! ===============
//? Equality
//! ===============

//* strict equal
//# console.log("9" === 9); // false
//# console.log("1" != 1); // false
//* strict not equal
//# console.log("1" !== 1); // true

const numM = 6;
const numS = "6";

const valueEquality = num1 != num2;
const valueEquality2 = num1 !== num2;

console.log(valueEquality);
console.log(valueEquality2);

//! ==============
//? Logical Operators
//! ==============

//? (|| - OR), (&& - AND), !

const name = "peter";
const age = 24;

if (name !== "bob" && age === 24) {
  console.log("hello there user");
} else {
  console.log("wrong values");
}

//! ============
//? Switch
//! ============

// dice values : 1 - 6
const dice = 3;

switch (dice) {
  case 1:
    console.log("you got one");
    break;
  case 2:
    console.log("you got two");
    break;
  case 3:
    console.log("you got three");
    break;
  default:
    console.log("you did not roll the dice");
}

// else if
// if (dice === 1) {
//   console.log('you got one');
// } else if (dice === 2) {
//   console.log('you got two');
// } else {
//   console.log('you did not roll the dice');
// }

// all if
// if (dice === 1) {
//   console.log('you got one');
// }
// if (dice === 2) {
//   console.log('you got two');
// }
// if (dice < 1 || dice > 6) {
//   console.log('you did not roll the dice');
// }
