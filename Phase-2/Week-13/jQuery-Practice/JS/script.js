// Vanilla JavaScript

// const sample1 = document.querySelector("#sample1");

// console.log(sample1);

// console.log(sample1.textContent);




// 1.1. Select the element with an id of "sample1" using jQuery

// HTML              jQuery selector

// id="sample1"  =>   $("#sample1")
// class="red"   =>   $(".red")
// <p>           =>   $("p")


// jQuery
// const sample1 = $("#sample1");

// // //1.2  print element itself on the console
// console.log(sample1);

// // // 1.3  print the content/text of the element
// sample1.text();
// console.log(sample1.text());

// // Modern jQuery shorthand
// $(function () {
//     // 1.1. Select the element with an id of "sample1"
//     const sample1 = $("#sample1");

//     //1.2  print element itself on the console
//     console.log(sample1);

//     // 1.3  print the content/text of the element
//     sample1.text();
//     console.log(sample1.text());
// })









console.log("\n=================== 2 =================");

// 2.1. Select the element with an ID of "techCompanies" and display it on your console.


// const techCompanies = $("#techCompanies");
// console.log(techCompanies);

// // 2.2. How many tech companies are listed under the ul element with an id of "techCompanies"?


// const count =  $("#techCompanies li").length;
// console.log(count);


// 2.3 Select all elements with class red

// const red = $(".red");

// console.log(red);


// 2.4 Create a new <li> containing Facebook

// const facebook = $("<li>Facebook</li>");
// console.log(facebook);

// // 2.5 Give Facebook the class blue
// facebook.addClass("blue")

// 2.6 Append Facebook next to Sony
// does not WORK!!!
// $("#techCompanies").append(facebook);
// But that does not put Facebook next to Sony. It puts Facebook at the end of the <ul>.


// $("li").each(function () {

//     if ($(this).text().trim() === "Sony") {
//         $(this).after(facebook);
//     }

// });


// $("li")
    // select all <li> elements on the page.
    // Eg:- 
        // $("li")
        //    ↓
        // Google
        // Microsoft
        // Sony
        // Apple

// .each()
    // we have multiple <li> elements.

    // we need to inspect them one by one 
        // li 1 → Google
        // li 2 → Microsoft
        // li 3 → Sony
        // li 4 → Apple
// What .each() dose:
    // Take every selected element and process it one at a time
    // $("li").each(function () {});
        // Google   → check
        // Microsoft → check
        // Sony     → check
        // Apple    → check

// this
    // in side .each()
        // $("li").each(function () {
        //   console.log(this);
        // });
        // this refer to the curent HTML element
// "this" is the normal DOM element
        // but we are working with jQuery methods

        // Eg:-
        // this.text(); // doesn't work because .text() is a jQuery method.
        // we are convert current DOM to jQuery
        // $(this).text() // this means get the text of the current <li>
// .trim() => removes unnecessary spaces


// if ($(this).text().trim() === "Sony"){}
    // If the current <li> contains the text Sony


// Step 7
    // .after()
        // $(this).after(facebook);
    // insert something immediately AFTER the select element.
        // <li>Sony</li>
        // <li class="blue">Facebook</li>

// Let's trace the code
    // <ul id="techCompanies">
    //   <li>Google</li>
    //   <li>Microsoft</li>
    //   <li>Sony</li>
    //   <li>Apple</li>
    // </ul>;
// Loop 1
// this => Google
// Check  "Google" === "Sony"

// False.

// Loop 2
// this → Microsoft

// Check  "Microsoft" === "Sony"
// False.

// Loop 3
// this => Sony

// Check  "Sony" === "Sony"

// True.

// Therefore:

// $(this).after(facebook);

// runs.

// Result:

// Google
// Microsoft
// Sony
// Facebook


// 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and display the result inside the "blueCompanies" div

// const blueCount = $("#techCompanies .blue").length;

// console.log(blueCount);

// $("#blueCompanies").text(blueCount)


console.log("\n=================== 3 =================");

// Step 1
    // Get the first field's value.
// Step 2
    // Get the second field's value.

// Step 3
    // Check whether both values are numbers.

// Step 4
    // If they are numbers:

    // sum = first + second
// average = sum / 2
// Then:

// display the result in the console

// display the result underneath the form

// If either value is not a number:
    // Please enter numerical values only
        // must appear underneath the form


// $ => is shortcut used by jQuery
// document => represent the current HTML page 
// $(document) => geve the HTML document to jQuery
// .ready() => wait until the HTML document has finished loading, then run this function


// $(document).ready(function () { 
//     // $("#numberForm")
//         // select form id with jQuery 
//     // .on("submit", ...)
//         // Event Listen for form submission
//     $("#numberForm").on("submit", function (event) {

//         // Prevent the browser from refreshing/submitting normally
//    event.preventDefault();     

//         // Get the values from the two form input fields
//         const value1 = $("#number1").val().trim();
//         const value2 = $("#number2").val().trim();

//         // Check for empty values
//         if (value1 === "" || value2 === "") {

//             $("#result").text("Please enter numerical values only");

//             console.log("Please enter numerical values only");

//             return;
//         }

//         // Convert string values into numbers
//             // JavaScript sees strings and perform string concatenation.
//         const number1 = Number(value1);
//         const number2 = Number(value2);

//         // Check whether both values are numbers
//         if (isNaN(number1) || isNaN(number2)) {

//             $("#result").text("Please enter numerical values only");

//             console.log("Please enter numerical values only");

//             return;
//         }

//         // Calculate the sum
//         const sum = number1 + number2;

//         // Calculate the average
//         const average = sum / 2;

//         // Display result in console
//         console.log("Sum:", sum);
//         console.log("Average:", average);

//         // Display result underneath the form
//         $("#result").text(
//             "Sum: " + sum + " | Average: " + average
//         );

//     });

// });


//  Method 2 

// // When the HTML document is ready, run this function.
// $(function () {
  
//   $("#numberForm").on("submit", function (event) {
//     event.preventDefault();

//     const value1 = $("#number1").val().trim();
//     const value2 = $("#number2").val().trim();

//     if (value1 === "" || value2 === "") {
//       showError();
//       return;
//     }

//     // const number1 = Number(value1);
//     // const number2 = Number(value2);

//     if (Number.isNaN(number1) || Number.isNaN(number2)) {
//       showError();
//       return;
//     }

//     const sum = number1 + number2;
//     const average = sum / 2;

//     console.log("Sum:", sum);
//     console.log("Average:", average);

//     $("#result").text(`Sum: ${sum} | Average: ${average}`);
//   });

//   function showError() {
//     const message = "Please enter numerical values only";

//     console.log(message);
//     $("#result").text(message);
//   }
// });



console.log("\n=================== 4 =================");

$(function () {
    // When this form is submitted, run this code.
    $("#userForm").on("submit", function (event) {
        event.preventDefault();

        const firstName = $("#firstName").val().trim();
        const lastName = $("#lastName").val().trim();
        const email = $("#email").val().trim();

        if (firstName === "" || lastName === "" || email === ""){
            $("#err").text("Please provide all required fields");
            return;
        }
        // Remove any error message
        $("#err").text("")
        // Hide the form
        $("#userForm").hide();

        // display values enterd by the user

        $("#userOutput").html(` 
            <p> First Name: ${firstName} </p>
            <p> Last Name: ${lastName} </p>
            <p> Email : ${email} </p>

            `);
    })
})












