import  'dotenv/config'

import express from 'express'
import db from './db/db.config.js'
const app = express();


app.post('api/chat/conversations', (req, res)=>{
    res.send('Post Method')
})

app.get('api/chat/conversations', (req, res) => {
    res.send('Get Method')
})




const startServer = async () =>{
    try {
        const connection = await db.getConnection();
        connection.release();
        

        app.listen(3888, (err)=>{
        if (err){
                throw err;
            }
            console.log("Server is running on http://localhost:3888")
});
    } catch (error) {
        console.error('error starting server:', error.message);
    }
}


startServer();




