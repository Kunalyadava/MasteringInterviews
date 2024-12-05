// Explanation:

// - Addition (3 + 3): 
//   The `+` operator is used for arithmetic addition when both operands are numbers. 
//   In this case, 3 + 3 results in 6.

// - String Concatenation ("3" + "3"): 
//   The `+` operator is also used for string concatenation when either operand is a string. 
//   Here, both operands are strings, so they are concatenated together to form the string "33".

// - Unary Plus ("3" + +3): 
//   The unary `+` operator converts the value on its right to a number. 
//   In this case, `+3` is just 3 (no change). 
//   However, since the left operand is a string ("3"), the `+` operator concatenates the two, 
//   resulting in the string "33".

// - Addition with Coercion (3 + + "3"): 
//   The string `"3"` is first coerced to a number by the unary `+` operator. 
//   This results in the number `3`. 
//   Then, 3 + 3 is computed as a standard arithmetic addition, yielding the result 6.

// - Addition and Subtraction (3 + 3 - 3): 
//   JavaScript performs the addition (`3 + 3`), which results in 6. 
//   Then, the subtraction (`6 - 3`) occurs, resulting in 3. 
//   The `+` and `-` operators both work as expected here, performing basic arithmetic on the numbers.

// - Subtraction with String Concatenation ("3" + "3" - "3"): 
//   The first part of the expression (`"3" + "3"`) concatenates the strings, resulting in the string "33". 
//   However, the `-` operator doesn't perform string concatenation—it forces type coercion and converts the strings to numbers before subtracting. 
//   So, `"33" - "3"` coerces `"33"` to the number 33 and `"3"` to the number 3, resulting in `33 - 3`, which equals 30.

// - true + true: 
//   In JavaScript, boolean values are coerced to numbers when involved in arithmetic operations. 
//   `true` is coerced to `1` and `false` to `0`. 
//   So, `true + true` becomes `1 + 1`, which results in 2.

// - 5 - "5": 
//   The string `"5"` is coerced to a number before performing the subtraction, 
//   so `5 - 5` results in `0`.

// - 5 * 5: 
//   Multiplication with numbers works as expected, resulting in `25`.


// Additional Examples:

// - Multiplication with String ("5" * "5"):
//   When both operands are strings, JavaScript attempts to convert them into numbers for arithmetic operations. 
//   Here, `"5"` is coerced to the number `5`, and then the multiplication `5 * 5` results in `25`.
console.log("5" * "5");  // Output: 25

// - Addition with Boolean (5 + true):
//   In JavaScript, `true` is coerced to `1` when involved in arithmetic operations. 
//   Therefore, `5 + true` becomes `5 + 1`, which results in `6`.
console.log(5 + true);  // Output: 6

// - Concatenation with Boolean ("5" + true):
//   The `+` operator is used for string concatenation here. 
//   Since `"5"` is a string, JavaScript coerces the `true` boolean value to the string `"true"`, 
//   so `"5" + true` results in the string `"5true"`.
console.log("5" + true);  // Output: "5true"

// - Checking the type of NaN:
console.log(typeof(NaN));  // Output: "number"
// Explanation: NaN (Not-a-Number) is considered a **number** in JavaScript, 
// even though it represents an invalid or unrepresentable numerical value.


// - Checking the type of null:
console.log(typeof(null));  // Output: "object"
// Explanation: This is a well-known JavaScript quirk. The value `null` is considered an object 
// due to the way JavaScript's `typeof` operator was initially implemented.


// - Checking the type of undefined:
console.log(typeof(undefined));  // Output: "undefined"
// Explanation: `undefined` is a primitive value that indicates a variable has been declared 
// but not yet assigned a value. The `typeof` operator correctly identifies it as "undefined".


// - Checking if an object is of type "object":
console.log(typeof {} === "object");  // Output: true
// Explanation: `{}` creates an empty object literal, and `typeof` returns the type "object". 
// Therefore, `typeof {}` will be `"object"`, and the comparison evaluates to `true`.


