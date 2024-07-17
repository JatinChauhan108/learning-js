// this keyword is used to refer to the current object

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);           // we cannot access properties of an object inside the method of an object without specifying the object name
                                                                        // hence, we can use this keyword here
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);                                                   // this keyword by default refers to an empty object since we are using node engine as the js compiler
                                                                        // but in the browser engine(while using this keyword in console), this keyword by default stores the window object
                                                                        // In the browser engine, window object is a global object (interview question)

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);                                      // but when we use this keyword inside a function it refers to a non-empty object which contains some kind of data
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {                                                   // the arrow function is another way of creating a function, where we use an arrow instead of the function keyword 
                                                                        // arrow function syntax is () => {}
    let username = "hitesh"
    console.log(this);                                                  // this keyword in arrow function also refers to an empty object
}


// chai()

// const addTwo = (num1, num2) => { 
//     return num1 + num2                                               // explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2                          // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )                       // paranthesis can be used

const addTwo = (num1, num2) => ({username: "hitesh"})                   // use of paranthesis is necessary while returning an object


console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()