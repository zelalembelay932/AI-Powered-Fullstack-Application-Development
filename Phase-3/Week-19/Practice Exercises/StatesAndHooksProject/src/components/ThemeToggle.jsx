import { useState } from "react";
// import { FaEye } from "react-icons/fa";

  function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // useState(false)
          // false is initial state value.
          // React to create a state value whose initial value is false
          // When our component first appears, React remembers that isDarkMode is false.
          // we chose false because the application should begin in light mode.
    // isDarkMode
        // when the state is false, React knows that dark mode is not enabled
        // when it is true, dark mode is enabled
    // setIsDarkMode
        // is the state setter function.
        // eg 
            // setIsDarkMode(true) => this request dark mode 
            // setIsDarkMode(false) => this request light mode 
        // React then rnder the component with the updated state
        
    // starts in light mode because isDarkMode is false. The value is a boolean: true or false

    const toggleTheme = () => {
      setIsDarkMode((mode) => !mode);
      // setIsDarkMode
          // requests state update
      // prevMode
          // represents the previous state value supplied to the updater function by React.
      // !prevMode
          // reverse the boolean value
      // The ! operator means “not”: !false is true and !true is false.
    };
    const themeStyles = {
      minHeight: "100vh",
      padding: "24px",
      backgroundColor: isDarkMode ? "#090b0c" : "#F5F5F5",
      color: isDarkMode ? "#F5F5F5" : "#222222",
      transition: "background-color 0.25s ease, color 0.25s ease",
    };
    // const themeStyles
        // JavaScript object name themeStyles
    // <main style={themeStyles}>
        // style attribute accepts an object 

    return (
      <>
        <main style={themeStyles}>
          <h2>{isDarkMode ? "Dark mode" : "Light mode"}</h2>
          
          <button onClick={toggleTheme}>
            {isDarkMode ? "Switchto light  mode" : "Switch to dark mode"}
          </button>
          {/* <FaEye /> */}
        </main>
      </>
    );
  }


export default ThemeToggle;
