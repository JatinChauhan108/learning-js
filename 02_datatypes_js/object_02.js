// const tinderUser = new Object()                                              // singleton object created using constructor
const tinderUser = {}                                                           // non singleton object created using literal
    
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {                                                                 // object inside an object
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);                    // accessing objects inside objects
                                                                                // there is a concept of optional chaining where we can use ? after a property to check if it exists in the object or not and perform operations accordingly
                                                                                // eg. regularUser.fullname?.userfullname.firstname

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                                                  // we cannot merge objects through this syntax and this will instead result in two objects obj1 and obj2 to be the properties of obj3 
// const obj3 = Object.assign({}, obj1, obj2, obj4)                             // through assign(target, source) method , we can merge properties of multiple objects into one single object, it modifies the source object and returns the modified source object
                                                                                // the empty object in the first argument is used as a target and all the arguments that follow are the source objects whose properties are copied to the source object

const obj3 = {...obj1, ...obj2}                                                 // recommended and most modern way of merging the objects using the spread operator similar to as used in array
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));                                        // returns the names of the object properties in the form of an array
// console.log(Object.values(tinderUser));                                      // returns the values of the object properties in the form of an array
// console.log(Object.entries(tinderUser));                                     // returns the key-value pair of object properties in the form of a nested array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));                        // checks whether the passed string exists as a property in the objectt


// Object destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor                                                      // to avoid using the same syntax again and again to access the courseInstructor property of the object course, we instead use the destructuring syntax

// here we are unpacking the properties of the object  

const {courseInstructor} = course                                               // the syntax is similar to const courseInstructor = course.courseInstructor
const {courseInstructor: instructor} = course                                   // the syntax is similar to const instructor = course.courseInstructor

console.log(courseInstructor);
console.log(instructor);


// JSON api format below

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// also this can be JSON api format in the form of an array which contains several objects

[
    {},
    {},
    {}
]
