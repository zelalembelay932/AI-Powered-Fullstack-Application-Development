// const first = require("./myFirst");

// const firstResult = first(14);
// console.log(firstResult); 

// or 
// console.log(first.myMultiplier(7));


// const second = require("./mySecond");

// const secondResult = second(14);
// console.log(secondResult);





// 4. While you are in your "myCollector" module:

// a,
// Step 1 
    // import fs (File system) core module
    // fs allows Node.js to create, write, read and modify (Update).
const fs = require("fs");
// Step 2 
    // Import the module from /myFirst and /mySecond
const myFirst = require("./myFirst");
const mySecond = require("./mySecond");
// step 3
    // pass to 14 to myFirst myMultiplier function
    const firstResult = myFirst.myMultiplier(14);
// step 4
    const firstText = `The value of 14 when passed through the myMultiplier function is ${firstResult}.`;

// step 5 
    // Write the first result to results.txt.
    // If results.txt does not exist, Node.js creates it.
    // If it already exists, writeFileSync() replaces
    // its existing contents.

    fs.writeFileSync("result.txt", firstText);


// b, FOR mySecond 

const secondResult = mySecond.myMultiplier(14);

const secondText = `The value of 14 when passed through the myMultiplier function is ${secondResult}.`;


fs.appendFileSync("result.txt", "\n" + secondText);





// Let's understand fs
    // imports Node's built-in File System module.

//     fs => File System

// It provides functions for things such as:
        // create files
        // write files
        // append files
        // read files
        // rename files
        // delete files

// You do not need to install fs.
