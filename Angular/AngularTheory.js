
{/* In Angular, "chunk files" refer to the smaller files that the Angular
build process generates during the compilation and bundling of an application.
These files are created as part of the process known as code splitting, which
 is used to improve the performance of the application by loading only the
necessary code for the current view.

Here are some key points about chunk files in Angular:

Code Splitting:

Angular uses code splitting to break up the application into smaller,
 more manageable pieces or chunks. This allows the application to load 
 faster because the browser can download these smaller files in parallel.
The primary bundle includes the core application logic and the initial
components required to render the first view.
Lazy Loading:

Lazy loading is a technique where specific modules or components are loaded
on demand rather than at the initial load. This is particularly useful for large applications.
When you configure a route to lazy load a module, Angular creates a separate 
chunk file for that module. This chunk is only loaded when the route is accessed.
Dynamic Imports:

Angular supports dynamic imports, which allow you to load JavaScript
 modules dynamically as needed.
When dynamic imports are used, the imported modules are placed into separate
 chunk files that are loaded at runtime.
Webpack:

Angular uses Webpack, a module bundler, to create these chunk files. Webpack
 analyzes the dependencies and splits the code into chunks automatically.
Each chunk is given a unique identifier, and Webpack ensures that the chunks
 are loaded in the correct order.
Naming Conventions:

The chunk files are usually named with a hash or an identifier to ensure that the
 correct versions are cached and used by the browser. For example, you might
  see files named like main.abcdef1234.js or 0.chunk.js.
Benefits:

Improved Performance: Smaller files mean quicker downloads, which can significantly
 improve the initial load time of the application.
Reduced Memory Usage: Only the necessary parts of the application are loaded into memory,
 reducing the overall memory footprint.
Better Caching: Since chunk files can be cached by the browser, subsequent visits
 to the application can be much faster. */}


// Purpose of Hashed or Identified Filenames
// Cache Busting:

// Problem: Web browsers cache files to improve load times on subsequent visits. However,
// if a file changes but the filename remains the same, the browser might serve the outdated
// cached version instead of fetching the updated file.
// Solution: By appending a unique hash to the filename, Angular ensures that any change in
// the file results in a new filename. For example, if main.js changes, it might
//  become main.abcdef1234.js. The browser then fetches the new file, bypassing the cache.
// Versioning:

// The hash serves as a version identifier. It reflects the content of the file, so any change
//  in the file content will produce a different hash.
// This allows for precise control over which version of a file is being served and cached.
// Efficient Caching:

// Since the hash only changes when the file content changes, files that haven't changed will
// retain the same name. This means the browser can continue to use the cached version of those
//  files, reducing the need to download files repeatedly.
// Types of Chunk Files and Their Naming
// Main Bundle:

// This is the primary chunk that includes the core application logic and necessary components
// to render the initial view.

// Example: main.abcdef1234.js
// Lazy-Loaded Chunks:

// These are chunks that are loaded only when a specific route or module is accessed.
// Example: 2.chunk.js or feature.abcdef1234.js
// The numeric or named identifier can help differentiate between various chunks.

// Vendor Chunks:
// These include third-party libraries and dependencies.
// Example: vendor.abcdef1234.js
// How Hashing Works

// Build Process:
// During the build process, Angular uses Webpack to analyze the dependency graph of the application.
// Webpack generates the final bundle files and computes a hash based on the file content.

// Hash Generation:
// A hash function (e.g., MD5, SHA-256) processes the file content and produces a fixed-size string,
// which is appended to the filename.
// The resulting filename might look like main.abcdef1234.js, where abcdef1234 is the hash.
// Example
// Consider an Angular application with the following simplified setup:


// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
//   }
// ];
// During the build process, Angular might generate the following files:

// main.abcdef1234.js: Core application logic.
// runtime.1234abcd.js: Webpack runtime logic.
// polyfills.5678efgh.js: Polyfills required for compatibility.
// home.9abcd123.js: Lazy-loaded chunk for the Home module.
// about.0efgh456.js: Lazy-loaded chunk for the About module.

// Benefits
// Improved Load Times:
// Only essential files are loaded initially. Additional files are loaded on demand,
// which speeds up the initial page load.
// Reduced Bandwidth Usage:

// By leveraging caching, repeated downloads of unchanged files are avoided.

