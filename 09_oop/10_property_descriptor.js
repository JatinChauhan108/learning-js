const descripter = Object.getOwnPropertyDescriptor(Math, "PI")                  // properties of an object have specifications of their own
                                                                                // like if they can be overwritten, enumerable, etc.
                                                                                // getOwnPropertyDescriptor takes the name of the object and the name of the property
                                                                                // and returns the description of that property

// console.log(descripter);

// console.log(Math.PI);                                
// Math.PI = 5                                                                  // the PI property in Math object is not writable
                                                                                // hence even if we try to change its value, it doesn't get changed
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {                                           // using defineProperty, we can change the descriptions of our object's properties
    //writable: false,
    enumerable: true,                                                           // enumerable : true means that when we iterate over the Object, this property would be iterated upon
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {                                // Objects are not directly iterable using for...each, so we we will first covnvert them into an iterable using Object.entries()
    if (typeof value !== 'function') {                                          // generally we need to iterate only over the properties, so we introduce this check to not iterate over any method present in the object
        
        console.log(`${key} : ${value}`);
    }
}