// const fragment = document.createDocumentFragment();
// const p1 = document.createElement("p");
// p1.textContent = "This is first paragraph";
// const p2 = document.createElement("p");
// p2.textContent = "This is second paragraph";
// const p3 = document.createElement("p");
// p3.textContent = "This is third paragraph";

// fragment.appendChild(p1);
// fragment.appendChild(p2);
// fragment.appendChild(p3);

// const container = document.getElementById("container");
// container.appendChild(fragment);

// When you need to append multiple elements to the DOM,
// using a DocumentFragment can improve performance.
// Instead of appending each element one by one (which causes multiple reflows and repaints),
// you append all elements to the DocumentFragment and then append the fragment to the DOM in a single operation.

// const fragment = document.createDocumentFragment();

// for (let i = 0; i < 1000; i++) {
//   const div = document.createElement("div");
//   div.textContent = `Item ${i}`;
//   fragment.appendChild(div);
// }
// document.body.appendChild(fragment);

// When you have a series of updates to make to the DOM,
// you can collect these updates in a DocumentFragment and then apply them all at once.

// const list = document.getElementById("list");
// const fragment = document.createDocumentFragment();
// const items = ["Item1", "Item2", "Item3"];

// items.forEach((item) => {
//   const li = document.createElement("li");
//   li.textContent = item;
//   fragment.appendChild(li);
// });

// list.appendChild(fragment);

// When generating content dynamically, such as in templating systems,
// you can use DocumentFragment to build the content structure before inserting it into the DOM.

// const template = document.getElementById("template");
// const fragment = document.createDocumentFragment();

// data.forEach((element) => {
//   const clone = document.importNode(template.content, true);
//   clone.querySelector(".title").textContent = item.title;
//   clone.querySelector(".description").textContent = item.description;
//   fragment.appendChild(clone);
// });

// document.body.appendChild(fragment);
