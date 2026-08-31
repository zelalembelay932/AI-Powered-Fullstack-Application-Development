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

// Adding jQuery to your web page 
    // official website for jQuery
        // https://jquery.com/
    // how to add jQuery to your website
        // 1, Download and attach it to your working project folder and HTML file
        // 2, Include the CDN link in your HTML file


// Selecting (Finding elements with jQuery)

    // jQuery => $()
        // the jQuery() returns a jQuery object of the select element 
// Types of selectors    
    // This is very similar with the CSS selectors
        // #id
        // .Class
        // element

    // Eg:- For ID
        // using JavaScript
            // const el = document.getElementById("your_id")
            // console.log(el);;
        // Using Jquery
            // const el = $("#your_id");
            // console.log(el); 
    // Eg:- For Class
        // using JavaScript
            // const el = document.getElementById("your_class")
            // console.log(el);;
        // Using Jquery
        // include . (dot) in your parameter
            // const el = $(".your_class");
            // console.log(el); 
    // Eg:- For Element
        // using JavaScript
            // const el = document.getElementById("li")
            // console.log(el);;
        // Using Jquery
            // const el = $("li");
            // console.log(el); 



// Selecting  element with jQuery(filters)

// 1, first()
// select first h1 element to HTML document 
    // console.log($(h1));
// Select first h1 HTML element then add it background red
    // $("h1").first().css("background-color", "red");
// Select first CSS h1 element then add it background red
    // $("h1:first").css("background-color", "red");
        // "h1:first" => this method is CSS not jQuery

// 2, last()
    // Select Last h1 HTML element then add it background red
    // $("h1").last().css("background-color", "red");

// 3, even()
    // select even h1 element to instade of #companies id then add it background color blue
    // $("#companies h1").even().css("background-color", "blue");

// 4, odd()
    // select odd h1 element to instade of #companies id then add it background color blue
    // $("#companies h1").odd().css("background-color", "blue");
// 5, nth-child()
    // which is css selecter we are select id companies then select and affect h1 child 1 BG to blue
    // $("#companies h1:nth-child(1)").css("background-color", "blue");
// 6, has(selector)
    // it is always expact HTML tags
        // parent div hono westu button yalew div select senaderg

        // Eg:-
            // $("div").has("button").css("background-color", "black");

// 7, :contains(text)
    // $("h1:contains(A)").css("background-color", "red")

// 8, empty();
    // $("div.buttons").empty();

    // VISIBILITY
// 9, hide();
    // $("h1[id=one]").hide();

// 10, visible()
    // $("h1:visible").css("background-color", "red");
// 11, show()
    // $("h1[id=one]").show()









