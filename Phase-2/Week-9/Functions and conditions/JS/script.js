console.log("\n ======== Question 1 =========");

// function functionName(parentheses) {
    
// }

// 1, Function Declaration

// function myFirst (){
//     console.log("Hello");
// }
// myFirst();

// 2, Function Exprerssion

// const myFirst = function (){
//     console.log("Hello");
// }
// myFirst();

// 3, Arrow Function

// const myFirst = ()  =>{
//     console.log("Hello");
// }
// myFirst();

console.log("\n ======== Question 2 =========");

// 1, Function Declaration

// A parameter is a variable inside the function definition that receives a value.
// An argument is the actual value passed to the function when it is called.

// function mySecond(parameter) {
//     console.log(parameter);
// }

// mySecond("JavaScript Function Declaration");
// mySecond(100);

// 2, Function Exprerssion

// const mySecond = function (parameter) {
//     console.log(parameter);
// }
// mySecond("JavaScript Function Exprerssion");
// mySecond(200);

// 3, Arrow Function
// const mySecond = (parameter) => {
//     console.log(parameter);
// };
// mySecond("JavaScript Arrow Function");
// mySecond(300);

console.log("\n ======== Question 3 =========");

//1,  Function Declaration
// function myThird(parameter) {
//   mySecond(parameter); // Calls mySecond to print the value
// }
// myThird(" myThird JavaScript Function Declaration");

// 2, Function Exprerssion
// const myThird = function (parameter) {
//    mySecond(parameter);
// };
// myThird("myThird JavaScript Function Exprerssion");

// 3, Arrow Function
// const myThird = (parameter) => {
//   mySecond(parameter);
// };
// myThird("myThird JavaScript Arrow Function");



console.log("\n ======== Question 4 =========");
//1,  Function Declaration
// function myFourth (array) {
//   console.log(array[0]);
// }
// myFourth([10, 20, 30, 40]);
// myFourth(["Apple", "Banana", "Orange"]);

// 2, Function Exprerssion
// const myFourth = function (array){
//   console.log(array[0]);
//   console.log(array.at(0)); // second option
// }
// myFourth([100, 200, 300]);
// myFourth(["Dog", "Cat", "Bird"]);

// 3, Arrow Function
// const myFourth = (array) => {
//   const [first] = array;
//   console.log(first);
// }
// myFourth([5, 10, 15]);
// myFourth(["Red", "Blue", "Green"]);

console.log("\n ======== Question 5 =========");
 //1,  Function Declaration
// function myFifth (array) {
//   console.log(array[0] + array[1]);
// }
// myFifth([10, 20]);

// 2, Function Exprerssion
// const myFifth = function (array) {
//   const [num1, num2] = array;
//   console.log(num1 + num2);
// }
// myFifth([100, 200]);

// 3, Arrow Function
// function myFifth (array) {}
// const myFifth = function (array) {}

// const myFifth = (array) => {
//   let sum = 0;

//   for (const number of array){
//     // sum += number;
//     // sum = sum + number;
//   }
//   console.log(sum);
// }

// myFifth([12, 18])


console.log("\n ======== Question 6 =========");
// Write a function that takes an integer minutes and converts it to seconds.

//1, Understand the Problem
    // We need to create a function that:
    // Takes one parameter called minutes
    // Converts the minutes into seconds
    // Returns the result

// 1 minute = 60 seconds So seconds = minutes × 60

// 2, soli ti on paper
//  5 * 60 = 300
//  2 * 60 = 120

// 3, Write Pseudo code

//  Step 1 Create a function named minutesToSeconds
        // function minutesToSeconds(minutes){};
// Step 2 
        // Check minutes value is NOT a valid number
// Step 3 Multiply the minutes by 60 and Return the answer.
        // minutes × 60
// Step 4 Call the function.
        // console.log(minutesToSeconds(5));
// Step 5 Test
    // 5 * 60 = 300
    // 2 * 60 = 120


// 4,  Pseudo code to JavaScript
// function minutesToSeconds(minutes){
//   //  Step 1 Create a function named minutesToSeconds
//     if (typeof minutes !== "number") {
//     return "Please enter a valid number.";
//     }
//     if (minutes < 0) {
//     return "Minutes cannot be negative.";
//     } // Step 2
//   // Check minutes value is NOT a valid number

//     return minutes * 60; //  Step 3
// };

// console.log(minutesToSeconds(5)); // Step 4
// console.log(minutesToSeconds("2")); // Step 4
// console.log(minutesToSeconds(-5));
// console.log(minutesToSeconds("hello"));

// // Step 5 Test Passd


// const minutesToSeconds = (minutes) => {
// //   //  Step 1 Create a function named minutesToSeconds
//     minutes = Number(minutes);
//     // Convert the input into a number
//     if (isNaN(minutes)) {
//         return "Please enter a valid number.";
//     }
//     if (minutes < 0) {
//         return "Minutes cannot be negative.";
//     }
// //   // Check minutes value is NOT a valid number

//   return minutes * 60;
// }


// console.log(minutesToSeconds("2"));
// console.log(minutesToSeconds("10"));
// console.log(minutesToSeconds("abc"));
// console.log(minutesToSeconds("-5"));



