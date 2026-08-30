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

// //1.2  print element itself on the console
// console.log(sample1);

// // 1.3  print the content/text of the element
// sample1.text();
// console.log(sample1.text());

// Modern jQuery shorthand
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


const techCompanies = $("#techCompanies");
console.log(techCompanies);

// 2.2. How many tech companies are listed under the ul element with an id of "techCompanies"?


const  count =  $("#techCompanies li").length;
console.log(count);


// 2.3 Select all elements with class red

const red = $(".red");

console.log(red);


// 2.4 Create a new <li> containing Facebook











