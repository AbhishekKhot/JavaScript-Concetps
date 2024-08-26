/*
Factory pattern create or manifactures different objects
this allows you to create all yours object at a centrailized location
Factory desing pattern is a creational desing pattern that provides an inteface for creating objects in a superclass
but allows subclass to alter their the type of object that will be created. It is particularly useful when the exact
type of the object is not know until the runtime
*/

/* Without factory pattern */
/*
class Car {
  constructor(model) {
    this.model = model;
  }

  drive() {
    console.log(`I'm driving ${this.model}`);
  }
}

class Tesla extends Car {
  constructor() {
    super("Tesla Model S");
  }
}

class BMW extends Car {
  constructor() {
    super("BMW M5");
  }
}

class Audi extends Car {
  constructor() {
    super("Audi A4");
  }
}

const tesla = new Tesla();
tesla.drive();
const bmw = new BMW();
bmw.drive();
const audi = new Audi();
audi.drive();
*/

/*  With factory pattern */
/*
class Car {
  constructor(model) {
    this.model = model;
  }

  drive() {
    console.log(`I'm driving ${this.model}`);
  }
}

class Tesla extends Car {
  constructor() {
    super("Tesla Model X");
  }
}

class BMW extends Car {
  constructor() {
    super("BMW X5");
  }
}

class Audi extends Car {
  constructor() {
    super("Audi Q7");
  }
}

class CarFactory {
  static createCar(model) {
    switch (model) {
      case "Tesla":
        return new Tesla(model);
      case "BMW":
        return new BMW(model);
      case "Audi":
        return new Audio(model);
      default:
        throw new Error("Unknown car model");
    }
  }
}

const tesla = CarFactory.createCar("Tesla");
tesla.drive();

const bmw = CarFactory.createCar("BMW");
bmw.drive();

const audio = CarFactory.createCar("Audi");
Audi.drive();
*/

/*
Advantages of factory pattern

Encapsulation
this pattern encapsulates the instantiation logic and hide the complexity of creating object form the client

Loose coupling
it resuces the coupling between the client and the concrete classes because the client only interact with abstract class

Code resuability
You can centralize the object creation logic in one place, making it easier to manage and maintain

Single responsibility
the factory class is responsible for object creation, allowing other classes to focus on their core responsibilities

Scalability
it is easier to introduce new types of objects without changing existing code, enhancing the code scalability

Disadvantages of factor pattern

Scalability issues
if you want to introduce a new car type, you must have to change the client code whenever the new car type is used

Code duplication
if object creation logic becomes more complex, you might end up duplicating code across the different parts of the code

Diffcult Maintenance
Any changes to the instantation process will require updates in multiple places
*/

const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user1 = createUser({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});

const user2 = createUser({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
});

console.log(user1.fullName());
console.log(user2.fullName());
