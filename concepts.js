// js is case sentive language
// pre ES6 var used as rule of thumb avoid using var in modern js code
// let is block scoped var is global scoped can be changed anytime in code execution

// var a = 100;
// let a = 100;
// {
//   let a = 200;
//   console.log("Inside block scope: ", a);
// }
// console.log("Outside block scope:", a);

// let x;
// console.log("Value of x is: ", x);
// var xx;
// console.log("Value of xx is: ", xx);

// 7 premitive data types in javascript
// 1. Null
// 2. Number
// 3. Sybmol
// 4. String
// 5. Boolean
// 6. BigInt
// 7. Undefined

//these are premitive data types in js
// let a = null;
// let b = 123;
// let c = Symbol("I am a nice sybmol");
// let d = "String";
// let e = true;
// let f = BigInt("234567865");
// let g;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(typeof f);
// console.log(g);

// objects in js are non premitive data types
// const myObj = {
//   a: true,
//   b: 100,
//   c: "string",
// };

// console.log(myObj.b);
// console.log(myObj["d"]);

// let a = 10;
// console.log(a + "10");
// console.log(typeof (a + "10"));

// const dictionary = {
//   apple: "APPLE",
//   ball: "BALL",
// };
// console.log(dictionary);
// dictionary["cat"] = "CAT";
// console.log(dictionary);

//expression and conditions in js
// 77;
// false; these are valid literals in javascript
// console.log(10 / 4); //this will give 2.5 as 10 and 4 treated as numbers in javascript

// let age = 100;
// if (age >= 10 && age <= 20) {
//   console.log("Yes, in-between 10 and 20");
// } else {
//   console.log("No, not in-between 10 and 20");
// }

// switch (age) {
//   case 10:
//     console.log("Age is 10");
//     break;
//   case 20:
//     console.log("Age is 20");
//     break;
//   default:
//     console.log("Age is not 10 nither 20");
//     break;
// }

// let no = 25;
// if (no % 2 && no % 3) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// let age = 27;
// age >= 18 ? console.log("You can drive") : console.log("You can't drive");

//setTimeout different behaviours

// console.log(age);
// var age = 20;
// console.log(age);

//hoisting in js
//memory phase and code exection
//memory phase load all the variables and in code phase assignment of the varible happens
//at global context level all varibles are loaded in memory
//at first age=undefined and then age=20

// age = 20;
// console.log(age);
// let or const age = 28;

//temporal dead zone when using let and const and not applicable in case of var

// myFun();

// var myFun = function () {
//   console.log("First");
// };

// myFun();

// function myFun() {
//   console.log("Second");
// }

// myFun();

//Memory phase
//var myFun: undefined
//var myFun: fn(){"second"} exection context value
//var myFun: fn(){"first"} at runtime value changed
//var myFun: fn(){"first"} at runtime value changed

// var varible = 10;

// (() => {
//   console.log(varible);
//   varible = 20;
//   console.log(varible);
// })(); //iife imediately invoked function expression
// var varible = 30;
// console.log(varible);

// foo = 30;
// console.log("Foo", foo);
// var foo = 100;
// console.log("Foo", foo);

// varible = 10;
// (() => {
//   foo = 100;
//   console.log("Foo", foo);
//   var foo = 100;
//   varible = 20;
//   console.log("Varible", varible);
// })();
// foo = 200;
// console.log("Foo", foo);
// console.log("Varible", varible);
// var varible = 30;

//at memory only global varible are loaded
//var varible=undefined last line of the code
//1st line varible=10 assignment operation
//now internal function context which will load varible into the memory
//foo=100
//foo=100
//varible=20
//after function exection function context will be no more and associated varibles will be removed
//console.log(foo) no matching varible named foo will throw error here

// 100
// 20
// 100
// 20

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }
// i is in global scope all console log will be exected after the i reaches the 10
// setTimeout(() => console.log(i), 0);
// setTimeout(() => console.log(i), 0);
// setTimeout(() => console.log(i), 0);
// setTimeout(() => console.log(i), 0);
// setTimeout(() => console.log(i), 0);
// setTimeout(() => console.log(i), 0);
// setTimeout(() => console.log(i), 0);
// setTimeout(() => console.log(i), 0);
// setTimeout(() => console.log(i), 0);
// setTimeout(() => console.log(i), 0);
// setTimeout(() => console.log(i), 0); i will 10 here

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }
//this will print from 0 to 9 as let will create single varible declaration for each console.log(i)

