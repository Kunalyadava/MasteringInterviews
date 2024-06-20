//[1,2,3]===[1,2,3] 0r {}==={}
//false
//because they are stored at different memory locations and
//equility operator in non premitives looks for same identity,
//same location,same reference and not value


// false 0 (zero) '' or “” (empty string) null undefined.
// NaN.

// []==0 //true



// if(0){
//  console.log("It is working")  
// }
// //undefined



// if([0]){
//  console.log("It is working")  
// }
// //It is working

// []===0 //false

// console.log([] === []); // false
console.log([] == []);  // false

let arr1 = [];
let arr2 = arr1;

console.log(arr1 === arr2); // true
console.log(arr1 == arr2);  // true

 // 1+"2" //'12'


// 5-"3"//2

// 1+"hello" //"1hello"

// "5"-"3" //2

//"5"+"5"//55

// 1-"hello" //NaN

// 5*"2" //10

// 2*5 //10


//console.log(5+null) //5

// console.log(5+"null") //5null

// console.log("5"+null) //5null

// + operator have two works to add string and number also so it 
// converts into stringbut in subst it will work as maths

// "5"+"6"+1//'561'

// "5"+"6"-2 //54

// []||true //[]

//null/undefined are converted to numbers: 
//null becomes 0 , while undefined becomes NaN

//[]+"1" //1


// In JavaScript, when an array is converted to a string,
//  the elements of the array are concatenated with
//  commas between them. However, in the case of an empty array,
// there are no elements to concatenate, so the resulting string is simply an empty string ("").

// Thus, the expression [] + "1" will evaluate 
//   to the string "1". The empty array is converted 
//    to an empty string, and then the string "1" is 
// concatenated with it, resulting in the final string "1".



// In JavaScript, objects can be converted to primitivevalues using
//  the concept of "Type Conversion" or "Type Coercion."
//   This conversion can be explicitly triggered using 
//    certain methods or implicitly performed by JavaScript
//     when an object is used in a context where a primitive
//      value is expected.


// const obj = {
//   valueOf() {
//     return 42;  // Returns a primitive value using valueOf()
//   },
//   toString() {
//     return "Hello";  // Returns a string using toString()
//   }
// };

// console.log(obj + 1);  // Output: 43 (valueOf() is used)
// console.log(String(obj));  // Output: "Hello" (toString() is used)

//scopes.js

// let a=[10,20,30]
// let b=[10,20,30]
// console.log(a===b)  false

// let a=10
// let b=[10,20,30]
// console.log(a===b)


// for(let i=0;i<10;i++){
    
// }
// console.log(i) //ref error

// let a=11;
// if(true){
//     let b=10;
//     if(true){
//         console.log(b)
//     }
// }
// console.log(a)
// //10 
// //11
function a(){
    var b=10;
    c();
    function c(){
        console.log(b)
}
}
a()
// console.log(b)




//  Here's an explanation of var and let in the context of a for loop, 
//  presented in a single prompt box with a copy option:

// Understanding var and let in a for loop
// In JavaScript, var and let are used to declare variables,
//  but they behave differently in certain contexts, such as within a for loop.

// var in a for loop:

// Example with var
console.log('Using var:');
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Outputs 3, 3, 3
    }, 100);
}

// Explanation:
// - Variables declared with var are function-scoped, not block-scoped.
// - In the example, i is hoisted to the top of the function scope.
// - After the loop ends, i is 3, so all three setTimeout callbacks log 3.
// let in a for loop:
javascript

// Example with let
console.log('Using let:');
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log(j); // Outputs 0, 1, 2
    }, 100);
}

// Explanation:
// - Variables declared with let are block-scoped, scoped to the nearest curly braces {}.
// - In each iteration, j is a new variable with a new value.
// - Each setTimeout callback captures and logs the correct value of j for that iteration.
// Key Differences:
// Scoping: var is function-scoped, while let is block-scoped.
// Hoisting: Variables declared with var are hoisted to the top of 
// the function scope, potentially leading to unexpected behavior in loops.
// Closure in Loops: let ensures that each iteration of the loop creates
//  a new binding for the variable, avoiding the common issue of 
//  capturing the last value in asynchronous operations.
