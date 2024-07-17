// singleton                                                // means an object can have only one instance
// Object.create                                            // It's the constructor method of creating an object instance; it always creates a singleton object

// object literals                                          // using object literals we can create a non-singleton object i.e., there would be multiple instances of the created object

const mySym = Symbol("key1")                                // creation of a symbol object


const JsUser = {
    name: "Hitesh",                                         // keys are stored as strings, eg. name is stored as a string
    "full name": "Hitesh Choudhary",                        // hence we can write a string as a key as well
    [mySym]: "mykey1",                                      // using a symbol as a key in an object or introducing a symbol property
                                                            // this is the correct syntax and using mySym alone wouldn't use the symbol as a key, instead mySym would be treated as a string
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)                                // one of the ways to access object properties; email is converted to a string by JavaScript (important for interviews)
// console.log(JsUser["email"])                             // another way is to use square brackets and writing the property inside " "
// console.log(JsUser["full name"])                         // since the key full name is written as a string in object literal, the only way to access this property is using square brackets only
// console.log(JsUser[mySym])                               // the only way to access a property whose key is a symbol in the object literal or we can say we are accessing a symbol property instead of a string property

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                                    // freezes the object i.e., the object cannot be altered; new properties/methods cannot be added or existing properties/methods cannot be removed
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){                               // creating a method for our object JsUser
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){                            
    console.log(`Hello JS user, ${this.name}`);             // this keyword refers to the most recent object used
}   

console.log(JsUser.greeting);                               // simply prints that greeting is a function

console.log(JsUser.greeting());                             // executes the function            
console.log(JsUser.greetingTwo());