/*
class Person {
  constructor(name) {
    this.name = name;
  }
  //this will return the person name
  print() {
    console.log(this.name);
  }
}

class Employee extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }
  print() {
    console.log(this.name, this.id);
  }
}

const person = new Person("Alice");
person.print();
const bob = new Employee("Bob", 1);
bob.print();
*/

/*
function Person(name) {
  this.name = name;
}

// this will return persons name as this here will be functions context 
Person.prototype.getName = function () {
  return this.name;
};

// this will return undefined as this here is the execution context not the function context
Person.prototype.getName = () => this.name  

const alice = new Person("Alice");
console.log(alice.getName());
*/

/*
function parseData(data) {
  return data;
}

class User {
  constructor(name, data) {
    this.name = name;
    this.data = parseData(data);
    return data;
  }
  getData() {
    return this.data;
  }
}

const alice = new User("Alice", { age: 21, height: "160m", weight: "50kg" });
console.log(alice);  // { age: 21, height: "160m", weight: "50kg" }
console.log(alice.getData()); // error
*/

/*
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

const alice = new Person("Alice");
console.log(alice.sayName());
console.log(alice.prototype);
console.log(Object.getPrototypeOf(alice.sayName()));
console.log(alice.__proto__.sayName());
*/


