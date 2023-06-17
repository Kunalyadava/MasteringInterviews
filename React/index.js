
//https://codesandbox.io/s/sad-worker-yz09z2


// 1. Why and what is react?

// The main purpose of React is to be fast, scalable, and simple.It is a single page
// Application, declarative UI, fast performance ,Easy to maintain
// It works only on user interfaces in the application. ReactJS is a JavaScript component
//   library for creating user interfaces for websites and applications.
//    Developed by Jordan Walke in 2011, it sets a new precedent for developing 
//    fast and dynamic websites using JavaScript.


///React users frequently choose functional
// components over class components because
// they are lighter, easier to read and understand,
// and perform better.
// Additionally, functional components can take
// advantage of React hooks, which provide
// powerful state and lifecycle management
// capabilities without the need for class
// components

// In the render() method, we can read props and state and return
//  our JSX code to the root component of our app. In the render()
//   method, we cannot change the state



// 2. Able to use CRA and run the application.

// create-react-app (CRA)



// 5. Conditional rendering.

// In React, conditional rendering is the process of displaying different 
// content in dom based on certain conditions or states. It allows us to create 
// dynamic user interfaces that can adapt to changes in data and user interactions.

// In this process, we can use conditional statements to
//  decide what content should be rendered.

// In React, there are different ways to conditionally render content 
// based on the state of a component or other conditions. 
//  Two common ways are using the ternary operator and the && operator.
//  https://i.ytimg.com/vi/4d0KO_E7ElU/maxresdefault.jpg

// 6. handling basic onClick events.

// 7. Lists in React

// Lists are used to display data in an ordered format and mainly used to display menus on websites.
//  In React, Lists can be created in a similar way as we create lists in JavaScript. 
//  Let us see how we transform Lists in regular JavaScript.

// The map() function is used for traversing the lists. In the below example,
//  the map() function takes an array of numbers and multiply their values with 5.
//   We assign the new array returned by map() to the variable multiplyNums and log it.

// Example
// var numbers = [1, 2, 3, 4, 5];   
// const multiplyNums = numbers.map((number)=>{   
//     return (number * 5);   
// });   
// console.log(multiplyNums);   
// output
//  [5, 10, 15, 20, 25]

// 8. Difference between global CSS and module.css

// CSS modules are:
// CSS files in which all class names and animation names are scoped locally by default.

// import styles from "./styles.css";
// element.innerHTML = 
//   `<h1 class="${styles.title}">
//      An example heading
//    </h1>`;

// what is Provider ?

// provider main work is to connect to react js to redux  and we install on react-redux library.

// what is action ?

//   action is nothing but plane javaScript function.
//   get data from react js.
//   send data to reducer after process.
//   must have type key in return statement.
//   much sync type with reducer.
// what is reducer ?

//   Reducer handle data for store
//   Update data in store
//   Rules:- 1) Need Root-Reducer.
//           2)Reducer must return same value.
//           3)The reducer must have some initial values.

// switch statement in reducer ?
//   this is use for reduce the multi use of if-else in code
// it's look mess so we prefer the switch case there then the if-else

// what is useSelector and types of uses ?

//   useSelector is react-redux hook
//   and the main work for Selector is to fetch the data from redux to give to react




//what is virtual dom in react?
//The virtual dom is an abstrat representation of actual dom, and it is 
//used to increase the performance of updates and rendering of UI
//when a component state changes . React updates the virtual dom, which then calculates
//the difference between the current and previous version of Virtual DOM,
//React then updates only the parts of the actual DOM that have changed instead of 
//re-rendering the the entire tree,resulting in improved performance


// The Shadow DOM is a browser technology designed primarily for
//  scoping variables and CSS in web components.



//React is considered as library or framework?

// React is called as a library because of its behavior of easy to fit into 
// any js environment and doesn't bound user to use things React way,
//It provides a set of tools and functanalities specially for building 
//user Interfaces , but leaves the decision on how to manage state ,structure 
//the overall application , and handle data to the developer .


// 3. Basic understanding of JSX.

// JSX (JavaScript Syntax Extension or JavaScript XML) is an extension to JavaScript.
//  It provides an easier way to create UI components in React.
// Here’s an example of its syntax:

// const element = <h1>Hello, World!</h1>;

//The above code gets transformed in following javascript

//const element=React.createElement("h1",null,"Hello,Word!");

// With JSX, we can write code that looks very similar to HTML or XML, 
// but we have the power of mixing JavaScript
// methods and variables into our code. 
 //Babel(transpiler) takes our jsx code and turns into non jsx code or pure js vanila js  
// code that the UI Framework (React, in this case) can understand.



//React VS Angular

///React is called as a library because of its behavior of easy to fit into 
// any js environment and doesn't bound user to use things React way,
//  while one the other hand Angular is complete MVC (Model View Controller)
//   architecture, and restrict user to follow its pattern of framework.


//In React, data test IDs are often used as a way to target and select
// specific elements for testing purposes. They are attributes added to
// HTML elements to uniquely identify them in test cases.


