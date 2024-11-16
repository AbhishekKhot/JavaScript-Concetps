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

//1.mapping users to user names
// const users = [
//   { id: 1, name: "Alice", isActive: true },
//   { id: 2, name: "Bob", isActive: false },
//   { id: 3, name: "Mario", isActive: true },
// ];
// const userNames = users.map((user) => user.name);
// console.log(userNames);

// //2.differnce between null and undefined
// let var1;
// console.log(var1);
// console.log(typeof var1);

// let var2 = null;
// console.log(var2);
// console.log(typeof var2);

//3.hosting in js
// console.log(foo);
// let foo = 10;
// var foo;
// foo = 10;
// console.log(foo);

//clousers
//4.create a counter function
// const counter = (num) => {
//   return {
//     increment: function () {
//       num++;
//       console.log(num);
//     },
//     decrement: function () {
//       num--;
//       console.log(num);
//     },
//   };
// };
// let count = counter(10);
// count.increment();
// count.decrement();

//5.create a function which stores a string and returns
// function getUser() {
//   let user = {
//     name: "Alice",
//     age: 21,
//     isActive: false,
//   };
//   return {
//     getName: function () {
//       return user.name;
//     },
//   };
// }

// const alice = getUser();
// console.log(alice.getName());

//currying
//6.write a function which helps to multiply (a)(b) and returns multiplication of a and b
// function getMultiplication(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// console.log(getMultiplication(10)(20));

//7.create partially sum function
// function getSum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// const sumA = getSum(10);
// console.log(sumA);
// const sumB = sumA(20);
// console.log(sumB);
// const sumC = sumB(30);
// console.log(sumC);

//8.
// function appendNumber(nums, no) {
//   nums.push(no);
//   return nums;
// }
// let nums = [1, 2];
// console.log(appendNumber(nums, 3));

//9.
// const users = [
//   { id: 1, name: "Alice", isActive: false },
//   { id: 2, name: "Bob", isActive: true },
//   { id: 3, name: "Jack", isActive: true },
//   { id: 4, name: "Ramesh", isActive: true },
//   { id: 5, name: "Suresh", isActive: false },
// ];

// function checkIsUserPresentAndActive(userName) {
//   return users.some((user) => user.name === userName && user.isActive);
// }

// console.log(checkIsUserPresentAndActive("Alice"));
// console.log(checkIsUserPresentAndActive("Ramesh"));

//10.remove duplicate from array
// function removeDuplicateUsers(users) {
//   const uniqueUsers = new Set();
//   users.forEach((user) => uniqueUsers.add(user));
//   return uniqueUsers;
// }
// const users = [
//   "Alice",
//   "Alice",
//   "Jack",
//   "Ramesh",
//   "Ram",
//   "Bob",
//   "Suresh",
//   "Rakesh",
//   "Suresh",
//   "Bob",
// ];
// console.log(removeDuplicateUsers(users));

//11.sort array of objects by author name
// const bookAuthors = [
//   { bookName: "Harry Potter", author: "Abby" },
//   { bookName: "Warcorss", author: "Maria Lu" },
//   { bookName: "The hunger games", author: "Bob Marley" },
// ];
// bookAuthors.sort((a, b) => {
//   return a.author.split(" ")[0].localeCompare(b.author.split(" ")[0]);
// });
// console.log(bookAuthors);

//12.write a range function
// function range(start, end) {
//   if (start == end) {
//     return [start];
//   }
//   return [start, ...range(start + 1, end)];
// }
// console.log(range(1, 10));

//13. number of occurences of minimum number in an array
// const nums = [1, 2, 3, 4, 5, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// const min = Math.min(...nums);
// const minNumbersArray = nums.filter((num) => num == min);
// console.log(nums);
// console.log(minNumbersArray.length);

//14.global context
// function getItem() {
//   console.log(this);
// }
// getItem();

//15. object context
// const Item = {
//   name: "Alice",
//   getName() {
//     console.log(this);
//   },
// };
// Item.getName();

//16.global context
// const item = {
//   name: "Bob",
//   getName() {
//     [1, 2, 3].map(function () {
//       console.log(this);
//     });
//   },
// };
// item.getName();

//17.
// class Employee {
//   constructor(id, name, department, designation) {
//     this.id = id;
//     this.name = name;
//     this.salary = null;
//     this.department = department;
//     this.designation = designation;
//   }
//   setSalary(salary) {
//     this.salary = salary;
//   }
//   getSalary() {
//     return this.salary;
//   }
// }
// const alice = new Employee(1, "Alice", "Marketing", "Manager");
// console.log(alice.getSalary());
// alice.setSalary(1000);
// console.log(alice.getSalary());

//18.same class with prototypes
// function Employee(id, name, department, designation) {
//   this.id = id;
//   this.name = name;
//   this.department = department;
//   this.designation = designation;
// }

// Employee.prototype.setSalary = function (salary) {
//   this.salary = salary;
// };
// Employee.prototype.getSalary = function () {
//   return this.salary;
// };

// const alice = new Employee(1, "Alice", "Marketing", "Manager");
// console.log(alice);
// console.log(alice.getSalary());
// alice.setSalary(1000);
// console.log(alice.getSalary());

//19. debounce function
// function debounce(callback, timeoute) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       callback.apply(this, args);
//     }, timeoute);
//   };
// }
// function callbackFunction(name) {
//   console.log(`Hello ${name}`);
// }
// const debounceFunction = debounce(callbackFunction, 500);
// debounceFunction("Alice");
// debounceFunction("Bob");
// debounceFunction("Jack");

//20.throttling
// function throttle(callback, timeout) {
//   let timer = null;
//   return function (...args) {
//     if (timer) return;
//     timer = setTimeout(() => {
//       timer = null;
//       callback.apply(this, args);
//     }, timeout);
//   };
// }

// function callbackFunction(name) {
//   console.log(`Hello from ${name}`);
// }

// const throttleFunction = throttle(callbackFunction, 500);
// throttleFunction("Alice");
// throttleFunction("Bob");
// throttleFunction("Jack");

//21. write an example of xmlhttprequest
// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     const response = JSON.parse(xhr.responseText);
//     console.log(response);
//   } else {
//     console.log("Request failed with status: ", xhr.status);
//   }
// };

// xhr.onerror = function () {
//   console.log("Network error occured");
// };

// xhr.send();

// const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
//   .then((response) => response.json())
//   .then((posts) => console.log(posts));

// async function getPosts() {
//   const response = await fetch(url);
//   const posts = await response.json();
//   console.log(posts);
// }

// getPosts();

const asyncFun1 = (callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Function 1");
      resolve("ONE");
    }, 500);
  });
};
const asyncFun2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Function 2");
      resolve("TWO");
    }, 200);
  });
};
const asyncFun3 = (callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(first)
    }, 100);
  });
};

async function resolvePromises() {
  const results = await Promise.all([asyncFun1, asyncFun2, asyncFun3]);
  console.log(results);
}

resolvePromises();
