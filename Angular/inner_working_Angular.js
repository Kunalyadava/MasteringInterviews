<script>
{/* Data flattening is associated with transforming data into plain text 
files stored in file systems rather than in databases or data warehouses */}

{/* Primitive vs. Non-Primitive Data Types
Primitive data types are the most basic types of data available within a language. 
Examples include integers, floats, characters, and booleans. These types typically 
have a fixed size and are directly operated on by the machine instructions.

Non-primitive data types (also known as reference types) include classes, arrays, 
and other user-defined types. These types can vary in size and often involve more 
complex structures. */}



{/* 
Memory Allocation
Stack Memory:



Characteristics: Stack memory is used for static memory allocation. It is fast, 
limited in size, and managed automatically by the system.

Usage: Typically, stack memory is used for primitive data types and function 
call management. Local variables and function parameters are stored here.

Lifecycle: Variables allocated on the stack exist only within the scope of the function 
in which they were created. They are automatically deallocated when the function exits.


Heap Memory:



Characteristics: Heap memory is used for dynamic memory allocation. It is generally 
larger than stack memory but slower to allocate and deallocate because it requires 
manual management (using commands like new or malloc and delete or free).

Usage: Non-primitive data types are usually allocated on the heap. This includes 
objects, arrays, and data structures that require a flexible size.

Lifecycle: Objects allocated on the heap remain in memory until they are explicitly 
deallocated by the programmer or garbage collected by the language 
runtime (e.g., in Java or Python).


// Why Non-Primitive Data Types Are Allocated on the Heap

Size and Complexity: Non-primitive data types, such as objects, can vary 
significantly in size. They often contain multiple fields, methods, 
and can reference other objects. Allocating these on the stack would 
be inefficient and impractical due to the limited and static nature of stack memory.

Lifetime and Scope: Objects often need to outlive the scope of a single function call. 
Heap memory allows objects to persist for as long as needed, across multiple function 
calls, and even until the end of the program’s execution, if necessary.

Dynamic Allocation: Many non-primitive types require dynamic allocation because 
their size can only be determined at runtime. The heap is designed to handle 
such dynamic memory allocation efficiently. */}
</script>

// A class in Java is a set of objects which shares common characteristics/ behavior 
// and common properties/ attributes. It is a user-defined blueprint or prototype 
// from which objects are created. For example, Student is a class while a 
// particular student named Ravi is an object.


// Class is not a real-world entity. It is just a template or blueprint or prototype 
// from which objects are created.

// Class does not occupy memory.
// Class is a group of variables of different data types and a group of methods.

// A Class in Java can contain:
// Data member
// Method
// Constructor
// Nested Class
// Interface

// Constructors are used for initializing new objects. 
// Fields are variables that provide the state of the 
// class and its objects, and methods are used to 
// implement the behavior of the class and its objects.


// An object in Java is a basic unit of Object-Oriented Programming and represents 
// real-life entities. Objects are the instances of a class that are created to use 
// the attributes and methods of a class.  A typical Java program creates many 
// objects, which as you know, interact by invoking methods. An object consists of : 

// State: It is represented by attributes of an object. 
// It also reflects the properties of an object.
// Behavior: It is represented by the methods of an object. It 
// also reflects the response of an object with other objects.
// Identity: It gives a unique name to an object and enables one 
// object to interact with other objects.


// Example of an object: dog

// Identity= Name of Dog
// Breed/Attributes = Age , Breed, Color 
// Behaviors=Bark/Sleep/Eat

// When we create an object, which is a non-primitive data type, 
// it’s always allocated on the heap memory because of the need 
// for dynamic memory allocation, the ability to manage variable sizes, 
// and the requirement for the object to persist beyond the scope of the 
// function that created it.

// When an object of a class is created, the class is said to be instantiated. 
// All the instances share the attributes and the behavior of the class. 
// But the values of those attributes, i.e. the state are unique for each object. 
// A single class may have any number of instances.




// As we declare variables like (type name;). This notifies the compiler that we will 
// use the name to refer to data whose type is type. With a primitive variable, this 
// declaration also reserves the proper amount of memory for the variable. So for 
// reference variables , the type must be strictly a concrete class name. In general, 
// we can’t create objects of an abstract class or an interface.  

// Dog tuffy; declares the reference variable tuffy. At this point, tuffy is null.
// tuffy = new Dog(); creates a new Dog object and assigns it to tuffy.
// Before the assignment, trying to use tuffy would result in a NullPointerException.



// Declaration and Memory Allocation
// Primitive Variables:

