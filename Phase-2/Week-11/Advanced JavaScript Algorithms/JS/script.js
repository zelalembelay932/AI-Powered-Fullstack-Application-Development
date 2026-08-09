// Advanced JavaScript Algorithms

// Step 1
// Understand the problem
// Step 2
// Solve it on paper
// Step 3
// Create a general Solution to applay step by step
// Step 4
// Write Pseudo code
// Step 5
// Translate to JavaScript Code
// Step 6
// Test

console.log("\n ============ part I Q1===========");
// Q1,
// What is Hiding Amongst the Crowd ?

// A word is on loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is knowing the fillowing rules:

// The wanted word is in lowercase.
// the crowd of letter is all in  uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// detectWord("UcUNFYGaFYGtHHDHD") => "cat"

// detectWord("bUUNFYGuFYrFDgHHlFDaDHrD") => "burglar"

// Step 1
// Understand the problem

// Step 2
// Solve it on paper
// "UcUNFYGaFYGtHHDHD" => "cat"
// "bUUNFYGuFYrFDgHHlFDaDHrD" => "burglar"
// Step 3
// Create a general Solution to applay step by step
// Check if small or uppercase
// if letter small save it
// continue at the end\
// collect the lower case letters then keeping together in order.
// Step 4
// Write Pseudo code

// Step 1
// define function detectWord that tekes argument
// Step 2
// Declare Variable for store small letter let word = "";
// Step 3
// for loop iterate through each letter
// for every letter
//  How?
// Use CharAt method to take out a single letter from the word check if the letter UPPER or lower
// only for loop
// charAt(word)
// Source - http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
// Step 4
// check if the letter is upper case or lower case
// How???
// Source - https://stackoverflow.com/a/1077692

// var character = 'A';
// if (character == character.toUpperCase()) {
//  console.log('upper case true');
// }
// if (character == character.toLowerCase()){
//  console.log ('lower case true');
// }
// if convert the letter to uppercase and compare it with the original
// how to do convert the letter to uppercase???
// Source - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

// const sentence = " dog.";
// console.log(sentence.toUpperCase());
// // Expected output: "DOG."
// Use the .toUpperCase() method
// Step 5
// if equal then it is uppercase
// Skip
// else
// Save the Value on the "word" Variable
// Step 6
// return word

// Step 5
// Translate to JavaScript Code

// function detectWord(letter){
//     let word = "";

//     for (const character of letter){
//         if(character === character.toLowerCase()){
//             // word = word + character;
//             word += character;
//         }
//     }

//     return word;
// }

// console.log(detectWord("UcUNFYGaFYGtHHDHD"));
// detectWord("UcUNFYGaFYGtHHDHD") // => "cat"

// Step 6
// Test
// // For loop
// const wordDetect = (a)  => {

//     let hiddenWord = "";

//     for (i = 0; i < a.length; i++){

//         let word = a.charAt(i)
//         if(word === word.toLowerCase()){
//             hiddenWord = hiddenWord + word;
//         }
//     }
//     // console.log(word);
//     console.log(hiddenWord);
// }

// wordDetect("UcUNFYGaFYGtHHDHD");
// "cat"

// function detectWord(crowd) {
//     return crowd.match(/[a-z]/g)?.join("") || "";
// }

// console.log(detectWord("UcUNFYGaFYGtHHDHD"));
// "cat"

// console.log(detectWord("bUUNFYGuFYrFDgHHlFDaDHrD"));
// "burglar"

console.log("\n ===========  part I Q2 =========== ");

// Create a functon that return true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:
// arr1 min is greater than arr2's min
// arr1 max is less than arr2 max
// example
// canNest([1, 2, 3, 4], [0, 6]) => true
// canNest([3, 1], [4, 0]) => true
// canNest([9, 9, 8], [8, 9]) => false
// canNest([1, 2, 3, 4], [2, 4]) => false

// Step 1
// Understand the problem
// we have 2 arrays arr1 and arr2.
// We need to all arr1 fits strictly inside of  the arr2.
// arr1 can be nested inside arr2 IF:

// arr1 minimum > arr2 minimum

// arr1 maximum < arr2 maximum
// Both condition must be true

// Step 2
// Solve it on paper
// arr2
//0 |--------------------- ----| 6
//        arr1
//       1 |--------------| 4

// canNest([1, 2, 3, 4], [0, 6])
// Mini
// arr1 = [1, 2, 3, 4]
//     min(arr1) = 1

//     arr2 = [0, 6]
//     min(arr2) = 0
//  1 > 0 => True
// max
// max(arr1) = 4
// max(arr2) = 6
// 4 < 6 => true

