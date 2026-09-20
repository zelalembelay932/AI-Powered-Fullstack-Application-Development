// step 1   
    // Crate Database 

// Step 2
    // import mysql2 and express
const  express = require("express");
const app = express();
const mysql = require("mysql2");

require('dotenv').config()
console.log(process.env);
// Step 3
    // pass credential to createConnection
const conn = mysql.createConnection({
    // to access .env file install dotenv in `npm install dotenv --save `
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// step 4
    // connect

conn.connect((err) =>{
    if(err) throw err;
    else console.log("Connected to MySQL Database");
});

app.get("/", (req, res) =>{
    res.send("Hello Class")
});

app.listen(3000, () => console.log(" Server runing: http://localhost:3000"))





