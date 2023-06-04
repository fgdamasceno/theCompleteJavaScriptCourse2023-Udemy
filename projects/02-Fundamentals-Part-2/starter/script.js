// 28. Strict Mode
'use strict'; 

// 29. Functions

/*
function logger() {
    console.log('My name is Fernando');
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
console.log(yearsUntilRetirement2(1982, "Fernando"));
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
console.log(yearsUntilRetirement1(1982, 'Fernando'));
console.log(yearsUntilRetirement1(1938, 'Waldir'));
*/

// DATA STRUCTURE
// Introduction to Arrays
// > Arrays: 

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
const firstName = 'Fernando';
const fernando = ['firstName', 'Damasceno', 2023 - 1982, 'student', friends];
console.log(fernando);
// const anoDeNascimento = 1982; // precisa ser declarada antes de ser usada por um Array
// const teste1 = [new Date().getFullYear() - anoDeNascimento, 'Fernando'];

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

// Basic Arrays Operations