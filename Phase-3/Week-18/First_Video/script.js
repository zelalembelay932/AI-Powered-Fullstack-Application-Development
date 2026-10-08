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

import { Component } from "react";

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






// function EvangadiStudent(name, group ){
//         this.name = name;
//         this.group = group;
// }
// EvangadiStudent.prototype.batch = "May, 2026"
// console.log(EvangadiStudent);

// EvangadiStudent.prototype.studentInfo = function() {
//         return `${this.name} is ${this.batch} evagadi student in group ${this.group}` 
// }
// let studentOne = new EvangadiStudent("Teshome", 1);




console.log("=======React Props=======");


// React Props (Properties)
        // are how we send data into a component, so one component can show different content.

        // how to read them with destructuring, how to render lists with `map()`, and how the spread operator passes a whole object as props.

// What are props?
        // Props = data  sent from parent => Child.
       
        // function App() {
        // return <Student name="Zelalem" age={30} />;
        // }

        // function Student(props) {
        //         return (
        //         <div>
        //         <h2>{props.name}</h2>
        //         <p>Age: {props.age}</p>
        //         </div>
        // );
        // }
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


// function App() {
//         return (
//         <>
//                 <Developer
//                 name="Zelalem"
//                 role="Full Stack Developer"
//                 experience={3}
//                 />

//                 <Developer
//                 name="Abebe"
//                 role="Frontend Developer"
//                 experience={2}
//                 />
//         </>
//         );
//         }
// // Developer.jsx
// function Developer({ name, role, experience }) {
//         return (
//         <>
//                 <h2>{name}</h2>
//                 <p>{role}</p>
//                 <p>{experience} years experience</p>
//         </>
//         );
// }
// export default Developer;

// Notice something powerful here.

// We use one component:
        // <Developer />
// but provide different props:
        // <Developer name="Zelalem" role="Full Stack Developer" experience={3} />
        // and:
        // <Developer
        // name="Abebe"
        // role="Frontend Developer"
        // experience={2}
        // />
// So the same component can display different data.






// 2.2 Reading  props and Destructuring
        // in side chiled component, there  are three(3)  common way to read props.
        // All three give the same result; 
                // only differ in how much you type.

// Way 1
        // Dot Notation
                // Accept one parameter called `props` and read each value with a dot, like `props.name`
// Way 2 
        // Destructure in the body
                // Keep the `props` parameter, then pull the values out into variables on the first line of function.
// Way 3
        // Destructure in the parameter
                // pull the values out right inside the parentheses  with { }. the shortest way and the one you'll see most.
        



console.log("React Class Components + Props — Using Your Project");

`// React Class Components + Props Using Our Project`

        // our Structure is 
                // data.js
                        // ProductList
                                // ProdactCard
        
        // Product data
        //     ↓
        // ProductList receives/imports products
        //     ↓
        // ProductList loops through products
        //     ↓
        // ProductList sends each product through props
        //     ↓
        // ProductCard receives props
        //     ↓
        // ProductCard displays the product

`// 1, data.js`
        // Think of this as our database-like data source for the React application.

        // It is not actually a NoSQL database
                // but like that
        // It is simply a JavaScript array containing JavaScript objects.

`// 1.2 Products`
        // it is
                let product = [];
        // we are create an array
                // array can contain multiple values in Object.
        
// products
        // │
        // ├── product 1 → object
        // ├── product 2 → object
        // ├── product 3 → object
        // ├── product 4 → object
        // └── ...
`// What is Object?`
        // An object store related information using `KEY/VALUE Pairs.
                // {
                //         id: 1,
                //         title: "TIMATIM SELAXA",
                //         price: "$5.99"
                // };
        // eg 
                // key => id, value => 1
                // key => title, value => "TIMATIM SELAXA"

`// 1.3 Why do we put product in separete file?`
        // like this
        class ProductList extends Component {
                render() {
                const products = [
                {
                        id: 1,
                        title: "Tibs",
                        price: "$22.99",
                },
                ];
        }
        }
        // But that is not a good structure when the application becomes LARGER.
        // Wen nested 
                // src/
                // │
                // ├── assets/
                // │   └── data.js
                        // data stored
                // │
                // ├── components/
                // │   ├── ProductList/
                        // List management
                // │   └── ProductCard/
                        // Display one Product




`// 1.4  Our data.js is similar to database records`
        // this is usefull for understand Full-Stack development. 

        // Our data
                // [
                //   {
                //     id: 1,
                //     title: "Tibs",
                //     price: "$22.99",
                //   },
                //   {
                //     id: 2,
                //     title: "Kitfo",
                //     price: "$25.99",
                //   },
                // ];
