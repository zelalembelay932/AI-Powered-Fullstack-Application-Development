`main.jsx => Aplication entry point`
    // this is starting point of React application
    // Browser loads your application HTML root element
            // this file React  what to render there
    
    import { StrictMode } from 'react'
        // =>This line grabs the StrictMode component from the core React library can use it.
        // <StrictMode> <App /> </StrictMode>
        //  By wrapping your root <App /> component inside <StrictMode>, you are turning on these extra safety checks for your entire application.
        
        // StrictMode it is intentionally renders your components twice during development

    import { createRoot } from "react-dom/client";
        // the line of code that connects your React code to the actual web browser
        // it as the "bridge" our entire application.
    import './index.css'
        // Loads global CSS
    import App from './App.jsx'
        // Imports your main application component
    import { BrowserRouter } from "react-router";
        // It allows your website to switch between different "pages" (components) smoothly and instantly without needing a full browser reload

        // By default, a basic React app is a "Single Page Application" (SPA) that only loads one HTML file. 
            // BrowserRouter fixes this by acting as a context provider that wraps around your entire app. 
                // It performs two vital jobs

            // 1, Listens to the URL 
                // It hooks into the browser’s history API to keep track of the current URL address (e.g., /about or /dashboard)
            // 2, Shares that Information
                // It passes down the current URL information to other routing components (like <Routes> and <Route>) so your app knows exactly which screen to render
    createRoot(document.getElementById('root')).render()
            // createRoot(...)
                    // Creates the React root
            // document.getElementById('root')
                // Finds the HTML element with the ID root.
            // .render(...)
                // Tells React what to display inside that element.


`App.jsx – Main application layout`
        import { useState } from "react";
            // Import the react state hook
        // our current App.jsx dose not use this hook 
        import "./App.css"
            // Load the CSS file 
        
        import Header from './Components/Header/Header'
        import Banner from './Components/Banner/Banner'
        import DisplayRow from './Components/DesplayRow/DisplayRow'
        import Footer from './Footer/Footer'

            // this statements import our 4 main UI components.
        
        
        function App() {}
            // deefines our main react function component.
        return ( )
            // start the JSX that react will display.
        <> </>
            // this is react Fragment
            // its allows you to return multiple components without adding unnecessary part HTML element

        <Header />
        <Banner/>
        <DisplayRow/>
        <Footer/>

            // these are the 4 main components display on our website

        export default App
            // makes the App component available to other file

        // 
            