// 2. Postfix and Prefix Increment with the Comma Operator
let x = 10;
let y = (x++, ++x, x);
console.log(y);  // Output: 12

// Explanation:
// - Postfix Increment (x++): This increments x by 1 but returns the original value. After this, x becomes 11.
// - Prefix Increment (++x): This increments x by 1 and returns the new value. After this, x becomes 12.
// - Comma Operator: Evaluates all expressions from left to right, and returns the last value, which is x (12).

// 3. Sorting Arrays and Lexicographical Order
let a = [3, 1, 4, 1, 5, 9];
a.sort();
console.log(a);  // Output: [1, 1, 3, 4, 5, 9]

// Explanation:
// - `sort()` sorts elements lexicographically (as strings), not numerically. So, numbers are sorted as strings based on their character codes.
// - Time complexity of `sort()` is typically O(n log n), as it uses an efficient sorting algorithm like Timsort.

// Example of Lexicographical Comparison:
console.log("10" < "2");  // Output: true

// Explanation of Lexicographical Order:
// - In lexicographical (dictionary) order, JavaScript compares the Unicode values of characters.
// - For example, comparing "10" and "2":
//   - The first character of "10" is '1' (Unicode value 49).
//   - The first character of "2" is '2' (Unicode value 50).
// - Since 49 < 50, "10" is considered less than "2" in lexicographical order.
// - Therefore, "10" < "2" returns `true`.

// 4. Logical OR vs. Nullish Coalescing
let myVar = null;
let defaultValue = 'Hello';

let result = myVar || defaultValue;
console.log(result);  // Output: 'Hello'

// Explanation of Logical OR (||):
// - The || operator checks if the left-hand side value is truthy or falsy.
// - If the left-hand side (lhs) is falsy (null, undefined, 0, "", false, NaN), it returns the right-hand side (rhs).
// - In this example, `myVar` is null (falsy), so it returns the defaultValue 'Hello'.

// Explanation of Nullish Coalescing (??):
let x2 = 0;
let y2 = x2 ?? 'default';
console.log(y2);  // Output: 0

// - The ?? operator works similarly to ||, but it only considers null or undefined as "falsy" values.
// - In this case, since x2 is 0 (which is falsy but not null or undefined), y2 is assigned 0, not 'default'.
// - Unlike ||, ?? ignores other falsy values such as 0, false, and "".

// 5. Using Object.entries()
let obj = {a: 1, b: 2};  
let keys = Object.entries(obj); 
console.log(keys);  // Output: [['a', 1], ['b', 2]]

// Explanation of `Object.entries()`:
// - `Object.entries()` converts an object's properties into an array of key-value pairs.
// - Each pair is an array, where the first element is the key, and the second is the value.
// - In this case, the object `{a: 1, b: 2}` is converted into `[["a", 1], ["b", 2]]`.
// - This is useful when you need both keys and values in a format that can be iterated over (e.g., for loops or map operations).

//  ////
// ### **Comparison of `null` and `NaN` in JavaScript**

// #### 1. **Meaning:**
//    - **`null`:**  
//      Represents the **intentional absence** of an object or value. It's a deliberate assignment indicating "no value" or "empty."
     
//      Example:  
//      ```
//      let person = null; // no person object assigned
//      ```
   
//    - **`NaN`:**  
//      Stands for **"Not-a-Number"** and represents a value that is **not a valid number**. It results from invalid mathematical
//       operations or attempts to convert non-numeric values into numbers.
     
//      Example:  
//      ```
//      let result = 0 / 0; // NaN
//      ```

// ---

// #### 2. **Type:**
//    - **`null`:**  
//      The `typeof null` is **"object"**, which is actually a known JavaScript bug. `null` is considered an object type,
//       but it is not truly an object.
     
//      Example:  
//      ```
//      typeof null; // "object"
//      ```

