// setup:
const K = 1024;
const length = 1 * K * K;

// Theses points are created one after the other, so they are allocated
// sequentially in memory.
const points = new Array(length);
for (let i = 0; i < points.length; i++) {
  points[i] = { x: 42, y: 0 };
}

// This array contains the *same data* as above, but shuffled randomly.
const shuffledPoints = shuffle(points.slice());

// 1. sequential
let _ = 0;
for (let i = 0; i < points.length; i++) {
  _ += points[i].x;
}

// 2. random
let _ = 0;
for (let i = 0; i < shuffledPoints.length; i++) {
  _ += shuffledPoints[i].x;
}

// This aspect is probably the hardest to put in practice,
// because javascript doesn’t have a way of placing objects in memory,
// but you can use that knowledge to your advantage as in the example above,
// for example to operate on data before re-ordering or sorting it.
// You cannot assume that objects created sequentially will stay at the same location after some time because the garbage collector might move them around.
// There is one exception to that, and it’s arrays of numbers, preferably TypedArray instances:
// from this

//optimization at it's max
// const points = [
//   { x: 0, y: 5 },
//   { x: 0, y: 10 },
// ];

// // to this
// const points = new Int64Array([0, 5, 0, 10]);

// The second optimization CPUs use is the L1/L2/L3 caches: those are like faster RAMs,
// but they are also more expensive, so they are much smaller. They contain RAM data,
// but act as an LRU cache. Data comes in while it’s “hot” (being worked on),
// and is written back to the main RAM when new working data needs the space.
// So the key here is use as little data as possible to keep your working dataset in the fast caches.
// In the following example, we can observe what are the effects of busting each of the successive caches.

// setup:
// const KB = 1024;
// const MB = 1024 * KB;

// These are approximate sizes to fit in those caches. If you don't get the
// same results on your machine, it might be because your sizes differ.
// const L1 = 256 * KB;
// const L2 = 5 * MB;
// const L3 = 18 * MB;
// const RAM = 32 * MB;

// We'll be accessing the same buffer for all test cases, but we'll
// only be accessing the first 0 to `L1` entries in the first case,
// 0 to `L2` in the second, etc.
// const buffer = new Int8Array(RAM);
// buffer.fill(42);

// const random = (max) => Math.floor(Math.random() * max);
// // 1. L1
// let r = 0; for (let i = 0; i < 100000; i++) { r += buffer[random(L1)] }
// // 2. L2
// let r = 0; for (let i = 0; i < 100000; i++) { r += buffer[random(L2)] }
// // 3. L3
// let r = 0; for (let i = 0; i < 100000; i++) { r += buffer[random(L3)] }
// // 4. RAM
// let r = 0; for (let i = 0; i < 100000; i++) { r += buffer[random(RAM)] }

// Immutability is great for clarity and correctness, but in the context of performance,
// updating an immutable data structure means making a copy of the container,
// and that’s more memory I/O that will flush your caches.
// You should avoid immutable data structures when possible.

// It’s very convenient, but every time you use it you create a new object in memory. More memory I/O, slower caches!
