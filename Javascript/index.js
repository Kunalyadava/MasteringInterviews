// variables are store location with assigned names it
//  holds data that we can use or change later
// A declaration allocates a memory and the assignment assigns a value to this allocated memoery

//Nested > when there a conditional statement present inside conditional statement 




// Hoisting
//it only applies to variables and functions

//It doesn't care about variable values. All it wants to know what 
//variables are present in a program.

//it only considers declaration part and not the actual part
// all hoisting cares about is what variabls and functions are present in a program


// when js engine excutes a script it creates execution contexts, 
//each execution context has 2 phases 

// Javascript is executed in two phases
// 1. Memory Component (variable Component) Memory Creation Phase
// 2. Code Component (Thread of execution) Code Execution phase



// - During the creation phase of the execution context,
//  JS allocates memory space for the functions and variables.
// - In case of functions, the whole function body is stored but 
// in case of the variables, it is declared and assigned a default
//  value `undefined`. This phenomena is called `Hoisting`


// - Execution phase:
//     - Since memory allocation is done, now it will go into execution phase .
//     - In this phase, JS executes our code line by line and assigns the
//      value to the variables.

// - Whatever we saw now is GEC (Global execution phase)
// - There is one more thing called as functional execution phase
// - Whenever a function gets invoked, a new execution context 
// gets created known as functional execution context.
// - It has two phases again
//     - creation and execution phase
// - Once function execution is done, functional execution context gets removed

// Javascript scans the file and gets the delcarations of functions, 
// variables and class and stores/ moves up to the top of their scope,
//  prior to the Code execution phase.

//global execution context is the default  context in which js code starts 
// its execution when the file first loads in the browser

//functional execution contet is defined as the context created by the
// js engine whenever it finds any function call
// Execution context (EC) is defined as the environment in which the JavaScript
//  code is executed. By environment, I mean what variables JavaScript code has
//   access to at a particular time.


// Execution Stack
// Execution stack, also known as “calling stack” in other programming languages, 
// is a stack with a LIFO (Last in, First out) structure, which is used to store
//  all the execution context created during the code execution.

// When the JavaScript engine first encounters your script, 
// it creates a global execution context and pushes it to the current execution stack.

// Whenever the engine finds a function invocation, it creates a new execution
//  context for that function and pushes it to the top of the stack.

// Variable Scope 
// Scope in JavaScript refers to the accessibility or visibility of variables.
//  That is, which parts of a program have access to the variable 
//  or where the variable is visible.
 
//  Global scope
// When you execute a script, the JavaScript engine creates a global 
// execution context. It also assigns variables that you declare outside of functions to the global execution context. These variables are in the global scope. They are also known as global variables.

// Local scope
// Variables that you declare inside a function are local to that function. 
// They are called Local Variables and can’t be accessed in Global Scope.

// Block scope
// Variables that you declare inside a block {} using let or const are
//  limited only to that block.



















// Data types

// Primitive Values 
// Boolean, BigInt, String, Symbol, Null ,Number,  Undefined type
// Immutable means that which cannot be changed or modified.
// When we create a string, the value is created from scratch as opposed to being replaced



// Non-zero value =   something is there 
// 0              =   quantity is Non-zero
// null           =    something exixts but its value is NA or wiped out 
// undefined      =    something doesn't exixt


// Mutability means to be able to change something example rubber
    
// Primitive Data Types in Js is Immutable value cannot be changed in memory

//     SSBBNNU                          they hold the value

//example how premitive data types are stored in memory  and it cannot be changed
<script>
  {/* var a="Kunal"
a[0]="a"
console.log(a)  //masai 
var admin=[1,2,3]
admin[0]="Kunal"
console.log(admin) //kunal,2,3 */}
</script>


//     Non-Primitive Data Types in Js  is mutable value can be changed in memory

//     Objects Arrys Functions            they hold the address


    
///////////////////////////////////////////////////////////////////





// And Objects
// Object
// Sorting
// Write a program to merge to sorted arrays

// Splice
// Remove or add an element to the array based on the given range,the splice method changes the original array

// Slice
// Does not change the original array


// Pure components
// Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values.


// Force render a component


// Redux flow
// Action --> dispatcher --> store -> updates the state -> view is re-rendered

// Use effect


// Display block and inline


// [1:02 PM] Variable hoisting?
// Four es6 features
// Prototype chain?

// Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.


// Closures
// Given InputArr = [1, ‘a’, ‘b’, 5, 6], Implement InputArr.square() So that it return OutputArr = [1, ‘a’, ‘b’, 25, 36]
// const sum = (a, b) => a + b
// sum(1, 2) // + operation
// sum(2, 3) // + operation
// sum(1, 2) // from cache
//    - Implement a caching fn
//    - Can change implementation of sum fn
//    - Do Not polluting the global space
// Implement a stopwatch in React JS
// [1:03 PM] Prototype chain
// Array flatten,
// var merged = [].concat.apply([], arrays);

// Closure, 
// A function that is bundled with it's lexical scope

// Currying, if there is n number of input how you will handle that.


// Primitive datatypes AND NON-Primitive datatypes
// Hoisting 
// Closures
// What is Virtual DOM
// What is BABEL
// Reconcillation
// Mapping an array and sorting
// Gave him a code and ask him about how it is hoisting
// Merge two sorted arrays
// Redux flow
// Context API
// CSS Flex
// If they give three btns how will you flex it?. And where will you add the flex?.





// //how to remove arrow sign in input type =number

// {/* <input type="number" class="no-spinners" />

// .no-spinners::-webkit-inner-spin-button,
// .no-spinners::-webkit-outer-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// } */}




//Asynchronous Programming
//Javascript is synchronous, blocking, single-threaded language.

// synchronous means to be in a sequence, i.e. every statement of
//the code gets executed one by one. So, basically a statement 
//has to wait for the earlier statement to get executed