// Better Performance:
// Smaller chunks can be downloaded and parsed more quickly, enhancing the user experience.

///////////////////////

// Using the safeHtml Pipe in Templates
// In Angular, when you want to render HTML content dynamically from a variable or an API response,
// you typically use the [innerHtml] binding.

//  For example:
// <div [innerHtml]="unsafeHtml | safeHtml"></div>
// Here's what's happening with this syntax:

// unsafeHtml: This is a variable or property on your component that contains HTML content
//  that could potentially be unsafe. This content might come from user input, an API,
// or any external source.

// safeHtml: safeHtml is a custom pipe (SafeHtmlPipe in this case) that you create to
// sanitize the unsafeHtml before rendering it in the DOM.

// [innerHtml] binding: Normally, when you bind data using Angular interpolation ({{ }})
// or property binding ([]), Angular escapes HTML characters to prevent XSS attacks.
// However, when you use [innerHtml]="...", Angular trusts that you have
// sanitized the content properly to avoid security risks.

// Pipe (| safeHtml): The | (pipe) character in Angular is used to apply
// pipes to transform data before displaying it. In this case, safeHtml
// is applied to unsafeHtml before it is assigned to [innerHtml].


// @Pipe decorator: You decorate the SafeHtmlPipe class with @Pipe,
//  providing metadata about the pipe:

// name: 'safeHtml': Specifies the name of the pipe that you'll use in templates (| safeHtml).
// pure: true (optional): Indicates that the pipe is stateless and its output depends only on its
// input. This is the default behavior for pipes unless overridden.
// Constructor: The constructor injects DomSanitizer into the SafeHtmlPipe class:


// transform(html: string | undefined): SafeHtml: Takes html (which is the potentially
// unsafe HTML content) as input and returns SafeHtml.
// this.sanitizer.bypassSecurityTrustHtml(html || ''): Uses DomSanitizer to bypass Angular's
// security and trust the html string. If html is undefined, it returns an empty string ('').

//code
// import { Pipe, PipeTransform } from "@angular/core";
// import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
// @Pipe({
//     name: 'safeHtml',
//     pure: true // By default, pipes are pure, so no need to specify 'standalone' here
// })
// export class SafeHtmlPipe implements PipeTransform {

//     constructor(private sanitizer: DomSanitizer) {}

//     transform(html: string | undefined): SafeHtml {
//         return this.sanitizer.bypassSecurityTrustHtml(html || '');
//     }
// }



///Zone.js

// Zone.js is a library that enables better management of asynchronous operations in JavaScript
// by providing a mechanism for tracking and intercepting asynchronous activities. It is especially
// useful in frameworks like Angular to simplify change detection and handle various asynchronous
// tasks such as HTTP requests, timers, event listeners, and more.

// Key Features of Zone.js
// Context Propagation:

// Zone.js allows you to capture and propagate the context in which asynchronous operations are
//  started, ensuring that the context is maintained across all asynchronous boundaries.

// Interception:
// It intercepts asynchronous operations and allows you to hook into the lifecycle of these
// operations (before they start, after they complete, etc.).


// Zone.js in Angular
// In Angular, Zone.js is used extensively to simplify change detection. When an asynchronous
// operation completes (like an HTTP request or a user event), Zone.js informs Angular to check
// for changes and update the view if necessary.

// Change Detection Mechanism:

// Zone.js Patch:

// Zone.js patches all asynchronous APIs, like setTimeout, Promise.then, and event listeners. This
// ensures that any asynchronous operation is tracked.
// NgZone Service:

// Angular’s NgZone service provides an Angular-specific zone that helps with running Angular
//  code and triggering change detection when needed.
// Automatic View Update:

// When an asynchronous operation completes, Zone.js triggers Angular’s change detection to check
// for any changes in the application state and update the DOM accordingly.


// Polyfills play a crucial role in web development by ensuring that modern web applications
// work across all browsers, including older ones that lack support for new features. In Angular,
// the polyfills.ts file is where these polyfills are managed, and it can be customized to include
// only the necessary polyfills for your application. This helps in maintaining compatibility and
// providing a consistent user experience across different environments.



