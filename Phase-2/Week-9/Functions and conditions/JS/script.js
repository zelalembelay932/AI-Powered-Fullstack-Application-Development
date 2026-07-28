console.log("\n ======== Question 1 =========");

// function functionName(parentheses) {
    
// }

// 1, Function Declaration

// function myFirst () {
//     console.log("Hello Function Declaration");
// }
// myFirst();

// 2, Function Exprerssion

// const myFirst = function (){
//     console.log("Hello");
// }
// myFirst();

// 3, Arrow Function

// const myFirst = () => console.log("Hello Arrow Function");

// myFirst();

// console.log("\n ======== Question 2 =========");

// 1, Function Declaration

// A parameter is a variable inside the function definition that receives a value.
// An argument is the actual value passed to the function when it is called.

// function mySecond(x) {
//     console.log(x);
// }

// mySecond("JavaScript Function Declaration");
// mySecond(100);


// 2, Function Exprerssion

// const mySecond = function (a) {
//     console.log(a);
// }
// mySecond(" mySecond JavaScript Function Exprerssion");
// mySecond(200);

// 3, Arrow Function
// const mySecond = (parameter) => {
//     console.log(parameter);
// };
// mySecond("JavaScript Arrow Function Zele");
// mySecond(600);

console.log("\n ======== Question 3 =========");

//1,  Function Declaration
// function myThird(parameter) {
//   mySecond(parameter); // Calls mySecond to print the value
// }
// myThird(" myThird JavaScript Function Declaration");

// 2, Function Exprerssion
// const myThird = function (parameter) {
//     mySecond(parameter);
// };
// myThird("myThird JavaScript Function Exprerssion");

// 3, Arrow Function
// const myThird = (parameter) => {
//     mySecond(parameter);
// };
// myThird("myThird JavaScript Arrow Function");
// myThird(6)



console.log("\n ======== Question 4 =========");
// //1,  Function Declaration
// function myFourth (array) {

//     console.log(array[1]);
// }
// myFourth([10, 20, 30, 40]);
// myFourth(["Apple", "Banana", "Orange"]);


// 2, Function Exprerssion
// const myFourth = function (array){
//     console.log(array[1]);
//     console.log(array.at(1)); // second option
// }
// myFourth([100, 200, 300]);
// myFourth(["Dog", "Cat", "Bird"]);

// 3, Arrow Function
// const myFourth = (array) => {
//     // const [second] = array;
//     // console.log(second);
//     console.log(array[0]);
// }
// myFourth([5, 10, 15]);
// myFourth(["Red", "Blue", "Green"]);

console.log("\n ======== Question 5 =========");
//  //1,  Function Declaration
// function myFifth (array) {
//   const [a, b] = array;
//   console.log(a + b);
//   //  console.log(array[0] + array[1]);
// }
// myFifth([10, 20]);
// myFifth([0, 2]);

// 2, Function Exprerssion
// const myFifth = function (array) {
//     const [num1, num2] = array;
//     console.log(num1 + num2);

// }
// myFifth([10, 20]);

// 3, Arrow Function
// function myFifth (array) {}
// const myFifth = function (array) {}

// const myFifth = (array) => {
//     let sum = 0;

//     for (const number of array){
//     // sum += number;
//     // sum = sum + number;
//     }
//     console.log(sum);
// }

// myFifth([12, 18])


console.log("\n ======== Question 6 =========");

//Question 6:- Write a function that takes an integer minutes and converts it to seconds.

//1, Understand the Problem
    // We need to create a function that:
    // Takes one parameter called minutes
    // Converts the minutes into seconds
    // Returns the result

// 1 minute = 60 seconds So seconds = minutes × 60

// 2, solve on paper
//  5 * 60 = 300
//  2 * 60 = 120

// 3, Write Pseudo code

//  Step 1 Create a function named minutesToSeconds
        // function minutesToSeconds(minutes){};
// Step 2 
        // we have string value conver to number
        // Check minutes value is NOT a valid number  
        // check Minutes cannot be negative.
// Step 3 Multiply the minutes by 60 and Return the answer.
        // minutes × 60
// Step 4 Call the function.
        // console.log(minutesToSeconds(5));
// Step 5 Test
    // 5 * 60 = 300
    // 2 * 60 = 120


// 4,  Pseudo code to JavaScript


const minutesToSeconds = (minutes) => {
  //  Step 1 Create a function named minutesToSeconds
    minutes = Number(minutes);
    // Convert the input into a number
    if (isNaN(minutes)) {
        return "Please enter a valid number.";
    }else if (minutes < 0) {
        return "Minutes cannot be negative.";
    }else if (!Number.isInteger(minutes)){
        return "Minutes cannot be decimal.";
    }
//   // Check minutes value is NOT a valid number  
    return minutes * 60;
}

// 5 Test Passd

console.log(minutesToSeconds(1));
console.log(minutesToSeconds("2"));
console.log(minutesToSeconds("10"));
console.log(minutesToSeconds("abc"));
console.log(minutesToSeconds("-5"));
console.log(minutesToSeconds(3.5));
console.log(minutesToSeconds("-2.4"));

// ploblem 
    //1,  if we are add 3.5 number what happen check it
    // 2, minutes be decimal biseten mn chger alew( 3 minutes to 50 second mekeyer bifelges)??



console.log("\n ======== Question 7 =========");

