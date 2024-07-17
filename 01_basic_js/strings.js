const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");     // Bad practice of concatenating strings

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);      // Right and modern approach....called string interpolation

const gameName = new String('hitesh-hc-com')    // Creates an instance of string object
                                                // String object provides various properties and methods
                                                // methods of string are particularly useful in development


                                                // If you view on console(by going to inspect on any webpage)
                                                // You can see all the string methods and properties by entering a string object instance
                                                // String {'hello'}
                                                // 0: "h"
                                                // 1: "e"
                                                // 2: "l"
                                                // 3: "l"
                                                // 4: "o"
                                                // the numbering here doesn't indicate indices nor is the string an array
                                                // the numbers and characters are the key : value pairs

// console.log(gameName[0]);
// console.log(gameName.__proto__);             // returns an empty object


// console.log(gameName.length);
// console.log(gameName.toUpperCase());         // doesn't change the content of gameName as string is a primitive datatype
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)     // slice supports negative indexing in strings
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));               // converts the string into array by splitting on the basis of a character