// 1. proxy access
// const point = new Proxy({ x: 10, y: 20 }, { get: (t, k) => t[k] });

// for (let _ = 0, i = 0; i < 100_000; i++) {
//   _ += point.x;
// }

// 2.direct access
// const point = { x: 10, y: 20 }
// const x = point.x

// for (let _ = 0, i = 0; i < 100_000; i++) { _ += x }

// 1. nested access
// const a = { state: { center: { point: { x: 10, y: 20 } } } };
// const b = { state: { center: { point: { x: 10, y: 20 } } } };
// const get = (i) => (i % 2 ? a : b);

// let result = 0;
// for (let i = 0; i < 100_000; i++) {
//   result = result + get(i).state.center.point.x;
// }

// 2. direct access
// const a = { x: 10, y: 20 }.x;
// const b = { x: 10, y: 20 }.x;
// const get = (i) => (i % 2 ? a : b);

// let result = 0;
// for (let i = 0; i < 100_000; i++) {
//   result = result + get(i);
// }
