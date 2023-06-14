'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  mainIndex: 1,
  address: 'Via del Sole, 21',
});

//////////////////////////////////////////////////////////////////////////////////////////////
// 103. DESTRUCTURING ARRAYS (USE [])
/*
DESTRUCTURING ASSIGNMENT:
- Expression that makes it posible to unpack values from arrays, or properties from objects, into distinct variables

- Example without destructuring: 
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); // Returns 1, 2, 3

- Example with destructuring (much simpler)
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // Return 1, 2, 3 


// Example of switching values without destructuring

let [main, , secondary] = restaurant.categories; // takes the 2nd and 3rd values
console.log(main, secondary); // Returns 'Italian' 'Vegetarian'
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // Returnis 'Vegetarian' 'Italian'



// Example of switching values with destructuring
let [main, , secondary] = restaurant.categories; // takes the 2nd and 3rd values
console.log(main, secondary); // Returns 'Italian' 'Vegetarian'
[main, secondary] = [secondary, main];
console.log(main, secondary); // Returnis 'Vegetarian' 'Italian'

// Receive 2 return value from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Destructuring Nested arrays

- Without destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested // only values from index 0 and 2;
console.log(i, j); // Returns 2 [5, 6]


// - With Destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested; // destructuring inside a destructuring
console.log(i, j, k);

// Destructuring when the length of the array is not known
// Using default values

// const [p, q, r] = [8, 9]; // without default values 
// console.log(p, q, r); // Returns 9 8 undefined

const [p=1, q=1, r=1] = [8, 9]; // with default values 
console.log(p, q, r); // Returns 9 8 1 (1 for every index that are not in the array)
*/

//////////////////////////////////////////////////////////////////////////////////////////////
// 104. DESTRUCTURING OBJECTS (USE {})
// - The variables inside of the desctructuring curly-braces must have the same name as the object's property names

// -Example
const { restaurantName, openingHours, categories } = restaurant;
// The order of the properties does not matter in objects
console.log(restaurantName, openingHours, categories);

// - But, what if we want the variable names to be different from the object's property names?
// Use the name of the property followed by colons followed by the new name:
const {
  restaurantName: restName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restName, hours, tags);

// Default values (in case a property does not exist) and Default values + new property name
//const { menu = [], starterMenu: starters = [] } = restaurant;
// menu = [] > Returns [] if the property 'menu' does not exist in the object 'restaurant'
// starterMenu > Returns starters if 'starterMenu' exists; if not, returns []
//console.log(menu, starters);
// Returns: [] ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Destructuring: Mutating variables in objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// {a, b} = obj; // This does not work. JS interprets {...} as a code block
({ a, b } = obj);
console.log(a, b); // a, b now have the values from the object a, b > 23 and 7

// Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//////////////////////////////////////////////////////////////////////////////////////////////
// 105. THE SPREAD OPERATOR (...)
// Only when building an array or passing values to a function

const arr = [7, 8, 9];

// Without the spread operator
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// With the spread operator
const goodNewArr = [1, 2, ...arr]; // much better!
console.log(goodNewArr);
console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// NOTE: the spread operator takes all the elements from an array but does not create new variables (different from destructuring). Useful when we want values separated by commas.

// Useful Cases: Shallow copies of arrays and merge arrays together
// Copy array
const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy
console.log(mainMenuCopy);

// Merge arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const nome = 'Fernando';
const letrasNome = [...nome];
console.log(nome);
console.log(letrasNome);
console.log(...letrasNome);

// Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredients 1?"),
//   prompt("Let's make pasta! Ingredients 2?"),
//   prompt("Let's make pasta! Ingredients 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {fundedIn: 1998, ...restaurant, founder: 'Giuseppe'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.restaurantName = 'Ristorante Roma';
console.log(restaurantCopy.restaurantName);
console.log(restaurant.restaurantName);

//////////////////////////////////////////////////////////////////////////////////////////////
// 106. REST PATTERN AND PARAMETERS

