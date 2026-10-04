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
    
//     function Student (name, age){
//         this.name = name;
//         this.age = age;
//     }
//     // method can be added to the proto type of this constructore function
//     Student.prototype.greet = function() {
//         return(`Hello, my name is ${this.name} and ${this.age} years old.`);
//     }

// const student1 = new Student("John", 20)

// console.log(student1);
// console.log(student1.greet());

// // ES6 Modern way


// class StudentClass {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         return `Hello, my name is ${this.name} and I am ${this.age} years.`
//     }
// }



// prototype Inheritance model






console.log("=======React Props=======");


// React Props (Properties)
        // are how we send data into a component, so one component can show different content.

        // how to read them with destructuring, how to render lists with `map()`, and how the spread operator passes a whole object as props.

// What are props?
        // Props = data  sent from parent => Child.
        function App() {
        return <Student name="Zelalem" age={30} />;
        }

        function Student(props) {
                return (
                <div>
                <h2>{props.name}</h2>
                <p>Age: {props.age}</p>
                </div>
        );
        }
                // parent sends
                        // name= "Zelalem"
                        // age = 30
                // Child receives them through `props`

        // Props(Properties)
                // are the data a parnt component passes to child component.
                // The parent writes them like HTML attributes, and the child receives all of them togetheras one JavaScript object called `props`.
        // if we are recived props
                // in functional we start `props`
                // in class based `this.props`



// LIKE ATTRIBUTES
        // Familiar syntax 
                // you pased props the same way you gave attributes to an HTML tag
                // a name, an equals sign, and a value.
// LIKE ARGUMENTS
        // A component is a function
                // Props are its arguments. the same component given different props shows difffernt output.
// ONE DIRECTION
        // Parent => child 
                // Data flows down. The parent sends, the child reads.
                // A child never sends props back to its parent.

// Why we need props
        // Without props a component always shows the same thing, so you would need a separate component for every variation (One for each product, each student, each question).
        // Props let you write a component `ONE` and reuse it with different data. This is what makes components truly reusable.



// Passing Different type of values

        // String
                // <User name="Zelalem" />
        // Number
                // <User age={25} />
        // Boolean
                // <User isAdmin={true} />
        // Array
                // <User skills={["React", "Node.js", "Python"]} />
        // Object
                // <User
                //         user={{
                //         name: "Zelalem",
                //         age: 25,
                //         }}
                // />;
        // Function
                // <Button onClick={handleClick} />;
        
// Real Example
        // Suppose you are building a developer portfolio.
// App.jsx
function App() {
        return (
        <>
                <Developer
                name="Zelalem"
                role="Full Stack Developer"
                experience={3}
                />

                <Developer
                name="Abebe"
                role="Frontend Developer"
                experience={2}
                />
        </>
        );
        }
// Developer.jsx
function Developer({ name, role, experience }) {
        return (
        <>
                <h2>{name}</h2>
                <p>{role}</p>
                <p>{experience} years experience</p>
        </>
        );
}
export default Developer;

// Notice something powerful here.

// We use one component:
        // <Developer />
// but provide different props:
        <Developer name="Zelalem" role="Full Stack Developer" experience={3} />
        and:
        <Developer
        name="Abebe"
        role="Frontend Developer"
        experience={2}
        />
// So the same component can display different data.










