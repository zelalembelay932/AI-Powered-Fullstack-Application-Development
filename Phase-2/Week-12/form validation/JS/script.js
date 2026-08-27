// DOM


//Step 1
    //  creates a variable
        // const variableName
// Step 2
    // current HTML document loaded in the browser.
        // document
// Step 3
    // Find the element whose ID is form.
        // getElementById("your id")

const form = document.getElementById('form');

const firstname_input = document.getElementById("firstname-input");

const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeat_Password_input = document.getElementById("repeat-password-input");

const error_message = document.getElementById("error-message");

// Listen for form event-driven something happening to  this
        // click;
        // submit;
        // input;
        // change;
        // mouseover;
        // keydown;
        // keyup;
        // focus;
        // blur;

// form.addEventListener("submit", (event) => {
//     console.log("Form submitted");
// });
    // There are two arguments: 

        //      addEventListener()
        //           /       \
        //          /         \
        // "submit"            function
        // argument             argument

    // First
        // what should i watch for? "Submit"
    // Second
        // what should i do when it happens? "Function"
        // eg:-
        // form
        //  ↓
        // listen
        //  ↓
        // submit
        //  ↓
        // run function



// function handleSubmit(event) {
//     console.log("Form submitted");
// }
// form.addEventListener("submit", handleSubmit);

            // form
            //  ↓
            // listen
            //  ↓
            // submit
            //  ↓
            // run handleSubmit
            //  ↓
            // find function handleSubmit(event)



// Listen for something happening to this element.
    // form.addEventListener('submit', ...)
    // Listen for the form being submitted.

        // what is 'submit'
            // <button type="submit">Signup</button>;
        // When the user presses that button, the form attempts to submit.
        // the browseer creates a submit event

        // What is (e) =>{...}?
            // this is arrow function
            // receives argument => (e)
                // (e) is a variable conttaining information about event
    // Eg:-
        // Firstname: Zele
        // Email: zele@example.com
        // Password: 12345678
        // Repeat: 12345678
    // then clicks
        // Signup
    // "Submit Event happen"




form.addEventListener('submit', (e) =>{
    // Create empty array
        // Because the program does not know yet whether anything is wrong
        // then the validation function add error messages
    let errors = []
if (condition) {
    
}

    if (firstname_input) {
      // if we have a firstname input we are in the signup
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_Password_input.value);

      // firstname_input, email_input, password_input, repeat_Password_input
        // are represents the entire HTML element
                // that means 
            // firstname_input => <input id="email-input">

    // firstname_input.value, email_input.value password_input.value, repeat_Password_input.value,
        // Represented the text currently enter into that field
        // that means
    // firstname_input.value => zele@gmail.com

    
    } else {
        // if we don't have a firstname input then we are in the login page
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

    if (errors.length > 0) {
        // if there are any errors
        e.preventDefault();
        error_message.innerText = errors.join(". ")
    }
})

function getSignupFormErrors (firstname, email, password, repeatPassword) {
    let  errors = []

    if (firstname === '' || firstname == null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add("incorrect");
    }
    if (email === '' || email == null){
        errors.push('Email is required')
        email_input.parentElement.classList.add("incorrect");
    }
    if (password === '' || password == null){
        errors.push('Password is required')
        password_input.parentElement.classList.add("incorrect");
    }
    if(password.length <8){
        errors.push('Password must have 8 characters')
        password_input.parentElement.classList.add("incorrect");
    }
    if(password !== repeatPassword){
        errors.push('Password dose not match repeated password')
        password_input.parentElement.classList.add("incorrect");
        repeat_Password_input.parentElement.classList.add("incorrect");
    }
    return errors;
}


function getLoginFormErrors (email, password){
    let errors = []

    if (email === "" || email == null) {
        errors.push("Email is required");
        email_input.parentElement.classList.add("incorrect");
    }
    if (password === "" || password == null) {
        errors.push("Password is required");
        password_input.parentElement.classList.add("incorrect");
    }
    return errors;
}

const allInputs = [firstname_input, email_input, password_input, repeat_Password_input];

allInputs.forEach(input => {
    input.addEventListener('input', () =>{
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})