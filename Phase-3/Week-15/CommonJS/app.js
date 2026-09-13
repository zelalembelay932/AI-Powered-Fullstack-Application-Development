// to import other file function
const math = require("./math");

console.log(math.add(5, 3));
console.log(math.subtract(4, 2));
console.log(math.age);

// or

const {add, subtract, age } = require("./math");

console.log(add(5, 3));
console.log(subtract(4, 2));
console.log(age);


