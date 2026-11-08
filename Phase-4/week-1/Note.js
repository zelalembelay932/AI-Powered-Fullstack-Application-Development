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
            // defines our main react function component.
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




`Banner.jsx - Fetching the featured TV show`

        // useEffect
            //  a built-in Hook that lets you run code after a component renders, allowing you to synchronize your component with external systems or handle "side effects"

        // useEffect accepts two parts
            //  a setup function (the code you want to run)
            // an optional dependency array (a list of values that control when the code runs)
        import { useEffect } from 'react';

        useEffect(() => {
        // 1. Write the code you want to run here (The Effect)

        return () => {
            // 2. Optional: Write cleanup code here
        };
        
        }, [dependency1, dependency2]); // 3. Optional: The Dependency Array

        // useState
            //  a built-in Hook that allows we to add and track local state in a functional component


`DisplayRow.jsx – Fetching multiple movie categories`

    // This is the central data-fetching component for our movie categories.
    // The important part is that we are making eight API requests concurrently using Promise.all().

    // our state is 
        const [movies, setMovies] = useState({
        trending: [],
        netflixOriginals: [],
        topRated: [],
        action: [],
        comedy: [],
        horror: [],
        romance: [],
        documentaries: [],
        });

    // You have one state variable called movies.
        // It contains eight separate arrays.
        // State property	Initial value
            // trending	            []
            // netflixOriginals	    []
            // topRated	            []
            // action	            []
            // comedy	            []
            // horror	            []
            // romance	            []
            // documentaries	    []

        // Why initialize them as empty arrays?
            // Because our application needs an array to work with while the API requests are still running.

    useEffect(() => {
        fetchMovies();
    }, []);
        // When the DisplayRow component initially renders, the effect executes and calls fetchMovies().

    const [
  trendingRes,
  netflixRes,
  topRatedRes,
  actionRes,
  comedyRes,
  horrorRes,
  romanceRes,
  docRes,
] = await Promise.all([
  movieInstance.get(requests.fetchTrending),
  movieInstance.get(requests.fetchNetflixOriginals),
  movieInstance.get(requests.fetchTopRatedMovies),
  movieInstance.get(requests.fetchActionMovies),
  movieInstance.get(requests.fetchComedyMovies),
  movieInstance.get(requests.fetchHorrorMovies),
  movieInstance.get(requests.fetchRomanceMovies),
  movieInstance.get(requests.fetchDocumentaries),
]);

    // we are sending eight different requests.
    // Each movieInstance.get() returns a Promise.
    // A Promise represents an operation that will complete in the future.
    // Promise.all() waits until all the requests succeed.
    // Then, the results are returned in the same order as the original Promise array.

    // Why is Promise.all useful?
        // Imagine making requests sequentially:
const trending = await movieInstance.get(requests.fetchTrending);
const action = await movieInstance.get(requests.fetchActionMovies);
const comedy = await movieInstance.get(requests.fetchComedyMovies);

    // The application waits for each request before starting the next one.
// But our approach:
await Promise.all([
  movieInstance.get(requests.fetchTrending),
  movieInstance.get(requests.fetchActionMovies),
  movieInstance.get(requests.fetchComedyMovies),
]);

// Starts the requests together.
    // This generally reduces the total waiting time.

    // Example:
        // This is JavaScript array destructuring.

    const numbers = [10, 20, 30];

    const [a, b, c] = numbers;

    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30

    // our application uses the same concept for the API responses.

// Updating state
        setMovies({
        trending: trendingRes.data.results,
        netflixOriginals: netflixRes.data.results,
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: docRes.data.results,
        });

        // Once all eight requests succeed, you update the movies state.
            // Means:
                // Get the trending API response.
                // Access its data.
                // Access its results array.
                // Store that array under the trending property.
    catch (error) {
    console.log(error);
    }
        // This catches an error if one or more of the requests fail.
        // eg
            // Invalid API key.
            // Internet connection problem.
            // TMDB server error.
            // Invalid endpoint.


