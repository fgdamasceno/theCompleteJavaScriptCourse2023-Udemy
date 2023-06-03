// let js = "amazing";
// // if (js === "amazing") alert("JavaScript is FUN!");
// console.log(40 + 8 + 23 - 10);

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990; // returns an error. const is not supposed to change

// const job; // not legal in js. const can not be declared without a defined value!

// var job = 'programmer';
// job = 'teacher';
// // avoid using

// // OPERATORS
// // Mathematical
// const now = 2037
// const ageJonas = now - 1991; // +, -, *, /, **, ++, --, % (mathematical operator)
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5; // =, +=, -=, *=, /=n, **=, %= (assignment operator)
// x += 10;
// console.log(x);

// // Comparison
// console.log(ageJonas > ageSarah);
// // >, <, >=, <=, !=, ==, ===,  

// OPERATOR PRECEDENCE
// ver mdn

// // STRINGS AND TEMPLATE LITERALS
// const firstName = 'Jonas';
// const jog = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!');
// console.log(jonas);

// // template literals - much better way of concatenating strings. introduced in ES6 (`${}`)
// const jonasNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`;

// // multiple lines before:
// console.log('String with \n\
// multiple \n\
// lines');

// // multiple lines after ES6: just hitting ENTER key and using backticks
// console.log(`String
// multiple
// line`);

// ==========

// // if/else statements:
// const age = 19; // change this value to test the code
// const isOldEnough = age >= 18

// if(isOldEnough) { // condition goes inside the parenthesis
//     console.log('Sarah can start driving licence 🚙');
// }

// ----------

// // The common way if statements are written. Compare to the above.
// const age = 19;

// if(age >= 18) {
//     console.log('Sarah can start driving licence 🚙');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// ----------

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// ==========

// // type conversion
// const inputYear = '1982';
// console.log(Number(inputYear)); // converts inputYear to numerica format.
// console.log(inputYear + 18); // concatenates both values 'cause inputYear is a string and 18 a number
// console.log(Number(inputYear) + 10); // returns 2000

// console.log(Number('Fernando')); // does not work obviously. Returns NaN (Not a Number()
// console.log(typeof NaN); // returns Number for some reason...

// console.log(String(23), 23); // returns "23", which was a number before and was converted to a number, and 23 which is a number

// // type coercion
// console.log("I'm " + (new Date().getFullYear() - 1982) + " years old."); // + converts to strings
// /*
// In the code above, first, this block "(new Date().getFullYear() - 1982)" will be executed, which results in a numeric value;
// Then JavaScript will, behind the scene, make a type coercion with the numeric value and convert it to string, to match the other values;
// At the end, the final value will be returned to the console, as a string.
// */

// console.log('23' - '10' - 3); // Returns: 10, because - converts strings to numbers
// console.log('23' + '10' + 3); // Returns: 23103, because + converts to strings and concatenate
// console.log('23' * '2'); // Returns: 46, because * converts to numbers
// console.log('46' / '2'); // Returns: 23, because / converts to numbers

// ==========

// // 5 falsy values: 0, "", undefined, null, NaN
// // falsy values a not exactly false values, but will become false when we try to convert them into boolean
// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean('Fernando')); //true
// console.log(Boolean(null)); //false
// console.log(Boolean([])); //true
// console.log(Boolean({})); //true

// const money = 0; // 0 as we saw before, is falsy. It you change this to, say, 100, then it becomes true and the if condition is executed in the code below
// if (money) { // this condition return a Boolean false
//     console.log("Don't spend it all! ;)");
// } else { // this block will be executed
//     console.log('You should get a job!')
// }

// let height; // this is falsy, as seen above, because height is undefined at this point.
// if (height) {
//     console.log('YAY! Height is defined!');
// } else { 
//     console.log('Height is UNDEFINED.')
// }
// /*
// In the code above, if "let height = 0;", the if statement will also return height as false, because, as we know, 0 is false. 
// This situation is considered a 'bug', because height is defined. 
// This kind of scenario should be taken into consideration when programming in order to avoid bugs/errors. Possibly writing conditions 
// that would meet this kind of situations.
// /*

// ==========

// Logical Operators

// const hasDriversLicence = true; // A - change the value and test
// const hasGoodVision = true; // B - change the value and test

//console.log(hasDriversLicence && hasGoodVision);
//console.log(hasDriversLicence || hasGoodVision);
//console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if (shouldDrive) { // if true, executes the first block, if false, the second
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// ==========

// // The switch statement
// // more lines but more easy to understand the code.
// // is becoming less used in programming this days...
// const day = 'saturday';
// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day');
// }

// // same program but in if/else statement. less lines of code, but more confusing to understand when looking at it
// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day');
// }

// ==========

// Statements and expressions
// Expression: a piece of code that produces a value.
// Ex:
// 2 + 3 -> expression because produces a value
// 1991 ->  expression because produces a value in JavaScript
// true && false && !false -> expression because produces a boolean value in JavaScript

// Statement: a bigger piece of code that is executed and which does not produces a value on itself
// Ex:
// if (23 > 10) {
//   const str = '23 is bigger than 10';
// }
// the code above does not produce a value, just declare a const variable.

// ==========

// The Conditional (Ternary) Operator
const age = 40;
age >= 18 ? console.log('I like to drink beer 🍺') : console.log('I like to drink milk 🥛');
// age >= 18 --> the condition
// ? --> the conditional operator
// console.log('I like to drink beer 🍺') --> the if statement (similar to) --> executed if true
// console.log("I'm still too young 😢"); --> the else statemente --> executed if the previous statement is false
// all the code above is an expression

const drink = age >= 18 ? 'beer 🍺' : 'milk 🥛';

// the same code as above, but in if/else statements:
let drink2;
if (age >= 18) {
    drink2 = 'beer 🍺';
} else {
    drink2 = 'milk 🥛';
}
console.log(drink2);

// using the ternary with template literals:
console.log(`I like to drink ${drink}`) // or use the whole expression inside the curly braces