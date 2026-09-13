// 2. Create another module called "mySecond":

// a, Create a function called myMultiplier.

    function myMultiplier (number) {
        return number * 3;
    }

    // b. Execute the function inside the module. Pass the number 4 to the function
    const result = myMultiplier(4);

        // c, Display the result in the terminal.
    console.log(result);
    // d. Export your "myMultiplier" function so that other modules can use it
    module.exports = myMultiplier;
            
