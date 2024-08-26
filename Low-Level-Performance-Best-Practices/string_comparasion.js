//bad practice
const Position = {
  TOP: "TOP",
  BOTTOM: "BOTTOM",
};

let _ = 0;
for (let i = 0; i < 100000; i++) {
  let current = i % 2 === 0 ? Position.TOP : Position.BOTTOM;
  if (current === Position.TOP) {
    _ += 1;
  }
}

//best practice

// const Position = {
//   TOP: 0,
//   BOTTOM: 1,
// };

// let _ = 0;
// for (let i = 0; i < 100000; i++) {
//   let current = i % 2 == 0 ? Position.TOP : Position.BOTTOM;
//   if (current === Position.TOP) {
//     _ += 1;
//   }
// }

//comparing numbers is 60% faster than comparing string

//numbers upto the limit are sotred in memory by pointer not by a value
//strings are stored by the value in heap-memory

// integers are usually passed by value in JS engines, whereas strings are always passed as pointers