`SlideShow.jsx - Displaying movie lists`
        // This component receives movie information from DisplayRow.
    import { Swiper, SwiperSlide } from "swiper/react";
    import "swiper/css";
    import "swiper/css/navigation";
    import { Navigation } from "swiper/modules";

    // Our movie lists use Swiper to let users move horizontally between movie posters.
            // Swiper: the main slider container.
            // SwiperSlide: an individual slide.
            // Navigation: adds previous and next arrow controls.
            // swiper/css: loads the base slider styles.
            // swiper/css/navigation: loads navigation styles.

    const SlideShow = ({ title, movies }) => {
        // Receives two props from DisplayRow.
        // This is object destructuring.
    // The longer alternative would be:
        const SlideShow = (props) => {
        const title = props.title;
        const movies = props.movies;
        }};
    // Our version is shorter


        <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={10}
    slidesPerView={4}
    />
        {/* Understand the properties:
        modules={[Navigation]} =>	Registers the navigation module.
        navigation	Enables    =>   previous and next arrows.
        spaceBetween={10}	   =>   Adds 10 pixels between slides.
        slidesPerView={4}	   =>   Shows four slides at once. */}



    {movies?.map((movie) => (
    <SwiperSlide key={movie.id}>
        <MovieCard movie={movie} />
    </SwiperSlide>
    ))}

    // This is one of the most important React patterns.

        const movies = [
        { id: 1, title: "The Last Kingdom" },
        { id: 2, title: "Lupin" },
        { id: 3, title: "Spider-Man" }
        ];
    // When our component uses:
        movies.map((movie) => (
        <MovieCard movie={movie} />
        ))
    // React generates:- 
        {/* <MovieCard movie={movies[0]} />
        <MovieCard movie={movies[1]} />
        <MovieCard movie={movies[2]} > */}

        // Why key={movie.id}?
            // React needs a stable identifier to track each item in a list.
            // The movie ID is suitable because each movie has its own unique ID.





`MovieCard.jsx - Displaying individual movies`
        // This component creates the movie poster card and its hover information.

        const IMAGE_BASE = "https://image.tmdb.org/t/p/w500"
        // Defines the image URL base
            // The difference from your banner is image size.
            // original: used for a larger background.
            // w500: used for movie posters at a smaller width.
        const MovieCard = ({ movie }) => {}
            // Receives a single movie object from SlideShow.
    // eg:- 
        const movie = {
        id: 123,
        title: "Example Movie",
        poster_path: "/example.jpg"
        };

    let geners = ['Adventure', 'Action', 'Thriller']
        // Creates a list of genres.
            //  these genres are hardcoded, meaning every movie currently displays the same three genres.


    // <div className={style.geners}>
    // {geners.map((g, index) => {
    //     return (
    //     <span key={index}>
    //         {g}
    //         {
    //         index < geners.length - 1 && (
    //             <span className={style.dot}> • </span>
    //         )
    //         }
    //     </span>
    //     );
    // })}
    // </div>

    index < geners.length - 1
        // Checks whether the current genre is the last item.
        // If it is not the last one, you display a separator dot.
    // OutPut
        // Adventure • Action • Thriller



`Header.jsx - Navigation, search and profile`

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
        // You are creating two state variables.
            Initially:
                isSearchOpen = false;
                isProfileOpen = false;
            // Both interfaces are closed.

        //  Scroll state
        const [isScrolled, setIsScrolled] = useState(false);
            // Tracks whether the user has scrolled down the page.
            // This allows the header background to change.


useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

    // window.scrollY =>
        // tells you the number of pixels the browser has scrolled vertically.
        // When scrolling exceeds 50 pixels, the condition becomes true.

    window.addEventListener('scroll', handleScroll);
        // Registers an event listener.
        // Whenever the user scrolls, the browser executes handleScroll.

    return () => window.removeEventListener('scroll', handleScroll)

    // This is a cleanup function.
        // When React removes the component or cleans up the effect, it removes the scroll event listener.
    // Why is cleanup important?
        // Without it, unnecessary event listeners can remain registered and cause resource or behavior problems.




`Data.js - Local movie data`









