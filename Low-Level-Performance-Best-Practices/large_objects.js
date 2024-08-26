// setup:
const USERS_LENGTH = 1_000;

// setup:
const byId = {};
Array.from({ length: USERS_LENGTH }).forEach((_, id) => {
  byId[id] = { id, name: "John" };
});
let _ = 0;

// 1. [] access
Object.keys(byId).forEach((id) => {
  _ += byId[id].id;
});

// 2. direct access -> this one is faster
Object.values(byId).forEach((user) => {
  _ += user.id;
});

// Some javascript patterns are hard to optimize for engines,
// and by using eval() or its derivatives you can make those patterns disappear.
// In this example, we can observe how using eval() avoids the cost of creating an object with a dynamic object key:

// setup:
const key = "requestId";
const values = Array.from({ length: 100_000 }).fill(42);

// 1. without eval
function createMessages(key, values) {
  const messages = [];
  for (let i = 0; i < values.length; i++) {
    messages.push({ [key]: values[i] });
  }
  return messages;
}

createMessages(key, values);

// 2. with eval
function createMessages(key, values) {
  const messages = [];
  const createMessage = new Function(
    "value",
    `return { ${JSON.stringify(key)}: value }`
  );
  for (let i = 0; i < values.length; i++) {
    messages.push(createMessage(values[i]));
  }
  return messages;
}

createMessages(key, values);
