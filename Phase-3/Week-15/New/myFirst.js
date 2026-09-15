// 1 a
console.log("My first module");

// 1 b 

function myMultiplier (number){
    return number * 2;
}
const result = myMultiplier(4)
// console.log(result);


module.exports.myMultiplier = myMultiplier;




