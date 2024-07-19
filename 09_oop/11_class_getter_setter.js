class User {
    constructor(email, password){
        this.email = email;                                     // given statement would call a setter with name email
        this.password = password                                // calls a setter with name password
    }

    get email(){
        return this._email.toUpperCase()                        // we use _email instead of email as this.email calls the getter with the name email
                                                                // and this statement would keep on calling the getter until the call stack overflows and we get an error
    }
    set email(value){
        this._email = value                                     // for the same above reason we don't use this.email = value
                                                                // as this.email = value calls the setter named email
                                                                // hence we make changes to a different variable (other than the one specified in the call) using setter 
                                                                // and while accessing that property using a getter, we use that different variable and return its modified form as we want
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);