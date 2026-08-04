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
//     // i = 1; i <= 10; i++
//         for (num = 1; num <= 10; num++){
//             console.log(num);
//         }
// }
// first10()

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
//     if (typeof(num) !== "number" || isNaN(num)) {
//         return "Please enter a number value";
//     }
//     for (let i = 1; i <= 5;  i++){
//         console.log(num + i);
//     }

// }
// 5, Test

// fiveNumber(7);
//         // 8 9 10 11 12
// fiveNumber(20);
//         //  21 22 23 24 25
// fiveNumber(-3);
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
//     if (isNaN(number)) {
//         return "Please enter a number value";
//     }
//     if (number < 0) {
//         return "Please enter only posetive number ";
//     }
//     let sum = 0

//     for (let i = 1; i <= 10; i++){
//       // i =1; 1 <= 10; i++
//         // sum += startNumber + i;
//         sum = sum + (number + i);

//     }
//     return sum;
// }

// // // // 5, Test
// console.log(sumNextTen(7));


// function sumNextTenNumbers(givenNumber) {
//     let sum = 0;
    
//     // Loop 10 times, starting from the next number
//     for (let i = 1; i <= 10; i++) {
//         // sum += givenNumber + i;
//         sum = sum + (givenNumber + i );
//     }
    
//     return sum;
// }

// // Example usage: If given number is 5, it sums 6 through 15
// sumNextTenNumbers(10); // Prints 105

// console.log(sumNextTenNumbers(7));


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

// third iteration
// number 7, i = 3, sum = 17
// sum = sum + number + i
// sum = 17 + 7 + 3
// sum = 17 + 10
// sum = 27

// forth iteration
// number 7, i = 4, sum = 27
// sum = sum + number + i
// sum = 27 + 7 + 4
// sum 27 + 11
// 



// Arithmetic Formula

// const sum10Number = (num) => {
//     return 10 * num + 55;
// }
// console.log(sum10Number(7));

// 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15

// 7 = (8 + 9 + 10+ 11+ 12+ 13+ 14+ 15+ 16+ 17).

// print = 125

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

console.log("\n ===========  Question 4  =========== ");
//  Write a function that takes an array as an argument and prints every element of the array on the console.
//  Test case: given the array a = [1, "Hello", 8, 44], output should look like this:

//1, Understand the Problem
// create a function that takes an array as a parameter
// Prints every element in the array
// each element  on a new line.

// 2, solve it on paper
//  let numbers = [1, "Hello", 8, 44];

// 3, Write Pseudo code
// crate function receive an array.
// Start from the first element.
// print the element
// move to next
// continue more element

// 4, Pseudo code to JavaScript
// For loop
// function printArray(array) {
//     if(!Array.isArray(array)){
//         return "Please enter a valid array";
//     }
    
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }

// // // 5, Test

// printArray([1, "Hello", 8 ,44]);
// 0 < 4 ✔
// 1 < 4 ✔
// 2 < 4 ✔
// 3 < 4 ✔
// 4 < 4 ✘

// while
// Keep repeating this block of code as long as the condition is true.
// function printArray(array) {
//     let i = 0;

//     while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }
// }

// printArray([1, "Hello", 8, 44]);
// //  To Array length check

// const print = [1, "Hello", 8, 44];
// console.log(print.length);

// Index: 0   1       2   3
// Value: 1  Hello    8   44

// while (i < 4)

// 0 < 4; T
// 1 < 4; T
// 2 < 4; T
// 3 < 4; T
// 4 < 4; F loop stop

// // forEach()
// const array = [1, "Hello", 8, 44];
//     array.forEach((element) => {
//     console.log(element);
// });

// // for...of
// const array = [1, "Hello", 8, 44];

// for (const element of array) {
//     console.log(element);
// }

console.log("\n ===========  Question 5 =========== ");

//1, Understand the Problem

// 2, solve it on paper

// 3, Write Pseudo code

