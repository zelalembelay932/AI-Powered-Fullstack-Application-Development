
//1, DOM, Document Object Model.
    // The DOM is the browser's JavaScript-friendly representation of an HTML page.
    // It allows JavaScript to find, read, change, add, or remove HTML elements.


// Document
    // our HTML web page.
// Object
    // every tag (like headings or paragraphs) is turned into a live software object.
// Model
    // arranges these pieces in a family tree pattern with parents and children
    // structured representation of the document

//<div>
//   <h1>Hello</h1>
//   <p>Welcome</p>
// </div>;

// The DOM looks
//         div
//        /   \
//      h1     p
//      |      |
//   "Hello" "Welcome"

// https://www.google.com/imgres?q=what%20is%20Document%20Object%20Model.&imgurl=https%3A%2F%2Fmedia.geeksforgeeks.org%2Fwp-content%2Fuploads%2F20241120143259875787%2FDOM-Tree1.webp&imgrefurl=https%3A%2F%2Fwww.geeksforgeeks.org%2Fhtml%2Fjavascript-html-dom%2F&docid=9JI9AykmD4PuNM&tbnid=YKODyONsZplnnM&vet=12ahUKEwitgO3X2qqWAxVVOfsDHTavCigQnPAOegUIjgEQAA..i&w=1042&h=652&hcb=2&ved=2ahUKEwitgO3X2qqWAxVVOfsDHTavCigQnPAOegUIjgEQAA



// https://www.google.com/imgres?q=what%20is%20Document%20Object%20Model.&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F5a%2FDOM-model.svg%3Futm_source%3Den.wikipedia.org%26utm_campaign%3Dindex%26utm_content%3Doriginal&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDocument_Object_Model&docid=5Z2_7auAh313jM&tbnid=Kbt7RQ4zlmLLrM&vet=12ahUKEwjz9JiX2aqWAxWHQvEDHeaiLbQQnPAOegQILhAA..i&w=428&h=443&hcb=2&ved=2ahUKEwjz9JiX2aqWAxWHQvEDHeaiLbQQnPAOegQILhAA





//2, Why do we need the DOM?
    // JavaScript doesn't directly manipulate the original HTML file.

        //  HTML
        //   ↓
        // Browser reads HTML
        //   ↓
        // Browser creates DOM
        //   ↓
        // JavaScript interacts with DOM
        //   ↓
        // Webpage changes

// 3, DOM Tree

// <!DOCTYPE html>
// <html>
//   <body>
//     <h1 id="title">Hello</h1>
//     <p>Welcome to my website.</p>
//     <button>Click Me</button>
//   </body>
// </html>

            // Document
            // │
            // └── html
            //     │
            //     └── body
            //         │
            //         ├── h1
            //         │   └── "Hello"
            //         │
            //         ├── p
            //         │   └── "Welcome to my website."
            //         │
            //         └── button
            //             └── "Click Me"





// 4. JavaScript uses the DOM
    // Here are some common DOM operations
    // 4 Core Operations of DOM Manipulation!

    // DOM as a live blueprint of a webpage. JavaScript gives us the tools to inspect this blueprint, update it, change its structure, and react when users interact with it.

// 1, Selecting Elements (Reading)
// Single element
    // document.getElementById("id");
        // Targets a single element containing a specific ID.
    // document.querySelector(".class");
        // Uses standard CSS selectors to retrieve the first matching element.

// Multiple elements

    // document.querySelectorAll('p')
        // Gathers all matching elements into a list format.
    // const byClass = document.getElementsByClassName('item');

// 2, Modifying Content and Styles (Updating)
    // Changing text: 
        // textContent 
            // element.textContent = "New text";
            // Changes the plain text inside an element
        
        // innerText 
        // document.getElementById(id).innerHTML = new HTML

        // The innerHTML property is useful for getting or replacing the content of HTML elements.
            // https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_innerhtml

        // Changing CSS
            // document.getElementById(id).style.property= new style
        // To change the style of an HTML element, use this syntax:
            // https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_style

        // Managing classes
            // classList.add();  and classList.remove()
                // add or delete CSS classes on an HTML element
                // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_add


// 3. Creating and Deleting Elements (Structure)
    // document.createElement('div')
        //  Generates an entirely new HTML tag in memory.
        // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement3

    // element.append()
        // Inserts a newly created tag or text
        // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_append3

    // element.remove()
        // Deletes a specific target element completely from the document tree
        // http://w3schools.com/jsref/tryit.asp?filename=tryjsref_node_remove

// el
    //  is standard shorthand for "element"!



// Find elements using CSS selectors
// document.querySelector(".box");



// JavaScript HTML DOM Events
    // In JavaScript, an event is a signal that something has "happened" within the browser or user interface,allowing your code to react to it. 
    // When users interact with a webpage 
    // like => clicking a button, scrolling, or typing
    
    // For example, if the user clicks a button
    // https://www.w3schools.com/js/tryit.asp?filename=tryjs_event_onclick1


// Category       | Event Name   |    Trigger Condition

// Mouse Events      click       |  User clicks an element

//                   dblclick    |  User double-clicks an element

//                   mouseover   |
//                   mouseout    |  Cursor enters or leaves an element

//                   mousemove   |  Cursor moves over an element


// Keyboard Events    keydown    |  User presses a key down

//                    keyup      |  User releases a key


// Form Events        submit     |  Form is submitted

//                    change     | Value of an <input>,<select>, or <textarea> changes

//                    focus/     | An element gains or loses focus
//                    blur

// Window            DOMContentLoaded  |  HTML is fully loaded and parsed
//                   error             |  encounters javascript error   

//                     resize          |  Browser window size changes

//                     scroll          |  User scrolls up or down the page

// Touch/Pointer       touchstart/     |   Finger touches or leaves a touchscreen
//                      touchend

//                      pointerdown    |  Device-agnostic click/touch start or end


// https://www.w3schools.com/tags/ref_eventattributes.asp





// How to do Event handling?

// 1, Select the DOM Element
    // Target the HTML element that will receive the user interaction.
    // const button = document.querySelector('#submit-btn');


// 2, Write the Handler Function
    // Define the logic to execute when the event fires. The function automatically receives an event object containing details about the interaction.

// function handleClick(event) {
//   console.log('Button clicked!', event.target);
// }



// 3, Attach the Listener (Kelay huetu emiseruet bota lay Attach Madreg)
    // Use addEventListener(eventType, handlerFunction) to link the event to your handler.

    // button.addEventListener('click', handleClick);



// Ways to bind an event (HTML event handlers)

    // 1, HTML event handlers / Inline HTML Attributes
        // Attach JavaScript directly inside HTML markup using on<event> attributes.

//<button onclick="alert('Button clicked!')">Alert</button>
//<button onclick="handleClick(event)">Call Function</button>
        // https://www.w3schools.com/tags/ref_eventattributes.asp

    // 2, Traditional DOM event handlers
        // Select a DOM element in JavaScript and assign a function directly to its property.
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_events2

    // 3, DOM Level 2 Event Listeners "addEventListener()"
        // Add an event listener that fires when a user clicks a button:

        // https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_displaydate




// Default behaviors
    // preventDefault()
        // Stops the browser's native default action on the element, but the event continues to bubble up the DOM tree to parent elements.

        // https://www.w3schools.com/jsref/event_preventdefault.asp

    // stopPropagation()
        // Stops the event from bubbling up to parent elements, but does not stop the browser's native default action on the target element.

        // https://www.w3schools.com/jsref/event_stoppropagation.asp





// Form Validation
    // registration form tayp cods for next Support class