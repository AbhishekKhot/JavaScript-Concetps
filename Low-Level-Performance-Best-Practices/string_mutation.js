// We’ve already seen above how strings are more expensive than they appear. Well I have kind of a good news/bad news situation here, which I’ll announce in the only logical order (bad first, good second): strings are more complex than they appear, but they can also be quite efficient used well.

// String operations are a core part of JavaScript due to its context. To optimize string-heavy code, engines had to be creative. And by that I mean, they had to represent the String object with multiple string representation in C++, depending on the use case. There are two general cases you should worry about, because they hold true for V8 (the most common engine by far), and generally also in other engines.

// First, strings concatenated with + don’t create a copy of the two input strings. The operation creates a pointer to each substring. If it was in typescript, it would be something like this:

class String {
    abstract value(): char[] {}
  }
   
  class BytesString {
    constructor(bytes: char[]) {
      this.bytes = bytes
    }
    value() {
      return this.bytes
    }
  }
   
  class ConcatenatedString {
    constructor(left, right) {
      this.left = left
      this.right = right
    }
    value() {
      return [...this.left.value(), ...this.right.value()]
    }
  }
   
  function concat(left, right) {
    return new ConcatenatedString(left, right)
  }
   
  const first = new BytesString(['H', 'e', 'l', 'l', 'o', ' '])
  const second = new BytesString(['w', 'o', 'r', 'l', 'd'])
   
  // See ma, no array copies!
  const message = concat(first, second)



  class SlicedString {
    constructor(source: String, start: number, end: number) {
      this.source = source
      this.start = start
      this.end = end
    }
    value() {
      return this.source.value().slice(this.start, this.end)
    }
  }
   
  function substring(source, start, end) {
    return new SlicedString(source, start, end)
  }
   
  // This represents "He", but it still contains no array copies.
  // It's a SlicedString to a ConcatenatedString to two BytesString
  const firstTwoLetters = substring(message, 0, 2)



  // setup:
const classNames = ['primary', 'selected', 'active', 'medium']

// 1. mutation
const result =
  classNames
    .map(c => `button--${c}`)
    .join(' ')

// 2. concatenation -> faster
const result =
classNames
  .map(c => 'button--' + c)
  .reduce((acc, c) => acc + ' ' + c, '')


//   In general, try to avoid mutation for as long as possible. This includes methods such as .trim(), .replace(), etc. Consider how you can avoid those methods. In some engines, string templates can also be slower than +. In V8 at the moment it’s the case, but might not be in the future so as always, benchmark.

// A note on SlicedString above, you should note that if a small substring to a very large string is alive in memory, it might prevent the garbage collector from collecting the large string! If you’re processing large texts and extracting small strings from it, you might be leaking large amounts of memory.

// const large = Array.from({ length: 10_000 }).map(() => 'string').join('')
// const small = large.slice(0, 50)
//    ^ will keep `large` alive

// replace a token that doesn't exist
// const small = small.replace('#'.repeat(small.length + 1), '')