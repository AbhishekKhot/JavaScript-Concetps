let names = ["Danny", "Joe", "Sarah", "Molly"];

// //1.toString
// console.log("toString: ", names.toString());

// //2.join
// console.log("join: ", names.join(","));

// //3.concate
// console.log(
//   "concate: ",
//   names.concat(["Dan", "Jolly", "Rock"], ["Mat", "Leo"])
// );
// console.log("after concate: ", names); //original array doesn't changed

// //4.splice (remove or add elements from array) mutats original array
// let res = names.splice(1, 1);
// names.splice(start)
// names.splice(start,deleteCount)
// names.splice(start,deleteCount,item1) //replaces item1 from start upto delete count
// names.splice(start,deleteCount,item1,item2,item3,...itemN) //all items would be added after removing deleteCount elements from start index of array
// console.log("removed with splice: ", res);
// console.log("remaining after splice: ", names);

// //add values using splice
// names.splice(3, 2, "Rakesh", "Ramesh", "Ramesh");
// console.log(names);

// //5.slice (slice out part of an array)
// console.log("slice: ", names.slice(1, 3)); //from index, upto index(exclusive index)
// console.log("after slice original array: ", names); //original kept as it is, slice works on copy of array

// //6.indexOf (find first occurrence element inside array)
// let firstIndex = names.indexOf("Ramesh");
// console.log("Ramesh's 1st index: ", firstIndex);

// //7.lastIndexOf (find last occurrence of element inside array)
// let lastIndex = names.lastIndexOf("Ramesh");
// console.log("Ramesh's last index: ", lastIndex);

// // 8.flat
// let nums = [1, 2, 3, 4, [5, 6], 7];
// console.log("before flat: ", nums);
// console.log("flatten array: ", nums.flat());
// console.log("after flat: ", nums);
// // before and after will be same as flat works on copy of array

// // flat function takes number of levels deep flaten the array, default is 1
// nums.push([8, [9, 10]]);
// console.log("nested array: ", nums.flat(2)); //this will flaten 2nd level nesting

// // Higher order array functions
// // 9.forEach
// nums.forEach((no) => {
//   console.log(no);
// });
// //more controlled apporach
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// // 10.map
// let nums = [1, 2, 3, 4, 5];
// console.log("before map: ", nums);
// let doubledArray = nums.map((no) => no * 2);
// console.log("doubled array; ", doubledArray);
// console.log("after map: ", nums);

// // 11.filter
// let posts = [
//   { title: "post 1", author: "Dan" },
//   { title: "post 2", author: "Sarah" },
//   { title: "post 3", author: "Dan" },
//   { title: "post 4", author: "Dan" },
// ];
// console.log("before filter: ", posts);
// let dansPosts = posts.filter((post) => post.author === "Dan");
// console.log("dan's posts: ", dansPosts);
// console.log("after filter: ", posts);

// // 12.reduce (takes an array and reduce it into single value)
// let nums = [1, 2, 3, 4, 5, 6];
// console.log("before reduce: ", nums);
// let sum = nums.reduce((sum, currNo) => sum + currNo);
// console.log("sum using reduce: ", sum);
// console.log("after reduce: ", nums);

// let sum2 = nums.reduce((sum, currNo) => sum + currNo, 10); //we can pass default sum value i.e 10
// console.log(sum2);

// //find max no inside array using reduce
// let maxNo = nums.reduce((a, b) => (a > b ? a : b));
// console.log("maximum no with reduce: ", maxNo);

// // 13.some() some of elements passes the given condition the returns true
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let isGreaterThan5 = nums.some((no) => no > 5);
// console.log(isGreaterThan5);

// // 14.every() every elements of the array passes the given condition
// let nums = [1, 2, 3, 4, 5];
// let isAllGreaterThan0 = nums.every((no) => no > 0);
// console.log(isAllGreaterThan0);

// // 15.find
// let stock = [
//   { item: "foot balls", quantity: 100 },
//   { item: "basket balls", quantity: 200 },
//   { item: "tennis balls", quantity: 500 },
// ];

// let footsBalls = stock.find((stock) => stock.item === "foot balls");
// console.log(footsBalls);

// // 16.findIndex returns index of first occurrence of element passing the condition
// console.log(stock.findIndex((stock) => stock.item === "tennis balls"));

// //17.sort default sort works on javascript strings (mutates original array)
// sort by default converts elements inside array into string and compare them unto utf16 encoding
// let names = ["Ramesh", "Abhishek", "Rakesh", "Zeshaan", "Priya"];
// console.log("before sort: ", names);
// names.sort();
// console.log("after sort: ", names);

// //sorting numbers
// let numbers = [4, 5, 1, 3, 2];
// numbers.sort();
// console.log(numbers); //this will sort the numbers this is done on the basis of 1'st digit only

