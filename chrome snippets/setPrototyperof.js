let object1={
name:"Kunal",
sayHello:()=>{
console.log("hello")
 }
}
let object2={
salary:"5000",
work:()=>{
console.log("SDE")
 }
}
Object.setPrototypeOf(object2,object1)
 // object1.name
object2.name; //Kunal
// object2.work() //SDE
//object2 is accessing(not taking) the name key from object1 
//Every object in javascript has a hidden property" __proto__"
//that is used to create alink between one object to another

