function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)                                        // call passes the current execution context (this) to the function that is being called inside a function
                                                                            // the new function called will have a different execution context (i.e., "this" would refer to a different entity)
                                                                            // hence to work on the same execution context that we did in the old function, we have to pass that execution context using call()
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);