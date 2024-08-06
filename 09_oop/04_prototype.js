// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);                                      // we want to remove the empty spaces from the string but there is no such function or property available for it
                                                                        // so in this file, we show how to create your own property or method for all variables of a particular datatype


let myHeros = ["thor", "spiderman"]                                     // this is an array


let heroPower = {                                                       // this is an object
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){                                   // we create a method for all the objects using prototype
                                                                        // note that this is also acccessible by all the arrays, strings and functions
                                                                        // since array, string and function all refer to the object prototype
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){                                 // similarly we create a function for all the arrays
                                                                        // note that this is not accessible by other datatypes like string, function and objects
                                                                        // since object doesn't refer to prototype of any other datatype
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()                                                // heroPower won't contain any method named heyHitesh

// inheritance                                                          // accessing properties and methods of other objects

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport                                          // TASupport would be able to access all the properties and methods of TeachingSupport
}

Teacher.__proto__ = User                                                // another way of doing the above same thing

// modern syntax of doing the above same thing
Object.setPrototypeOf(TeachingSupport, Teacher)                         // TeachingSupport will have access to the properties and methods of Teacher


// now we can make a trueLength function for all the strings
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()