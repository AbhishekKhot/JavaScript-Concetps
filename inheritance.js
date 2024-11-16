/*
const me = {
  talk() {
    return "Talking";
  },
};

const you = {
  talk() {
    return "Talking";
  },
};
*/

/*
class Person {
  talk() {
    return "Talking";
  }
}

const me = new Person();
console.log(me.talk());
const you = new Person();
console.log(you.talk());

Person.prototype === me.__proto__;
*/

// //more clear and convential way of prototype inheritance
// /*
// function Person(age, name, gender) {
//   this.age = age;
//   this.name = name;
//   this.gender = gender;
// }

// //bad apporach
// Person.prototype.run = function (name) {
//   return `${name} is running`;
// };

// Person.prototype.walk = (name) => {
//   return `${name} is walking`;
// };

// const alice = new Person(20, "Alice", "Female");
// console.log(alice.run(alice.name));
// console.log(alice.walk(alice.name));
// */

// // const dude = {
// //     // __proto__:{...}
// // };

// // Object:{
// //     valueOf:function()
// //     toString:function()
// // }

// // dude has both the valueOf and toString function because it is inherited from Object

// // const personName = "Bob";
// // personName inherited from String Object and String is inherited from Object

// //Factory functions vs Constructor functions

// //Factory function
// // function personFactory(n) {
// //   return { name: n };
// // }

// // const me1 = personFactory("Me");

// // //Constructor function
// // function Person(name) {
// //   this.name = name;
// // }

// // const me2 = new Person("Me");
// // console.log(me2.name);

// function Person(name) {
//   this.name = name;
// }

// const ben = new Person("Ben");

// Person.prototype.talk = function () {
//   return `Hello, I am ${this.name}`;
// };

// console.log(ben.talk());

// function Person(n) {
//   this.name = n;
//   this.talk = function () {
//     console.log(this);
//   };
//   setTimeout(() => {
//     console.log(this); //here this is refering to window object as callback functions exectued in totally different context
//   }, 100);
//   setTimeout(function () {
//     console.log(this);
//   }, 100);
//   //2 ways to fix this and get this as Person context

//   setTimeout(
//     function () {
//       console.log(this); //now this is refering to Person
//     }.bind(this),
//     100
//   );
// }

// const me = {
//   name: "Abhi",
//   talk: function () {
//     return this; //this is me object
//   },
//   arrowTalk: this, //this is window object
// };

//object does not create binding functions do

//don't use arrow function for
// 1.Object methods
// 2.Prototypes
// 3.Constructor
// 4.Event handlers

// Premitive = Number, Boolean, String, Null, Undefined
// Objects = Object, Array, Function, Date, Regex

// const a = [1];
// const b = [1];
// console.log(a === b);
// console.log(a[0] === b[0]);

// Premitive are assigned by values
// Objects are assigned by reference mean pointing to memory address where object is declared

// const age = 10;
// console.log("Before: ", age);
// function incrementAgeValue(age) {
//   return ++age;
// }
// console.log(incrementAgeValue(age));
// console.log("After: ", age);
// const user = {
//   age: 10,
// };
// console.log("Before: ", user.age);
// function incrementAgeReferenceValue(user) {
//   ++user.age;
// }
// incrementAgeReferenceValue(user);
// console.log("After: ", user.age);

let a = { name: "Alice" };
let b = a;
console.log("1: ", a);
console.log("1: ", b);
console.log(a === b); //both a and b pointing to same memory address space

//now if changes the a object
a.name = "Bob";
console.log("2: ", a);
console.log("2: ", b);
console.log(a === b);

a = { name: "Ramesh" };
console.log("3: ", a);
console.log("3: ", b);
console.log(a === b); //false because a is now pointing to different memory address location than b and b won't change as b was pointing to memory address not to the a varible

