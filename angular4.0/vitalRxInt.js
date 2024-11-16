// ### HTML Tag vs. HTML Element

// **HTML Tag**:  
// An HTML tag is a keyword enclosed in angle brackets (`< >`) that defines the beginning 
// and sometimes the end of an HTML element. Tags are used to mark the start and end of an 
// element, often paired (e.g., `<div>` and `</div>`). Tags can be either **start tags** 
// (e.g., `<h1>`) or **self-closing tags** (e.g., `<img />`).

// Example:
// ```html
// <p>This is a paragraph.</p> <!-- <p> is the tag -->
// ```

// **HTML Element**:  
// An HTML element consists of the tag and the content inside the tag. It includes everything 
// from the opening tag to the closing tag, along with any content between them. The element 
// is the complete structure that can contain attributes, text, other nested elements, etc.

// Example:
// ```html
// <p>This is a paragraph.</p>  <!-- The whole line is the <p> element -->
// ```

// ---

// ### How JavaScript Works in Angular

// In Angular, JavaScript works as the underlying programming language for the framework, 
// but Angular itself is written in **TypeScript**, a superset of JavaScript. TypeScript 
// adds static typing and other features like decorators, which make Angular development easier.

// **How JavaScript (TypeScript) works in Angular:**
// 1. **Component Class**: JavaScript (or TypeScript) is used to write Angular components. 
// These components control the behavior of views (HTML templates) and are implemented as classes.
   
// 2. **Template Binding**: Angular components use **data binding** (e.g., interpolation, 
//   event binding) to interact with the DOM in the template. This allows you to display 
//   data dynamically and handle user events.

// 3. **Services and Dependency Injection**: Angular uses services written in TypeScript/
// JavaScript to handle logic that can be reused across different parts of the application. 
// These services are often injected into components using Angular’s **dependency injection** mechanism.

// ---

// ### Hooks and Services in Angular

// **Hooks**:  
// In Angular, **lifecycle hooks** are special methods that are called during the lifecycle 
// of a component or directive. These hooks allow developers to add custom behavior at 
// specific points in the lifecycle.

// Common Angular Lifecycle Hooks:
// - `ngOnInit()`: Called once the component has initialized.
// - `ngOnChanges()`: Called whenever there are changes to component's input properties.
// - `ngOnDestroy()`: Called just before the component is destroyed.
// - `ngDoCheck()`: Called during every change detection cycle, useful for custom change detection.

// **Services**:
// In Angular, **services** are used to handle business logic and data fetching. They 
// are typically created to manage data that is shared between components. A service 
// is usually injected into components using Angular's **dependency injection system**.

// Example:
// ```typescript
// @Injectable({
//   providedIn: 'root'  // makes the service available globally
// })
// export class UserService {
//   constructor(private http: HttpClient) {}
  
//   getUser(id: number) {
//     return this.http.get(`/api/users/${id}`);
//   }
// }
// ```

// ---

// ### Method Overloading and Method Overriding

// **Method Overloading**:  
// Method overloading refers to the ability to create multiple methods with the same name but 
// different parameter types or numbers of parameters. **JavaScript** doesn't support method 
// overloading in the traditional sense, but you can achieve similar behavior using optional 
// parameters or checking parameter types.

// Example:
// ```typescript
// class Example {
//   sum(a: number, b: number): number;
//   sum(a: string, b: string): string;
//   sum(a: any, b: any): any {
//     return a + b;
//   }
// }
// ```

// **Method Overriding**:  
// Method overriding occurs when a subclass provides its own implementation of a method that is already 
// defined in its superclass. In JavaScript, method overriding is common in **class-based inheritance**.

// Example:
// ```typescript
// class Animal {
//   speak() {
//     console.log("Animal speaks");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Dog barks");
//   }
// }

// const dog = new Dog();
// dog.speak(); // Output: Dog barks
// ```

// ---

// ### `super` in Class

// In object-oriented programming, `super` is used to call methods from the parent class. 
// It's also used to refer to the parent class constructor.

// Example:
// ```typescript
// class Animal {
//   constructor(public name: string) {}

//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name: string) {
//     super(name); // Calling the parent class constructor
//   }

//   speak() {
//     super.speak();  // Calling the parent class method
//     console.log(`${this.name} barks.`);
//   }
// }

// const dog = new Dog("Rex");
// dog.speak();
// ```
// Output:
// ```
// Rex makes a sound.
// Rex barks.
// ```

// ---

// ### CSS Box Model

// The **CSS Box Model** defines the structure and spacing of HTML elements. 
// It consists of the following parts:

// 1. **Content**: The actual content of the box, like text or images.
// 2. **Padding**: The space between the content and the border, inside the box.
// 3. **Border**: Surrounds the padding (if defined), and the border itself has thickness and color.
// 4. **Margin**: The space outside the border, separating the element from others.

// Example:
// ```css
// div {
//   width: 300px;
//   padding: 20px;
//   border: 5px solid black;
//   margin: 10px;
// }
// ```
// This makes the total width of the box: `300px (content) + 20px (left padding) + 
// 20px (right padding) + 5px (border) + 5px (border) = 350px` (without considering the margin).

// ---

// ### Angular Change Detection Cycle

