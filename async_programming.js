// function orderPizza(callback) {
//   setTimeout(() => {
//     callback();
//   }, 2000);
// }

// orderPizza(() => {
//   console.log("Pizza is ready");
// });

// console.log("Meanwhile pizza is getting prepared");

// function syncFunc() {
//   setTimeout(() => {
//     console.log("Sync function called");
//   }, 2000);
// }
// console.log("Calling sync function");
// syncFunc();
// console.log("Meanwhile sync function is getting called");

// function async() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Async function called");
//     }, 2000);
//   });
// }
// console.log("Calling async function");
// async().then((res) => {
//   console.log(res);
// });
// console.log("Meanwhile async function is getting called");

// function getWeather() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       reject("Sunny");
//     }, 2000);
//   });
// }

// function successHandler(res) {
//   console.log("Weather", res);
// }

// function errorHandler(error) {
//   console.log("Error", error);
// }
// console.log("Fetching weather");
// getWeather().then(successHandler, errorHandler);

// function fetchWeather() {
//   return new Promise((resolve, reject) => {
//     fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast")
//       .then((response) => response.json())
//       .then((data) => resolve(data.properties.periods[1].shortForecast));
//   });
// }

// const weatherPromise = fetchWeather();

// weatherPromise.then((data) => console.log(data));

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched");
//     }, 1000);
//   });
// }
// async function fetchData() {
//   const data = await getData();
//   console.log(data);
// }
// fetchData();

// const URL = "https://jsonplaceholder.typicode.com/posts";

// async function fetchData() {
//   const response = await fetch(URL);
//   const data = response.json();
//   return data;
// }

// async function fetchPosts(){
//     const posts = await fetchData();
//     console.log(posts)
// }

// fetchPosts();

//javascript pure function

// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2));

/*
Functionas are first class citizens in javascript
1.Assign them to variables
2.Pass them as arguments
3.Return them from functions 
4.Curry them for partial use 
5.Create Clouser
6.Store them in data structures like array,object,map,set etc
7.Create them anonymously
*/
//






//Javascript event loop
//Event loop
//Call stack
//Task queue

// function sleep(milliseconds) {
//   const start = Date.now();
//   while (Date.now() - start < milliseconds) {
//     //some blocking code
//   }
// }

// console.log("blocking code started at: ", new Date().toLocaleTimeString());
// sleep(5000);
// console.log(
//   "blocking code execution completed at: ",
//   new Date().toLocaleTimeString()
// );

// console.log("non blocking code started at: ", new Date().toLocaleTimeString());
// setTimeout(() => {
//   console.log(
//     "non blocking code completed at: ",
//     new Date().toLocaleDateString()
//   );
// }, 5000);

// console.log("immediate code executed at: ", new Date().toLocaleTimeString());

// //the thing responsible for moving functions from task queue to call stack is event loop

// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 0);
// console.log("3");

/*
Call stack: 
Keeps track of what's being executed and their order 
Nested function calls go on top of the stack Last In First Out (LIFO) manner  
Task Queue: 
Stores async callbacks ahead of call stack First In First Out (FIFO) manner 
e.g. setTimeout, fetch, promises, async/await
Microtask Queue: 
Task Queue but for promises and gets priority over task queue
Event Loop: 
Continuously checks and manages Call Stack by adding and removing tasks
When Call Stack is empty, adds tasks from Microtask Queue and Task Queue with microstask queue begin prioritized
*/
