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
}).catch(function(error){                                                           // if reject() is called inside the promise then the callback function inside catch() is executed
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
        const response = await promiseFive
        console.log(response);
    } catch (error) {                                                               // rejections in promises are handled using catch block
                                                                                    // if reject() is called inside promise catch block is executed with the argument passed inside reject 
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
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

// promise.all
// yes this is also available, kuch reading aap b kro.