import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

// npm install react-icons
// then import two icons by name 
      // FaEye => represent an eye icon
      // FaEyeSlash => represent an eye with a slash through it.

function PasswordToggle() {
  // ths function is a React component because it returns JSX describing the interface.
  // Why dose the name start in with a capital letter
  // this help React distinguish(ለይቶ ማወቅ) our component from built-in HTML element
      // <PasswordToggle />
  // that means we want React to render  the PasswordToggle component.
  // could use inside App.jsx
  const [username, setUsername] = useState("");
  // useState("")
      // creat a state value with an initial value of an empty string
  // username 
        // reads the current username
  // setUsername
        // requeest an update to the username state
        // eg 
            // when we type => Zele
            // React can updatr the state to =>  username = "Zele"
  const [password, setPassword] = useState("");
    // that is work like username
    
  const [showPassword, setShowPassword] = useState(false);
    // this can two have values true or false.
        // false => password is hidden 
        // true => password is visible.
    // why start false?
        // Because password should be hidden by default

  const handleSubmit = (event) => {
    // handleSubmit 
        // describe the action handling the form submission
    // (event)  receives the event object from React when the form is submitted
    event.preventDefault();
    // HTML form can the browser default form submission behavior reload the page so STOP that default behavior.  
  };

  // function togglePasswordVisibility() {
  //   setShowPassword(function (previous) {
  //     return !previous;
  //   });
  // }

  // function too(){
  //   setShowPassword(function (prev) {
  //     return !prev;
  //   });
  // }

  return (
    <main>
      <h2>Password</h2>
      <form onSubmit={handleSubmit}>
        {/* It tells React to run handleSubmit when a valid form submission occurs.
        eg
            when the user clicks Submit, the browser checks your required fields. If those fields pass the browser's built-in validation, React's onSubmit handler runs.
         */}
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          // this is connect the input value to the React state variable name username
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <br />

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            // If showPassword is true, React sets the input type to "text".
            // If showPassword is false, React sets the input type to "password".
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((previous) => !previous)}
            // onClick={too}
            // onClick
            // is react event handler

            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default PasswordToggle;