// What is a micro - frontend ?
//  A micro - frontend is a development approach where a web application’s
//  front end is divided into smaller, self - contained modules.
//  Each module can be developed, tested, and deployed independently,
//  enabling teams to work on specific features or functions within the application.


// What is the difference between microservices and micro-frontend?
// Microservices are backend architectural components, whereas micro-frontends
//  are for the front end. Microservices divide the server-side into independent
//  services, while micro-frontends do the same for the client-side,
//  breaking it into modular components.


// In Angular, HTTP and HttpClient are both used for making HTTP requests to a server,
// but there are some key differences between the two:

// HTTP: HTTP was the original way to make HTTP requests in Angular.
// It was part of the @angular/http module. However, starting from
// Angular 4.3, the Angular team introduced a new module called
// HttpClientModule, which is based on HttpClient.

// HttpClient: HttpClient is the newer and recommended way to make HTTP
// requests in Angular. It is part of the @angular/common/http module.
// HttpClient is more modern, streamlined, and easier to use compared
// to the older HTTP module.

// Observables: Both HTTP and HttpClient return Observables, which allow
// you to work with asynchronous data streams. However, HttpClient's Observables
// are more advanced and have additional features compared to the ones returned by HTTP.

// Type safety: HttpClient is more type-safe compared to HTTP. HttpClient's methods are generic,
// which means you can specify the type of the response data you expect to receive. This can help
// catch errors at compile time rather than runtime.

// Interceptors: HttpClient comes with a feature called interceptors, which allow you
// to intercept HTTP requests and responses. This can be useful for tasks like adding
// headers to requests, handling errors, or logging.

// Testing: HttpClient is easier to mock and test compared to HTTP. This is because
// HttpClient uses a design that allows for easier testing with tools like Jasmine and Karma.
// In summary, HttpClient is the recommended way to make HTTP requests in Angular due to its
// modern design, better type safety, support for interceptors, and improved testability compared
// to the older HTTP module. If you are working on a new Angular project or updating an existing one,
// it is recommended to use HttpClient for making HTTP requests.

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API endpoint

//   constructor(private http: HttpClient) { }

//   getPosts(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }
// }
// Service (DataService):
// Uses HttpClient to define methods (getPosts, getPostById, createPost, updatePost, deletePost) 
// to interact with the API (this.http.get, this.http.post, this.http.put, this.http.delete).
// Each method returns an Observable of the expected response type (any[], any).

// Observable: Represents a stream of data that allows us to subscribe to receive asynchronous data.
// <any[]>: Specifies the type of data that the observable will emit, which in this case is an array of any type (any).
// HTTP Request (this.http.get<any[]>(this.apiUrl)) 

// Explanation:
// this.http: Refers to an instance of Angular's HttpClient, injected into the DataService class via dependency injection.
// .get<any[]>(this.apiUrl): Invokes the get method on HttpClient to send an HTTP GET request.
// this.apiUrl: Refers to a string variable containing the URL of the API endpoint from which we want to fetch data 
// (e.g., 'https://jsonplaceholder.typicode.com/posts').

// Observable Emission:
// When the HTTP GET request is executed (this.http.get<any[]>(this.apiUrl)), 
// it returns an Observable that will emit a response.

// The Observable<any[]> returned by getPosts() allows components 
// or other services to subscribe to it. When subscribed, they will 
// receive the data emitted by the observable when the HTTP 
// request completes successfully.



// import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';
// @Component({
//   selector: 'app-post-list',
//   template: `
//     <ul>
//       <li *ngFor="let post of posts">
//         {{ post.title }}
//       </li>
//     </ul>
//   `
// })
// export class PostListComponent implements OnInit {
//   posts: any[];

//   constructor(private dataService: DataService) { }

//   ngOnInit() {
//     this.dataService.getPosts().subscribe(posts => {
//       this.posts = posts;
//     });
//   }
// }

// Component (PostListComponent):
// Uses DataService in its constructor to fetch data (this.dataService.getPosts()).
// Subscribes to the Observable returned by getPosts to get the data and assign it to this.posts.
// Uses Angular's *ngFor directive to iterate over posts and display them in the template.

// Ajax (Asynchronous JavaScript and XML) is a set of technologies used to create 
// interactive and dynamic web applications without the need for full page reloads. 
// This makes web pages more responsive and improves the user experience. 
// Here's a brief overview of the components that make up Ajax:

