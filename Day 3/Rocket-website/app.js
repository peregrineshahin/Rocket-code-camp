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

/// method 1
// console.log(user.name);
// console.log(user.age);
// console.log(user.jobTitle);

// method 2
// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user["jobTitle"]);

/// difference between [""] and . in object literals

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

// side effect
// let array1 = [1, 2, 3];

// function modifyAndPrintArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// modifyAndPrintArray(array1);
