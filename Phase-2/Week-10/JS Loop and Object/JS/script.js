// Dic Roll Check in While

// let dicRoll = 0;
// let attempts = 0;

// console.log("Rolling the sice unit we go a 6...");

// while (dicRoll !== 6) {

//     dicRoll = Math.floor(Math.random() *6) + 1;
//     attempts++;

//     console.log(`Attemp ${attempts}: Rolled a ${dicRoll}`);

// }
// console.log(`Success! It look ${attempts} rolls to get a 6.`);

console.log("\n ===========   add up   =========== ");

// const addUp = (a) =>{
//     if(typeof a !== "number") {
//         return "Please enter a number value";
//     }else if( a < 0){
//         return "Please enter only posetive number ";
//     }else{
//         let result = 0;
//         for (i = 1; i <= a; i++){
//             result = result + i;
//         }
//         return result;
//     }
// }

// console.log(addUp(10));

console.log("\n ===========  Question 1  =========== ");

// Write a function that prints the first 10 integers on the console starting from the number 1 using the JavaScript for loop.

// for loop

// function first10 (num){
//     if(isNaN(num)){
//         return "Please enter a number value";
//     }
//     if (num < 0){
//         return "Please enter only posetive number ";
//     }
//         for (num = 1; num <= 10; num++){
//             console.log(num);
//         }
// }
// first10(1)

// While loop

// const first10 = (num) => {
//     if(typeof num !== "number"){
//         return "Please enter a number value";
//     }
//     if( num < 0){
//         return "Please enter only posetive number ";
//     }
//     let i = 1;
//     while (i = 10){

//     }
// }
// console.log(first10(1));

console.log("\n ===========  Question 2  =========== ");

// Write a function that takes a single number as an argument and prints the next 5 numbers in the console. Note: each output should be displayed on a new line.

//1, Understand the Problem
        // Takes one number as input.
        // Prints the next 5 numbers.
        // Prints each number on a new line.

// 2, solve it on paper
    // fiveNumber(7);
        // 8 9 10 11 12
    // fiveNumber(20);
        //  21 22 23 24 25
    // fiveNumber(-3);
        // -2 -1 0 1 2

// 3, Write Pseudo code
    // Step 1
        // Create a function that accepts one parameter.
    // Step 2
        // Start loop : need 5 repetitions.
    // Step 3
        // Begin at 1
        // we want the next number
        // we are eenter 7
     // print 7 + 1 = 8
    // Step 4
        // Repeat at 5
    // Step 5
         // Print

// 4, Pseudo code to JavaScript

// 1. for Loop
// const fiveNumber = (num) => {
//     for (let i = 1; i <= 5;  i++){
//         console.log(num + i);
//     }
// }
// 5, Test

// fiveNumber(7);
//         // 8 9 10 11 12
// // fiveNumber(20);
//         //  21 22 23 24 25
// // fiveNumber(-3);
//         // -2 -1 0 1 2



console.log("\n ===========  Question 3  =========== ");
//  Write a function that takes a single number and prints the sum of the next 10 numbers after the given number

    //Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+ 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)


//1, Understand the Problem
    // Takes one number as input.
    // Finds the next 10 numbers after it.
    // Adds all  numbers.
    //  print total sum
// 2, solve it on paper
    // 7 = (8 + 9 + 10+ 11+ 12+ 13+ 14+ 15+ 16+ 17)
    // print 125

// 3, Write Pseudo code
    // Step 1
        //  Create a function that accepts one parameter
    // Step 2
        // Create a variable called sum
    // Step 3
        // Repeat 10 times
    // Step 4

    // Step 5
        // print

// 4, Pseudo code to JavaScript

// function sumNextTen(number) {
//     let sum = 0

//     for (let i = 1; i <= 10; i++){
//         // sum += startNumber + i;
//         sum = sum + (number + i);
        
//     }
//     return sum;
// }

// 5, Test
// console.log(sumNextTen(7));

// First iteration
    // number = 7, // i = 1, sum = 0
    //sum = sum + number + i  
    // sum = sum + 7 + 1 
    // sum = 0 + 8;
    // sum = 8

//  Second iteration
    // number = 7, i = 2, sum = 8
    //sum = sum + number + i
    // sum = sum + 7 + 2
    // sum = 8 + 9;
    // sum = 17

// Rhird iteration
    // number 7, i = 3, sum = 17
    // sum = sum + number + i
    // sum = 17 + 7 + 3 
    // sum = 27



// Arithmetic Formula

// const sum10Number = (num) => {
//     return 10 * num + 55;
// }
// console.log(sum10Number(5));

// 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15

// 7 = (8 + 9 + 10+ 11+ 12+ 13+ 14+ 15+ 16+ 17)
    // print 125

// 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17


// (7+1) = 8
// (7+2) = 9
// (7+3) = 10
// (7+4) = 11
// (7+5) = 12
// (7+6) = 13
// (7+7) = 14
// (7+8) = 15
// (7+9) = 16
// (7+10) = 17

// 1+2+3+4+5+6+7+8+9+10 = 55

// 10 * sum10Number + 55




console.log("\n ===========  Question  =========== ");


//1, Understand the Problem


// 2, solve it on paper


// 3, Write Pseudo code

// 4, Pseudo code to JavaScript


// 5, Test








console.log("\n ===========  Question  =========== ");


//1, Understand the Problem

// 2, solve it on paper


// 3, Write Pseudo code

// 4, Pseudo code to JavaScript


// 5, Test











console.log("\n ===========  Question  =========== ");


//1, Understand the Problem

// 2, solve it on paper


// 3, Write Pseudo code

// 4, Pseudo code to JavaScript


// 5, Test












console.log("\n ===========  Question  =========== ");


//1, Understand the Problem

// 2, solve it on paper


// 3, Write Pseudo code

// 4, Pseudo code to JavaScript


// 5, Test