// XHTML and CSS: Used for structuring and styling the content displayed on the web page.
// Document Object Model (DOM): Allows dynamic interaction and updating of the web page content.
// XMLHttpRequest: An object that enables asynchronous data exchange with the web server, 
// allowing parts of the page to update without a full reload.
// XML, HTML, and XSLT: Used for data interchange and manipulation.
// JavaScript: Binds everything together by handling data requests 
// and updating the web page content dynamically.
// Ajax allows users to interact with a web page smoothly, with 
// only portions of the page being reloaded or updated as 
// needed, rather than the entire page.



// RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using 
// observables, which makes it easier to compose asynchronous or callback-based code. 
// Here’s a brief overview of its key concepts and components:

// Observables: These are data producers that emit data over time. Observables can emit 
// zero or more values and then complete, or they can emit an error. They can be thought
//  of as streams of data.

// Observers: These are consumers that subscribe to observables to receive emitted data, 
// handle errors, or know when the observable completes.

// Operators: These are functions that enable sophisticated manipulation of observables. 
// Operators can be used to transform, filter, combine, and perform many other operations 
// on the data emitted by observables.

// Subjects: These are a special type of observables that allow multicasting to multiple 
// observers. They act as both observable and observer, meaning they can emit and receive data.

// Schedulers: These are centralized dispatchers to control concurrency, allowing you to 
// manage when and how execution happens (e.g., synchronously or asynchronously).




// HTTP (Hypertext Transfer Protocol) is the protocol used to make requests and receive 
// responses between clients (such as web browsers or mobile apps) and servers on the World Wide Web.
// It defines how messages are formatted and transmitted, and how web 
// servers and browsers should respond to various commands. 
// Key points about HTTP include:

// Request-Response Model: HTTP operates on a request-response model where a 
// client (usually a web browser) sends a request to a server, and the server 
// responds with the requested resource (like an HTML page) or an error message.

// Methods: Common HTTP methods include GET (retrieve data), POST (submit data), 
// PUT (update data), DELETE (remove data), and others.
// Stateless Protocol: Each HTTP request from a client to a server is independent, 
// and the server does not retain any state between requests.


// HTTP API
// An HTTP API (Application Programming Interface) uses HTTP requests to allow 
// communication between a client and a server, enabling the creation of web 
// services. Here’s a more detailed look:

// Endpoints: APIs expose endpoints, which are specific URLs that accept HTTP 
// requests. Each endpoint corresponds to a specific function or resource.
// Request Methods: APIs use HTTP methods to perform different operations. 

// For example:

// GET /users: Retrieve a list of users.
// POST /users: Create a new user.
// PUT /users/1: Update the user with ID 1.
// DELETE /users/1: Delete the user with ID 1.

// Request and Response: APIs handle requests and return responses usually in formats 
// like JSON or XML, which are easily processed by applications.

// Observable API
// An Observable API uses observables to manage and handle asynchronous data streams. 
// This concept is central to reactive programming and libraries like RxJS. Key aspects include:

// Observables: Represent a collection of future values or events. Observables can emit 
// values over time and allow you to react to these emissions.
// Observers: Objects that receive notifications from an observable. They handle three 
// types of notifications: next (new value), error (an error occurred), 
// and complete (the observable has finished emitting values).

// Operators: Functions that enable manipulation of observables, 
// such as filtering, mapping, and combining streams of data.



// providedIn:root is only declared in the service @Injectable doing so makes the service a 
// singleton service (one instance for all components). if we need to instantiate a new 
// instance of that service to a certain component, you can r egister that service to the 
// component's provider's array and we can esnure it will take new instance by using @self() 
// when injecting it in the component's constructor. doing so will create a new instance to 
// this component and its child components

// Angular injector system is hierarchical

// Angular injector system is hierarchical, meaning it maintains a parent-child relationship between 
// injectors based on the component hierarchy of an application.

// Key Points about Hierarchical Injectors
// Injector Tree: When an Angular application is initialized, it creates a tree of 
// injectors that mirrors the component hierarchy. Each component has its own injector, 
// which can access services provided at its level or any level above it in the hierarchy.