// 4, Pseudo code to JavaScript

// 5, Test

// Write a function that takes an array as an argument and prints the total number of elements found in the array

// const totalNumber = function (array){
//     console.log(array.length);
// }
// totalNumber([1, "Hello", 8, 44])
// totalNumber(["world", 13]);

// for

// function totalNumber(array){
//     let total = 0;

//     for (let i = 0; i < array.length; i++) {
//         total++;
//     }
//     console.log(total);
// }
// totalNumber([1, "Hello", 8, 44])
// totalNumber(["world", 13]);

// While


// function totalNumber (array){
//     let count = 0;
//     let i = 0;

//     while (i < array.length) {
//         count++;
//         i++;
//     }
//     console.log(count);
// }
// totalNumber([1, "Hello", 8, 44])
// totalNumber(["world", 13]);

console.log("\n ===========  Question 6 =========== ");

// Write a function that takes an array of numbers as a parameter and logs in the console the sum of all the numbers in the array.

//  for loop

// function sumArray(array){
//     if(!Array.isArray(array)){
//         return "Please enter a valid array";
//     }
     
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//     if (typeof array !== "number" || isNaN(array)) {
//       return "Please enter a number value";
//     }
//         sum = sum + array[i];
//     }
//     console.log(sum);
// }
// sumArray([5, 6, 99, 8, 76, 4, 68, 44]); // 310


// First iteration
    // i = 0, sum = 0
    //sum = sum + i
    // sum = 5 + 0
    // sum = 5
    // sum = 
// second iteration
    // i = 1, sum = 5
    //sum = sum + i
    // sum = 5 + 1
    // sum = 6
    // sum = 
// second iteration
    // i = 2, sum = 6
    //sum = sum + i
    // sum = 6 + 2
    // sum = 8
    // sum = 



// While

// function sumArray (array)  {
//     let sum = 0;
//     let i = 0;

//     while (i < array.length) {
//         sum +=array[i];
//         i++;
//     }
//     console.log(sum);
// }
// sumArray([5, 6, 99, 8, 76, 4, 68, 44]); // 310

// for...of

// function sumArray(array){
//     let sum = 0;

//     for (const value of array) {
//         sum += value;
//         // sum = sum + value
//     }
//     console.log(sum);
// }
// sumArray([5, 6, 99, 8, 76, 4, 68, 44]); // 310

console.log("\n ===========  Question 7 =========== ");
//  Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all odd numbers of the array from the total sum of all even numbers and logs the result in the console.

const evenOdd = function (array){
    if (!Array.isArray(array)) {
        return "Please enter a valid array";
    }
    let evenSum = 0; 
    let oddSum = 0; 

    for (let i = 0; i < array.length; i++) {

    if (typeof array[i] !== "number" || isNaN(array[i])) {
        return "Please enter a number value";
    }

        if (array[i] % 2 === 0 ) {
            evenSum += array[i];
        }else{
            oddSum += array[i];
        }

    }
    console.log(evenSum - oddSum);
}
evenOdd([5, 6, 99, 8, 76, 4, 68, 44]);
// problem:- folt 12.5 bigeba mn enadergalen 12.5 odd or even? how to do

// iteration 1
// value = 5
// 5 % 2 === 0  F
// oddSum = oddSum + value;
// oddSum = 0 + 5
// oddSum = 5

// iteration 2
// value = 6
// 6 % 2 === 0  T
// evenSum = evenSum + value;
// evenSum = 0 + 6
// evenSum = 6

// iteration 3
// value = 99
// 99 % 2 === 0  F
// oddSum = oddSum + value;
// oddSum = 5 + 99
// oddSum = 104


// iteration 4
// value = 8
// 8 % 2 === 0  T
// evenSum = evenSum + value;
// evenSum = 6 + 8
// evenSum = 14


// iteration 5
// value = 76
// 76 % 2 === 0  T
// evenSum = evenSum + value;
// evenSum = 14 + 76
// evenSum = 90


