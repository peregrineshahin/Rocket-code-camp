/// Trying console.log
// console.log("Hello, I got loaded!");
// console.log(1 + 2);

// var x = 5;
/// operation oevr x
// console.log(x);
// console.log(x + 1);
// console.log(x / 2);

/// printing type of x
// console.log(typeof(x));

// changing type of x

// x = "Shahin";

// console.log(x);
// console.log(typeof(x));

/// trying global scope

// console.log(window.x);
// console.log(x);

/// testing var
// {
//    var name1 = "ammar";
//    console.log(name1);
// }

// console.log(name1);

/// testing hoisting on var
// var name2 = "ali";
// var name2 = "ahmad";
// console.log(name2);

/// testing hositing on let

// let name3 = "rand";
// let name3 = "ola";

// console.log(name3);

// testing global level on var

// var name4 = "ahmed";

// {
//     var name4 = "ali";
// }

// console.log(name4);

/// testing block level on let
// let name5 = "ahmed";
// name5 = "fuad";
// {
//     let name5 = "ali";
//     console.log(name5); // ali
// }

// console.log(name5); // fuad

/// Testing varaible naming
// let name 7 = "tamer";

/// Test difference between let and const
// let variable1 = "someName1";
// variable1 = "someName2";
// console.log(variable1);

// const variable2 = "someName3";
// variable2 = "someName4";

// console.log(variable2);

/// Testing some javascript types on the console

// typeof true;
// ("boolean");
// type(4);

// typeof 4;
// ("number");
// typeof "g";
// ("string");

// typeof [];
// ("object");
// typeof {};
// ("object");
// typeof function doSomething() {};
// ("function");
// typeof class name {
//   constructor(params) {}
// };
// ("function");

/// Testing if arrays can hold multiple types
// console.log([1, 2, 3, "9"])

/// changing array of let
// let arr = [1, 2, 3, "9"];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// arr = [5, 8, 9];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[4]); undefined log value

/// changing array of const with equal assignment
// const arr = [1, 2, 3, "9"];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// arr = [5, 8, 9];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

/// changing array with const in the proper way
// const arr = [1, 2, 3, "9"];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// arr[0] = 5;
// arr[1] = 8;
// arr[2] = 9;

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

/// Testing are string iterable? also for loop
// yes because strings can be dealt with as an array
// const name6 = "shahin";
// for (let i = 0; i < name6.length; i++) {
//     console.log(name6[i]);
// }

/// writing for loop as while
// const name6 = "shahin";
// let i = 0;
// while (i < name6.length) {
//   console.log(name6[i]);
//   i++;
// }

/// testing if else
// let x = 6;
// if (x == 5) {
//   console.log("number is 5");
// } else {
//   console.log("number is not 5");
// }

/// testing if else if
// let x = 76;
// if (x == 5) {
//   console.log("number is 5");
// } else if (x == 6) {
//   console.log("number is 6");
// } else {
//   console.log("number is neither 5 or 6");
// }

// / Testing continue and break in while loop
// skip even numbers
// let counter = -1;
// while (counter < 11) {
//   counter++;
//   if (counter % 2 != 0) {
//     continue;
//   }
//   console.log(counter);
// }

// let counter = -1;
// while (counter < 11) {
//   //   counter = counter + 2;
//   counter += 2;
//   console.log(counter);
// }

/// convention of variable naming
// let camelCase = "";
// let PascalCase = "";
// let snake_case = "";
// let kebab = "kebab-case";

// let user = {
//   name: "Shahin",
//   age: "26",
//   jobTitle: "Software Engineer",
// };

// console.log(user);

// console.log(JSON.parse(userJson));

// // / method 1
// console.log(user.name);
// console.log(user.age);
// console.log(user.jobTitle);

// // method 2
// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user["jobTitle"]);

// / difference between [""] and . in object literals

