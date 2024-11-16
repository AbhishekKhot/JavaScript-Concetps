// // const str = "A string premitive";

// // const str1 = new String("A string object");

// // both are string object when declared using "" js internally converts it's to string object

// //string length
// //string character access

// //1.chatAt()
// const s1 = "javascript string methods";
// console.log(s1.charAt(9));
// console.log(s1.charAt(s1.length - 1));

// //2.indexOf() and lastIndexOf()
// const s2 = "The code undefined code code !";
// console.log(s2.indexOf("Code")); //-1 as indexOf is case sensitive
// console.log(s2.lastIndexOf("Code")); //-1
// console.log(s2.indexOf("code")); //4
// console.log(s2.indexOf("code")); //24
// console.log(s2.indexOf("code", 4)); //4 takes second parameter as start look up position in string
// console.log(s2.lastIndexOf("code", 24)); //24
// console.log(s2.indexOf("code", -4)); //4
// console.log(s2.lastIndexOf("code", -5)); //-1
// console.log(s2.indexOf(" ")); //0
// console.log(s2.lastIndexOf(" ")); //0 as start and end position has empty string
// console.log(s2.indexOf()); //9
// console.log(s2.lastIndexOf()); //9 this is because string has undefined as string function will look for it and returns it's position

// //3.slice() and substring() does not mutates orignal string returns new string
// const s3 = "The morning is upon us";
// console.log(s3.slice()); // "The morning is upon us"
// console.log(s3.substring()); // "The morning is upon us"
// console.log(s3.slice(12)); // "is upon us"
// console.log(s3.substring(12)); // "is upon us"
// console.log(s3.slice(-11)); // "is upon us" as it starts from end and check for -11 index
// console.log(s3.substring()); // "The morning is upon us" -11 is considered as 0
// console.log(s3.slice(23)); // "" 23 is the end index
// console.log(s3.substring(23)); // "" 23 is the end index
// console.log(s3.slice(13, 16)); // "s u"
// console.log(s3.substring(13, 16)); // "s u"
// console.log(s3.slice(16, 13)); // "" invalid index order
// console.log(s3.substring(16, 13)); // "s u"
// console.log(s3.slice(-8, -4)); // "upon" starts from right side
// console.log(s3.substring(-8, -4)); // ""
// console.log(s3.slice(-8, 4)); //"" -8 converted to 0 then 0,4 so invalid index
// console.log(s3.substring(-8, 4)); // "The" -8, 4 = 0 4
// console.log(s3.slice(8, -4)); // "ing is upon" starts from position 8 to -4 from right side
// console.log(s3.substring(8, -4)); // "The morn" 8, -4 = 8 0 = 0 8 start from 0 upto 8 excluding 8th postion

// //4.split() returns array of split strings with specified operator. Does not mutates the original array
// const s4 = "The morning is upon us";
// const arr0 = s4.split();
// console.log(arr0); // ["The morning is upon us"]
// const arr1 = s4.split("");
// console.log(arr1); // ["T","h","e","m",...] sperated by empty character
// const arr2 = s4.split(" ");
// console.log(arr2); // [ 'The', 'code', 'undefined', 'code', 'code', '!' ]
// const arr3 = s4.split("o");
// console.log(arr3); // [ 'The m', 'rning is up', 'n us' ] character o is not included
// const arr4 = s3.split("o", 2);
// console.log(arr4); // [ 'The m', 'rning is up' ] limits number of elements in array

// //5.includes()
// const s5 = "The quick brown fox jumps over the lazy dog";
// console.log(s5.includes("fox")); //true
// console.log(s5.includes("FOX")); //false as case sensitive
// console.log(s5.includes("fox", 0)); //true
// console.log(s5.includes("fox", 16)); //true
// console.log(s5.includes("fox", 17)); //false

