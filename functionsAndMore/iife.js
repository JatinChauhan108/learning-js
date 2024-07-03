// Immediately Invoked Function Expressions (IIFE)
// function is executed as soon as it is defined
// used in order to avoid polluting the global namespace
// as variables defined in the iife do not clash with the variables defined outside it


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                                   // semicolon after the iife is necessary when we are using another iife after it to mark the end of line as it is not automatically inserted in this case

( (name) => {
    // anonymous IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
