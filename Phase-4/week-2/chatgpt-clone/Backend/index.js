import  'dotenv/config'
import cors from 'cors'
import express from 'express'
import db from './db/db.config.js'
import mainRouter from './src/api/main.routes.js';
import errorHadler from './src/middleware/error-handler.js';

const app = express();
// HTTP endpoints and handle frontend requests.
// use it to register middleware, routes, and server configurations.

app.use(
    cors({
        origin: 'http://localhost:5173'
    })
)


app.use(express.json())
// express.json() parses the incoming JSON request body and makes it accessible through
// frontend send information in JSON format
        // {
        //     "question": "What is JavaScript?"
        // }
// Express needs to understand this JSON data.
// Without this middleware, our controller might not receive the expected JSON body.


app.use('/api', mainRouter);
// a request starts with /api, send it to mainRouter.
    //   /api/chat/conversations 


app.use(errorHadler)
// final middleware for error handling
// Notice that we put it after the routes
    // That is important because errors from requests need to reach this middleware.


const startServer = async () =>{
    // Create asynchronous server function
        // Why async?
            // Because our backend needs to check the database connection before starting the HTTP server

    try {
        const connection = await db.getConnection();
            // await => means JavaScript waits for the database operation to finish before executing the next line.
        connection.release();
        // console.log(error.message);
        
        // After checking the connection, you release it back into the connection pool.
// Why?
        // Your application should reuse available database connections instead of unnecessarily holding them.
        app.listen(3001, (err)=>{
        if (err){
                throw err;
            }
            console.log("Server is running on http://localhost:3001")
});
    } catch (error) {
        console.error('error starting server:', error.message);
    }
    // If the database connection fails or another synchronous startup operation throws an error, this block catches it and logs the error message.
}


startServer();




