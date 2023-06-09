// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// 55. SETTING UP PRETTIER AND VS CODE
// Editing Prettier;
// Configuring VSCode to print 'console.log();' with a snippet;
//      type: log

//////////////////////

// 56. INSTALLING NODE.JS AND SETTING UP A DEV ENVIRONMENT
// Installing NODE.JS to professionally view the page we are working on. A professional alternative to 'Live Server';
// https://nodejs.org/en/download > windows installer > install > restart vscode > npm install live-server -g > after installation type live-server. Make sure you are in the right folder where your .html file is.
// npm = node package manager

//////////////////////

// 57. LEARNING HOW TO CODE
// A good lecture that could easily be watched again. About how to become a real developer, the true difficult way and how to survive it and grow to be a real professional in the field.

//////////////////////

// 58. HOW TO THINK LIKE A DEVELOPER: BECOME A PROBLEM SOLVER!
// How to think like a developer (solving problem [not the bugs]). 4 STEPS FRAMEWORK:
// - Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem
// - Divide and conquer: Break a big problem into smaller sub-problems
// - Don't be afraid to do as much research as you have to (google, stackOverflow, MDN)
// - For bigger problems, write pseudo-code before writing the actual code

//////////////////////

// 59. USING GOGGLE, STACKOVERFLOW AND MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Undertanding the problem
// - What is temperature amplitude? 
// Answer: The difference between the highest and the lowest temperature.
// - How to compute the max and min temperatures?
// - What's a sensor error? And what to do?
// Answer: Ignore the error message during the computing

// 2) Breaking up into sub-problems
// - How to ignore error?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and then return it

// How to solve a problem using Google
// Problem: how to find max and min value in a javascript array
// Google: javascript get max value in array

// const calcTempAmplitude = function (temps) {
//     let max = temps[0]; //starts with a arbitrary max value as array[0]
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min); //print to the console the max value
//     return max - min;
// }
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice?
// Answer: No. Just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps)

//     let max = temps[0]; //starts with a arbitrary max value as array[0]
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min); //print to the console the max value
//     return max - min;
// }
// const amplitudeNew = calcTempAmplitudeNew(temperatures);
// console.log(amplitudeNew);

//////////////////////

// 60. DEBUGGING (FIXING ERRORS)
// Software bug: Defect or problem in a computer program. Basically, any unexpected or unintended behavior of a computer program is a software bug.

// - Debugging Steps
// Identify: Becoming aware that there is a bug
// Find: Isolating where exactly the but is happening in code
// Fix: Correct the bug
// Prevent: Preventing it from happening again

//////////////////////

// 61. DEBUGGING WITH THE CONSOLE AND BREAKPOINTS

// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         // C) FIX (convert to number using Number(prompt('Degrees celsius')))
//         value: Number(prompt('Degrees celsius'))
//     }
//     // to test. you can identify that 'value' is a string. What we need is a 'number'
//     console.log(measurement);
//     // B) FIND (in the prompt. (returns a string. should be a number))
//     console.table(measurement);

//     // console.warn(temperature);
//     // console.error(temperature);

//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

// // A) IDENTIFY (the value returned is incorrect (concatanated. should be a sum))
// console.log(measureKelvin());

// Using a debugging
// const calcTempAmplitudeBug = function (t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps)

//     let max = 0; //starts with a arbitrary max value as array[0]
//     let min = 0;

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;

//         //debugger; JavaScript builtin. When the code runs, the debugger console opens in the browser
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min); //print to the console the max value
//     return max - min;
// }
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

//////////////////////

// 62. CODING CHALLENGE #1

/*
Given an array of forecasted temperatures, the thermometer displays a string with these
temperatures.

Example: [17, 21, 23] will print:
"... 17ºC in 1 day ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like
the above to the console.

Use the problem-solving framework: Undestand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2; [12, 5, -5, 0, 4]
*/

// const forecast1 = [17, 21, 23];
// const forecast2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//     let forecastMessage = '';
//     for (let i = 0; i < arr.length; i++) {
//         forecastMessage += `... ${arr[i]}°C in ${i + 1} days`;
//     }
//     return forecastMessage + "...";
// }

// console.log(printForecast(forecast1));
// console.log(printForecast(forecast2));

/*
Consegui resolver o problema até a parte onde as mensagens deveriam ser mostradas no
console.
Já na parte onde os dias deveriam ser exibidos no plural, eu não consegui encontrar 
uma maneira de resolver o problema.
OBS. A questão levantada acima não foi exigina do teste, só me pareceu mais lógico e necessário implementar.
*/

//////////////////////