// Parent-Child Relationship: In the injector hierarchy, each component's injector 
// has a parent injector. The root injector is at the top of this hierarchy, serving as 
// the global injector for the entire application. When a service is requested by a 
// component, Angular searches for it first in the component's injector. If not found, 
// it looks in the parent injector, and so on up the hierarchy until it reaches the root injector.

// Local Scope and Overrides: Child injectors can override services provided by their 
// parent injectors. This allows components lower in the hierarchy to customize or 
// replace services provided higher up without affecting other parts of the application. 
// This behavior is useful for providing different implementations of 
// services based on the context of components.

// Performance and Efficiency: The hierarchical nature of injectors 
// enhances performance by limiting the scope of service resolution. 
// Angular can quickly locate and provide the required service without 
// searching the entire application's injector tree.

// App Component (Root)
// └─── Parent Component
//     └─── Child Component
//         └─── Grandchild Component

//         Each component (Parent, Child, Grandchild) has its own injector.
//         If Grandchild Component requests a service, Angular first checks the injector 
//         of Grandchild Component. If not found, it checks the injector of Child Component, 
//         then Parent Component, and finally the App Component (root injector).
// Child components can have their own instances 
// of services or override parent-provided services, 
// ensuring encapsulation and isolation. 


// In Angular, services are typically singleton instances by default when provided at the module level or 
// using the @Injectable({ providedIn: 'root' }) decorator. This means that there is only one instance of 
// the service across the entire application, shared by all components that inject it.

// If you have two components that need different instances of the same service (not shared), you cannot achieve 
// this with the default Angular service provider mechanisms because Angular's dependency injection system is 
// designed to provide singleton instances by default for services provided at the module level or using providedIn: 'root'.

// Managing Different Instances of a Service
// To manage different instances of a service for different components, you have a few options:

// Using Angular Dependency Injection with Custom Providers:
// Using Angular Hierarchical Injectors (Experimental):





// Q: How do providedIn/providers settings affect tree-shaking?

// An Injectable configured with providedIn will be tree-shaken if it 
// is not injected by any (eagerly or lazy loaded) class in its assigned injector scope.
// However, an Injectable assigned to a providers array in some module/component will never
// be tree-shaken, even if it is not injected anywhere.

// To make tree-shaking most effective, you should aim to always use providedIn over providers array.


// Q: Why would I use providedIn: 'root' if I think using providers array in AppModule looks cleaner?
// The main difference is that between the two methods, providedIn supports tree-shaking, and providers array does not.

// 'root': Provides the service globally across the application. Angular will inject the 
// service at the root level injector, making it a singleton shared by all components 
// and services that request it.

// A specific module (e.g., AppModule): Provides the service at the module level. 
// The service will be available only within the scope of that module and its components.

// Reduced Global State: Avoiding providedIn: 'root' for all services 
// can reduce the riskof global state pollution and unintended side effects 
// caused by shared services across the entire application.

// Clear Contract Definition: Each module that provides services defines a 
// clear contract of what dependencies are required within its scope. 
// This makes it easier to understand and manage dependencies between modules and components.




// Tree shaking is a technique used by modern JavaScript bundlers (like Webpack, Rollup, and Vite) 
// to eliminate dead code from your final bundle. The term "tree shaking" originates from the idea 
// of shaking a tree so that dead leaves fall off, leaving only the live, healthy leaves.
// When it detects that some code is not being used, that code is removed from the final 
// compilation of the app (or compilation of a given lazy-loaded module).


//ProvidedIn root, any & platform in Angular
@Injectable({
  providedIn: 'any'
})
export class MyService {
  // Service logic here
}
// Each module that imports MyService gets its own independent instance.
// Different parts of the application can have different instances
// of the service, isolated from each other.

// Useful when you want each module to have its own state or 
// configuration of the service without affecting other modules.



@Injectable({
  providedIn: 'platform'
})
export class MyPlatformService {
  // Service logic here
}
// Angular creates a separate instance of MyPlatformService for each platform 
// (e.g., each browser tab or each instance of a server-side rendering).
// The service instance is shared among all components and services that 
// inject MyPlatformService within the same platform context.


// Types of API

// RESTful APIs
// SOAP APIs: SOAP (Simple Object Access Protocol)
// GraphQL APIs
// RPC APIs: RPC (Remote Procedure Call) 
// WebSocket APIs:
// WebSocket is a protocol providing full-duplex 
// communication channels over a single TCP connection.



