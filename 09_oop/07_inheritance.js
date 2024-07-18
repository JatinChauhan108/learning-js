class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{                                                     // Teacher class inherits properties and methods of User class by using extends keyword
    constructor(username, email, password){ 
        super(username)                                                         // super() just works like call except the call() and the passing of current execution context is abstracted
                                                                                // here the constructor of the parent class would be passed with the argument given in super() and "this" of the current context is also passed with it
                                                                                // hence any instance of Teacher class would also get a username
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()                                                                    // chai would also get the access of logMe() method of User class
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);                                              // instanceof can be used to check whether an object is an instance of a class or a function
                                                                                // note that chai would be the instance of both Teacher and User as Teacher is inherited from user