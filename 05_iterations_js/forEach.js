const coding = ["js", "ruby", "java", "python", "cpp"]

// forEach() is a built-in method of array objects
// an anonymous callback function is given as a parameter which is called for each value of val where val contains each array element in turn

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {                                          // arrow function can also be used
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)                                              // the callback function can be declared earlier as well
                                                                        // but only the reference of the function should be given as a parameter and it should not be executed(i,e., printMe() is a wrong parameter to forEach method)

// coding.forEach( (item, index, arr)=> {                               // along with the array elements, indices and whole array can also be given as a parameter to the callback function
//     console.log(item, index, arr);
// } )

const myCoding = [                                                      // array containing multiple objects
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )