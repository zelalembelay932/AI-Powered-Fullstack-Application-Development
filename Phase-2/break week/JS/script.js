// Write a function called c that takes an array of numbers and returns the largest number in the array.

// step 1 (understand problem)
    // [3, 7, 2, 9, 4]
        // we are assending smalle number to large
        // find Largest
// step 2 (solve on paper)
    // [3, 7, 2, 9, 4]
        // [2, 3, 4, 7, 9] assending smalle number to large
        // array.length - 1

        // a - b
            // a is come a negative 
// step 4 Psudo code
    // step 1
        // write function called findLargest as teak parameter recived number
        // how? 
                // const findLargest = () =>{arr};
    // step 2
            // crate variable for stor number
            // how?
                // const num = arr[0];
    // step 3
        // crate for loop for check number 
        // how ?
            // for (let index = 0; index < array.length; index++) {}
    // step 4   
        // compare tow number small number to large
        // how?
        // birku
            // if(arr[i] > num){
            //     num = arr[i];
            // }
        // Afe
            //     if(num < arr[i]){
            //         num = arr[i]
            //     }
                

    // step 5 print result
                // return num;


//step 5 psudo to  javascrip code
// loop method

// const findLargest = (arr) => {
//     let num = arr[0];
//     let num2 = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > num){
//             num2 = num;
//             num = arr[i];
            
//         }else if (arr[i] > num2 && arr[i] !== num) {
//             num2 = arr[i];
//         }
//     }

//     return num2;
// };

// console.log(findLargest([3, 7, 2, 9, 4]));

// console.log(findLargest([-5, -2, -10, -1]));
// console.log(findLargest([100]));



// const findSecondLargest = (arr) => {
//     let largest = arr[0];
//     let second = arr[1];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             second = largest;
//             largest = arr[i];
//         } else if (arr[i] > second && arr[i] !== largest) {
//         second = arr[i];
//         }
//     }

//     return second;
// };

// console.log(findSecondLargest([3, 7, 2, 9, 4])); // 7
// console.log(findSecondLargest([-5, -2, -10, -1])); // -2





// Sort method
// function large(array) {

//     // let num = [];
//         array.sort((a, b) => a - b);
//     let num = array.length - 2;

//     return array[num];

// }


// console.log(large([23, 57, 26, 89, 44]));

// console.log(large([-5, -2, -10, -1]));

// console.log(large([100]));


// Examples:
// findLargest([3, 7, 2, 9, 4]);
// // 9

// findLargest([-5, -2, -10, -1]);
// // -1

// findLargest([100]);



// const numbers = [5, 12, 3, 130, 44];

// const largest = numbers.reduce((max, current) => current > max ? current : max, numbers[0]);

// console.log(largest); // Output: 130





console.log("\n================= Quetion 1 =========");

// A decimal number can be represented as a sequence of bits. To illustrate:

// 6 = 00000110
// 23 = 00010111
// From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

// bitwiseAND(6, 23) ➞ 00000110

// bitwiseOR(6, 23) ➞ 00010111

// bitwiseXOR(6, 23) ➞ 00010001
// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

// Examples
// bitwiseAND(7, 12) => 4

// bitwiseOR(7, 12) => 15

// bitwiseXOR(7, 12) => 11
// JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.



//  Step 1, (Understand the problem)
    // what is it:- Bitwise operations in JavaScript work directly on the individual binary bits of a number.
    // A bit can have only two values:
            // 0
            // 1

// | Decimal |   Binary |

// |       0 | 00000000 |  
// |       1 | 00000001 |  
// |       2 | 00000010 |  
// |       3 | 00000011 |  
// |       4 | 00000100 |  
// |       5 | 00000101 |  
// |       6 | 00000110 |  
// |       7 | 00000111 |  
// |       8 | 00001000 |  
// |       9 | 00001001 |  
// |      10 | 00001010 |  


