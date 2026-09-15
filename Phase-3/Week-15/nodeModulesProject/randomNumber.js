// 5. Create a module called my "randomNumber".
// a. The "randomNumber" module has a function called random(). The random function just returns a random number when it gets executed

    function random () {
      return Math.random();
      // Math.random() 
            // generates a pseudo-random decimal number 
            // from 0 inclusive up to not including 1.
    }
// b. Execute the function inside the module
    const result = random();

// c. Save the returned value in a variable and log the variable on the console. Now, run your module on the terminal to see the printed output

    console.log(result);
// d. Export your module so that it is accessible to other module

    module.exports = { random};



// Math.random()
    // generates a pseudo-random decimal number from:
        // 0 inclusive
        // up to but not including
            // 1

    