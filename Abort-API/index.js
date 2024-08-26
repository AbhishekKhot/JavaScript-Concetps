// The AbortController is Web API Utility that allows you to abort asynchrounous tasks like fetch requests
// it provides a way signal to the request to be cancelled, making it particularly useful for managing network
// requests that may need to be stopped before they complete, such as in the case of changing pages or user input
// leading to a new fetch call before the previous one completes
//AbortController can be used with any async task like API Request, Event Listeneres, File reading/writting etc

//1. API request
// const controller = new AbortController();
// const signal = controller.signal;
// const axios = require("axios");
// const url = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchTodos = async () => {
//   try {
//     const response = await axios.get(url, { signal });
//     console.log(response.data);
//   } catch (error) {
//     if (axios.isCancel(error)) {
//       console.log("Request canceled: ", error.message);
//     } else {
//       console.log("Fetch error: ", error);
//     }
//   }
// };

// fetchTodos();

// setTimeout(() => {
//   controller.abort();
//   console.log("Requested aborted");
// }, 500);

//2. Event listeners
// const { JSDOM } = require("jsdom");
// const { window } = new JSDOM(`<!DOCTYPE html><body></body>`);
// const { AbortController } = window;
// const controller = new AbortController();
// const signal = controller.signal;

// function log(eventType) {
//   console.log("Mouse", eventType);
// }

// function removeEventListener() {
//   window.removeEventListener("mousemove", log("Moved Removed"));
//   window.removeEventListener("mouseup", log("Up Removed"));

//   setTimeout(() => {
//     controller.abort();
//     console.log("Event listeners aborted");
//   }, 1000);
// }

// window.addEventListener("mousemove", log("Moved"), { signal });
// window.addEventListener("mouseup", removeEventListener, { signal });

// window.dispatchEvent(new window.MouseEvent("mousemove"));
// window.dispatchEvent(new window.MouseEvent("mouseup"));

//3.Event listener on signal //inception of abort controller
// const controller = new AbortController();
// const { signal } = controller;

// signal.addEventListener(
//   "abort",
//   () => {
//     console.log("AbortController got aborted");
//   },
//   { once: true }
// );

// setTimeout(() => {
//   console.log("Aborting abort controller");
//   controller.abort();
// }, 1000);

//4. Closing websocket connection on some event //sample code
// const controller = new AbortController();
// const { signal } = controller;

// function initWebsockets(url, signal) {
//   const socket = new WebSocket(url);
//  if (signal.reason){
//     console.log(signal.reason); //abort singal reason
//  }
//   signal.addEventListener("abort", () => socket.close(), { once: true });

//   return socket;
// }

// initWebsockets("socketUrl", signal);
// controller.abort(//Reason can be passed in abort controller for connection closing); //this could be triggred based on some event

//5. Abort controller with class constructor
// const controller = new AbortController();
// const { signal } = controller;

// class MyClass {
//   constructor(signal) {
//     this.signal = signal;
//   }

//   doBackgroundOperation() {
//     if (this.signal.aborted) {
//       throw new Error("Background Operation Aborted");
//     }
//     for (let i = 0; i <= 1000000000; i++) {
//       console.log("Iteration no: ", i);
//     }
//   }
// }

// const myClassObj = new MyClass(signal);
// controller.abort();
// myClassObj.doBackgroundOperation();