// |     253 | 11111101 |
// |     254 | 11111110 |
// |     255 | 11111111 |



// we need to three function 
    // bitwiseAND(a, b)
    // bitwiseOR(a, b)
    // bitwiseXOR(a, b)

    // bitwiseAND(7, 12) ➞ 4
    // bitwiseOR(7, 12) ➞ 15
    // bitwiseXOR(7, 12) ➞ 11




// 2. Solve it on paper
// AND
    //   00000110
    //   00010111
    //   --------
    //   00000110  
// console.log(6 & 23); => 6
// OR 
    //   00000110
    //   00010111
    //   --------
    //   00010111
// console.log(6 | 23); => 23

// XOR means exclusive OR.
    // It returns 1 when the two bits are different.
// | A | B | A ^ B |

// | 0 | 0 | 0     |
// | 0 | 1 | 1     |
// | 1 | 0 | 1     |
// | 1 | 1 | 0     |

    //   00000110
    //   00010111
    //   --------
    //   00010001
// console.log(6 ^ 23); => 17









// Step 3. Derive a general formula
    // &  → AND → both need 1
    // |  → OR  → at least one needs 1
    // ^  → XOR → different bits produce 1


// 4. Write pseudocode
    // we need to three function 
        // function bitwiseAND(a,b) {}
        // function bitwiseOR(a, b) {}
        // function bitwiseXOR(a, b) {}
    
    // compare value a and b 
    // return Value 
        // a & b
        // a | b
        // a ^ b



// step 5. Convert pseudocode to JavaScript
// function decleration
// function bitwiseAND(a,b) {
//     return a & b;
// }
// function bitwiseOR(a, b) {
//     return a | b;
// }
// function bitwiseXOR(a, b) {
//     return a ^ b;
// }
// // 6. Test
// console.log(bitwiseAND(7, 12)); //4
// console.log(bitwiseAND(7, 12)); // 15
// console.log(bitwiseXOR(7, 12)); // 11

// // Arrow functions
// const bitwiseAND = (a, b) => a & b;

// const bitwiseOR = (a, b) => a | b;

// const bitwiseXOR = (a, b) => a ^ b;


// Test
// console.log(bitwiseAND(7, 12)); // 4
// console.log(bitwiseOR(7, 12));  // 15
// console.log(bitwiseXOR(7, 12)); // 11

// // Using an Object
// const bitwise = {
//     AND: function (a, b) {
//         return a & b;
//     },
//     OR: function (a, b) {
//         return a | b;
//     },
//     XOR: function (a, b) {
//         return a ^ b;
//     }
// };
// // // Test
// console.log(bitwise.AND(7, 12)); // 4
// console.log(bitwise.OR(7, 12));  // 15
// console.log(bitwise.XOR(7, 12)); // 11

// // Object + Arrow

// const bitwiseArrow = {
//     AND: (a, b) => a & b,
//     OR: (a, b) => a | b,
//     XOR: (a, b) => a ^ b
// };
// console.log(bitwiseArrow.AND(7, 12)); // 4
// console.log(bitwiseArrow.OR(7, 12));  // 15
// console.log(bitwiseArrow.XOR(7, 12)); // 11


// const bitwiseAND = (a, b) =>{
//     const result = a & b;

//     console.log("Binary result:", result.toString(2));

//     return result;
// }
// console.log(bitwiseAND(7, 12));



console.log("\n================= Quetion 2 =========");
//  Step 1, (Understand the problem)
    // print max and min number from array 
// Step 2. Solve it on paper
    // [1, 2, 3, 4, 5]
        // min number is [1]
        // max number is [5]

// Step 3. Derive a general formula
    // array[i] > max 
    // array[i] < min 

// Step 4. Write pseudocode
    // create function minMax take parameter 
    // we are create variable for store max and min values
    // for loop to check all array in itration 
    // check and compare value in if condition which one is grater and smallest value
    // print max and min value


