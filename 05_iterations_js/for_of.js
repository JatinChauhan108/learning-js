// for of

// ["", "", ""]                                                     // we can receive an array of strings or objects from the database
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {                                            // num iterates over the elements of the array
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps                                                             // kind of object which stores unique key-value pairs

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {                                   // destructuring of key- value pairs of map
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {                           // since objects are not iterable, hence we cannot use the same syntax with objects
//     console.log(key, ':-', value);
    
// }