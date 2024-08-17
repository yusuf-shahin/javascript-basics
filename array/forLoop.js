//! ============
//? for loops
//! ============

// repeatedly run a block of code while condition is true .

//! https://www.freecodecamp.org/news/javascript-for-loops/

// let i;
// for (i = 0; i < 10; i++) {
//   console.log('and the number is : ' + i);
// }

// for (let number = 11; number >= 0; number--) {
//   console.log("and the number is : " + number);
// }

//! ============
//? forEach loops
//! ============

//# When working with arrays, there will be times when you need to loop or iterate through the array's values in order to either output or manipulate them.

//! https://www.freecodecamp.org/news/javascript-foreach-js-array-for-each-example/

const alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutes = ["mango", "orange", "banana", "lichi", "apple"];

//* for loop
// for (let i = 0; i < alphabet.length; i++) {
//   console.log(alphabet[i]);
// }

// for (let i = 0; i < frutes.length; i++) {
//   console.log(alphabet[i]);
// }
//* in console : 1 2 3 4 5, coz frutes.length == 5; using frutes.length in condition for loop is running in 5 time...

for (let i = 0; i < frutes.length; i++) {
  console.log(frutes[i]);
}

//* forEach loop
// alphabet.forEach((e) => console.log(e));
frutes.forEach((e) => console.log(e));
