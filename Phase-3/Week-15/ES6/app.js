// // to import other file function Commnjs
import { myMultiplier } from "../nodeModulesProject/myFirst.js";

import  {age } from './math.js'



//destructure

// object des....
const person = {name:'',age:28}
// person.name, person[name]
const {name,age}  =  person
// name, age

const  num = [1,2,3,4,5]
// num[3]
const [first,second,third,...ac] = num
console.log(rest);  [4,5]


const num2 =[7,8,...num]


function ab(num,...ab){
    return ab
}


ab(10,1,3,4,5,6)



// console.log(myMultiplier(10));


// const math = require("./math");

// console.log(math.add(5, 3));
// console.log(math.subtract(4, 2));
// console.log(math.age);

// // or

// const {add, subtract, age } = require("./math");

// console.log(add(5, 3));
// console.log(subtract(4, 2));
// console.log(age);



// ES6 way

// import {add, subtract} from "./math.js";
// console.log(add(50, 3));
// console.log(subtract(40, 2));
// for single import default

// for this case first we are add exporter file (export default add;) 
    // then we take any name 
    // import name from "./math.js";



// console.log(name);