// let userJson = `{"name":"Shahin","age":"26","job-title":"Software Engineer"}`;
// let user = JSON.parse(userJson);
// console.log(userJson);
// console.log(user.job-title);
// console.log(user["job-title"]);

/// write a program that sums two numbers
// why we need functions?
// let a = 5;
// let b = 3;

// console.log(a + b);

// let a1 = 8;
// let b1 = 9;

// console.log(a1 + b1);

/// pure function
// function sum(a, b) {
//   return a + b;
// }

// let result1 = sum(5, 3);
// console.log(result1);

// let result2 = sum(8, 9);
// console.log(result2);

// non pure function and backticks
// functions in javascript can access larger scope

// let name1 = "shahin";

// function sayHello() {
//   name1 = "ahmed";
//   console.log("Hello I'm " + name1);
// }

// sayHello();

// pure function
// let array1 = [1, 2, 3];

// function printArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// printArray(array1);

/// pure function
// let array1 = [1, 2, 3];
// let greeting = "Hello!";

// function printArray(arr) {
//   console.log(greeting);
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// printArray(array1);

/// side effect
// let array1 = [1, 2, 3];

// function modifyAndPrintArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// modifyAndPrintArray(array1);

/// reassigning another object
// let user = {
//   name: "Shahin",
//   age: "26",
//   jobTitle: "Software Engineer",
// };

// user = {
//   name: "mohammad",
//   age: 15,
// };

// console.log(user.name);

/// modifying the object
// let user = {
//   name: "Shahin",
//   age: "26",
//   jobTitle: "Software Engineer",
// };

// user.name = "mohammad";

// console.log(user.name);

/// Another difference between [""] , .
// let company = {
//   name: "Gistec",
// };

// console.log(company.name);

// let key = "name";
// console.log(company[key]);

/// mutability
// passing values are passe by values and copied
// let a = 5;

// function multiplyBy5(num) {
//   num *= 5;
//   return num;
// }

// console.log(multiplyBy5(a)); // 25
// console.log(a); // 5

/// passing objects which is by reference
// let rectangle = {
//   x: 5,
//   y: 10,
// };

// function multObjXby5(obj) {
//   obj.x *= 5;
//   return obj.x;
// }

// console.log(multObjXby5(rectangle)); // 25
// console.log(rectangle.x); // 25

// let arr1 = new Array(1, 2, 3, 4);
// let arr = [1, 2, 3, 4];
// function decremntArr(array) {
//   /// a fucntion that decrement each element of the array by one
//   for (let i = 0; i < array.length; i++) {
//     array[i] -= 1;
//   }
//   return array;
// }

// console.log(decremntArr(arr)); // [0, 1, 2, 3]
// console.log(arr); // []

/// we don't want to change the original array now
// function decremntArr(array) {
//   /// a fucntion that decrement each element of the array by one
//   for (let i = 0; i < array.length; i++) {
//     array[i] -= 1;
//   }
//   return array;
// }

// function incrementArr(array) {
//   /// a fucntion that decrement each element of the array by one
//   for (let i = 0; i < array.length; i++) {
//     array[i] += 1;
//   }
//   return array;
// }

// let arr1 = [1, 2, 3, 4];
// let decrementedArray = decremntArr(structuredClone(arr1)); // deep copy.
// let incrementedArray = incrementArr(structuredClone(arr1)); // deep copy

// console.log("arr1: " + arr1);
// console.log("decrementedArray: " + decrementedArray);
// console.log("incrementedArray: " + incrementedArray);

// console.log(`arr1: ${arr1}`);
// console.log(`decrementedArray: ${decrementedArray}`);
// console.log(`incrementedArray: ${incrementedArray}`);

/// find an element in an array if it doesnt exist return undefined or null
// let arr1 = [2, 4, 6, 8];

// function findInArray(array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == element) return element;
//   }
//   return -1;
// }

// console.log(findInArray(arr1, 9));

/// write a function that filters an array to only even numbers

// let arr1 = [1, 2, 3, 5, 8, 9];

