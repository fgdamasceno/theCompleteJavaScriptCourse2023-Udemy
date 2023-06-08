// 28. Strict Mode
//'use strict'; 

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

// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


///////////////////////////////////////
// Object Methods

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/

// ITERATION; THE FOR LOOP
// control structure

// for(let rep = 1; rep <=10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋🏽‍♂️`);
// }

// 47. LOOPING ARRAYS, BREAKING AND CONTINUING

//  const jonas = [
//     'Jonas',
//     'Schemedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

//  const types = [];

//  for(let i = 0; i < jonas.length; i++) {
//     // Reading from an array
//     console.log(jonas[i], typeof jonas[i]);

//     // Filling an array method 1
//     // types[i] = typeof jonas[i];

//     // Filling an array method 2
//     types.push(typeof jonas[i]);
// }
// console.log(types);

// Example of loops usage
// Calculate the ages
// const birthYears = [1938, 1958, 1981, 1982];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//     let currentYear = new Date().getFullYear(); // Current year = 2023
//     ages.push(currentYear - birthYears[i]);
// }

// console.log(ages);

// CONTINUE AND BREAK
// continue: exits the current iteration of the loop and 'continue' to the next one
// break: use to complete terminate the whole loop

// const jonas = [
//     'Jonas',
//     'Schemedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// console.log('----- ONLY RETURN STRINGS -----')
//  for(let i = 0; i < jonas.length; i++) {
//     // IF THE TYPEOF IS NOT A STRING, THE LOOP ITERATION IS SKIPPED
//     // AND THEN IT WILL CONTINUE TO THE NEXT ITERATION, AND IF THE TYPEOF IS
//     // STRING, IT WILL THE RETURN THE VALUE AND PRINT TO THE CONSOLE
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('---- ONCE "number" IS FOUND, IT STOPS COMPLETELY -----');
// for(let i = 0; i < jonas.length; i++) {
//     // ONCE A TYPEOF number IS FOUND, THE LOOP STOPS
//     // THE TYPEOF number  WILL NOT BE PRINTED TO THE CONSOLE
//     if (typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof jonas[i]);
// }

// continue e break podem ser úteis quando se deseja realizar um loop por um array/object para, por exemplo, adicioná-los a outro array/object, o que seja, porém, não queira que todos os elementos sejam extraídos, apenas alguns específicos.

// 48. LOOPING BACKWARDS AND LOOPS IN LOOPS

// const jonas = [
//     'Jonas',
//     'Schemedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for(let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// // loop in loops
// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`--- STARTING EXERCISE ${exercise} ---`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetions ${rep} 🏋🏽‍♂️`);
//     }
// }

// 49. THE WHILE LOOP

// for(let rep = 1; rep <=10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋🏽‍♂️`);
// }
  
// while loop
// let rep = 1;
// while (rep <= 10) {
// console.log(`Lifting weights repetition ${rep} 🏋🏽‍♂️`);
// rep++;
// }

// while loops do not need a counter. All that a while loop need is a condition. The counter used in the example above was only used because the example above needed a counter.

// Example: Roll a dice until 6.
// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }

/////////////////////////////////////////////////////////////
// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

function calcAverage(arr) {
  let sum = 0; // Tem que ser criada fora do loop
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length;
}

console.log(calcAverage(totals));
