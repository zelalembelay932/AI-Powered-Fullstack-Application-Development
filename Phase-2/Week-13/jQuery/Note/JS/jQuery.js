console.log("\n ===============");
// What is jQuery
    // jQuery is a fast, small, and lightweight JavaScript library designed to simplify HTML DOM tree traversal, event handling, animation, and Ajax interactions.

    // Key Features of jQuery
        // Easy DOM Selection
            // JavaScript
                // const message = document.getElementById("message");
            // jQuery
                // const message = $("#message");

                // $(".box")       // class
                // $("p")          // all <p> elements
                // $("#message")   // ID
                // $("input")      // all input elements



            // Easily select, add, delete, or modify HTML elements and their CSS properties.
        
        // Event Handling
            // Simplify how code responds to user actions, such as mouse clicks, keyboard inputs, or form submissions.
            
            // JavaScript
                // document.getElementById("btn").addEventListener("click", function () {
                //     alert("Button clicked!");
                //   });
            // jQuery
                // $("btn").on("click", function() {
                //     alert("Button Clicked!")
                // }) 

        // AJAX/HTTP Requests
            // Exchange data with a server and update parts of a web page without reloading the entire page

        // Effects and Animations
            //  Create visual transitions like fading, sliding, and custom animations with minimal code.
                // $("#box").hide();
                // $("#box").show();
                // $("#box").fadeOut();
                // $("#box").slideUp();
                // $("#box").slideDown();
                // $("#box").slideToggle();
        // Cross-Browser Compatibility
            //  different browsers implemented JavaScript and DOM APIs differently.
            // jQuery handled much of the browser compatibility work.
            // This was one of the major reasons jQuery became so popular.
        // Method Chaining
            // One of jQuery's very useful features is method chaining.
                // Eg 
            // $("#message").text("Hello");
            // $("#message").css("color", "red");
            // $("#message").addClass("active");
                // change to this 
            // $("#message").text("Hello").css("color", "red").addClass("active");
        // Easy Form Value Handling
        //  JavaScript                 jQuery
    
        // element.value          →   $("#element").val()
        // element.textContent    →   $("#element").text()
        // element.innerHTML      →   $("#element").html()
        // element.style.color    →   $("#element").css()
        // classList.add()        →   .addClass()
        // classList.remove()     →   .removeClass()
        // classList.toggle()     →   .toggleClass()
        // addEventListener()     →   .on()


// What do we need jQuery?
    // We use jQuery to make common JavaScript tasks easier and shorter, especially when working with HTML, the DOM, events, animations, forms, and AJAX.
    
       // cross browser compatibility
        // jQuery uses feature detction to findthe best way t do things
    // 



// What can you do with jQuery?


// Adding jQuery to your web page 


// Selecting (Finding elements with jQuery)