//Explain Strict Mode in React.

//Identifying components with unsafe lifecycle methods: 
// Certain lifecycle methods are unsafe to use in asynchronous react 
// applications. With the use of third-party libraries, it becomes difficult 
// to ensure that certain lifecycle methods are not used.
// StrictMode helps in providing us with a warning if any of 
// the class components use an unsafe lifecycle method.

//day3


//What are Props in react js?
// Props mean properties, which is a way of passing data from parent to child. We can say
// that props are just a communication channel between components. It is always moving
// from parent to child component.

// 4. Difference between State and props.


// Props are used to pass data from one component to another as argument

//props are immutable 
//It can be accessed by the child component omly

// The state is a local data storage that is local to the component only 
// and cannot be passed to other components. 
//state is mutable and can be asynnchronous
//It holds the information about the components
//state cannot be accesssed by the child components
// The this.setState property or hooks is used to update the state values in the component.


//custom hooks
//Hooks are reusable functions.
// When we have component logic that needs to be used by 
// multiple components, we can extract that logic to a custom Hook.
// Custom Hooks start with "use". Example: useFetch.


//React hooks

//Hooks allow function components to have access to state and other React features.
// Because of this, class components are generally no longer needed.

//Hooks allow us to "hook" into React features such as state and lifecycle methods.

//uaeState    //useState Hook is used to keep track of the application state it allows
//us to manage state in our functional components .It is a way to store data that changes over
//time such as user input or the response from a network request


//what are the different ways a component can be re-rendered in react?
//In React a component can be rerendered in the following ways;

//1 State changes :When the components state changes the component will rerender
//This can happen when setMethod is called ,or when a state
// update is triggered by a custom hook

//2 props changes :when the components props changes the component will re render . This 
//can happen when the parrent component passes a new props to the child component.

//3 context changes: when the context value changes ,components that consume the context will re render


//lazy loading?
// clean up function in useEffect?
//pure components
//react fragment 

//stateless and stateful components
//In react ,components can be either class components or functional 
//components

//stateless components also known as functional componnts that receives props and 
//render it to the UI but do not maintain their own state.They are simple and easy 
//to write and are often used  for presaentational purposes

//on the stateful components are components that maintain their own state
//and can update it as the user interacts with the UI
//They are often used for complex and dynamic UI


//what is memory leak in react?
//A memory leak in react occures when a functional component that is
//no longer being used to continues to take up memory resources.
//this can lead to slow performances or crashes if the memory usage 
//continuous to increase over time


//How does rendering work in react (describe the lifecycle of functional component )

//A react component undergoes four phases in its life cycle //initialiazation //mounting
//updating and unmounting //

////Initialization: During this phase, React component will prepare by setting up the default
//props and initial state for the upcoming tough journey.

//1 mounting phase : when a new component is created and insearted into the dom for the
////first time or in other words when the life of a component begins .it have two phase 
// Render phase (function  & return JDX) //commit phase (React updated dom & use effeact)
  //API request is made


// Updating: In this phase, a component will be updated when there is a change in the
// state or props of a component. This phase will have lifecycle methods
// like componentWillUpdate, shouldComponentUpdate, render, and componentDidUpdate.

// Unmounting: In this last phase of the component lifecycle, the component will be
// removed from the DOM or will be unmounted from the browser DOM. This phase will
// have the lifecycle method named componentWillUnmount.


// setState() that accepts a function rather than an object. That function
//  will receive the previous state as the first argument, and the props at 
//  the time the update is applied as the second argument:


//Explain the term reconciliation
// When a component's state or props change then rest will compare the rendered element
// with previously rendered DOM and will update the actual DOM if it is needed. This
// process is known as reconciliation.


//https://www.geeksforgeeks.org/reactajs-reconciliation/


//useEffect=useEffect is a tool that lets us interact with the outside world but not affect
 //the rendering or performance of the component that it's in.

//  Side effects are not predictable because they are actions which are performed with the "outside world."
//  We perform a side effect when we need to reach outside of our React components to do something.
//   Performing a side effect, however, will not give us a predictable result.
//  Think about if we were to request data (like blog posts) from a server that has failed and
//   instead of our post data, gives us a 500 status code response.
//  Virtually all applications rely on side effects to work
//   in one way or another, aside from the simplest applications.
//  Common side effects include:

// Making a request to an API for data from a backend server
// To interact with browser APIs (that is, to use document or window directly)
// Using unpredictable timing functions like setTimeout or setInterval

// The correct way to perform the side effect in our User component is as follows:
// We import useEffect from "react"
// We call it above the returned JSX in our component
// We pass it two arguments: a function and an dependency array
// useEffect is always called once after the component is mounted.
// useEffect without the dependency array will always be called again when any state is updated inside the component.
// useEffect with an empty dependency array will only be called once after the component is mounted.
// useEffect with one or few dependencies will only be called again depending on when their dependencies update.
// Multiple useEffects can be declared inside a component.
// To handle actions before the component will unmount, return a function at the end of the useEffect function.