// function filterArrEven(arr) {
//   let tempArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       tempArr.push(arr[i]);
//     }
//   }
//   return tempArr;
// }

// console.log(filterArrEven(arr1));

/// callbacks
// function customFilter(array, predicate) {
//   const filteredArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (predicate(array[i], i, array)) {
//       filteredArray.push(array[i]);
//     }
//   }
//   return filteredArray;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Custom filtering function to filter even numbersfunction
// function isEven(num) {
//   return num % 2 === 0;
// }

// const evenNumbers = customFilter(numbers, isEven);
// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// let arr5 = [1, 2, 3, 4];

// function inc(el) {
//   return el + 1;
// }

// // callback function
// function print(el) {
//   console.log(el);
// }

// arr5.forEach(print);
// arr5.forEach(inc);

/// how to use map
// console.log(arr5.map(inc));

// [
//   { name: "ahmed" },
//   { name: "mohammad", age: 20 },
//   { name: "ali", age: 15 },
// ].forEach(function (obj, index) {
//   if (index == 1) return;
//   console.log(obj);
// });

// // method 1
// console.log(
//   [1, 2, 3, 4, 6].filter(function (el) {
//     return el % 2 == 0;
//   }),
// );

// method 2
// let array = [1, 2, 3, 4, 6];
// let copiedArray = array.filter(function (el) {
//   return el % 2 == 0;
// });

// console.log(copiedArray);

/// trying every()
// function equalOne(x) {
//   return x === 1;
// }

// let array = [1, 1, 1, 2, 1];

// let result = array.every(equalOne);

// let result1 = array.every(function (x) {
//   return x === 1;
// });

// console.log(result1);

/// trying some

// let array = [1, 1, 1, 2, 1];

// let result1 = array.some(function (x) {
//   return x === 3;
// });

// console.log(result1);

// let array = [1, 2, 4, 7, 6];

// let result1 = array.findIndex(function (x) {
//   return x === 7;
// });

// console.log(result1);

// function equalTo7(x) {
//   return x === 7;
// }

// const equalTo7Different = function (x) {
//   return x === 7;
// };

// const equalTo7Arrow = (x) => x === 7;

// console.log("I am arrow function, and my result is: " + equalTo7Arrow(7));

// const sumOfArray = (array) => {
//   return array.reduce(function (el, agg) {

//   });
// };

// will change because objects are passed by reference
// let arr = [{ name: "ammar" }, { name: "layan" }];

// arr.forEach(function (el) {
//   el.name = "";
// });

// console.log(arr);

// will not change the original rray because value are passed by value
// i.e. copied when passed to the anonymous funciton
// let arr = [5, 4];

// arr.forEach(function (el) {
//   el = 2;
// });

// console.log(arr);

// let arr = [{ name: "ammar" }, { name: "layan" }];

// arr.forEach(function (el) {
//   el.name = "";
// });

// console.log(arr);

// const sayHi = function () {
//   return "hi";
// };

// const sayHi2 = () => "hi2";

// console.log(sayHi2());

/// arrow funciton
// class component {
//   constructor() {
//     this.name = "shahin";
//   }

//   foo = () => {
//     console.log(this);
//   };
//   bar = () => {
//     const hello = () => {
//       console.log(this.name);
//     };

//     hello();
//     console.log(this.name);
//   };
// }

// const someObject = new component();
// someObject.bar();
// {
//   let name2 = "shahin";

//   // Normal function
//   function greetNormal() {
//     console.log("Hello, " + this.name);
//   }

//   // Arrow function
//   const greetArrow = () => {
//     console.log("Hello, " + name2);
//   };

//   const obj = {
//     name: "Alice",
//     greetNormal: greetNormal,
//     greetArrow: greetArrow,
//   };

//   obj.greetNormal(); // Output: Hello, Alice
//   obj.greetArrow(); // Output: Hello, undefined (because arrow functions do not have their own 'this')
// }


