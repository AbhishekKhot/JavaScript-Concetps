let names = ["Danny", "Joe", "Sarah", "Molly"];

//1.toString
console.log("toString: ", names.toString());

//2.join
console.log("join: ", names.join(","));

//3.concate
console.log(
  "concate: ",
  names.concat(["Dan", "Jolly", "Rock"], ["Mat", "Leo"])
);
console.log("after concate: ", names); //original array doesn't changed

//4.splice (remove or add elements from array)
let res = names.splice(1, 1);
console.log("removed with splice: ", res);
console.log("remaining after splice: ", names);

//add values using splice
names.splice(3, 2, "Rakesh", "Ramesh", "Ramesh");
console.log(names);

//5.slice (slice out part of an array)
console.log("slice: ", names.slice(1, 3)); //from index, upto index(exclusive index)
console.log("after slice original array: ", names); //original kept as it is, slice works on copy of array

//6.indexOf (find first occurrence element inside array)
let firstIndex = names.indexOf("Ramesh");
console.log("Ramesh's 1st index: ", firstIndex);

//7.lastIndexOf (find last occurrence of element inside array)
let lastIndex = names.lastIndexOf("Ramesh");
console.log("Ramesh's last index: ", lastIndex);

// 8.flat
let nums = [1, 2, 3, 4, [5, 6], 7];
console.log("before flat: ", nums);
console.log("flatten array: ", nums.flat());
console.log("after flat: ", nums);
// before and after will be same as flat works on copy of array

// flat function takes number of levels deep flaten the array, default is 1
nums.push([8, [9, 10]]);
console.log("nested array: ", nums.flat(2)); //this will flaten 2nd level nesting

// Higher order array functions
// 9.forEach
nums.forEach((no) => {
  console.log(no);
});
//more controlled apporach
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// 10.map
let nums = [1, 2, 3, 4, 5];
console.log("before map: ", nums);
let doubledArray = nums.map((no) => no * 2);
console.log("doubled array; ", doubledArray);
console.log("after map: ", nums);

// 11.filter
let posts = [
  { title: "post 1", author: "Dan" },
  { title: "post 2", author: "Sarah" },
  { title: "post 3", author: "Dan" },
  { title: "post 4", author: "Dan" },
];
console.log("before filter: ", posts);
let dansPosts = posts.filter((post) => post.author === "Dan");
console.log("dan's posts: ", dansPosts);
console.log("after filter: ", posts);

// 12.reduce (takes an array and reduce it into single value)
let nums = [1, 2, 3, 4, 5, 6];
console.log("before reduce: ", nums);
let sum = nums.reduce((sum, currNo) => sum + currNo);
console.log("sum using reduce: ", sum);
console.log("after reduce: ", nums);

let sum2 = nums.reduce((sum, currNo) => sum + currNo, 10); //we can pass default sum value i.e 10
console.log(sum2);

//find max no inside array using reduce
let maxNo = nums.reduce((a, b) => (a > b ? a : b));
console.log("maximum no with reduce: ", maxNo);

// 13.some() some of elements passes the given condition the returns true
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isGreaterThan5 = nums.some((no) => no > 5);
console.log(isGreaterThan5);

// 14.every() every elements of the array passes the given condition
let nums = [1, 2, 3, 4, 5];
let isAllGreaterThan0 = nums.every((no) => no > 0);
console.log(isAllGreaterThan0);

// 15.find
let stock = [
  { item: "foot balls", quantity: 100 },
  { item: "basket balls", quantity: 200 },
  { item: "tennis balls", quantity: 500 },
];

let footsBalls = stock.find((stock) => stock.item === "foot balls");
console.log(footsBalls);

// 16.findIndex returns index of first occurrence of element passing the condition
console.log(stock.findIndex((stock) => stock.item === "tennis balls"));

//17.sort default sort works on javascript strings
let names = ["Ramesh", "Abhishek", "Rakesh", "Zeshaan", "Priya"];
console.log("before sort: ", names);
names.sort();
console.log("after sort: ", names);

//sorting numbers
let numbers = [4, 5, 1, 3, 2];
numbers.sort();
console.log(numbers); //this will sort the numbers this is done on the basis of 1'st digit only

let nums = [10, 12, 22, 33, 20, 4, 5];
nums.sort();
console.log("incorrect sorting: ", nums); //this will not get sorted as these 2 digit numbers
//actual solution is to pass callback function
nums.sort((a, b) => a - b);
//to sort in decreasig order
// nums.sort((a, b) => b - a);
console.log("correct sorting: ", nums);
