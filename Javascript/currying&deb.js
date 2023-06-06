// What is currying function in JavaScript ?
// It is a technique in functional programming, 
// that transforms the function of multiple arguments 
// into several functions of a single argument in sequence. 

// It helps us to create a higher-order function
// It reduces the chances of error in our function by 
// dividing it into multiple smaller functions that can handle one responsibility.
// It is very useful in building modular and reusable code
// It helps us to avoid passing the same variable multiple times
// It makes the code more readable

// function calculateVolume(length, breadth, height) {
//     return length * breadth * height;
// }
// console.log(calculateVolume(4, 5, 6));




function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));
//120


// Example 2: This example explains the currying technique with the help of closures. 
// During the thread of execution, the calculateVolume() function will be invoked.
//  Inside there is an anonymous function, that receives a parameter and returns some code.
//   We are exposing our function to another function, so closure will be created. Closure
//   always contains the function definition along with the lexical environment of the
//    parent, both things remain connected as a bundle. Hence, it does not matter where 
//    we invoke them, the all inner functions will always hold access to the variable 
//    of their parent.
// As soon as we have got the returned result as a function the next argument is ready
//  to be passed, this process will continue till the second last function. Finally,
//   the innermost return keyword returns the expected result.




//////
// The concept of debouncing is pretty straightforward. It delays the function 
// invocation by a defined period of time to avoid unnecessary invocations.
//  So, the function will only be invoked if no event is triggered within 
//  that time. If the user triggers a new event during that time, 
//  the time will be reset.

// We can optimise and reduce the count of API calls by debounce logic. 
// We can wait for certain amount of time before making the next API call.


// What is throttle?
// Throttle is another technique to minimize unnecessary function 
// invocations when using event listeners. However, throttle 
// works a bit differently from debouncing. Instead of delaying, 
// it invokes the callback function at regular intervals as long 
// as the event trigger is active.

// Throttling is a technique where we make the function call in a 
// predetermined time interval irrespective of continuous user actions.