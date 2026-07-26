console.log("\n ======== Question 1 =========");

// function functionName(parentheses) {
    
// }

// 1, Function Declaration

// function myFirst (){
//     console.log("Hello");
// }
// myFirst();

// 2, Function Exprerssion

// const myFirst = function (){
//     console.log("Hello");
// }
// myFirst();

// 3, Arrow Function

// const myFirst = ()  =>{
//     console.log("Hello");
// }
// myFirst();

console.log("\n ======== Question 2 =========");

// 1, Function Declaration

// A parameter is a variable inside the function definition that receives a value.
// An argument is the actual value passed to the function when it is called.

// function mySecond(parameter) {
//     console.log(parameter);
// }

// mySecond("JavaScript Function Declaration");
// mySecond(100);

// 2, Function Exprerssion

// const mySecond = function (parameter) {
//     console.log(parameter);
// }
// mySecond("JavaScript Function Exprerssion");
// mySecond(200);

// 3, Arrow Function
// const mySecond = (parameter) => {
//     console.log(parameter);
// };
// mySecond("JavaScript Arrow Function");
// mySecond(300);

console.log("\n ======== Question 3 =========");

//1,  Function Declaration
// function myThird(parameter) {
//   mySecond(parameter); // Calls mySecond to print the value
// }
// myThird(" myThird JavaScript Function Declaration");

// 2, Function Exprerssion
// const myThird = function (parameter) {
//    mySecond(parameter);
// };
// myThird("myThird JavaScript Function Exprerssion");

// 3, Arrow Function
// const myThird = (parameter) => {
//   mySecond(parameter);
// };
// myThird("myThird JavaScript Arrow Function");



console.log("\n ======== Question 4 =========");
//1,  Function Declaration
// function myFourth (array) {
//   console.log(array[0]);
// }
// myFourth([10, 20, 30, 40]);
// myFourth(["Apple", "Banana", "Orange"]);

// 2, Function Exprerssion
// const myFourth = function (array){
//   console.log(array[0]);
//   console.log(array.at(0)); // second option
// }
// myFourth([100, 200, 300]);
// myFourth(["Dog", "Cat", "Bird"]);

// 3, Arrow Function
// const myFourth = (array) => {
//   const [first] = array;
//   console.log(first);
// }
// myFourth([5, 10, 15]);
// myFourth(["Red", "Blue", "Green"]);

console.log("\n ======== Question 5 =========");
 //1,  Function Declaration
// function myFifth (array) {
//   console.log(array[0] + array[1]);
// }
// myFifth([10, 20]);

// 2, Function Exprerssion
// const myFifth = function (array) {
//   const [num1, num2] = array;
//   console.log(num1 + num2);
// }
// myFifth([100, 200]);

// 3, Arrow Function
// function myFifth (array) {}
// const myFifth = function (array) {}

// const myFifth = (array) => {
//   let sum = 0;

//   for (const number of array){
//     // sum += number;
//     // sum = sum + number;
//   }
//   console.log(sum);
// }

// myFifth([12, 18])









// console.log("\n ======== Question  =========");

// let firstName = "Zelalem ";
// let lastName = "Belay";

// let fullName = firstName + lastName;

// console.log(fullName);


// let firstName = "Jane";
// let lastName = "Doe";
// let fullName = `My Name is:- ${firstName} ${lastName} `; // The space is naturally typed inside the backticks

// console.log(fullName);


// let Class = [" Abebe", "Chaltu", 3, "chala"];

// console.log(Class[3]);




// function myFirst() {
//     console.log("Hello");
// }

// myFirst();

// // console.log("\n ========  =========");
// function abebe() {
//     console.log(
//     "Abebe Beso Bela Abebe Beso Bela Abebe Beso Bela Abebe Beso Bela",
//     );
//     console.log("Hello Abe");
//     const num1 = 40;
//     const num2 = 80;
//     console.log(num1 + num2);

//     console.log("Learn more");
//     console.log("Buy");
// }

// abebe();






// console.log("\n ======== =========");


// function convertMinutesToSeconds(minutes) {
//     return minutes * 60;
// }

// console.log(convertMinutesToSeconds(2));




// console.log("\n ======== grader =========");
// // || T 
// function grader(score) {
//     if (score > 100 || score < 44) {
//     return "Invalid score";
//     }
//     if (score >= 90 && score <= 100) {
//         return "Grade A";
//     }
//     if (score >= 80 && score <= 89) {
//         return "Grade B";
//     } 
//     if (score >= 70 && score <= 79) {
//         return "Grade C";
//     } else {
//         return "Grade D";
//     }
// }

// console.log(grader(0));



// Return Example

// function add(a, b){
//     return a + b
// }

// function average(num1, num2){
//     let result = add( num1, num2)/2;
//     return result;
// }

// let x = average();
// console.log(average(10, 20));
// console.log(average(100, 20));


// function test(){
//     return "I run"
//     console.log("I never run");
// }
 
// console.log(test());