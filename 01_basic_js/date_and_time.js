// Dates

let myDate = new Date()                     // creates a date object instance encapsulating the no. of milliseconds since midnight of 1 Jan 1970 UTC
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());    // gives a date time string representing the moment stored in date object with respect to local time zone
// console.log(typeof myDate);              // myDate is of object type

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));            // gets the no. of seconds elapsed since midnight of 1 Jan 1970 UTC

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);                    // months are 0-indexed 
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `                  // display using string interpolation(backticks)

newDate.toLocaleString('default', {                     // we can format as to how to represent a local date time string 
    weekday: "long",
    
})
