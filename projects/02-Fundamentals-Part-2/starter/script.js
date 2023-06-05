// 28. Strict Mode
'use strict'; 

// 29. Functions

/*
function logger() {
    console.log('My name is jonas');
}

// calling/running/invoking the function
logger();
logger();
logger();

const teste = logger();
console.log(typeof test);

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// or
// console.log(fruitProcessor(5, 0)); // just to test

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// ==========

// 30. Function Declarations vs. Expressions
// function declaration
/*
function calcAge1(birthYear) {
    //const age = new Date().getFullYear() - birthYear;
    const age = 2037 - birthYear;
    return age;
    // or, for simplicity
    // return 2037 - birthYear;
}

console.log(calcAge1(1982));

// function expression (or anonymous function)
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
// declared without a name and assigned to a variable
console.log(calcAge2(1982));
*/

// ==========

// 31. Arrow Functions (Added in ES6)
/*
// Example with just 1 parameter and 1 line of code
 const calcAge3 = birthYear => 2037 - birthYear;
 // birthYear work as a parameter
 // => works like the return
 // 2037 - birthYear works as the code to execute

 // Calling (the same way as the other functions call)
 console.log(calcAge3(1982));

// Example with one parameter and many lines of code
const yearsUntilRetirement1 = birthYear => {
    //const age = 2037 - birthYear;
    const age = new Date().getFullYear() - birthYear
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement1(1982));

// Example with many parameters and many lines of code
const yearsUntilRetirement2 = (birthYear, firstName) => {
    // const age = 2037 - birthYear;
    const age = new Date().getFullYear() - birthYear
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement2(1982, "jonas"));
*/

// ==========

// 32. Functions Calling Other Functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    // console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

// ==========

// 33. Reviewing Functions
/*
const calcAge = function (birthYear) {
    return new Date().getFullYear() - birthYear;
}

const yearsUntilRetirement1 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        return retirement;
    } else {
        return -1;
    }

    //return retirement;
    return `${firstName} retires in ${retirement}`;
}
console.log(yearsUntilRetirement1(1982, 'jonas'));
console.log(yearsUntilRetirement1(1938, 'Waldir'));
*/

// DATA STRUCTURE
// Introduction to Arrays
// > Arrays: 
/*
// How to create an array: 
const friends = ['Michael', 'Steven', 'Peter']; // most common/basic way - Literal syntax
console.log(friends);

const years = new Array(1991, 1994, 2008, 2020); // 'new' keyword + Array() function
console.log(years);

// How to access the values of an array:
console.log(friends[0]); // Using indexing
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length); // total items. length property

console.log(friends[friends.length - 1]); // shows the last item

friends[2] = 'Jay'; // changing the value of an item using indexing
console.log(friends);

// Array with different types of values
const firstName = 'jonas';
const jonas = ['firstName', 'Damasceno', 2023 - 1982, 'student', friends];
console.log(jonas);
// const anoDeNascimento = 1982; // precisa ser declarada antes de ser usada por um Array
// const teste1 = [new Date().getFullYear() - anoDeNascimento, 'jonas'];

// Exercise

const calcAge = function (birthYear) {
    return 2023 - birthYear;
}
const birthYears = [1938, 1958, 1981, 1982];

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[birthYears.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[birthYears.length - 1])];
console.log(ages);
*/
// Basic Arrays Operations (methods)
/*
const friends = ['Michael', 'Steven', 'Peter'];
// .push() > adds to the end of an array
// friends.push('Jay'); // push() also return the length of an array
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);
 
// .unshift() > adds to the beginning of an array
friends.unshift('John');
console.log(friends);

// .pop() > remove the last element of an array
friends.pop(); // pop() also returns the removed element
console.log(friends);

// .shift() > remove the first element of an array
friends.shift();
console.log(friends);

// > shows the position of an element in the array

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // returns -1 because Bob is not in the array

// includes() - tests for value and type (strict comparison)
console.log(friends.includes('Steven')); // includes also returns boolean
console.log(friends.includes('Bob')); // verifies if the element is in the Array

// includes() - useful for conditionals
if (friends.includes('Peter')) {
    console.log('You have a friend called Peter.');
}
*/

// Introduction to Objects
// Object Literal Syntax
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    jog: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
*/

// 37. Dot vs Bracket Notation

// How to retrieve data from objects
// How to change data inside objects

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName); // dot notation
console.log(jonas['lastName']); // bracket notation

// Bracket notation can receive an expression in the bracket, which produces a value. Example:
const nameKey = 'Name'; // common in firstName and lastName
console.log(jonas['first' + nameKey]); 
console.log(jonas['last' + nameKey]);
// the expression in the brackets above will produce two concatenated strings (firstName and lastName) which are the keys in the object 'jonas', and then the result value will print to the console the values from both keys

/*
// Example
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(jonas.interestedIn); // This produces an error (undefined) because interested in is not in the object 'jonas'
console.log(jonas[interestedIn]); // this return a value, if the chosen option is in the object 'jonas', because bracket notation receives a expression, which will be calculated and then the value/result will be used to grab the information.
*/

/*
// An example of code that will ignore an invalid user input and return to the question again
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}
*/

// Adding new properties to objects with dot and bracket notation
/*
jonas.location = 'Portugal'; // dot notation
// adds 'locataion' as new property and 'Portugal' and value of the new property
jonas['twitter'] = '@jonasschmedtman'; // bracket notation
// adds 'twitter' as new property and '@jonasschmedtman' and value of the new property
console.log(jonas);

// Challenge
// Write: "Jonas has 3 friends, and his best friend is called Michael" without hard coding
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best fried is called ${jonas.friends[0]}`); // Nailed it at the first attempt!!!
*/

// 38. Objects Methods
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     return 2037 - this.birthYear;
    // }

    // calc the age and creates a new property 'age' with the calculated result as value
    calcAge: function() {
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age;
    }

};
// the function in the object is a method, because every function that is attached to an object is a method.
/*
console.log(jonas.calcAge(1991)); // dot notation
console.log(jonas["calcAge"](1991)); // brackets notation. ACHTUNG! look the syntax here!
// in this example, brackets receives only the property/key name. The value passed to the function goes outside it, inside parenthesis
console.log(jonas.calcAge(jonas.birthYear));
*/

// Using 'this' in the object
// 'this' always points to the object calling the method
// You could, for example, change the name of the object and the code would still work
/*
console.log(jonas.calcAge());
// for the code below to work, you need to first call the code above!
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
*/

// Challenge
// Create a method in the object and
// Write: "Jonas is a 46-years old teacher, and he has a/no driver's licence"
/*
// My solution:
jonas.getSummary = function() {
    if (this.hasDriversLicense) {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has a driver's licence`;
    } else {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has not a driver's licence`;
    }
};
*/
// Instructor solution: Used The Ternary Operator to check if he hasDriversLicense, and wrote the method inside the object, while I decided to create a method from outside the object
/* 
getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licence``
}
*/
/*
console.log(jonas.getSummary());
*/