console.log("\n ======== Question 7 =========");

//1, Understand the Problem
    // We need to create a function:
    // Takes one number as input.
    // Increases the number by 1.
    // Returns the new value.

// 5 number after after adding 1 to 6

// 2, soli ti on paper
//  0 + 1 = 1
//  5 + 1 = 6
//  -5 + 1 = -4

// 3, Write Pseudo code

//  Step 1 Create a function named increments
        // function increments(number){};
// Step 2 
        // Check number value is NOT a valid number
// Step 3 Add 1 and Return the answer.
        // number + 1
// Step 4 Call the function.
        // console.log(increments(5));
// Step 5 Test
    //  0 + 1 = 1
    //  5 + 1 = 6
    //  -5 + 1 = -4


// 4,  Pseudo code to JavaScript

// function increments(number){
//   number = Number(number);
//   if (isNaN(number)) {
//     return "Please enter a valid number.";
//   }
// //   if (typeof number !== "number") {
// //     return "Please enter a valid number.";
// //   }

//   return number + 1;
// };
// console.log(increments(0));
// console.log(increments(6));
// console.log(increments(-4));
// console.log(increments("5"));
// console.log(increments("zele"));







console.log("\n ======== Question 8 =========");


//1, Understand the Problem
    // Accepts two parameters: base & height
    // Calculates the area of a triangle.
    // Returns the result.


// 2, soli ti on paper
//  Area = base * height / 2
    // 3 * 2 / 2 = 3
// 3, Write Pseudo code

//  Step 1 Create a function named triArea
        // function triArea(base, height){};
// Step 2 
        // Check area value is NOT a valid number
        // 
// Step 3 Multiply base by height and Divide the result by 2
// Step 4 Call the function.
        // console.log(triArea(base, height)));
// Step 5 Test
    // 3 * 2 / 2 = 3

// function triArea(base, height) {
//     base = Number(base) 
//     height = Number(height);

//     // if (isNaN(base) || isNaN(height)) {
//     //     return "Please enter a valid number.";
//     // }

//     if (typeof base !== "number" || typeof height !== "number") {
//         return " base and height must be numbers.";
//     }
//     return (base * height) / 2;
// }
// console.log(triArea(0, 2));   // 3
// console.log(triArea(7, 4));   // 14
// console.log(triArea(-4, -8));
// console.log(triArea("5", "10"));
// console.log(triArea("zele"));
//  problem:-
    // 1, User Andun asegebto andun bitew eg:- base asegebto height beresa


function triArea (base, height) {

    if (base == null || base === "") return "Please enter the base.";
    if (height == null || height === "") return "Please enter the height.";

    base = Number(base);
    height = Number(height);

    // if(Number.isNaN(base) || Number.isNaN(height)) {
    //     return "Base and height must be valid numbers.";
    // }

    if (isNaN(base) || isNaN(height)) {
        return "Please enter a valid number.";
    }


    // if (typeof base !== "number" || typeof height !== "number") {
    //     return " base and height must be numbers.";
    // }

  return (base * height) / 2;
}

console.log(triArea(0, 2));   // 3
console.log(triArea(7, 4));   // 14
console.log(triArea(-4, 6));
console.log(triArea("5" ));
console.log(triArea("zele", "hh" ));

// Problem :- 
// 1, base or height check emnadergebet bota lay kelay ena ketach sihon lyunet alew ( Kelay sihon ayseram)
        //  base = Number(base);
        //  height = Number(height);








console.log("\n ======== Question  =========");







// let firstName = "Zelalem ";
// let lastName = "Belay";

// let fullName = firstName + lastName;

// console.log(fullName);


// let firstName = "Jane";
// let lastName = "Doe";
// let fullName = `My Name is:- ${firstName} ${lastName} `; // The space is naturally typed inside the backticks

// console.log(fullName);


// let Class = [" Abebe", "Chaltu", 3, "chala"];

// console.log(Class[3]);




// function myFirst() {
//     console.log("Hello");
// }

// myFirst();

// // console.log("\n ========  =========");
// function abebe() {
//     console.log(
//     "Abebe Beso Bela Abebe Beso Bela Abebe Beso Bela Abebe Beso Bela",
//     );
//     console.log("Hello Abe");
//     const num1 = 40;
//     const num2 = 80;
//     console.log(num1 + num2);

//     console.log("Learn more");
//     console.log("Buy");
// }

// abebe();






// console.log("\n ======== =========");





// console.log("\n ======== grader =========");
// // || T 
// function grader(score) {
//     if (score > 100 || score < 44) {
//     return "Invalid score";
//     }
//     if (score >= 90 && score <= 100) {
//         return "Grade A";
//     }
//     if (score >= 80 && score <= 89) {
//         return "Grade B";
//     } 
//     if (score >= 70 && score <= 79) {
//         return "Grade C";
//     } else {
//         return "Grade D";
//     }
// }

// console.log(grader(0));



// Return Example

// function add(a, b){
//     return a + b
// }

// function average(num1, num2){
//     let result = add( num1, num2)/2;
//     return result;
// }

// let x = average();
// console.log(average(10, 20));
// console.log(average(100, 20));


// function test(){
//     return "I run"
//     console.log("I never run");
// }
 
// console.log(test());