//https://www.freecodecamp.org/news/react-useeffect-absolute-beginners/
// https://medium.com/@athletecoder/how-to-useeffect-in-react-97c4e6dc0a88

//stale closure = even when state/props are updated and component re-renders, 
//some callbacks will still be referencing old variables. Stale closures 
// capture variables that have outdated values  



//useRef and useState both are used to store some value
//when we want our component to "remember"
//about something but dont want to re render
//when it changes , we can use the hook useRef
//we can access dom elememt directly
//it  returns object with keys and value {current:0}
//to store some interval ids setInterval etc


//useState will reRender its component
//it is for values which keeps changing
//it will affect the ui part

//https://codesandbox.io/s/serverless-tdd-9r8fj7
//https://codesandbox.io/s/day8usestate-phase2-hmyyr4
//https://codesandbox.io/s/day8-last-rgsv74

//props drilling:if we want to pass a data from component A to D
// then we have pass it through each component between themm

//ContextAPI provides a way to pass data through the component tree without having to pass
//props down manually at every level. For example, authenticated user, locale preference,
// UI theme need to be accessed in the application by many components. it worksd on C_P_C //create
// Eg: const { Provider, Consumer } = React.createContext(defaultValue)
//to reduce consumer portion we use useContext
//https://www.youtube.com/watch?v=us4pQzWRznQ&t=4s



//AXIOS

// Accessing REST Web Services / HTTP APIs in JavaScript
// Axios is a Promise-based HTTP client for JavaScript which can be 
// used in your front-end application and in your Node.js backend.

// By using Axios it’s easy to send asynchronous HTTP request to REST 
// endpoints and perform CRUD operations. The Axios library can be used 
// in your plain JavaScript application or can be used together 
// with more advanced frameworks like Vue.js.

// https://github.com/mzabriskie/axios:

// Make XMLHttpRequests from the browser
// Make http requests from node.js
// Supports the Promise API
// Intercept request and response
// Transform request and response data
// Cancel requests
// Automatic transforms for JSON data
// Client side support for protecting against XSRF

//https://www.youtube.com/watch?v=Gl-vOU7ZU9A
































//theory

// In React, a state is always owned by one component. Any changes made by this 
// state can only affect the components below it, i.e its children. Changing state 
// on a component will never affect its parent or its siblings, only the children 
// will be affected. This is the main reason that the state is often moved up in 
// the component tree so that it can be shared between the components that need to
//  access it.
//https://www.geeksforgeeks.org/reactjs-unidirectional-data-flow/


// Ans- useReducer is a hook that provides an alternative to using useState for
//  managing state in a React component. You can use useReducer when you have
//   state updates that are complex, have multiple related updates, or have 
//   updates that depend on previous state.
// For example, consider a form with multiple fields, each with its own state.
//  The state updates for one field might depend on the state of another field, 
//  so you would need to write custom logic to handle the updates. In such a case,
//   useReducer would be more appropriate than useState.
// Another use case for useReducer is when you need to perform complex updates 
// to the state. For example, if you need to calculate the next state based on the
//  current state, or if you need to update multiple pieces of state at once, 
//  useReducer can make your code more maintainable and easier to understand.
// So, in general, you should use useReducer when:
// . You need to handle complex state updates
// . You have multiple related updates to the state • Your updates depend 
// on previous state
// And, you should use useState when:
// You have simple state updates
// . Your updates don't depend on previous state You only need to update 
// a single piece of state.
// Note-A good example of using useReducer would be the implementation of a cart system


//A React functional component is a simple JavaScript function that accepts props and returns a React element.
// After the introduction of React Hooks, writing functional components has become the ​standard way of 
// writing React components in modern applications.





// I like to think of a reducer like a “coffee maker”. The coffee maker takes in coffee powder and water. 
// It then returns a freshly brewed cup of coffee that we can enjoy. Based on this analogy reducers are
//  functions that take in the current state (coffee powder) and actions (water) and brew a new state (fresh coffee).
// Reducers are pure functions that take in a state and action and return a new state.
//A reducer should always follow the following rules:
//Given a set of inputs, it should always return the same output.
// No surprises, side effects, API calls, mutations.



// The useReducer is a hook I use sometimes to manage the state of the application.
//  It is very similar to the useState hook, just more complex. 
//  It acts as an alternate hook to the useState hook to manage complex state in your application.

// The useReducer hook uses the same concept as the reducers in Redux. 
// It is basically a pure function, with no side-effects.

// A function is considered pure, if it adheres to the following rules:

// The function always returns the same output if the same arguments are passed in.
// The function does not produce any side-effects.
// With this, it makes reducers easier to test and write.

// The syntax for the useReducer hook is as follows:

// const [state, dispatch] = useReducer(reducer, initialArg, init);

// The useReducer will basically allow React functional components
//  to access the reducer functions from your application’s state management.

//https://codesandbox.io/s/userreducer-59f94q
// https://www.youtube.com/watch?v=VdXGIEYZuCw