// Step 3
// Create a general Solution to applay step by step
// find arr1 mini
// find arr2 mini

// find arr2 max
// find arr2 max

// compare the minimum values
// compare the max values
// both must  be true
// return result
// Step 4
// Write Pseudo code
// Step 1
// define function canNest that tekes argument Arr1 and arr2
// Step 2
// find the first array mini value
// find the second array mini value
// Step 3
// find the first array max value
// find the second array max value
// Step 4
// if arr1 mini > arr2 mini and arr1 max and arr2 max
// return true
// Step 4
// else return False
// Step 5
// Translate to JavaScript Code

// const canNest = function (arr1, arr2){

//     return (
//         // arr1 minimum > arr2 minimum
//         Math.min(...arr1) > Math.min(...arr2) &&
//         // arr1 maximum < arr2 maximum
//         Math.max(...arr1) < Math.max(...arr2)
//     );

// const arr1 = [5, 3, 9, 1];
// // Without spread operator:
// Math.min(arr1); // Returns NaN

// // With spread operator:
// Math.min(...arr1); // Returns 1

// }

// Step 6
// Test
// console.log(canNest([1, 2, 3, 4], [0, 6])); //=> true

// console.log( canNest([3, 1], [4, 0])); // => true
// console.log(canNest([9, 9, 8], [8, 9])); //=> false
// console.log(canNest([1, 2, 3, 4], [2, 4])); //=> false

console.log("\n ===========  Question 1 =========== ");

// Question 1 Given an array of numbers, write a function that prints in the console another array, which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

// Step 1
// Understand the problem
// we are given an array  of numbers
// function should create and print another array.
// there are two condition
// first:- number must be even
// How to check number even?
// number % 2 === 0
// second:- index must be even only
// How to check index even?
// index % 2 === 0

// Step 2
// Solve it on paper
// index : 0  1  2   3   4   5
// Value : 1  2  3   6   4   8

// Only (4) index and number EVEN both condition true
// Step 3
// Create a general Solution to applay step by step
// the tow condition are
// number % 2 === 0 &&  array[index] % 2 === 0
// both must be true
// Step 4
// Write Pseudo code
// create function getOnlyEvens argument (array)
// function getOnlyEvens(array)
// create empty result array
// const result = [];
// for each index from 0 to array length
// for(i = 0; i < array.length; i++)
//get the number at index

// if index is even
// AND number is even
// add number to result array
// number % 2 === 0 &&  array[index] % 2 === 0
// prit result

// Step 5
// Translate to JavaScript Code

// function getOnlyEvens(array) {
//     const result = [];

// for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0 && array[i] % 2 === 0) {
//         // result.push(array[i]);
//         result[result.length] = array[i];

//       // console.log(array[i]);
//     }
// }
//     return result;
// }

// array[i] → GET the value
// push()   → ADD the value
// result   → WHERE to add it

// function getOnlyEvens(array) {
//     return array.filter((number, index) => {
//         return index % 2 === 0 && number % 2 === 0;
//     });
// }

// Step 6
// Test

// console.log(getOnlyEvens([1, 2, 3, 6, 4, 8]));
// [4]

// console.log(getOnlyEvens([10, 1, 2, 3, 4]));
// // [0, 2, 4]

// array = [1, 2, 3, 6, 4, 8];
// result = [];

// iteration 1
// array[i] => array[0]
// which is 1
// i % 2 === 0 => 0 % 2 true
// array[i] % 2 === 0 => 1 % 2 false
// we do not push to result = []
//
//
//
// iteration 4
// array[i] => array[0]
// which is 4
// i % 2 === 0 => 4 % 2 true
// array[i] % 2 === 0 => 4 % 2 true
// we do push to result = [44]

// const numbers = [];

// console.log(numbers.push(10));










console.log("\n ===========  Question 2 =========== ");
//  Create a function that takes a two-digit number as an parameter and prints "Ok" in the console if the given string is greater than its reversed digit version. If not, the function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32




// Step 1
    // Understand the problem
        // we receive a tow digit number 72
            // 72 > 27
            // if the given string is greater than its reversed digit print "OK"
        
        // we receive a tow digit number 23
            // 23 > 32
            // if the given number is lessthan to reversed digit print "Not Ok" 
// Step 2
    // Solve it on paper
        // let use 72
            // 7 is first digit 
            // 2 is second digit
        // Reverse in to 27
        // compare 72 > 27 result True
        // print "OK"
    // other method 
        // let use 23
            // 2 is first digit 
            // 3 is second digit
        // Reverse in to 32
        // compare 23 > 32 result False
        // Print "Not Ok"

