function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {                          // we pass the object using "this" and the property on which we wish to apply getter and setter along with the definition of getter and setter
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);