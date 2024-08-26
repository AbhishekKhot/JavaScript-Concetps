/* 
The Iterator Pattern provides a way to access elements of a collection sequentially without exposing its underlying representation.
It allows you to traverse through a collection, such as an array or an object, in a standardized manner.
Practical use cases include data structure traversal, file reading, pagination, and asynchronous data handling.
*/

/* Iterator pattern */
const items = [1, 2, 3, 4, 5];

class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }
  hasNext() {
    return this.index < this.items.length;
  }
  next() {
    return this.items[this.index++];
  }
}

const iterator = new Iterator(items);
while (iterator.hasNext()) {
  console.log(iterator.next());
}

/* Built-in js iterator */
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const builtInIterator = array[Symbol.iterator]();

console.log(builtInIterator.next());
console.log(builtInIterator.next());

/* Custom iterable object */
class CustomCollection {
  constructor(items) {
    this.items = items;
  }

  [Symbol.iterator]() {
    let index = 0;
    const items = this.items;

    return {
      next() {
        if (index < items.length) {
          return { value: items[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const customCollectionObj = new CustomCollection([
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
]);

for (const item of customCollectionObj) {
  console.log(item);
}

/* Asynchronous iterator */
async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield new Promise((resolve) => setTimeout(() => resolve(i++), 3000));
  }
}

(async () => {
  const asyncIterator = asyncGenerator();

  for await (const num of asyncIterator) {
    console.log(num);
  }
})();

/*
Advantages of iterator pattern
Encapsulation
it encapsulate the iteration logic, allowing the collection to change it's internal representation without 
affecting the client code

Single responsibility
it seperates the travesal logic from the collection, adhering to the single responsibilty principle

Flexibility
iterator provide a common interface for traversing different type of collections, making it easier to work
with the an uniform way. the collection class does not need to expose it's internal structure, which keeps its
iterface clean

User cases
iterators can be used to traverse complex data structures such as trees, graph and custom collections
an iterator can be used to read a file line by line, useful in processing large files without loading the
entire file into memory
iterators used manage panigation in applications by sequentially fetching and processinf data in chunks
async and await iterators can handle asynchronous data streams, such as reading from a network source or database
*/