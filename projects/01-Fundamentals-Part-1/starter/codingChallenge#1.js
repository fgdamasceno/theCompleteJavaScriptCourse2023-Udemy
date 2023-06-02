// BMI Calculator

const markMass = 78;
const markHeight = 1.69;

const johnMass = 95;
const johnHeight = 1.88;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
const johnHigherBMI = johnBMI > markBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI, johnHigherBMI);