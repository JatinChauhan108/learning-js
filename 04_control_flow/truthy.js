const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values (values which are interpreted as false)

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values (values interpreted as true).. all the values that are not falsy are truthy
// "0", 'false', " ", [], {}, function(){}, etc.  // empty function

// if (userEmail.length === 0) {                                            // checking whether an array is empty or not
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {                                   // checking whether an object is empty or not
                                                                            // Object.keys(obj) gives an array of object keys
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??):                                        // used to handle null and undefined values
                                                                            // logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;                                                   
// val1 = 5 ?? 10                                                           
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")