// Step 3
    // Create a general Solution to applay step by step
        // conver number to string and split
        // reverse the characters
        // convert the reverse string back to number
        // compare original number with reversed number
        // if original is gerterthan
            // print Ok
        // Otherwise 
            // print Not Ok
// Step 4
    // Write Pseudo code
        // step 1
            // creat function ReveerseCompare and parametre (number)
        // step 2
            // Convert number to string and split
                // How?
                //	number.toString()
        // step 3
            // reverse the characters
                // How ?
                // number.reverse()
        // step 4 
            // convert the reverse string back to number
                // how ?
                // Number()
        // step 5
            // if original number is greterthan revers number
                // Print "Ok"
            // else 
                // print "Not ok"
// Step 5
// Translate to JavaScript Code

// function reverseCompare(number) {
    
//     // number.toString().split().reverse().join();

//     // Number(number);

//     // Number( number.toString().split().reverse().join())

//     // return reverseCompare;

//     const reversedNumber = Number(number.toString().split("").reverse().join(""));

//     if (number > reversedNumber) {
//         console.log("Ok");
//     }else{
//         console.log("Not Ok");
//     }
// }


// // Step 6
// // Test
// reverseCompare(72);
// reverseCompare(23)



// Source - https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/


// function reverseString(str) {
//   // Step 1. Use the split() method to return a new array
//   var splitString = str.split(""); // var splitString = "hello".split("");
//   // ["h", "e", "l", "l", "o"]

//   // Step 2. Use the reverse() method to reverse the new created array
//   var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//   // ["o", "l", "l", "e", "h"]

//   // Step 3. Use the join() method to join all elements of the array into a string
//   var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//   // "olleh"

//   //Step 4. Return the reversed string
//   return joinArray; // "olleh"
// }

// reverseString("hello");
// console.log(reverseString("27"));










// Source - https://stackoverflow.com/q/29338175
// Posted by fev3r, modified by community. See post 'Timeline' for change history
// Retrieved 2026-08-09, License - CC BY-SA 3.0










console.log("\n ===========  Question 2 =========== ");
// Source - https://stackoverflow.com/a/29338200
// Posted by Tommy
// Retrieved 2026-08-09, License - CC BY-SA 3.0

// function fact(x) {
//     if (x <= 1) {
//         return 1
//     }
//     else {
//         return (x * fact(x-1))
//     }
// }
// console.log(fact(5));
// console.log(fact(6));



// Step 1
    // Understand the problem
    // What is factorial
    // A factorial number is the product of an integer and all the positive whole numbers below it.
        // How Factorials Work
            // Symbol: Written as an exclamation point (!) after a number.
            // Formula:  n! = n * (n - 1) * (n - 2)...
            // Special Rule: Zero factorial (0!) always equals 1 by definition.
            // Example :- 5! = 120, 4! = 24
// Step 2
    // Solve it on paper
    // returnFactorial(5)
        // 5 × 4 × 3 × 2 × 1 = 120
    // always start in 1 b/c multiplying 1 is not change the result
        
// Step 3
    // Create a general Solution
        // Formula:  n! = n * (n - 1) * (n - 2)
// Step 4
    // Write Pseudo code
        // step 1
            // Create a function returnFactorial
                // function returnFactorial(number) {}
        // step 2
            // set factorial start to = 1
                // let factorial = 1;
        // step 3
            // for i from number down to 1
                // for (let i = number; i >= 1; i--) {}
        // step 4
            // Multiply factorial
                // factorial = factorial * i;
// Step 5
    // Translate to JavaScript Code
function returnFactorial(number) {
    let factorial = 1;

    for (let i = number; i >= 1; i--) {
        // factorial = factorial * i;
        factorial *= i;
    }
    return factorial;
}

// Step 6
// Test

console.log(returnFactorial(5));
console.log(returnFactorial(6));
console.log(returnFactorial(0));


// 1 itration
    // returnFactorial(5)
        // i = 5 
    // factorial = factorial * i;
        // 1 * 5 = 5
    // factorial = 5;

// 2 itration
        // i = 4 
    // factorial = factorial * i;
        // 4 * 5 = 20
    // factorial = 20;

// 3 itration
        // i = 3 
    // factorial = factorial * i;
        // 3 * 20 = 60
    // factorial = 60;

// 4 itration
        // i = 2 
    // factorial = factorial * i;
        // 2 * 60 = 120
    // factorial = 120;


// 5 itration
        // i = 1 
    // factorial = factorial * i;
        // 1 * 120 = 120
    // factorial = 120;