// var fullName = "Abhishek Khot";

// var obj = {
//   fullName: "Hacked full name",
//   prop: {
//     fullName: "Inside prop",
//     getFullName: function () {
//       return this.fullName;
//     },
//   },
//   getFullName: function () {
//     return this.fullName;
//   },
//   getFullNameV2: () => this.fullName,
//   //arrow function always refers to window object or global object
//   //to prove this refer below code
//   //   getFullNameV2: function () {
//   //     console.log(this); //if run this on brower this will refer to window object
//   //   },

//   getFullNameV3: (function () {
//     return this.fullName;
//   })(),
// };

// console.log(obj.prop.getFullName());
// console.log(obj.getFullName());
// console.log(obj.getFullNameV2());
// console.log(obj.getFullNameV3()); //this will give error that getFullNameV3 is not a function
// console.log(obj.getFullNameV3); //this iife after exection of the function getFullNameV3 would contain function return value not the actual function

// const alice = {
//   name: "Alice",
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// const bob = {
//   name: "Bob",
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// // bob.sayName.call(alice);
// // bob.sayName();

// function sayMyName() {
//   console.log(this.name);
// }
// sayMyName.call(alice); //call will pass the this context of alice

// const alice = {
//   name: "Alice",
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(alice.sayName, 2 * 1000);
//setTimeout executed in different execution context where this would not be pointing to alice obj context
//so get undefined in console.log()

// setTimeout(alice.sayName.bind(alice), 3 * 1000);
// const newFun = alice.sayName.bind(alice);
// setTimeout(newFun, 3 * 1000);

//bind will give new function with passed this context in bind
//call will directly call the function with passwed context in call, this does not return the function

//or can pass as clouser function
// setTimeout(() => alice.sayName(), 3 * 1000);

// const obj = {
//   height: 30,
// };

// console.log(obj.height);

// delete obj.height;

// console.log(obj.height);

// const obj = Object.create({
//   height: 30,
// });

// console.log(obj.height);
// console.log(obj.Prototype);
// delete obj.height;
// console.log(obj.height);

//currying concept in js

// function add(a, b, c) {
//   return a + b + c;
// }

// const sum = add(10, 20, 30);
// console.log(sum);

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(add(10)(20)(30));

// function sendAutomaticMail(to) {
//   return function (subject) {
//     return function (body) {
//       console.log(
//         `Mail sent successfully to ${to} with body ${body} and subject as ${subject}`
//       );
//     };
//   };
// }

// let step1 = sendAutomaticMail("abhishek.khot@idfy.com");
// let step2 = step1("Email subject");
// let step3 = step2("Email body");

// re-written as below

// const sendAutomaticMail = (to) => (subject) => (body) =>
//   `Mail sent successfully to ${to} with body ${body} and subject as ${subject}`;

// console.log(
//   sendAutomaticMail("receipents@gmail.com")("Javascript Curry Learning")(
//     "Javascript curry methods"
//   )
// );

// const add = (a) => (b) => (c) => a + b + c;
// console.log(add(10)(20)(30));

//what is iterator pattern in js
// what is yeild keyword in js
// what are generator functions in js

// const nums = [1, 2, 3, 4, 5];
// for (const val of nums) {
//   console.log(val);
// }
// or
// for (const val of [1,2,3,4,5]) {
//   console.log(val);
// }

// function makeIterator(start = 0, end = Infinity, step = 1) {
//   let nextIndex = start;
//   let iterationCount = 0;

//   const rangeIterator = {
//     next() {
//       let result = 0;
//       if (nextIndex < end) {
//         result = { value: iterationCount, done: false };
//         nextIndex += step;
//         iterationCount++;
//         return result;
//       }
//       return { value: iterationCount, done: true };
//     },
//   };

//   return rangeIterator;
// }

// const iterator = makeIterator(1, 5, 1);

// let result = iterator.next();
// while (!result.done) {
//   console.log(result.value);
//   result = iterator.next();
// }

// console.log("Iterated over sequence of size: ", result.value);

// function* evenNumbers() {
//   yield 2;
//   yield 4;
//   yield 6;
//   yield 8;
//   yield 10;
//   yield 12;
//   yield 14;
// }

// for (const no of evenNumbers()) {
//   console.log(no);
// }

// function* makeMyIterator(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i;
//   }
// }

// const counter = makeMyIterator(1, 10);

