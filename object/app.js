//! ==============
//? Objects - key/value pairs  methods
//! ==============

const person = {
  name: "john",
  lastName: "peters",
  age: 25,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],
  greeting: (xyz) => {
    console.log(`Hello my name is ${xyz}`);
  },
};

//? Dot Notation vs Bracket Notation for Object Properties – What's the Difference?
//! https://www.freecodecamp.org/news/dot-notation-vs-square-brackets-javascript/

//* catch the value using dot notation :-
const age = person.age;
console.log(age);
// person.name = "bob";
// console.log(person.name);
// console.log(person.siblings[2]);
person.greeting("yusuf");

//* catch the value using dot notation :-
console.log(person["name"]);
person["age"] = 100;
console.log(person["age"]);
const sibling = person["siblings"];
console.log(sibling);
console.log(person["greeting"]);

//? in bracket notation we must must use string inside bracket

//* If we want we can keep a value inside a varible :-
const life = "married";
console.log(person[life]);
