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
// addUp(4);
// console.log(addUp(40));



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

const fiveNumber = (num) => {
    for (let i = 1; i <= 5;  i++){
        console.log(num + i);
    }
} 
// fiveNumber(7);
        // 8 9 10 11 12
// fiveNumber(20);
        //  21 22 23 24 25
fiveNumber(-3);
        // -2 -1 0 1 2