// function evenOdd(array) {
//     let evenSum = 0;
//     let oddSum = 0;

//     for (const value of array){

//         if (value % 2 === 0) {
//             evenSum += value;
//         } else {
//             oddSum += value;

//         }
//     }
//     console.log(evenSum - oddSum);
// }
// evenOdd([5, 6, 99, 8, 76, 4, 68, 44]);


console.log("\n ===========  Question 8 =========== ");
// Write a function that takes an array as a parameter and logs in the console the elements that have even indexes only. Notice: this question is not asking you to log elements with even value, but elements that are located on even indexes)

//1, Understand the Problem
// print only the elements indexes are even.

// 2, solve it on paper

//Index =>  0   1   2   3   4   5   6   7

//Value =>  5   6   99  8   76  4   68  44

//index 0 is even? T display
//index 1 is even? F skip
//index 2 is even? T display

// 3, Write Pseudo code
// Step 1
// Create a function that accepts one parameter.
// Step 2
// create for loop check index even or odd
// Step 3
// if indx is even
// print value at that index
// step 4
// if index is odd
// skip it
// Step 5
// end

// 4, Pseudo code to JavaScript

function evenIndex (array) {
    if (!Array.isArray(array)) {
        return "Please enter a valid array";
    }

    for (let i = 0; i < array.length; i++){

        if (i % 2 === 0){
            console.log(array[i]);
        }
    }
}
evenIndex([5, 6, 99, 8, 76, 4, 68, 44]);


// evenIndex( [11, "Sam", 3, 7, "car"]);


//Index =>  0   1   2   3   4   5   6   7

//Value =>  5   6   99  8   76  4   68  44




// evenIndex([5, 6, 99, 8, 76, 4, 68, 44]);

// iteration 1
// i = 0
// 0 % 2 === 0  T
// print console.log(array[0]);
// final print 5

// iteration 2
// i = 1
// 1 % 2  === 0;  F
// not print

// iteration 3
// i = 2
// 2 % 2 === 0;  T
// print  console.log(array[2]);
// final print 99

// iteration 4
// i = 3
// 3 % 2 === 0; F
// not print

// indec  0  1
// Value  5  6




// for ... in
// function evenIndex (array) {
//     for (const index in array){
//         if(index % 2 === 0){
//             console.log(array[index]);
//         }
//     }
// }





console.log("\n ===========  Question 9 =========== ");
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,vadds a new value of "32" to the array and prints the new array on the console. Hint: use an array method



// function sampleArray (number) {
//     // .pop();Remove the last number
//     number.pop();
//     // .push(); add new value number
//     number.push(32);
//     console.log(number);
// }

// sampleArray([5, 6, 99, 8, 76, 4, 68, 44]);


//  Add to the end                    => push()
//  Remove from the end               => pop()
//  Add to the beginning (first)      => unshift()
//  Remove from the beginning (first) => shift()


console.log("\n ===========  Question 10 =========== ");
// Write a function that takes the sampleArray as an argument, sorts the array in ascending order and prints the sorted array on the console

// const sort = (sampleArray) => {
//     sampleArray.sort(function (a, b){
//         return a - b;
//     } );
//     console.log(sampleArray);

// }

// sort([5, 6, 99, 8, 76, 4, 68, 44]);
// sort(["3", "44", "5", "22"]);
// sort(["Banana", "Orange", "Apple", "Mango"]);

// const sort = (sampleArray) =>{
//     sampleArray.sort();

//     console.log(sampleArray);
// }


// sort(["Banana", "Orange", "Apple", "Mango"]);

// const sort  = (sampleArray) =>{
//     if (typeof sampleArray[0] === "number"){
//         sampleArray.sort((a, b) => a - b)
//     }
// }





// sort()         => Sorts the array. 
// function(a, b) => Receives two elements to compare.
// return a - b   => Sort numbers in  Ascending  order.
// return b - a   => Sort numbers in Descending order.



