// XML (Extensible Markup Language) is a markup language that defines a set of 
// rules for encoding documents in a format that is both human-readable and 
// machine-readable. It was designed to store and transport data, 
// especially over the internet. 



// Key Concepts of Dependency Injection (DI)
// Dependency: A dependency is an object that another object depends 
// on to perform its function. In the context of DI, dependencies typically 
// refer to services or other objects that a component needs to perform its tasks.

// Injection: Injection refers to the process of providing dependencies to a 
// component when it is created, typically through its constructor. Instead 
// of the component creating instances of its dependencies internally, they 
// are "injected" into the component from an external source 
// (usually the framework's injector).

// Inversion of Control (IoC): DI follows the principle of Inversion of Control, 
// where the control of creating and managing dependencies is inverted from the 
// component itself to an external entity (the DI container or injector). 
// This promotes modular, testable, and maintainable code by reducing 
// direct dependencies and enabling easier mocking and testing.



// (providers array in @Component) creates a new instance of the service for each instance 
// of the component. This allows for isolation and ensures that each component 
// has its own instance of the service.

// @Component({
//   selector: 'app-example',
//   templateUrl: './example.component.html',
//   providers: [DataService]
// })
// export class ExampleComponent { }

// Once a service or provider is configured to be provided (registered) 
// using the providers array, you can inject it into a component or 
// another service using constructor injection. Angular's DI system 
// handles the instantiation of these dependencies and injects them 
// automatically when the component or service is instantiated.





// Relationship Between CI and Compilation
// Compilation is a part of the CI process. During CI, after the code is fetched 
// from the repository, it is compiled to ensure that the changes do not break the build.
// CI goes beyond just compiling code by adding steps for testing, verification, and deployment.
// While compilation ensures that the code can be transformed into an executable form, 
// CI ensures that the compiled code is functional, meets quality standards, and can be safely deployed.


// title: string = "Kunal"

// data2(event: Event) {
//    console.log("event", event)
//    const target = event.target as HTMLInputElement;
//    this.title = target.value;
//  }
//  ngAfterViewInit(): void {
//    const paragraph = document.querySelector('p');
//    console.log("paragraph", paragraph);
//    // console.log("textContent",paragraph?.textContent); // Logs the text content of the //paragraph element
//    const inputElement = document.querySelector('input');
//    console.log("inputElement", inputElement);
//    // console.log(inputElement?.value); // Logs "Initial Title"
//  }


// <div>
//    <input type="text" [value]="title" (input)="data2($event)"/>
// </div>
// <div>
//      <div>
//        <p [textContent]="title"></p>
//      </div>
     
// </div>
//  {{title}}






/////


// The aot --false option is related to Angular development, specifically Angular CLI (Command Line Interface). Angular
// offers two primary modes of compilation: Just-in-Time (JIT) and Ahead-of-Time (AOT). Here's a brief explanation:

// Just-in-Time (JIT) Compilation
// JIT Compilation compiles your application in the browser at runtime.
// It is typically used during development because it has faster build times.
// Ahead-of-Time (AOT) Compilation
// AOT Compilation compiles your application during the build process before it gets to the browser.
// It provides better performance in production because it reduces the amount of work the browser needs to do.
// It helps with faster rendering, smaller Angular framework download size, and early detection of template errors.
// aot --false
// When you use the Angular CLI, you can specify whether you want to use AOT compilation. The --aot flag controls this:

// --aot (or --aot=true): Enables AOT compilation.
// --aot=false: Disables AOT compilation and uses JIT instead.
// So, the command aot --false (usually written as ng build --aot=false or ng serve --aot=false) tells the Angular CLI
// to build the application without AOT, using JIT compilation. This is typically used during development for the
// following reasons:

// Faster Build Times: JIT compilation is faster, which can speed up the development process.
// Easier Debugging: Source maps and debugging information can be more straightforward with JIT.
// However, for production builds, it is generally recommended to use AOT (ng build --prod which includes --aot=true by
// default) for the performance benefits it provides

// export NODE_OPTIONS=--max-old-space-size=4096
// Out of Memory Errors: If you receive errors indicating that Node.js has run out of memory during compilation.
// Slow Performance: If compilation is taking an unusually long time, increasing memory might help improve performance.