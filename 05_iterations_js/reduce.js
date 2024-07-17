const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {              // acc is accumulator and its value is initialized to the value given as the second parameter of the reduce function
//     console.log(`acc: ${acc} and currval: ${currval}`);              // currval holds the array elements one by one
//     return acc + currval                                             // acc + currval is performed and the result is stored in acc
// }, 0)

// myTotal = 1 + 2 + 3

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)              // same task performed using arrow function

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);