// Step 5. Convert pseudocode to JavaScript

// function minMax(arr) {
//     let max = [0]; //2
//     let min = [0];// -1

//     for (let i = 0; i < arr.length; i++) {

//         if(arr[i] < min){
//             min = arr[i];
            
//         }
//         if (arr[i] > max) max = arr[i];
//     }
//     return {min, max};
// }
// console.log(minMax([-1, 2, 3, 4, 5])); //[1, 5]
// console.log(minMax([2334454, 5])); // [5, 2334454]
// console.log(minMax([1]) ); // [1, 1]


// React ES6 Spread Operator
// function minMax(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     console.log(min);
//     console.log(max);
// }
// minMax([42, 12, 89, 5, 73]);




console.log("\n================= Quetion 3 =========");
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

// Step 1. Understand the problem
    // it's christmas eve in Dec 24 display true 
    // we are check date and monthe only year it coulde be anything 
// Step 2. Solve it on paper
    // any year + Dece + day 24
// Step 3. Derive a general formula 
// Step 4. Write pseudocode
    // step 1
        // create a function call timeForMilkAndCookies take parameter date
    // step 2
        // declare variable for monthe and date for passed argument
    // step 3
        // compare day and monthe matche to eve in if condition
    // step 4
        // if day and monthe same as to Dec 24 
            // return True
        // otherwise
            // return False
// Step 5. Convert pseudocode to JavaScript

// Source - https://stackoverflow.com/a/74031833
// Posted by michaelR
// Retrieved 2026-08-17, License - CC BY-SA 4.0

function timeForMilkAndCookies(date) {
       // Destructure month and day from the passed in argument.
    const [month, day] = [date.getMonth(), date.getDate()]; 
    
    // if the day matches xmas eve, return true, else return false.
    if(month === 11 && day === 24) return true; 
    else return false;      
}
// Step 6:- Test
console.log(timeForMilkAndCookies(new Date(2023, 11, 24)));
console.log(timeForMilkAndCookies(new Date(2023, 12, 2)));
console.log(timeForMilkAndCookies(new Date(2023, 11, 2)));





console.log("\n================= Quetion 4 =========");

// Create a function that takes a string and returns a new string with all vowels removed.

// Examples
        // removeVowels
            // ("I have never seen a thin person drinking Diet Coke.")
            //  " hv nvr sn  thn prsn drnkng Dt Ck."

        // removeVowels
            // ("We're gonna build a wall!")
            //  "W'r gnn bld  wll!"

        // removeVowels
            // ("Happy Thanksgiving to all--even the haters and losers!")
            //  "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"


// Step 1. Understand the problem
    // we have a paragraph,our problem is in this paragraph removed Vowels letter
    // we have take JavaScript method replace()  
// Step 2. Solve it on paper
    // parameterName.replace(/[aeiou]/gi, "");
// Step 3. Derive a general formula 
    // .replace(/[aeiou]/gi, "");
// Step 4. Write pseudocode
    // Step 1
        // Create function removeVowels take parameter 
    // Step 2
        // parameterName.replace(/[aeiou]/gi, "");
    // Step 3
        // print output




        // Step 5. Convert pseudocode to JavaScript



//     const removeVowels = (vowels) =>{
//         return vowels.replace(/[aeiou]/gi, "");
//     }
// // Step 6:- Test

// console.log(removeVowels("I have never seen a thin person drinking Diet Coke."));

// console.log(removeVowels("We're gonna build a wall!"));

// console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"),
// );






    // /[aeiou]/
        // is square brackets [] create a character set, matching any character liste inside them (the vowels)
    //  g 
        // stands for "global", it ensures that every vowel in the string is replaced, not just the first one.
    // i  
        // stands for "insensitive". its match case sensitive its includes both lowercase and uppercase Vowels.
    // ""
        // which completely removes the mathed vowels by replacing them with nothing.

// 