// let nums = [10, 12, 22, 33, 20, 4, 5];
// nums.sort();
// console.log("incorrect sorting: ", nums); //this will not get sorted as these 2 digit numbers
// //actual solution is to pass callback function
// nums.sort((a, b) => a - b);
// //to sort in decreasig order
// // nums.sort((a, b) => b - a);
// console.log("correct sorting: ", nums);

//18.includes return true if element is present inside array
// let array = ["a", "b", "c", "d"];
// console.log(array.includes("a"));
// console.log(array.includes("a", 1));

//19.push adds element at the end of the array and return new length of the array
// let len = array.push("e");
// console.log(len);
// console.log(array);

//20.unshift adds element at start of the array and returns new length of the array
// let newLen = array.unshift("z");
// console.log(newLen);
// console.log(array);

//21.pop removes last element from array and returns it
// let lastChar = array.pop();
// console.log(lastChar);
// console.log(array);

//22.shift removes first element from array
// let firstChar = array.shift();
// console.log(firstChar);
// console.log(array);

//23.fill fills element inside array and returns modified array (takes start index and end index between which elements are filled)
// let fillRes = array.fill("x", 1); //mutates original array
// console.log(fillRes);
// console.log(array);
// array[3] = "w";
// console.log(array);

//24.copy copies elements within array and returns the new mutated array
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array.copyWithin(targetIndex);
// array.copyWithin(targetIndex, startIndex);
// array.copyWithin(targetIndex, startIndex, endIndex);
// let copyRes = nums.copyWithin(1);
// console.log(copyRes);
// console.log(nums);
// nums.copyWithin(0, 2, 5);
// console.log(nums);

//25.reverse reverse order of elements in array
// Reverses the elements in an array in place.
// This method mutates the array and returns a reference to the same array.
// let nums = [1, 2, 3, 4, 5];
// let reversedNums = nums.reverse();
// console.log(reversedNums);
// console.log(nums);

//26.from Creates an array from an iterable object.
// Array.from(arrayLikeObject iterable object)
// let str = "12345";
// const arrayOfStringNumbers = Array.from(str);
// console.log(arrayOfStringNumbers);
// console.log(str);
// const arrayOfNumbers = Array.from(str, (strNo) => Number(strNo));
// console.log(arrayOfNumbers);
// console.log(str);

//27.isArray returns if passed object/value is instance of array
// const obj = { key: "value" };
// console.log(Array.isArray(obj));
// console.log(obj);

//28.valueOf Returns the primitive value of the specified object. does not mutate original array
// const items = ["Laptop", "Phone", "iPad", "Charger"];
// const itemsCopy = items.valueOf();
// console.log(itemsCopy);
// console.log(items);

//29.entires Returns an iterable of key, value pairs for every entry in the array
// const nums = [1, 2, 3, 4, 5];
// const numsEntry = nums.entries();
// console.log(nums);
// console.log(...numsEntry);
// for (let entry of numsEntry) {
//   console.log(entry[1]);
// }

//30.keys Returns an iterable of keys in the array does not mutates original array
// const chars = ["a", "b", "c", "d", "e"];
// const charKeys = chars.keys();
// console.log(chars);
// console.log(...charKeys);
// for (let key of charKeys) {
//   console.log(key, chars[key]);
// }

//31.values Returns an iterable of values in the array does not mutates original array
// const items = ["a", "b", "c", "d", "e"];
// const itemValues = items.values();
// console.log(items);
// console.log(...itemValues);

//32.reduce does not mutates original array
// let nums = [1, 2, 3, 4, 5];
// function reducer(prevVal, currVal) {
//   return prevVal + currVal;
// }
// let sum = nums.reduce(reducer);
// console.log(sum);
// console.log(nums);

//33.reduce right same as reduce only it start from right side of array
// let nums = [1, 2, 3, 4];
// let sum = nums.reduceRight((prevValue, currValue) => prevValue + currValue);
// console.log(sum);

//34.flat flattens the nested array does not mutates the original array returns new flateen array
// let nums = [1, 2, 3, [4, [5, [6]]]];
// console.log(nums.flat()); //[1,2,3,4,[5,[6]]]
// console.log(nums.flat(2)); //[1,2,3,4,5,[6]]
// console.log(nums.flat(3)); //[1,2,3,4,5,6]
// console.log(nums.flat(4)); //[1,2,3,4,5,6]

//35.flatMap map+flat function it's like calling map and then flat with depth of 1 nested array
// let nums = [1, 2, 3, [4, 5, 6]];
// console.log(
//   nums.flatMap((arr) => {
//     console.log(arr);
//     // return arr[0] + arr[1];
//   })
// );
