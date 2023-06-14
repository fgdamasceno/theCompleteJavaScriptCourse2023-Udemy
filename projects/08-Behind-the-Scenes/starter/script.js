'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName} you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1991 ** birthYear <= !996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     console.log(millenial);
//     // add(2, 3);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

////////////////////////////////////////////////////////////////////////////////////////
// 95. HOISTING AND TDZ IN PRACTICE

// trying to use variables before declaring them
// ERROR messages:
// for var: undefined
// for let: Uncaught ReferenceError: Cannot access 'job' before initialization
// for const: Uncaught ReferenceError: Cannot access 'year' before initialization
/*
console.log(me);
console.log(job);
console.log(year);

// variable declarations
var me = 'Jonas';
let job = 'teacher';
const year = 1991;
*/

////////////////////////////////////////////////////////////////////////////////////////
// trying to use function before declaring them
//console.log(addDecl(2, 3)); // works before the function declaration
// in order to work, the function needs to be in the code. Otherwise return the error message: script.js:54 Uncaught ReferenceError: addDecl is not defined

//console.log(addExpr(2, 3)); // script.js:56 Uncaught ReferenceError: Cannot access 'addExpr' before initialization

//console.log(addArrow(2, 3)); // Uncaught ReferenceError: Cannot access 'addArrow' before initialization

// Functions (declaration, expression, arrow)
/*
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// The only function that can be used before declaration is the function declaration.
// Function expression and Arrow function are only usable after they have been created.

// Example (Hoisting pitfall)

if (!numProducts) deleteShoppingCart(); // numProducts is 0 (undefined) at this point; for that reason, the function will delete the ShoppingCart, due to how hoisting works with var.

var numProducts = 10; // if declared with let produces error message: Uncaught ReferenceError: Cannot access 'numProducts' before initialization

function deleteShoppingCart() {
  console.log('All products deleted!');
}
*/
// BEST PRACTICES: Avoid the use of var, use let only when you are sure the value of the variable is going to change. For all other cases, use const. Declare your variables at the top of each scope. Declare all your function first, and only then start using them in your code.

////////////////////////////////////////////////////////////////////////////////////////
// 96. THE THIS KEYWORD

////////////////////////////////////////////////////////////////////////////////////////
// 97. THE THIS KEYWORD IN PRACTICE
/*
console.log(this);
// Returns: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);
//Returns the age = 46 and 'undefined' for the this keyword (strict mode)

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // lexical this keyword
};
calcAgeArrow(1980);
// Returns the age = 57 and
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();
// Returns: {year: 1991, calcAge: ƒ} where f = function

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge; // method borrowing
matilda.calcAge();
// Returns: {year: 2017, calcAge: ƒ} and 20 for matilda age

const f = jonas.calcAge;
f();
*/

////////////////////////////////////////////////////////////////////////////////////////
// 98. REGULAR FUNCTIONS VS. ARROW FUNCTIONS
/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMellenial = function () {
      if (this.year >= 1981 && this.year <= 1996);
    };
    isMellenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet(); // Returns: 'Hey undefined'. Arrow function does not have 'this keyword' (lexical, parent's scope this)
jonas.calcAge();
*/

// Arguments Keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// console.log(addExpr(2, 5, 3, 12));

// var addArrow = (a, b) => a + b;

////////////////////////////////////////////////////////////////////////////////////////
// 99. PRIMITIVES VS. OBJECTS (PRIMITIVE VS. REFERENCE TYPES)