// Dic Roll Check in While

// let dicRoll = 0;
// let attempts = 0;

// console.log("Rolling the sice unit we go a 6...");


// while (dicRoll !== 6) {

//     dicRoll = Math.floor(Math.random() *6) + 1;
//     attempts++;
    

//     console.log(`Attemp ${attempts}: Rolled a ${dicRoll}`);
    
// }
// console.log(`Success! It look ${attempts} rolls to get a 6.`);

console.log("\n ===========   add up   =========== ");

// const addUp = (a) =>{
//     if(typeof a !== "number") {
//         return "Please enter a number value";
//     }else if( a < 0){
//         return "Please enter only posetive number ";
//     }else{
//         let result = 0;
//         for (i = 1; i <= a; i++){
//             result = result + i;
//         }
//         return result;
//     }
// }
// addUp(4);
// console.log(addUp(40));



console.log("\n ===========  Question 1  =========== ");

// Write a function that prints the first 10 integers on the console starting from the number 1 using the JavaScript for loop.

// for loop
function first10 (num){
    if(isNaN(num)){
        return "Please enter a number value";
    }
    if (num < 0){
        return "Please enter only posetive number ";
    }
        for (num = 1; num <= 10; num++){
            console.log(num);
        }
}
first10(1)

