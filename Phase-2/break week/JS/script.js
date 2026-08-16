// Write a function called c that takes an array of numbers and returns the largest number in the array.

// step 1 (understand problem)
    // [3, 7, 2, 9, 4]
        // we are assending smalle number to large
        // find Largest
// step 2 (solve on paper)
    // [3, 7, 2, 9, 4]
        // [2, 3, 4, 7, 9] assending smalle number to large
        // array.length - 1

        // a - b
            // a is come a negative 
// step 4 Psudo code
    // step 1
        // write function called findLargest as teak parameter recived number
        // how? 
                // const findLargest = () =>{arr};
    // step 2
            // crate variable for stor number
            // how?
                // const num = arr[0];
    // step 3
        // crate for loop for check number 
        // how ?
            // for (let index = 0; index < array.length; index++) {}
    // step 4   
        // compare tow number small number to large
        // how?
        // birku
            // if(arr[i] > num){
            //     num = arr[i];
            // }
        // Afe
            //     if(num < arr[i]){
            //         num = arr[i]
            //     }
                

    // step 5 print result
                // return num;


//step 5 psudo to  javascrip code
// loop method
const findLargest = (arr) => {
    let num = arr[0];
    let num2 = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > num){
            num2 = num;
            num = arr[i];
            
        }else if (arr[i] > num2 && arr[i] !== num) {
            num2 = arr[i];
        }
    }

    return num2;
};

console.log(findLargest([3, 7, 2, 9, 4]));

console.log(findLargest([-5, -2, -10, -1]));
console.log(findLargest([100]));



// const findSecondLargest = (arr) => {
//     let largest = arr[0];
//     let second = arr[1];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             second = largest;
//             largest = arr[i];
//         } else if (arr[i] > second && arr[i] !== largest) {
//         second = arr[i];
//         }
//     }

//     return second;
// };

// console.log(findSecondLargest([3, 7, 2, 9, 4])); // 7
// console.log(findSecondLargest([-5, -2, -10, -1])); // -2





// Sort method
// function large(array) {

//     // let num = [];
//         array.sort((a, b) => a - b);
//     let num = array.length - 2;

//     return array[num];

// }


// console.log(large([23, 57, 26, 89, 44]));

// console.log(large([-5, -2, -10, -1]));

// console.log(large([100]));


// Examples:
// findLargest([3, 7, 2, 9, 4]);
// // 9

// findLargest([-5, -2, -10, -1]);
// // -1

// findLargest([100]);



// const numbers = [5, 12, 3, 130, 44];

// const largest = numbers.reduce((max, current) => current > max ? current : max, numbers[0]);

// console.log(largest); // Output: 130


