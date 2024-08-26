/* 
A proxy object is an object that acts as an interface (or placeholder) for something else.
The proxy could be an interface to anything: an API, a network connection, a large object in memory,
or some other resource that is expensive or impossible to duplicate.
A proxy is a 'stand-in' object that is used to access the 'real' object behind the scenes.
In the proxy, extra functionality can be provided, for example caching when operations on the real object 
are resource intensive, or checking preconditions before operations on the real object are invoked
The Proxy pattern is a structural design pattern that provides a surrogate or placeholder for another object to control access to it. 
The proxy can add additional behavior to the original object, such as logging, caching, validation, etc., without modifying the original object's code. 
*/

/* Checking access using proxy */
/*
class RealSubject {
  request() {
    console.log("RealSubject: Handling request.");
  }
}

class AccessProxy {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }

  request() {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.#logAccess();
    }
  }

  checkAccess() {
    console.log("Proxy: Checking access prior to firing a real request.");
    return true;
  }

  #logAccess() {
    console.log("Proxy: Logging the time of request.");
  }
}

const realSubject = new RealSubject();
const accessProxy = new AccessProxy(realSubject);
accessProxy.request();
*/

/* Caching using proxy */
class UserService {
  async getUserInformation(userId) {
    console.log("Fetching user data from db");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: userId, name: "Alice" });
      }, 3000);
    });
  }
}

class UserServiceProxy {
  constructor() {
    this.service = new UserService();
    this.cache = {};
  }

  async getUserInformation(userId) {
    if (this.cache[userId]) {
      console.log("Fetching user data from cache");
      return Promise.resolve(this.cache[userId]);
    } else {
      const userInfo = await this.service.getUserInformation(userId);
      this.cache[userId] = userInfo;
      return userInfo;
    }
  }
}

(async () => {
  const userServiceProxy = new UserServiceProxy();
  let userInfo = await userServiceProxy.getUserInformation(1);
  console.log(userInfo);
  userInfo = await userServiceProxy.getUserInformation(1);
  console.log(userInfo);
})();

/* Advantages proxy pattern
Controlled Access
proxies can enforce access controls, ensuring that only authorized users can interact with the underlying object. 
This is particularly useful in security-sensitive applications.

Lazy Initialization 
proxies can delay the creation and initialization of resource-intensive objects until they are actually needed, 
improving the performance and resource utilization of applications.

Logging and Monitoring 
proxies can log requests and responses, providing valuable insights for debugging, monitoring, and auditing.

Remote Proxy
proxies can be used to represent objects that are located in different address spaces, allowing for communication between distributed systems.

Caching 
proxies can cache the results of expensive operations, reducing the need to perform these operations repeatedly 
and improving the efficiency of applications.
*/
