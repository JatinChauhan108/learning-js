//var c = 300
let a = 300
if (true) {                                                             // whenever we use curly braces with if or for keywords they are termed as scope as opposed to the object when used in object declarations
                                                                        // there are global scopes, local scopes, block scopes, etc.
    let a = 10
    const b = 20
    // console.log("INNER: ", a);

    // var c = 30                                                       // using var makes the variable accessible in global scope, hence its use is avoided
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}