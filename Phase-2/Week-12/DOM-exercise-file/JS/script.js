
console.log("\n ===========Quesion 1 ===========");
//1, select the element whose id is "sample1"
// getElementById() is the most direct method select element ID.
// const sample1 = document.getElementById("sample1");
// const sample1 = document.querySelector("#sample1");

// 1.2 Print the element itself on the console upon page refresh.

// this prints the actual HTML element
// console.log(sample1);

// 1.3 Print the content of the element on the console upon page refresh.
// textContent get the text inside the HTML element.
// console.log(sample1.textContent);


console.log("\n ===========Quesion 2 ===========");
// 2.1 Select the element with an ID of "techCompanies" and display it on your console. WITHOUT using  querySelector()


// // getElementById() directly searches the document for an
// const techCompanies = document.getElementById("techCompanies");

// // print the select <ul> element to the console
// console.log("2.1:-", techCompanies);



// 2.2 Select "techCompanies" using querySelector()

// const querySelector = document.querySelector("#techCompanies");
// // print the select <ul> element to the console
// console.log("2.2:-", querySelector);




// 2.3 Count how many companies are inside the <ul>

// querySelectorAll() selects ALL elements matching the selector.

// we want only the <li> elements INSIDE #techCompanies, we use (#techCompanies li)

// const companies =document.querySelectorAll("#techCompanies li")

// console.log("2.3", companies.length);





// 2.4 Select all elements with class red

// we are use 2 methode 
    // querySelectorAll()
    // getElementByClassName()

// 2.4 - Method 1: querySelectorAll()

    // A class selector with dot.
        // .red

// const red =document.querySelectorAll(".red");
    // Dispaly all red in console
// console.log(red);
// console.log(red.length);


// 2.4 - Method 2: getElementsByClassName()
    // getElementsByClassName() searches for elements that have the specified class name.

// const red = document.getElementsByClassName("red");
// console.log("2.4", red);
// console.log(red.length);



// 2.5 Create a new <li> element
// createElement() creates a HTML element.

const facebook = document.createElement("li");

// // Add the text "Facebook" inside the new <li>.
facebook.textContent = "Facebook";

console.log("2.5:-", facebook);



// 2.6 Add the "blue" class
facebook.classList.add("blue");
console.log("2.6:-", facebook);


// // 2.7 Append Facebook next to Sony
const sony = document.querySelector("#techCompanies li:last-child");

console.log("Sony:-", sony);
// // Add Facebook immediately after Sony.
techCompanies.appendChild(facebook);
// sony.insertAdjacentElement("afterend", facebook)




// 2.8 Count all blue companies

// querySelectorAll(".blue") finds every element whose class contains "blue".

const blueCompanies = document.querySelectorAll("#techCompanies .blue");

console.log("2.8 Blue companies:", blueCompanies.length);








console.log("\n ===========Quesion 3 ===========");


// Change the page background when Yes / No is clicked

//Step 1, First crate function to add background

// function addBackground(){
//     document.body.style.backgroundColor = "#99ecff"
// }
const addBackground = () =>  document.body.style.backgroundColor = "#99ecff"
//Step 2, First crate function to remove background

// backgroundColor to an empty string ("")
// function removeBackground() {
//     document.body.style.backgroundColor = "";
// }
const removeBackground = () => document.body.style.backgroundColor = "";



const yesBackground = document.getElementById("yesBackground");

const noBackground = document.getElementById("noBackground");

// Step 3
    // Add a click EVENT to yes
    // addEventListener() listens for event 
        // "click"
            // The event we are listening for.
                // addBackground
    // function that should ececute when the click happens.
    yesBackground.addEventListener("click", addBackground);
// Step 4
    // Add a click EVENT to no
    // when the user clicks No  button
        // removeBackground() will execute.

    noBackground.addEventListener("click", removeBackground);







// Method 2

// Change background when Yes is clicked

yesBackground.addEventListener("click", function () {

    document.body.style.backgroundColor = "#99ecff";

});


// Remove background when No is clicked

noBackground.addEventListener("click", function () {

    document.body.style.backgroundColor = "";

});


// Method 2 — Using onclick
// When Yes is clicked
yesBackground.onclick = function () {

    document.body.style.backgroundColor = "#99ecff";

};


// When No is clicked
noBackground.onclick = function () {

    document.body.style.backgroundColor = "";

};



