import  'dotenv/config'
import express from 'express'
import db from './db/db.config.js'
import mainRouter from './src/api/main.routes.js';
import errorHadler from './src/middleware/error-handler.js';

const app = express();
app.use(express.json())

app.use('/api', mainRouter);

// final middleware for error handling
app.use(errorHadler)

const startServer = async () =>{
    try {
        const connection = await db.getConnection();
        connection.release();
        // console.log(error.message);
        

        app.listen(3001, (err)=>{
        if (err){
                throw err;
            }
            console.log("Server is running on http://localhost:3001")
});
    } catch (error) {
        console.error('error starting server:', error.message);
    }
}


startServer();




