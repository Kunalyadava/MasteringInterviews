console.log(3 + 3);

// This is a straightforward addition of two numbers. 3 + 3 equals 6.
console.log("3" + "3");

// Here, the + operator is used for string concatenation. "3" + "3" results in the string "33".
console.log("3" + + 3);

// In this statement, + 3 is interpreted as the unary plus operator applied to 3, which coerces 3 to a number 
// (though it's already a number). So, "3" + +3 becomes "3" + 3, resulting in the string "33".
console.log(3 + + "3");

// In this case, + "3" coerces the string "3" to a number 3. Thus, 3 + + "3" becomes 3 + 3, resulting in 6.
console.log(3 + 3- 3);

// 3 + 3 first computes the addition of 3 and 3, which equals 6.
// Then, 6 - 3 subtracts 3 from 6, resulting in 3.

console.log("3" + "3" - "3");

// First, "3" + "3" results in the string "33" due to string concatenation.
// Then, "33" - "3" involves subtraction, which coerces the strings to numbers. 
// So, "33" becomes 33 and "3" becomes 3. Therefore, 33 - 3 equals 30.
// To summarize, JavaScript's type coercion rules and operator overloading can 
// lead to some interesting and sometimes unexpected results. The + operator can
//  either concatenate strings or add numbers, while the - operator always converts
//  its operands to numbers and then subtracts them.



let x = 10; // x is initialized to 10
let y = (x++, ++x, x);
console.log(y); //12

// In the statement let y = (x++, ++x, x);, the comma operator is used.
//  The comma operator evaluates each of its operands (from left to right) 
//  and returns the value of the last operand.

// x++: This is the postfix increment operator. It increments x by 1, 
// but returns the original value of x. After this operation,
//  x becomes 11, but the expression evaluates to 10.
// ++x: This is the prefix increment operator. It increments x by 1
//  and returns the new value of x. After this operation, x becomes 12,
//   and the expression evaluates to 12.
// x: This simply returns the current value of x, which is now 12.
// So, the overall expression (x++, ++x, x) evaluates to 
// the value of the last expression, which is x.

// Since x is now 12, y will be assigned the value 12.


let a = [3, 1, 4, 1, 5, 9];
a.sort();
console.log(a); // Output: [1, 1, 3, 4, 5, 9]

// Time Complexity of .sort():
// The sort method in JavaScript typically implements a variation 
// of the Timsort algorithm, which has a worst-case time complexity of 
// 𝑂(𝑛log𝑛), This is efficient for general sorting purposes.


// Time Complexity of Accessing a[0]:
// Accessing an element in an array by index is 
// 𝑂(1), a constant-time operation.


// By default, a.sort() treats elements as strings. Therefore, it sorts numbers based on their string 
// representation. For example, 10 comes before 2 in lexicographical order because the string "10" 
// is less than the string "2". This can lead to incorrect results for numerical sorting.
// Lexicographical Order:

// In lexicographical order, characters are compared based on their Unicode values.
// The Unicode value for the character '1' is 49.
// The Unicode value for the character '2' is 50.
// Character by Character Comparison:

// When comparing "10" and "2", the comparison starts with the first character of each string.
// The first character of "10" is '1'.
// The first character of "2" is '2'.
// Comparing '1' and '2':

// Since '1' (Unicode 49) is less than '2' (Unicode 50), the string "10" 
// is considered less than the string "2" in lexicographical order

// console.log("10" < "2"); // Output: true


// If your goal is to find the smallest element in an array, using sort()
//  is inefficient since it has a time complexity of 
// O(nlogn), and it also mutates the original array. Instead,
//  you can find the minimum element in linear time 
// O(n) without mutating the array.



// Using Logical OR for Default Values
// The logical OR operator (||) works as follows:

// It evaluates the expression on its left-hand side (lhs).
// If lhs is truthy, it returns lhs.
// If lhs is falsy, it returns the value on its right-hand side (rhs).

// let myVar = null;
// let defaultValue = 'Hello';

// let result = myVar || defaultValue;

// console.log(result); // Output: 'Hello'


// Nullish Coalescing Operator (??):
// It returns the right-hand side operand (rhs) if the left-hand side
//  operand (lhs) is null or undefined.
// It does not consider other falsy values (false, 0, '', NaN, etc.) as nullish, 
// and thus does not trigger the default assignment.

// let x = 0;
// let y = x ?? 'default';

// console.log(y); // Output: 0
// In this example:

// x is 0, which is a falsy value but not nullish (null or undefined).
// Therefore, y is assigned 0 because ?? does not consider 0 as nullish
//  and thus does not use the default 'default'.
// Conclusion
// Logical OR (||): Treats all falsy values (except null and undefined) equally,
//  using the default value if any operand is falsy.
// Nullish Coalescing Operator (??): Specifically checks for null or undefined on 
// the left-hand side operand, ignoring other falsy values and only
//  using the default value if the operand is nullish.