// When you declare a primitive variable (e.g., int number;), the compiler reserves memory for the 
// variable immediately. The size of the memory reserved depends on the data type 
// (e.g., 4 bytes for an int in many systems).

// Reference Variables:

// When you declare a reference variable (e.g., Dog tuffy;), the compiler understands 
// that tuffy will be used to refer to an object of type Dog. However, no memory is 
// allocated for the actual Dog object yet. Instead, memory is only reserved for 
// the reference (which is typically a pointer or similar reference mechanism).


// Summary

// Declaring a reference variable (e.g., Dog tuffy;) tells the compiler that tuffy will
//  refer to a Dog object, but does not create the object itself.
// The reference variable initially holds null until it is assigned to an actual
//  object created using the new keyword (e.g., tuffy = new Dog();).
// This distinction allows for efficient memory use and flexible object creation, 
// essential features in OOP and memory management.


// Initializing a Java object
// The new operator instantiates a class by allocating memory for a new object and returning a 
// reference to that memory. The new operator also invokes the class constructor. 




// Class vs. Object
// Blueprint vs. Instance:

// Class: A class is a blueprint or template that defines the structure and 
// behavior (data members and methods) that objects created from the class will have.
// Object: An object is an instance of a class. It is a concrete entity that 
// has a specific state and behavior as defined by its class.

// Memory Allocation:

// Class: No memory is allocated when a class is declared. It simply defines what 
// objects of that class will look like and how they will behave.

// Object: Memory is allocated when an object is created using the class. This memory 
// is used to store the object's state (values of the object's attributes).


// Group of Similar Entities:

// Class: A class groups similar objects. For example, a Car class might define the common 
// properties and behaviors of all cars (like model, speed, and drive method).
// Object: An object is a specific instance of a class, representing a unique entity.
//  For example, specific cars like BMW, Mercedes, and Ferrari are objects of the Car class.

// Logical vs. Physical Entity:

// Class: A class is a logical construct. It defines the blueprint without any physical 
// manifestation until an object is created.
// Object: An object is a physical entity. It is an instance that occupies space in memory 
// and can be manipulated in the program.

// Uniqueness:

// Class: A class is declared once and acts as a template for creating multiple objects.
// Object: Objects can be created multiple times from the same class template. Each object 
// is independent and has its own state.

// Real-World Example:

// Class: The concept of a Car is a class. It defines what a car is (attributes like color, 
// model, engineType, and behaviors like drive, stop).
// Object: Specific cars like BMW, Mercedes, and Ferrari are objects of the Car class. 
// Each object has its own state (e.g., a specific color and model).









// Class in Angular
// Blueprint for Components, Services, Models, etc.:

// In Angular, classes are used to define components, services, models, and other entities. 
// These classes serve as blueprints for creating instances (objects) that encapsulate 
// behavior and state.

// Component Class:
// A component in Angular is defined by a class. This class contains properties and 
// methods that define the behavior and state of the component. The class is decorated 
// with the @Component decorator, which provides metadata about the component, such as 
// its selector, template, and styles.

// Service Class:
// Services in Angular are also defined using classes. These classes typically encapsulate 
// business logic and are meant to be reusable across different parts of the application. 
// They are decorated with the @Injectable decorator, indicating that they can be injected 
// into components or other services.

// Model Class:
// Models are classes that define the shape of data objects used in the application. 
// These classes contain properties that correspond to the fields of the data object.
// Object in Angular

// Instance of a Class:
// An object in Angular is an instance of a class. When a class is instantiated, an 
// object is created in memory with its own state and behavior, as defined by the class.

// Component Instances:
// Each time an Angular component is used in a template, an instance of the component class 
// is created. This instance maintains its own state and handles its own events.

// Service Instances:
// Services are typically instantiated once and shared throughout the application 
// (singleton services). However, they can also be instantiated multiple times, 
// depending on the provided scope (e.g., root, module, component).

// Model Instances:
// When working with data, instances of model classes are created to represent individual 
// data objects. These instances can be used to manage data and interact with APIs. 

//Defining a Component Class
import { Component } from '@angular/core';

// Decorator providing metadata about the component
@Component({
  selector: 'app-car',
  template: `
    <div>
      <h2>{{ model }}</h2>
      <p>Color: {{ color }}</p>
      <p>Speed: {{ speed }} mph</p>
      <button (click)="drive()">Drive</button>
    </div>
  `
})
export class CarComponent {
  // Properties of the component
  // model: string = 'BMW';
  // color: string = 'Red';
  // speed: number = 120;

