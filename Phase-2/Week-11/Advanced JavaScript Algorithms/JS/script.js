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

console.log("\n ============ Question 1 ===========");
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








console.log("\n ===========  Question 2 =========== ");


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

const canNest = function (arr1, arr2){

    return (
        // arr1 minimum > arr2 minimum
        Math.min(...arr1) > Math.min(...arr2) &&
        // arr1 maximum < arr2 maximum
        Math.max(...arr1) < Math.max(...arr2)
    );

    // const arr1 = [5, 3, 9, 1];
    // // Without spread operator:
    // Math.min(arr1); // Returns NaN 

    // // With spread operator:
    // Math.min(...arr1); // Returns 1


}

// Step 6 
    // Test
console.log(canNest([1, 2, 3, 4], [0, 6])); //=> true

console.log( canNest([3, 1], [4, 0])); // => true
console.log(canNest([9, 9, 8], [8, 9])); //=> false
console.log(canNest([1, 2, 3, 4], [2, 4])); //=> false