//1, Understand the Problem
    // We need to create a function:
    // Takes one number as input.
    // Increases the number by 1.
    // Returns the new value.

// 5 number after after adding 1 to 6

// 2, solve it on paper
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
//     number = Number(number);
//     if (isNaN(number)) {
//     return "Please enter a valid number.";
//     }
// //   if (typeof number !== "number") {
// //     return "Please enter a valid number.";
// //   }
//     // number = ++number;
//     // return number;
//     return number + 1;
// };
// console.log(increments(0));
// console.log(increments(6));
// console.log(increments(-4));
// console.log(increments("5"));
// console.log(increments("zele"));







console.log("\n ======== Question 8 =========");


// 1, Understand the Problem
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
//     base = Number(base);
//     height = Number(height);

//     if (isNaN(base) || isNaN(height)) {
//         return "Please enter a valid number.";
//     }


//     // if (typeof base !== "number" || typeof height !== "number") {
//     //     return " base and height must be numbers.";
//     // }
//     return (base * height) / 2;
// }
// console.log(triArea(0, 2));   // 3
// console.log(triArea(7, 4));   // 14
// console.log(triArea(-4, -8));
// console.log(triArea("5", "10"));
// console.log(triArea("zele"));
//  problem:-
    // 1, User Andun asegebto andun bitew eg:- base asegebto height beresa


// function triArea (base, height) {

//     if (base == null || base === "") return "Please enter the base.";
//     if (height == null || height === "") return "Please enter the height.";

//     base = Number(base);
//     height = Number(height);

//     // if(Number.isNaN(base) || Number.isNaN(height)) {
//     //     return "Base and height must be valid numbers.";
//     // }

//     if (isNaN(base) || isNaN(height)) {
//         return "Please enter a valid number.";
//     }


//     // if (typeof base !== "number" || typeof height !== "number") {
//     //     return " base and height must be numbers.";
//     // }

//   return (base * height) / 2;
// }

// console.log(triArea(0, 2));   // 3
// console.log(triArea(7, 4));   // 14
// console.log(triArea( 6));
// console.log(triArea("5" ));
// console.log(triArea("zele", "hh" ));

// Problem :- 
// 1, base or height check emnadergebet bota lay kelay ena ketach sihon lyunet alew ( Kelay sihon ayseram)
        //  base = Number(base);
        //  height = Number(height);








console.log("\n ======== Question 9 =========");

//1, Understand the Problem
    // Create a function that returns the total number of legs of all the animals. The farmer has:
    //Chickens = 2 legs
    // Cows = 4 legs
    // Pigs = 4 legs

    // Takes three parameters:
        // chickens
        // cows
        // pigs
    // Calculates the total number of legs.
    // Returns the total


// 2, solve it on paper
    //  Total Legs = (chickens × 2) + (cows × 4) + (pigs × 4)

// 3, Write Pseudo code

//  Step 1 Create a function named animals and Accept three parameters
        // function animals(chickens, cows, pigs){};

// Step 2 Check if any value is missing.

// Step 3 
        // Convert each value to a number.



// Step 4 Check if all values are valid numbers.

// Step 5 Multiply:
    // chickens * 2
    // cows * 4
    // pigs * 4

// Step 6 Add the three results together.
// Step 7 Return the total.




// function animals(chickens, cows, pigs) {

//     if (chickens == null || chickens === "") return "Please enter the number of chickens.";
//     if (cows == null || cows === "") return "Please enter the number of cows.";
//     if (pigs == null || pigs === "") return "Please enter the number of pigs.";


//     if ((chickens < 0)) {
//         return "chickens leg number cannot be negative. Please enter a valid number  of posetive ";
//     }
//     if (( cows < 0)) {
//         return "cows leg number cannot be negative. Please enter a valid number of posetive ";
//     }
//     if (pigs < 0) {
//         return "pigs leg number cannot be negative. Please enter a valid number of posetive ";
//     }
//     // if ((chickens < 0 || pigs < 0 || cows <0 )) {
//     //   return "animal leg number cannot be negative.";
//     // }


//     chickens = Number(chickens);
//     cows = Number(cows);
//     pigs = Number(pigs);

//     // if (Number.isNaN(chickens) || Number.isNaN(cows) || Number.isNaN(pigs)) {
//     //     return "Please enter valid numbers.";
//     // }

//     if (isNaN(chickens)) {
//         return "Please enter a valid number of chickens.";
//     }

//     if (isNaN(cows)) {
//         return "Please enter a valid number of cows.";
//     }

//     if (isNaN(pigs)) {
//         return "Please enter a valid number of pigs.";
//     }
    
  

//     return chickens * 2 + cows * 4 + pigs * 4;
// }

// console.log(animals(2, 3, 5)); // 36
// console.log(animals(0, 0, 0)); // 0
// console.log(animals("2", "3", "-5")); // 36
// console.log(animals("2", "-3", "5")); // 36
// console.log(animals("", 3, 5)); // Please enter the number of chickens.
// console.log(animals(2, "", 8)); // Please enter the number of cows.
// console.log(animals(4, 5, "")); // Please enter the number of pigs.
// console.log(animals(2, "zzz", 5));


// Problem :-
    // 1, animals(2, "zzz", 5) ezi gar missed yaderegenew ye ye cow nw, only "Please enter valid numbers of cow" emil comment endiyametaln madreg alebegn

console.log("\n ======== Question 10 =========");
