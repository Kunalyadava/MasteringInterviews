
// Returning Functions (Closures):
// Functions in JavaScript can also return other functions. 
// This is often used to create closures, where the inner 
// function has access to the variables of the outer function 
// even after the outer function has finished executing.

function outer() {
    var a = 10;

    function inner() {
        console.log(a); // Accesses the 'a' variable from the outer function
    }

    return inner;
}

var closureFunction = outer();
closureFunction(); // Outputs: 10
