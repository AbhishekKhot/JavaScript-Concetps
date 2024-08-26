/* 
Observer pattern is a design pattern that offers a subscription model in which objects (known as 'observers') can 
subscribe to an event (known as a 'subject') and get notified when the event occurs (or when the subject sends a signal).
*/

/* With observer pattern */
/*
class Subject {
  constructor() {
    this.observers = new Set();
  }

  subscribe(observer) {
    this.observers.add(observer);
  }

  unsubscribe(observer) {
    this.observers.delete(observer);
  }

  notify(data) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(data) {
    console.log(`${this.name} received data ${data}`);
  }
}

const subjectObj = new Subject();

const ob1 = new Observer("Observer 1");
const ob2 = new Observer("Observer 2");

subjectObj.subscribe(ob1);
subjectObj.subscribe(ob2);
subjectObj.notify("First Notification");

subjectObj.unsubscribe(ob1);
subjectObj.notify("Second Notification");
*/

/* With observer pattern */

class Stock {
  constructor(symbol, price) {
    this.symbol = symbol;
    this.price = price;
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(
      (subscribedObserver) => subscribedObserver != observer
    );
  }

  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }

  setPrice(newPrice) {
    this.price = newPrice;
    this.notify();
  }
}

class StockObserver {
  constructor(name) {
    this.name = name;
  }
  update(stock) {
    console.log(
      `${this.name} notified of ${stock.symbol} price change to ${stock.price}`
    );
  }
}

const googleStock = new Stock("GOOGL", 1200);

const investor1 = new StockObserver("Investor 1");
const investor2 = new StockObserver("Investor 2");

googleStock.subscribe(investor1);
googleStock.subscribe(investor2);

googleStock.setPrice(100);
googleStock.setPrice(500);

googleStock.unsubscribe(investor1);
googleStock.setPrice(800);

/* Advantages of the Observer Pattern
Loose Coupling 
The subject and observers are loosely coupled. The subject knows only that it has a list of observers, but it doesn't need to know the details about them. 
This reduces dependencies and makes the system more modular and easier to maintain.

Dynamic Relationships
Observers can be added or removed at runtime, allowing dynamic subscription and unsubscription to events.

Broadcast Communication 
The subject can notify all interested parties (observers) in one action. This is efficient for scenarios where multiple components need to react to a single state change.

Encapsulation 
Observers can be encapsulated to handle their own logic for responding to changes in the subject, promoting the single responsibility principle.

Practical Use Cases
In GUI applications, various components need to update their display based on changes in data models. For example, a dashboard updating various widgets when new data arrives.
Handling events in systems where multiple components need to respond to user inputs or other system events. For example, handling button clicks in a user interface.
A logging service that needs to record events occurring in different parts of an application. Each module can notify the logging service when important events occur.
Systems that send notifications to users, such as email alerts, SMS alerts, or push notifications, when certain events occur in an application.
*/
