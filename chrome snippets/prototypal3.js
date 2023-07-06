//we can create chain between objects but to help us javascript gives us
//a protytype Object inside every function and we can use that to create chains

function f3(){}
    f3.prototype.sayName=function(){
        console.log("Hello Im KK")
    }
 
 let object1={
 name:"Kunal"
  }
Object.setPrototypeOf(object1,f3.prototype)