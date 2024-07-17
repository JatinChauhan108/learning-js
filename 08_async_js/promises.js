const promiseOne = new Promise(function(resolve, reject){                           // Creation of a promise
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){                                                          
        console.log('Async task is compelete');
        resolve()                                                                   // when resolve is called, the callback function inside the then() function is executed
    }, 1000)
})

promiseOne.then(function(){                                                         // promise is consumed
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){                                              // creating and consuming a promise without storing it in a variable
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})                      // argument inside resolve is passed to the callback function of then
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')                                   // if reject() is called it must be handled via a catch() function
                                                                                    // it calls the callback function inside catch with the argument passed to it
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username                                                            // the returned value of the callback function in then() is passed to the callback function of the subsequent then() function
                                                                                    // through this chaining we can keep passing and calling subsequent callback functions(written inside then) without creating a callback hell
}).then((username) => {
    console.log(username);
}).catch(function(error){                                                           // if reject() is called inside the promise or any error occurs in then callbacks, the callback function inside catch() is executed
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))         // callback function inside finally() is executed regardless of whether the promise is resolved or rejected



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){                                                // besides then and catch promise can be consumed using async...await as well
    try {
        const response = await promiseFive                                          // await stops the further execution in async function till the promiseFive is resolved or rejected
                                                                                    // and the runtime continues with other tasks outside the async function  
        console.log(response);
    } catch (error) {                                                               // rejections in promises are handled using catch block
                                                                                    // if any error occurs while executing asynchronous or synchronous tasks inside try block catch block is executed
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')       // fetch() also returns a promise with the message of whether the promise is fulfilled or not
                                                                                            // along with the response if the promise is fulfilled

//         const data = await response.json()                                               // response.json also returns a promise and is an asynchronous task therefore we need to use await keyword with it
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// Promise.all()                                                                            // this static method is a part of promise concurrency methods(methods that perform concurrent execution of promises) 
                                                                                            // takes an iterable of promises as an input and returns a single promise object
                                                                                            // the returned promise is fulfilled only if all of the input promises are fulfilled
                                                                                            // if any of the input promise is rejected, the returned promise is rejected with the first rejection reason
                                                                                            // if all the promises are fulfilled, the returned promise is fulfilled with an array of fulfillment values