//    - **`NaN`:**  
//      The `typeof NaN` is **"number"**, because `NaN` is a special numeric value, even though it represents an invalid number.
     
//      Example:  
//      ```
//      typeof NaN; // "number"
//      ```

// ---

// #### 3. **Common Use Case:**
//    - **`null`:**  
//      Used when you explicitly want to **represent an empty value** or a **missing object**. It indicates that a 
//      variable is intentionally empty or uninitialized.
     
//      Example:  
//      ```
//      let car = null; // car doesn't have a value yet
//      ```

//    - **`NaN`:**  
//      Result of invalid mathematical operations or computations that return a **non-numeric result** 
//      (like dividing zero by zero or subtracting a string from a number).
     
//      Example:  
//      ```
//      let invalidCalculation = "apple" * 3; // NaN (invalid multiplication)
//      ```

// ---

// #### 4. **Equality Behavior:**
//    - **`null`:**  
//      `null` is **equal** to itself (`null === null` is `true`). However, it is loosely equal (`==`) to `undefined`.
     
//      Example:  
//      ```
//      null === null; // true
//      null == undefined; // true
//      ```

//    - **`NaN`:**  
//      `NaN` is **never equal** to anything, including itself (`NaN === NaN` is `false`), which is a unique property of `NaN`.
     
//      Example:  
//      ```
//      NaN === NaN; // false
//      isNaN(NaN); // true
//      ```

// ---

// #### 5. **Comparison (Loose Equality):**
//    - **`null`:**  
//      `null` is **loosely equal** to `undefined` but **not equal** to any other value (including `false`, `0`, or `""`).
     
//      Example:  
//      ```
//      null == undefined; // true
//      null == 0; // false
//      null == false; // false
//      ```

//    - **`NaN`:**  
//      `NaN` is **never equal** to anything, even when using loose equality (`==`). Therefore, `NaN == NaN` is `false`, which is a key characteristic.
     
//      Example:  
//      ```
//      NaN == NaN; // false
//      NaN == 0; // false
//      NaN == "hello"; // false
//      ```

// ---

// #### 6. **When They Typically Occur:**
//    - **`null`:**  
//      You might encounter `null` when you're dealing with objects or arrays that aren't yet initialized, or when you're explicitly clearing a value.
     
//      Example:  
//      ```
//      let obj = null; // no object assigned
//      obj = new Object(); // now obj is an object
//      ```

//    - **`NaN`:**  
//      `NaN` typically appears when a **mathematical operation** fails, such as division by zero, invalid number parsing, or invalid arithmetic on non-numeric values.
     
//      Example:  
//      ```
//      let invalidNumber = parseInt("hello"); // NaN
//      let invalidDivision = 5 / "string"; // NaN
//      ```

// ---

// #### **Summary Table:**

// | **Feature**         | **`null`**                                   | **`NaN`**                                   |
// |---------------------|----------------------------------------------|---------------------------------------------|
// | **Meaning**         | Represents the intentional absence of a value or object. | Represents an invalid number (Not-a-Number). |
// | **Type**            | `object` (bug in JavaScript)                 | `number`                                    |
// | **Use case**        | To indicate "no value" or uninitialized state for variables. | Result of invalid mathematical operations. |
// | **Equality**        | `null === null` is `true`.                   | `NaN === NaN` is `false`.                   |
// | **Loose Equality**  | `null == undefined` is `true`.               | `NaN == NaN` is `false`.                    |
// | **Common Errors**   | Used when an object is expected but isn't available. | Happens during invalid math operations (like `0/0`). |

// ---
// To reliably check if a value is NaN, don't use === because NaN === NaN is false. 
// Instead, use the Number.isNaN() function:

// console.log(Number.isNaN(NaN));   // true
// console.log(Number.isNaN(123));   // false

// Alternatively, you can use the global isNaN() function, 
// but it’s less reliable because it converts its argument to a number first:

// console.log(isNaN("abc"));   // true (because "abc" is coerced to NaN)
// console.log(isNaN(123));    

//------