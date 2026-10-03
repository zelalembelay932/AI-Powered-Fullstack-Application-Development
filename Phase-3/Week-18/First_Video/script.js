// let student = {
//     name :" John",
//     age: 20,
//     greet: function() {
//         console.log('Hello, my name is ${this.name} and i an ${this.age} years old. ');
//     },
// };
// console.log(student);
// console.log(student.name);
// // to add new name
// student.name = "Abel";
// console.log(student.name);
// // to add new item
// student.city = "Adama";
// console.log(student);

// // to delete key item
// delete student.age;
// console.log(student);



    // function createStudent (name, age) {
    //     return {
    //         name: name,
    //         age: age,
    //         greet() {
    //             console.log("Hello");
    //         },
    //     };
    // };
    // const student1 = createStudent("Zele", "40");
    // console.log(student1);




//  This is not effishent way
        // effshent way is Constuctor function


// Constuctor function
        //any constructor function is start with CAPITAL letters
    
    function Student (name, age){
        this.name = name;
        this.age = age;
    }
    // method can be added to the proto type of this constructore function
    Student.prototype.greet = function() {
        return(`Hello, my name is ${this.name} and ${this.age} years old.`);
    }

const student1 = new Student("John", 20)

console.log(student1);
console.log(student1.greet());

// ES6 Modern way


class StudentClass {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years.`
    }
}











