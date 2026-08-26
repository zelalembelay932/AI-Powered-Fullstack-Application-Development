const form = document.getElementById('form');
const firstname_input = document.getElementById("firstname-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeatPassword_input = document.getElementById("repeat-password-input");

const error_message = document.getElementById("error-message");



form.addEventListener('submit', (e) =>{
    let errors = []
    if (firstname) {
        // if we have a firstname input we are in the signup
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeatPassword_input.value)
    } else {
        // if we don't have a firstname input then we are in the login page
        errors = getSignupFormErrors(email_input.value, password_input.value);
    }

    if (e.length > 0) {
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
    return errors;
}



