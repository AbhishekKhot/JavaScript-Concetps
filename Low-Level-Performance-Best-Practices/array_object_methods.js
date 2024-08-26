// const result = [1.5, 3.5, 5.0]
//   .map((n) => Math.round(n))
//   .filter((n) => n % 2 === 0)
//   .reduce((a, n) => a + n, 0);

const numbers = Array.from({ length: 10_000 }).map(() => Math.random());
const result = numbers
  .map((n) => Math.round(n * 10))
  .filter((n) => n % 2 === 0)
  .reduce((a, n) => a + n, 0);

//   They need to make a full copy of the array, and those copies later need to be freed by the garbage collector.

// const numbers = Array.from({ length: 10_000 }).map(() => Math.random());

// let result = 0;
// for (let i = 0; i < numbers.length; i++) {
//   let n = Math.round(numbers[i] * 10);
//   if (n % 2 != 0) continue;
//   result = result + n;
// }

// Object methods such as Object.values(), Object.keys() and Object.entries() suffer from similar problems, as they also allocate more data, and memory accesses are the root of all performance issues
