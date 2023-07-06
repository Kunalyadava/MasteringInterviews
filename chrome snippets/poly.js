// class Animal{
//     speak(){
//         console.log("Animals have different Sounds !<br>")
//     }
// }
// class Cat extends Animal{

// }
// class Dog extends Animal{

// }
// var cat= new Cat
// var dog=new Dog
// cat.speak() // Animals have different Sounds !<br>
// dog.speak() //
// poly:3 Animals have different Sounds !<br>




class Animal{
    speak(){
        console.log("Animals have different Sounds !<br>")
    }
}
class Cat extends Animal{
    speak(){
        console.log("Cat says MEOW MEOW")
    }

}
class Dog extends Animal{
       speak(){
        console.log("DOg says BHOW BHOW")
    }

}
var cat= new Cat
var dog=new Dog
cat.speak() // Animals have different Sounds !<br>
dog.speak() //
