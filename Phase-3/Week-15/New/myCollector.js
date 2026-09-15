// import { myMultiplier } from "./myFirst.js";

const x = require("./myFirst");
const y = require("./mySecond");
const fs = require("fs");


// const firstResult = x.myMultiplier(5);
// const secondResult = y.myMultiplier(5);

// console.log(firstResult);
// console.log(secondResult);

const firstResult = x.myMultiplier(14);


const firstText = `The value of 14 when passed through the myMultiplier function is ${firstResult}`;

fs.writeFileSync("results.txt", firstText);


// b


const secondResult = y.myMultiplier(14);

const secondText = `The value of 14 when passed through the myMultiplier function is ${secondResult}`;

fs.appendFileSync("results.txt", "\n" + secondText);



