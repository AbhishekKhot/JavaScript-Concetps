// 1.Memory management & memory leaks
// 2.Causes of memory leaks
// 3.Prevanting memory leaks
// 4.Tools for debugging memory leaks

// Reason of memory leaks
// 1.non-cleared timeoutes/intervals
// 2.global varibales
// 3.clousers
// 4.unreferenced nodes

// global variables are attached to root node (global object in case of node.js) which is why
// garbage collector would never be sure about when to remove global variables

//garbage collection
// 1.Find the root and recursively it's childerns
// 2.Mark every child as active or in-active
// 3.Delete all the in-active references from the memory

// memory leaks patterns
// window.x = 10
// window.cal = function = () => {}

// const myTimeout = setTimeout(()=>{
//     let node = document.getElementById("node")
// },100)

// node.remove()
// clearTimeout(myTimeout) //clear the timeouts

//even after removing the node timeout will keep the reference to the node, so always clear the timeoutes/intervals

// let nodes {
//     btn: document.getElementById("node");
// }
// document.getElementById("node")
// delete nodes.btn //always delete keys from the object also

var x = [];
function createSomeNodes() {
  var div,
    i = 100;
  frag = document.createDocumentFragment();
  for (; i > 0; i--) {
    div = document.createElement("div");
    div.appendChild(
      document.createTextNode(i + " - " + new Date().toTimeString())
    );
    frag.appendChild(div);
  }
  document.getElementById("nodes").appendChild(frag);
}

function grow() {
  x.push(new Array(100000000).join("x"));
  createSomeNodes();
  setTimeout(grow, 1000);
}
