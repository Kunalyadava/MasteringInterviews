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
//  commas between them. However, in the case of an empty array, there are no elements to concatenate, so the resulting string is simply an empty string ("").

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
