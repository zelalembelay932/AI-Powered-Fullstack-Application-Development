`React Routing version 6`

    `1, Limitations react has without react router`
        // Multiple page app(MPA) vs Single page app (SPA)
        
        // Solution
            // -React Router 
                // is a library for routing in react application.
                // It allows you to define routes, which map to different components in your application.
            
            // search for "npm i react-router" and install
            
    `2, Implement main part of react router`
        // BrowserRouter
            // <BrowserRouter> component is used t wrap your application and provide the routing functionality.
    // Step 1
        // in main.jsx wrap <App /> inside of <BrowserRouter>

        // import {BrowserRouter} from "react-router"
        // createRoot(document.getElementById("root")).render(
        //   <StrictMode>
        //     <BrowserRouter>
        //       <App />
        //     </BrowserRouter>
        //   </StrictMode>,
        // );


// Step 2
    
        // Routes 
            // <Routes> component wraps everything that are dependent on route.

    // in side of app.js 
        // import { Routes, Route } from "react-router";
        //     <Routes>
        //       <Route path="mac" element={<Mac />} />
        //     </Routes>

// Step 3
        // Route
            // <Route>Defines which component is rendered for a URL path.
            // path=> URL matcher
            // element => component to render
        //  <Route path="mac" element={<Mac />} />

// Step 4 
        // Link
            // <Link> component is used to create links between differet routes in your application.
            // used for internal SPA navigation without full page reload.

            // import {Link} from  "react-router"
            // <Link to="/mac">Mac</Link>



        
