// Angular uses a **change detection cycle** to update the DOM when data changes. 
// It checks for changes in the application and updates the UI accordingly. The cycle goes through various phases:
// 1. **Initial Change Detection**: Angular first checks if there’s any change in the component or its inputs.
// 2. **Check on Event**: When user actions (e.g., clicks, keystrokes) occur, Angular triggers change detection.
// 3. **Zone.js**: Angular leverages **Zone.js** to track asynchronous operations 
// and ensure the UI is updated when these operations are completed.
// 4. **Mark for Check**: Components that are marked to be checked will undergo change detection in subsequent cycles.

// ---

// ### AngularJS vs. Angular (2+)

// **AngularJS**:
// - AngularJS is the original version of Angular (also called Angular 1.x). It is based on 
// JavaScript and uses two-way data binding and directives for dynamic content rendering.
// - **Not component-based**; uses controllers and directives.
// - Tied to the browser’s DOM for templating and rendering.

// **Angular (2+)**:
// - Angular (from version 2 onwards) is built with **TypeScript**, uses components,
// and is a complete rewrite of AngularJS.
// - Uses **RxJS** for handling asynchronous events.
// - Built with **modular architecture**, **dependency injection**, **routing**, **form handling**, and **services**.

// ---

// ### Which Machine Converts JS to TS?

// **TypeScript** is a statically typed superset of JavaScript that gets compiled to
//  JavaScript. The **TypeScript Compiler** (TSC) is responsible for converting 
//  TypeScript code (`.ts` files) into JavaScript (`.js` files).

// Command to compile TypeScript:
// ```bash
// tsc filename.ts
// ```
// This will generate a `filename.js` file.

// ---

// ### Pure vs Impure Pipes in Angular

// **Pure Pipes**:  
// A pure pipe only depends on its input and recalculates the output only when the input 
// values change (based on reference check). These pipes are more efficient because Angular 
// can skip recalculating the pipe’s value if the inputs haven’t changed.

// Example:
// ```typescript
// @Pipe({
//   name: 'purePipe',
//   pure: true  // This is the default
// })
// export class PurePipe implements PipeTransform {
//   transform(value: string): string {
//     return value.toUpperCase();
//   }
// }
// ```

// **Impure Pipes**:  
// An impure pipe recalculates its value every time change detection runs, even if 
// the inputs haven’t changed. This can cause performance issues if the pipe is used frequently.

// Example:
// ```typescript
// @Pipe({
//   name: 'impurePipe',
//   pure: false
// })
// export class ImpurePipe implements PipeTransform {
//   transform(value: string): string {
//     return value.toUpperCase();
//   }
// }
// ```

// ---

// These topics represent a wide range of Angular, JavaScript, and web development concepts, 
// from basic language features to advanced Angular-specific topics. Let me know if you need further clarification on any of these!

// Compilation Process: AOT and JIT
// Angular applications are built using a combination of HTML templates, TypeScript code, and metadata. 
// This needs to be converted into browser-executable JavaScript. Angular provides two compilation 
// strategies for this: Ahead-of-Time (AOT) and Just-in-Time (JIT).

// Ahead-of-Time (AOT) Compilation
// Definition: AOT compiles Angular applications during the build process (before the browser loads the app).
// How It Works:
// Angular's AOT compiler processes the HTML templates and TypeScript files.
// Generates optimized JavaScript files and Angular factories (interpreted by the framework at runtime).

// Advantages:

// Faster rendering: Templates are precompiled, reducing browser workload.
// Smaller bundles: Unnecessary metadata is stripped out.
// Early error detection: Issues in templates or TypeScript are caught during build time.
// Improved security: Template expressions are converted into code, preventing injection attacks.

// Command:ng build --prod
// Just-in-Time (JIT) Compilation
// Definition: JIT compiles Angular applications in the browser during runtime.
// How It Works:
// The browser downloads the app’s TypeScript files and templates.
// Angular compiles the templates and TypeScript code into JavaScript while the app runs.

// Advantages:

// Quick development: No need for precompilation during development.
// Flexibility: Allows for rapid prototyping and debugging.
// Disadvantages:
// Slower initial rendering: Compilation happens in the browser.
// Larger bundle size: Includes the Angular compiler.
// Command:
// ng serve

// 3. Angular Rendering Engine
// Angular’s rendering engine converts application logic and templates into efficient DOM updates. 
// Angular has two major rendering engines:

// View Engine (Legacy)
// Used in older versions of Angular.
// Processes templates and generates DOM manipulation code.
// Supports AOT and JIT compilation but has limited optimizations.
// Ivy (Modern Rendering Engine)
// Introduced in Angular 9 as the default rendering engine.
// Key Features:
// Smaller bundle sizes: Tree-shaking removes unused code.
// Faster compilation: Ivy generates more efficient code.
// Improved debugging: Templates map directly to the component class.
// Incremental DOM: Updates only affected parts of the DOM, improving performance.
// Dynamic loading: Supports features like lazy-loaded components.
// Ivy Rendering Workflow:

// The component’s template is processed into JavaScript instructions during compilation.
// These instructions are executed in the browser to update the DOM.
// Incremental DOM ensures only necessary updates are applied to the UI.
// Example of Ivy Instruction (Simplified):


// ɵɵelementStart(0, 'h1');
// ɵɵtext(1, 'Hello, Angular!');
// ɵɵelementEnd();