  // Method of the component
  drive() {
    console.log(`${this.model} is driving at ${this.speed} mph.`);
  }
}

//Defining a Service Class

import { Injectable } from '@angular/core';

// Decorator indicating that this class can be injected as a dependency
@Injectable({
  providedIn: 'root'
})
export class CarService {
  // Business logic to get car details
  getCarDetails() {
    return {
      model: 'BMW',
      color: 'Red',
      speed: 120
    };
  }
}

//Using a Component and Service
// import { Component, OnInit } from '@angular/core';
// import { CarService } from './car.service';

// @Component({
//   selector: 'app-root',
//   template: `
//     <app-car></app-car>
//   `
// })
// export class AppComponent implements OnInit {
//   constructor(private carService: CarService) {}

//   ngOnInit() {
//     const car = this.carService.getCarDetails();
//     console.log(car);
//   }
// }



// How Instances Are Created
// During Application Initialization:

// Angular does not create instances of services immediately during application initialization. 
// Instead, it sets up the providers and waits until the service is actually needed (lazy loading).



// Methods in Angular Class
// Defining Methods:
// Methods
// Methods are functions defined within a class that operate on instances of that class. 
// They can manipulate the instance's properties and perform actions.

// Methods are defined within the class to perform specific actions. These methods can manipulate 
// the component's state, handle events, or interact with services.
// Lifecycle Hooks:

// Angular provides lifecycle hooks, like ngOnInit(), ngOnChanges(), ngOnDestroy(), etc., 
// which are methods you can implement to perform actions at specific points in the component's 
// lifecycle.


// In Angular, class objects (instances of classes) are not directly visible in the traditional 
// sense because of how Angular manages the creation and lifecycle of components, services, and 
// other constructs through its Dependency Injection (DI) system. Here are the key reasons why 
// class objects are not typically visible or directly accessible in Angular applications




// In the context of object-oriented programming (OOP), the terms "instances" and "objects" 
// are often used interchangeably, but they can have slightly different connotations 
// depending on the context:

// Object:
// An object is a concrete entity that exists in memory at runtime. It is a particular
// instance of a class, created using the new keyword in languages like Java, TypeScript 
// (used in Angular), C++, etc.

// Example: If Car is a class, an object of type Car could be myCar = new Car().
// Instance:
// An instance refers to a specific occurrence of an object. It is created dynamically 
// during runtime when the class blueprint is instantiated.
// Example: If you create three Car objects (car1, car2, car3), each of them is an instance 
// of the Car class.

// Relationship between Objects and Instances
// Instantiation: When you create an object using the new keyword, you are instantiating a class. 
// Each new expression creates a new instance of that class.

// Identity: Objects are identifiable entities with a unique identity and state. Instances represent 
// specific realizations of those objects in memory.

// Angular and Instances
// In Angular, components and services are classes that are instantiated and managed by Angular's 
// Dependency Injection (DI) system. Each component or service instance is an instance of its respective
// class.

// Component Instance: When you declare and use a component in Angular, Angular manages the
// instantiation of the component class behind the scenes. Each usage of the component
//  (<app-my-component></app-my-component>) creates a new instance of that component class.

// Service Instance: Services provided at the root level (providedIn: 'root') are typically 
// singleton instances managed by Angular, ensuring there is only one instance throughout 
// the application.



// Automatic Instance Management:

// Angular handles the instantiation of components and services automatically when 
// they are needed. Developers do not explicitly use the new keyword to 
// create instances within their application code.
// The abstraction of instance creation through Dependency Injection is a powerful 
// feature of Angular that enhances productivity, maintainability, and testability
// of applications. By managing object creation and dependency resolution internally,
// Angular provides a robust framework for building scalable and maintainable web applications
















// <div>
//     <input type="text" [value]="title" (input)="data2($event)"/>
// </div>
// <div>
//       <div>
//         <p [textContent]="title"></p>
//       </div>
// </div>

// title: string = "Kunal"
// data2(event: Event) {
//   console.log("event", event)
//   const target = event.target as HTMLInputElement;
//   this.title = target.value;
// }
// ngAfterViewInit(): void {
//   const paragraph = document.querySelector('p');
//   console.log("paragraph", paragraph);
//   // console.log("textContent",paragraph?.textContent); // Logs the text content of the paragraph element
//   const inputElement = document.querySelector('input');
//   console.log("inputElement", inputElement);
//   // console.log(inputElement?.value); // Logs "Initial Title"
// }
