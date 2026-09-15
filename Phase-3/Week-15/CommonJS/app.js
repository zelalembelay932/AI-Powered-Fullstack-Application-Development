// to import other file function Commnjs

const x = require("./math");

console.log(x.add(50, 30));
console.log(x.subtract(4, 2));
console.log(x.age);

// // or

// const {add, subtract, age } = require("./math");

// console.log(add(5, 3));
// console.log(subtract(4, 2));
// console.log(age);



// ES6 way

// import {add, subtract} from "./math.js";

// for single import default

// for this case first we are add exporter file (export default add;) 
    // then we take any name 
    // import name from "./math.js";


// console.log(add(5, 3));
// console.log(subtract(4, 2));
// console.log(name);
