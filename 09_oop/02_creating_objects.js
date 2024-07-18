// creation of object from an object literal 

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);                       // this refers to the current context, here it would refer to the user object
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);                                                       // in node.js this in global context refers to an empty object
                                                                            // whereas in web browser this in global context refers to window


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)                               // creates a new object instance and "this" points to the new object instance
                                                                           // new keyword returns this object instance, hence the return statement in the User function has no use
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);                                          // constructor is a reference to the function that created userOne object i.e., it is a reference to User function only
//console.log(userTwo);