// look conceptually similar to records returned from a backend API
        // Eg 
                // a Node API might return.
        // 
                // [
                //   {
                //     "id": 1,
                //     "title": "Tibs",
                //     "price": 22.99,
                //   },
                //   {
                //     "id": 2,
                //     "title": "Kitfo",
                //     "price": 25.99,
                //   },
                // ];

// The react component cloud consume that in almost the same way.
                // Database/API
                //      ↓
                // Backend
                //      ↓
                // JSON
                //      ↓
                // React
                //      ↓
                // Props
                //      ↓
                // UI
`// Our current data.js is basically a static local data source standing in for the backend`

`// 1.6 One thing improve in our data`
        // price: "$5.99"
                // we are mixing `string and number`
        // we prefer to 
                // price: 5.99
        // the display 
                // <p>${price}</p>



`// 2, ProductList `

        `2.1 // What does  class ProductList extends Component{}`

// We are crateing JavaScript class called.
        // ProductList
// and we are saying it extends Reacts
        // extends Component
                // Component is provides React function that all our class be have as a React component.
        // React.Component

`//2.2 Why extends Component?`
        // without React
                class Person {
                        constructor(name) {
                                this.name = name;
                        }
                }
        // Person is normal JavaScript class


        // With React
                class ProductList extends Component{}
                // we are crating a react class component.
                        // Ract is knows how to work with it.

`// 2.3 What is a class component?`

        // A class component is a React component written using JavaScript `class` syntax.
        
        class ProductList extends Component{
                render() {
                        return (
                                <h1>Hello</h1>
                        )
                }
        }

        // Functional component

        const ProdactCard = () =>{
                return(
                        <h1>Hello</h1>
                )
        }

        // Both can produce React UI
                // important difference is the structure.
`// 2.4 Why do we have render()?`
        // render
                // to describe the UI it should return.

        // The important relationship is:
                // class component
                //        ↓
                //     render()
                //        ↓
                //     JSX/UI

        // Then our:
                render()
                returns:
                <>
                        <div className={styles.foods_container}>
                        </div>
                </>

`// 2.6 The most important part "products.map()"`
        // {products.map((product, index) => {}
        // this is connect to our data.js to UI 

        // .map()
                // goes through every product
        // product 1 => ProductCard
        // product 2 => ProductCard
        // product 3 => ProductCard
        // product 4 => ProductCard
        
// So instead of manually writing:

        // <ProductCard ... />
        // <ProductCard ... />
        // <ProductCard ... />
        // <ProductCard ... />

// you let JavaScript generate them.


`// 2.7 What is product?`
        // {products.map((product, index) => {}
                // product => current product
                        product = {
                                id: 1,
                                title: "TIMATIM SELAXA",
                        };

                        // During the second:

                        product = {
                                id: 2,
                                title: "TIBS",
                        }


`// 2.8 What is index?`
        // for an array gives
                // product 1 → index 0
                // product 2 → index 1
                // product 3 → index 2

`// 2.9 Now we arrive at PROPS`

        // <ProductCard key={index} data={product} />

        // This is where our sending information from "ProductList" to "ProductCard"
`What are props`
        // Props are information passed from a parent component to child component.

        // ProductList is the parent.
        // ProductCard is the child.
                // we sending:
                        data={product}

`Understand this syntax`
        //  <ProductCard data={product} />

// There are two different things here:
        `// data =>is the prop name.`
        `product =>is the actual JavaScript value.`

        So:
                data={product}
        means:
                // prop name = data
                // prop value = current product object
        // For example:
        product = {
        id: 1,
        title: "TIMATIM SELAXA",
        price: "$5.99"
        }

// Then React effectively gives to ProductCard:
        data = {
        id: 1,
        title: "TIMATIM SELAXA",
        price: "$5.99"
        }

`2.10 Why do we need props?`
        // B/c components should be reuseble
        // ProductCard could't receive props
        // the every ProductCard need hardcoded information
// like this 
        // <h3>Tibs</h3>
        // <p>$22.99</p>

        // with in props
                {/* <h3>{title}</h3>
                <p>{price}</p> */}
        // Now the same component can display only data changed:
                // Tibs
                // Kitfo
                // Kinche
                // Fatira
                // Gored Gored
`2.11 key={index}`
        // key helps React identify list items.
// React needs a stable way to distinguish(ለይቶ ማወቅ):
        // ProductCard 1
        // ProductCard 2
        // ProductCard 3
// You currently use:
        // key={index}
// It works for many simple static lists, but your data already has a unique ID:
        // id: 1
        // id: 2
        // id: 3


`2.12  Why doesn't ProductCard get "key" from "this.props"?`