// //6.startsWith() and endsWith()
// const s6 = "Cats are the best";
// console.log(s6.startsWith("Cat")); //true
// console.log(s6.startsWith("cat")); //false
// console.log(s6.startsWith("ar", 5)); //false
// console.log("wrap");
// console.log(s6.endsWith("best")); //true
// console.log(s6.endsWith("be")); //false
// console.log(s6.endsWith("best", 5)); //false
// console.log(s6.endsWith("best", 17)); //true second parameter is length of the string
// console.log(s6.endsWith("t")); //true

// //7.concat() returns new string does not mutats original strings
// const str1 = "Hello";
// const str2 = "World";
// console.log(str1.concat(str2));
// console.log(str1.concat(" ", str2));
// //using +, += operators are better for performance as compared to concat() function

// //8.repeat()
// string.repeat();
// "abc".repeat(); // ""
// "abc".repeat(1); // "abc"
// "abc".repeat(3.5); // "abcabcabc"
// "abc".repeat(-1); // RangeError
// "abc".repeat(1 / 0); // RangeError

// //9.trim() trimStart() trimEnd()
// const str = " Hello World ";
// const strTrimStart = str.trimStart(); // "Hello World "
// const strTrimEnd = str.trimEnd(); // " Hello World"
// const strTrim = str.trim(); //"Hello World"

//10.padStart() padEnd()
// "abc".padStart(10); //"       abc" 7 character spaces from start
// "abc".padEnd(20); //"abc       " 7 character spaces from end
// "abc".padStart(10, "xyz"); //"xyzxyzxabc"
// "abc".padEnd(10, "xyz"); //"abcxyzxyzx"
// "abc".padStart(10, "12345678"); //"1234567abc"
// "abc".padEnd(10, "12345678"); //"abc1234567"
// "abc".padStart(2); //"abc"
// "abc".padEnd(2); //"abc"

//11.localCompare()
// "a".localeCompare("b"); //-1 or -2
// "b".localeCompare("a"); //1 or 2
// "a".localCompare("a"); //0

// "a".localCompare("z", "de"); //-1 as in german a sorts before z
// "a".localCompare("z", "sv"); //1 as in swedish a sorts after z

// //12.search()
// let text = "The rain in SPAIN stays mostly in the plain";
// console.log(text.search("ain")); //5 first match position
// console.log(text.search("AIN")); //14 case sensitive
// console.log(text.search(/AIN/)); //14
// console.log(text.search(/AIN/i)); //5 as this will search for both small case and upper case
// console.log(text.search(/W/)); //-1 as match not found

// //13.match() returns first match regex
// let text = "The rain in SPAIN stays mostly in the plain";
// console.log(text.match("ain")); // ['ain',index: 5,input: 'The rain in SPAIN stays mostly in the plain',groups: undefined]
// console.log(text.match(/ain/)); // ['ain',index: 5,input: 'The rain in SPAIN stays mostly in the plain',groups: undefined]
// console.log(text.match(/ain/g)); // [ 'ain', 'ain' ]
// console.log(text.match(/AIN/gi)); // [ 'ain', 'AIN', 'ain' ]
// console.log(text.match(/w/)); // null

// //14.matchAll() returns all matching results as array, accepts global regular expression

// //15.replace() does not mutates the original string
// let text = "Mr Blue has a blue house and blue car";
// let res1 = text.replace("blue", "yellow"); //replace first occurence
// console.log(res1); //Mr Blue has a yellow house and blue car
// let res2 = text.replace("blue", (match) => {
//   //replace first occurence
//   return match.toUpperCase();
// });
// console.log(res2); //Mr Blue has a BLUE house and blue car
// let res3 = text.replace(/blue/g, "red"); ////replace all occurences
// console.log(res3); //Mr Blue has a red house and red car
// let res4 = text.replace(/blue/gi, (match) => {
//   return match.toUpperCase();
// });
// console.log(res4); // Mr BLUE has a BLUE house and BLUE car

//16.replaceAll() replaces all occurrences of matches

//17.raw()
