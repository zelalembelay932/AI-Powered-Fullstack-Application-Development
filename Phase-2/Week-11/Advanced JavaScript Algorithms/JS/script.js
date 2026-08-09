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



const wordDetect = (a)  => {

    for (i = 0; i < a.length; i++){
        // how do i a singel letter out of a string in javaScript
        let word = a.charAt(i)
        console.log(word);
    }
    return wordDetect;
}


wordDetect("UcUNFYGaFYGtHHDHD");
// "cat"

// function detectWord(crowd) {
//     return crowd.match(/[a-z]/g)?.join("") || "";
// }

// console.log(detectWord("UcUNFYGaFYGtHHDHD"));
// "cat"

// console.log(detectWord("bUUNFYGuFYrFDgHHlFDaDHrD"));
// "burglar"