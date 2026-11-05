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

    
        
`MovieInstance.js – Connecting Axios to TMDB`
    import axios from 'axios'
        // Axios is a JavaScript library used to send HTTP requests.
        // it acts as a messenger between our React frontend app and a backend server or a third-party API
    
    // What does it actually do? (The "Work")
        // GET (Fetch Data): Grabbing information from a server (e.g. loading a list of products, user profiles, or weather data).
        
        // POST (Send Data): Sending new information to a server (e.g. submitting a login form, creating a new tweet, or uploading a photo). 

        // PUT/PATCH (Update Data): Editing information that already exists on the server. 

        // DELETE (Remove Data): Telling the server to delete a piece of data.
    const movieInstance = axios.create({})
        // creates a reusable Axios instance.
        // why?
            // eg:- 
                // Imagine we have to make eight API requests.
                // Without a reusable instance, you might repeatedly write the full API URL.
            // With an Axios instance, you define common configuration once.

        // baseURL: The main web address of your movie API (e.g., https://themoviedb.org) so you don't have to type it out in every single request.
    baseURL : "https://api.themoviedb.org/3"
        // This is the base URL of TMDB's API version 3.
        // eg:-
            // https://api.themoviedb.org/3/trending/all/week
            // https://api.themoviedb.org/3/movie/top_rated
        // Axios combines the base URL with the request path.
        export {movieInstance}
            // Exports your configured Axios instance so other components can use it.

        // eg:-
        import { movieInstance } from "../../Utility/MovieInstance";

        const response = await movieInstance.get("/movie/top_rated");

        // Axios automatically sends the request to the configured TMDB base URL.



`requestUrls.js –  API endpoints`
    // This file defines the eight API request paths used by our application
        // fetchTrending	     =>  /trending/all/week => Trending movies and TV shows
        // fetchNetflixOriginals =>	/discover/tv	    => TV shows associated with Netflix
        // fetchTopRatedMovies	=>  /movie/top_rated    => Highest-rated movies
        // fetchActionMovies	=>  /discover/movie	    => Action movies
        // fetchComedyMovies	=>  /discover/movie	    => Comedy movies
        // fetchHorrorMovies	=>  /discover/movie	    => Horror movies
        // fetchRomanceMovies	=>  /discover/movie	    => Romance movies
        // fetchDocumentaries	=>  /discover/movie	    => Documentary movies


    // What is with_genres?
        // TMDB uses genre IDs to identify movie categories.
        eg:-
        fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`

            // 28 represents the Action genre.
        // with_genres=35
            // represents Comedy.




    
