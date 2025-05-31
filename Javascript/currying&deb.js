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

// function add(x,y,z){
//     return x+y+z
// }
// console.log(add(2,2,2)) //6


// function add1(x){
// return function(y){
// return function(z){
//  return x+y+z
// }}}
// console.log(add1(5)(5)(5))   // 15


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
// Inside there is an anonymous function, that receives a parameter and returns some code.
// We are exposing our function to another function, so closure will be created. Closure
// always contains the function definition along with the lexical environment of the
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


// Introduction
// Throttling and debouncing are techniques used to control the rate at
//  which a function is invoked, particularly in scenarios where frequent
//   events (like user interactions) can lead to excessive calls and 
//   potentially impact performance.

// Throttling
// Throttling limits the number of times a function is executed over 
// a certain time period. It ensures that the function is called at a 
// controlled, steady rate, regardless of how frequently
//  the event triggering the function occurs.

// Debouncing
// Debouncing is a technique that delays the execution of a function
//  until a certain amount of time has passed since the last event's 
//  occurrence. It's useful when you want the function to be called 
//  after a period of inactivity, and it prevents rapid consecutive calls.

// Here's a breakdown of the key differences between throttling and debouncing.

// 1. Execution Behavior
// Throttling: In throttling, the function is executed at a fixed interval.
//  Even if the triggering event occurs more frequently, 
//  the function is invoked according to the defined interval.

// Debouncing: In debouncing, the function is only executed after 
// a specific delay since the last event's occurrence. If new events 
// occur within the delay period, the timer is reset, 
// and the function execution is further delayed.

// 2. Use Cases
// Throttling: Throttling is suitable for scenarios where you
//  want to limit the frequency of function calls, like handling
//   scroll events or resizing events. It helps avoid overloading
//    the system with frequent updates.

// Debouncing: Debouncing is ideal when you want to wait for a pause 
// in the events before triggering a function. This is useful for 
// situations like search suggestions, where you want to wait for 
// the user to finish typing before fetching suggestions.

// 3. Implementation
// Throttling: Throttling typically involves setting a fixed interval
//  between function calls using timers or timestamps 
//  to track the last invocation time.

// Debouncing: Debouncing involves starting a timer when an 
// event occurs and resetting the timer whenever a new event 
// occurs within the delay period. The function is 
// executed when the timer expires after the last event.

// Let's look at some code examples for more understanding

// Throttling Example
// Imagine you have a web page with a scrolling event that triggers some
//  action, like loading more content. Without throttling, if the user
//   scrolls quickly, the action might be triggered multiple times in rapid 
//   succession. Throttling ensures that the action is executed at a fixed interval.


function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      func(...args);
      lastCall = now;
    }
  };
}

const throttledScrollHandler = throttle(() => {
  console.log("Loading more content...");
}, 1000);

window.addEventListener("scroll", throttledScrollHandler);

// In this example, the throttle function wraps the original
//  function (scrollHandler) and ensures that it's called at most once 
//  every 1000 milliseconds (1 second) no matter how quickly the user scrolls.

// Debouncing Example
// Suppose you have a search input field that triggers an API call to 
// fetch search results as the user types. Without debouncing, the API 
// call would be made on every keystroke, causing excessive requests. 
// Debouncing ensures that the API call is made only after the user has paused typing.
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const debounceSearch = debounce((query) => {
  console.log(`Searching for: ${query}`);
  // Make API call with the search query
}, 300);

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (event) => {
  debounceSearch(event.target.value);
});


// In this example, the debounce function ensures that the API call is made 
// 300 milliseconds after the user stops typing. If the user continues typing,
//  the timer is reset, preventing the API call from being triggered too frequently.