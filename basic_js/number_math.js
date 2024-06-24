const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);              // converts the balance to string datatype
// console.log(balance.toFixed(1));                     // returns the number with 1 digit after decimal

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));             // returns the number with 4 significant digits

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));       // inserts comma based on Indian number system

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());                              // generates a random number between 0(inclusive) and 1(exclusive)
console.log((Math.random()*10) + 1);                     // generates a number between 1(inclusive) and 11(exclusive)
console.log(Math.floor(Math.random()*10) + 1);           // generates an integer between 1(inclusive) and 10(inclusive)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)      // generates a number between min(inclusive) and max(inclusive)