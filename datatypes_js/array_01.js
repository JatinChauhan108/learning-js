// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)                     // inserts 9 at the beginning of myArr, though this leads to shifting of all the array elements, hence not very time efficient
// myArr.shift()                        // removes the starting element of myArr

// console.log(myArr.includes(9));      // checks whether 9 is included in myArr
// console.log(myArr.indexOf(3));       // returns index of element 3

const newArr = myArr.join()             // returns a string by concatenating all the elements of array separated by a specified separator string(commas by default)

console.log(myArr);                     
console.log(newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)          // returns the elements starting from index 1 upto index (3-1) = 2
                                        // no change in myArr occurs

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)         // returns the elements starting from index 1 upto index 3
                                        // spliced elements are removed from the original array
console.log("C ", myArr);
console.log(myn2);


