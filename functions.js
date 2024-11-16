//first class function
//IIFE immeditely invoked function
// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

//output would be 1 because function will search x in inner function scope first and then search in second scope (how clouser works)

//as let has block scope it will print 0 1 2 3 4
//when var is used it will print only 5 five times
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

//declarations
// functionName();
// console.log("Outside function: ", x);

// function functionName(x) {
//   console.log("Inside function: ", x);
// }
// var x = 5;

// var x = 21;

// var fun = function () {
//   console.log(x);
//   x = 20;
// };

// fun();

// function square(num) {
//   //params
//   console.log(num * num);
// }

// square(5); //arguments

// function square(...nums) {
//   //rest operator
//   console.log(nums);
// }

// var nums = [1, 2, 3, 4, 5];
// square(...nums); //spread operator

// const fn = (a, x, y, ...numbers) => {
//   console.log(a, x, y, numbers);
// };

// fn(1, 2, 3, 4, 5);
// //a=1, x=2, y=3 numbers=[4,5]

//callback function

// function greet(callback) {
//   setTimeout(() => {
//     callback();
//   }, 500);
// }

// greet(function () {
//   console.log("Hi");
// });

//arrow function introduced in ES6 version of the javascript
// const add = (a, b) => a + b;
// console.log(add(10, 20));

//this keyword
// let user = {
//   name: "Alice",
//   greetFun: function () {
//     //here this pointing to local user object
//     console.log(`Hi ${this.name}`);
//   },
//   greetArrowFn: () => {
//     //here this pointing to global object
//     console.log(`Hi ${this.name}`);
//   },
// };
// user.greetFun();
// user.greetArrowFn();

//clouser => that reference variable to outer scope from it's inner scope
// var e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); //output = 20

// let count = 0;
// (function printCount() {
//   if (count == 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// })();

// function createBase(a) {
//   return function (b) {
//     console.log(a + b);
//   };
// }

// var addSix = createBase(6);
// addSix(10);

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 10000000; i++) {
//     a[i] = i * i;
//   }
//   console.log(a[index]);
// }

// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("12");
// find(12);
// console.timeEnd("12");

//optimized version using clouser
// function find() {
//   let a = [];
//   for (let i = 0; i < 10000000; i++) {
//     a[i] = i * i;
//   }
//   return function (index) {
//     console.log(a[index]);
//   };
// }
// clouser = find();
// console.time("6");
// clouser(6);
// console.timeEnd("6");
// console.time("12");
// clouser(12);
// console.timeEnd("12");

//var has function scope not the block scope

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

//with var it will print 3 3 3 as var is function scoped
//with let it will print 0 1 2 as let is block scoped

//we can use IIFE to access current value of i at each iteration inside function
// for (var i = 0; i < 3; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   })(i);
// }

//how would you use clouser to create a private counter

// function counter() {
//   let num = 0;
//   return {
//     increment: function () {
//       num++;
//     },
//     decrement: function () {
//       num--;
//     },
//     getValue: function () {
//       return num;
//     },
//   };
// }

// num = counter();
// console.log(num.getValue());
// num.increment();
// console.log(num.getValue());

//what is module pattern
// var module = (function () {
//   function privateMethod() {
//     //do something
//   }

//   return {
//     publicMethod: function () {
//       //can call privateMethod
//     },
//   };
// })();

//make this run only once
// let view;
// function likeTheVideo() {
//   view = "my youtube channel";
//   console.log("Subscribe to", view);
// }

// likeTheVideo();

// let view;
// function likeTheVideo() {
//   let called = 0;
//   return function () {
//     if (called > 0) {
//       console.log("Already subscribed");
//     } else {
//       view = "my youtube channel";
//       console.log("Subscribe to ", view);
//       called++;
//     }
//   };
// }
// let subscribe = likeTheVideo();
// subscribe();
// subscribe();
// subscribe();

//more generic polyfill implementation of function
// function once(func, context) {
//   let ran;

//   return function () {
//     if (func) {
//       ran = func.apply(context || this, arguments);
//       func = null;
//     }
//     return ran;
//   };
// }

// const hello = once((a, b) => console.log("hello", a, b));
// hello(100, 200);
// hello(300, 400);
// hello(500, 600);

//memoize ployfill

// const expensiveSquare = (num1, num2) => {
//   for (let i = 0; i < 10000000; i++) {}
//   return num1 * num2;
// };

// console.time("First call");
// console.log(expensiveSquare(100, 200));
// console.timeEnd("First call");
// console.time("Second call");
// console.log(expensiveSquare(100, 200));
// console.timeEnd("Second call");

// function myMemoize(fn, context) {
//   const res = [];
//   return function (...args) {
//     var argsCache = JSON.stringify(args);
//     if (!res[argsCache]) {
//       res[argsCache] = fn.call(context || this, ...args);
//     }
//     return res[argsCache];
//   };
// }

// const expensiveSquare = (num1, num2) => {
//   for (let i = 0; i < 1000000; i++) {}
//   return num1 * num2;
// };

// const memoizedSquare = myMemoize(expensiveSquare);

// console.time("First");
// console.log(memoizedSquare(100, 200));
// console.timeEnd("First");
// console.time("Second");
// console.timeEnd(memoizedSquare(100, 200));
// console.timeEnd("Second");
// console.time("Third");
// console.log(memoizedSquare(30, 40));
// console.timeEnd("Third");

//difference between clouser and scope
//scope = what type varibles you have access to (global scope, local scope)
//clouser = is the return function so that it can use outer functions private varibles (in case of clouser there are global scope, outer scope and local scope)

//currying it is the function that takes one argument at a time and return a function expecting the next argument
//fun(a,b) to fun(a)(b)

//why should we use currying what is use of it

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(10)(20)(30));

// function evaulate(operation) {
//   return function (a) {
//     return function (b) {
//       switch (operation) {
//         case "add":
//           return a + b;
//         case "substract":
//           return a - b;
//         case "multiply":
//           return a * b;
//         case "divide":
//           return a / b;
//         default:
//           return "invalid operator";
//       }
//     };
//   };
// }
// console.log(evaulate("add")(10)(20));
// console.log(evaulate("divide")(100)(20));

//infinite currying
// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

// console.log(add(10)(20)(30)(40)(50)());

//difference between currying and partial application
//below is the partial application i.e no of arguments passed not equal to the nesting functions done
// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// console.log(sum(10)(20, 30));

//currying to maniplute the DOM
// function updateElementText(id) {
//   return function (content) {
//     document.querySelector("#" + id).textContent = content;
//   };
// }

// const updateHeader = updateElementText("heading");
// updateHeader("Javascript");

//create and function named curry() to convert func(a,b,c) into func(a)(b)(c)
function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;
const totalSum = curry(sum);
console.log(totalSum(1)(2)(3));