// for (const num of counter) {
//   console.log(num);
// }

//TODO:  IIFE immeditely invoked function expression
// (function () {
//   console.log(20 + 30);
// })();

// (function add(a, b) {
//   console.log(a + b);
// })(20, 30);

// (() => console.log("I am ES6"))();

// const ATM = function (initialBalance) {
//   let balance = initialBalance;
//   function withdraw(amt) {
//     if (amt > balance) {
//       return "Sorry, Low balance";
//     } else {
//       balance -= amt;
//       return balance;
//     }
//   }
//   return { withdraw };
// };

// const abhishek = ATM(100000000000000);
// console.log(abhishek.withdraw(100));

// practical use cases of IIFE

// 1.Avoiding Global Scope Pollution:
// (function () {
//   var privateVarible = "I'm private varible";
//   console.log(privateVarible);
// })();

//2.Creating Private Variables and Functions:
// var module = (function () {
//   var privateVarible = "Private Varible";

//   function privateFunction() {
//     console.log(privateVarible);
//   }

//   return {
//     publicFunction: function () {
//       privateFunction();
//     },
//   };
// })();

// module.publicFunction();

//3.IIFEs can be used to initialize variables with complex expressions or setup that only needs to be executed once.
// var config = (function () {
//   var env = "production";
//   return {
//     env: env,
//     debug: env === "development",
//   };
// })();

// console.log(config.env);
// console.log(config.debug);

//4.IIFEs are often used in the module pattern to create modules with private and public members.

// const counterModule = (function () {
//   var count = 0;

//   function increment() {
//     count++;
//     return count;
//   }

//   function decrement() {
//     count--;
//     return count;
//   }

//   return {
//     increment: increment,
//     decrement: decrement,
//   };
// })();

// console.log(counterModule.increment());
// console.log(counterModule.decrement());

//5. IIFEs can be used to run code immediately, which can be useful for initialization tasks.
// (function () {
//   console.log("Immeditely invoked code");
// })();

// (() => {
//   console.log("ES6 immeditely invoked code");
// })();

//6. IIFEs can help avoid issues related to variable hoisting in JavaScript by confining variable declarations to a specific scope.
// (function () {
//   for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000);
//   }
// })();

// for (var i = 0; i < 10; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   })(i);
// }

// (function () {
//   for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// })();

//TODO: hoisted functions
//in js functions are fully hoisted this allows us to call function even before it's declaraction

// hoistedFunction();

// function hoistedFunction() {
//   console.log("Hoisted function called");
// }

// Variables declared with let and const are also hoisted, but unlike var,
// they are not initialized with undefined. Instead, they remain in a "temporal dead zone"
// from the start of the block until the declaration is encountered.
// Accessing them before the declaration results in a ReferenceError:

// console.log(a); //ReferenceError: Cannot access 'a' before initialization
// let a=100;

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// a=200

// console.log(a); //undefined
// var a = 1000;

//let create single instance of i for every iteration so here value printed is from 1 to 10
// (function () {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 2000);
//   }
// })();

//TODO: clourse
// function outerFunction() {
//   let innerVarible = "I'm inner varible";
//   function innerFunction() {
//     console.log(innerVarible);
//   }
//   return innerFunction();
// }

// const clourseFunction = outerFunction();
// clourseFunction();

//clourse with parameters
// function greeting(message) {
//   return function (name) {
//     console.log(`${message} ${name}`);
//   };
// }
// const helloAlice = greeting("Hello")("Alice");

// function counter() {
//   let counter = 0;
//   return {
//     increment: function () {
//       return counter++;
//     },
//     decrement: function () {
//       return counter--;
//     },
//     getCount: function () {
//       return counter;
//     },
//   };
// }
// const myCounter = counter();
// myCounter.increment();
// myCounter.decrement();
// myCounter.increment();
// console.log(myCounter.getCount());

// function createCounter() {
//   let counters = [];
//   for (let i = 1; i <= 5; i++) {
//     counters[i] = function () {
//       console.log(i);
//     };
//   }
//   return counters;
// }

// const myCounters = createCounter();
// myCounters[1]();

// Event handlers: Clousers are often used in event handling to rember state or data
// Callbacks: in asynchrounous code, clourses help retain access to the surrounding scope when the callbacks are executed
// Module patterns: Clourses are used to create private and public methods and varibles in js modules
//understanding clourses help you write more modular, resuable and encaspulated code in js
