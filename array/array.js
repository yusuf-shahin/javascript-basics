//! Arrays

//? An array in JavaScript is a type of global object used to store data. Arrays can store multiple values in a single variable, which can condense and organize our code.

// const friend1 = "jhon";
// const friend2 = "peter";
// const friend3 = "bob";
// const friend4 = "susy";

const friends = ["john", "peter", "bob", "susy", 45, undefined, null];
console.log(friends);

friends[4] = "anna";
console.log(friends);

//* add element in array
friends[7] = "rick";
console.log(friends);
friends.push("morty");
console.log(friends);

//* play with array element
// let bestFriend = friends[2];
// console.log(friends[4]); // "anna"
// console.log(bestFriend); // peter
// console.log(friends[3]); // "susi"
