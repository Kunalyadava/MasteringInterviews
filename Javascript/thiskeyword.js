// this keyword
//this keyword is used to access property inside the same object
// For **regular functions**, what will the keyword **`this`** 
//point to, is determined entirely by ***HOW & WHERE** THE FUNCTION WAS CALLED!!*

//if its a regular function, how the function is invoked matters 
// to determine this!! - if it's an arrow function,
//  where the function sits (lexically) 
// matters to determine this, no matter how it was invoked!!



//By default, the this keyword points at the global object.
//if we “simply execute” a regular function (without explicitly,
// implicity or hard binding the this to any object) then this points
// to the global object, which in the browser is the window object.

// function sayGoodbye() {
//     console.log("Good bye! ", this); // Window
//   }
  
//   function sayHello() {
//     console.log("Helloo! ", this); // Window
//     sayGoodbye();
//   }
  
//   sayHello();
  
//2 When a method is called as a property of an object, then the this implicity
//  refers to the parent object. If a function attached to an object 
//  is called by objectname.methodname() syntax, the this points to 
//  the object to which the function is attached.

// function sayHello() {
    //   console.log("Hello! from ", this.name);
    // }
    
    // var john = {
    //   name: "John Doe",
    //   age: 30,
    //   sayName: function () {
    //     // this.age = 35;
    //     console.log("My name is ", this.name);
    //   },
    //   sayHello: sayHello
    // };
    
    // var james = {
    //   name: "James Bond",
    //   age: 27,
    //   sayName: function () {
    //     console.log("My name is ", this.name);
    //   },
    //   sayHello: sayHello
    // };
    
    // john.sayName();
    // john.sayHello();
    
    // james.sayName();
    // james.sayHello();
    
    ﻿
    // // My name is  John Doe
    // // Hello! from  John Doe
    // // My name is  James Bond
    // // Hello! from  James Bond


    // When a function/class is called with the new operator, 
    // it gives us a brand new object & the this refers to the newly created object.

    // function Person(name) {
    //     this.name = name;
    //     this.sayHello = function () {
    //       console.log("Hello! ", this, this.name);
    //     };
    //   }
      
    //   var james = new Person("James Bond");
    //   var john = new Person("John Doe");
      
    //   john.sayHello();
    //   james.sayHello();
      //Hello!  Person {name: 'John Doe', sayHello: ƒ}John Doe
      //Hello!  Person {name: 'James Bond', sayHello: ƒ} James Bond



    //explictly
    //When a function is called using the call or apply methods,
    // then this refers to the value passed as the 
    //first argument of the call or apply function.