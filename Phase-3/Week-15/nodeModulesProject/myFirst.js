
//Node Modules and Node Server - Practice Exercises

// Questions 1
        // Create a module called "myFirst":
    
    // a. Inside the "myFirst" module, log a simple text that says "My first module" on the console.

    console.log("My first module");
    // Print  in the terminal 
    
    //b. Run the module and see the output of the code you just wrote in this module


    // c. Write a function called "myMultiplier" inside of your "myFirst" module. This function takes a single number as a parameter and returns a value that is 2 times the parameter

        function myMultiplier (number){
        return number * 2;
        }
// if (require.main === module){
//      const result = myMultiplier(4);
//      console.log(result);
// }
    // d. Execute the function inside the module. Pass the number 4 to the function
        const result = myMultiplier(4)

    // e. Save the returned value in a variable and log the variable on the console. Now, run your module on the terminal to see the printed output

        console.log(result);
    // f. Export your "myMultiplier" function so that other modules can use it
        // module.exports = myMultiplier;
            // or
        module.exports.myMultiplier = myMultiplier;
        // module.exports = {
        //     myMultiplier
        // };
        // Check in app.js export function

//   // Node Executes it like this:-

          //  myMultiplier(4)
                
                    // number = 4
                        // 4 * 2
                            // 8
                                // return 8
                    // result = 8

                    












                    