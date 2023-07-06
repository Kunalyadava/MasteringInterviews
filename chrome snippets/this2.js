function Person(name) {
  this.name = name;

  this.sayHello = function () {
    console.log("Hello! ", this, this.name);
  };
}

var james = new Person("James Bond");
var john = new Person("John Doe");

john.sayHello();
james.sayHello();
