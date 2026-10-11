React.STATE
    `Props` 
        // bring data into a component. 
    `State`
        // is the data a component owns and can change 




`1.1 
    What is State, 
                and 
                    how its is different from
                                            Props?`
    // both props and state are plain JavaScript object that hold data about a component.
    // The deffrence is WHO OWNS THE DATA and WHO CAN CHANGE IT.

    PROPS `(QUICK REVISION)`
        // DATA from the PARENT
        // External inputs passed from parent to child, like arguments passed to a function.

        // The child can read them but CAN'T CHANGE THEM(immutable),
        //  data flow one way PARENT => CHILD
    STATE 
        `The component's own data`
        // internal data lives inside a component, like its local variables.
        // Only that component can CREATE, READ and CHANGE it.
        // it holds values that  CHANGE OVER TIME, usually because of something the user did.


`Why we need state`
    // State keeps track information b/n renders.
    // Whenever tha user does something that should change what on screen (click a button, types in an input, ticks a checkbox), we store the new value in state
    `When state changes, React automatically re-renders the components` // to show the new value.

`Why not just use a normal variable?`
    // if you change a normal variable, React doesn't know anything change, so the page stay the same.
    // When you change state through `this.setState()`, React is notified, re-renders the component, and the screen update





console.log("React Hooks");


`2, React Hooks`
    // Give function components memory, action after render, and shared data

    `2.1  What are React Hooks?`
            // Hooks are `SPECIAL functions` that let a FUNCTION COMPONENT use React features like STET. Added in React 16.8 (2019).
        `Why we use them`
            `before hooks`
                // To remember anything (a count, an open menu), you had to write a CLASS COMPONENT.
            `With hooks`
                // A simple `Function Component` can do it.Less code, easier to read.
        
        `THE 3 RULES`
            `1, Import them`
                import { useState } from "react";
            `2, Only inside components`
                // never in normal JS functions, never in class components.
            `3, Only at the top`
                // Never inside `if, loop, or nested function`

    `2.2 useState`
        //lets a component `REMEMBER A VALUE`. When the value changes, React `RE-DRAWS` the component.
        const [color , setColor] = useState("green");
            // color => the value 
            // setColor => the function that change it 
            // gereen => the starting value (initialState).
