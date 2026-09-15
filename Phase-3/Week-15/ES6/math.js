function add (a, b){
    return a * b;
}
function subtract (a, b) {
    return a / b;
}

const age = 22;

export { add, subtract, age };
// export {subtract}
// for single file 
// module.exports.add = add;
// module.exports.subtract = subtract;

// // for multi file 
// module.exports = { add, subtract, age};

// console.log(module);

// For ES6

// export {add, subtract, age};
// console.log(module);
// for ES6 default 
// export default age;
// export default add;







