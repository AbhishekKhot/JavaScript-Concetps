/* 
The Mediator pattern provides central authority over a group of objects by controlling how these objects interact with each other
The "central" object is known as the 'mediator'.
The Mediator pattern is useful in scenarios where every object needs to be aware of any state change in any other object in the group.
*/

/* Without mediator Pattern */
/* 
class User {
  constructor(name) {
    this.name = name;
    this.contacts = {};
  }

  addContact(user) {
    this.contacts[user.name] = user;
  }

  sendMessage(message, to) {
    if (this.contacts[to.name]) {
      this.contacts[to.name].#receiveMessage(message, this);
    } else {
      console.log(`${to.name} is not in your contact list`);
    }
  }

  #receiveMessage(message, from) {
    console.log(`Received a message from ${from.name}, ${message}`);
  }
}

const alice = new User("Alice");
const bob = new User("Bob");
const charlie = new User("Charlie");

alice.addContact(bob);
alice.addContact(charlie);

bob.addContact(alice);
bob.addContact(charlie);

charlie.addContact(alice);
charlie.addContact(bob);

alice.sendMessage("Hello Charlie", charlie);
charlie.sendMessage("Hello Alice", alice); 
*/

/* With mediator Pattern */
class ChatRoom {
  constructor() {
    this.users = [];
  }

  registerUser(user) {
    this.users.push(user);
  }

  sendMessage(message, to, from) {
    this.#receiveMessage(message, to, from);
  }

  #receiveMessage(message, to, from) {
    console.log(`${to.name} received a message from ${from.name}, ${message}`);
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.chatRoom = null;
  }

  sendMessage(message, to) {
    this.chatRoom.sendMessage(message, to, this);
  }
}

const alice = new User("Alice");
const bob = new User("Bob");

const chatRoom = new ChatRoom();

alice.chatRoom = chatRoom;
bob.chatRoom = chatRoom;

alice.sendMessage("Hi Bob", bob);
bob.sendMessage("Hi Alice", alice);

/* Advantages of mediator pattern
Reduces complexity of object interactions 
It centralizes the complex communication between multiple objects into single mediator object, reducing the 
complext dependices the object between the object themselves.

Decouples colleagues
It decouples the colleagues(objects) from each other by having them communicate indirectly through a mediator.

Improves resuability of objects
Since the mediator handles the interactions between complext objects. The indivisual object become more resuable
as they are no longer tightly coupled to each other.

Facilitates behavioural changes 
We can easily change the way objects interact by modifying the mediator without altering the indivisual objects.
*/
