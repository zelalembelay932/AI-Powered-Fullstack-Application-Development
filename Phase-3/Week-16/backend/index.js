// step 1   
    // Crate Database 

// Step 2
    // import mysql2 and express
const  express = require("express");
const app = express();
const mysql = require("mysql2");

require('dotenv').config()
// console.log(process.env);
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

// Route create - table 
app.get("/create-table", (req, res) =>{
    // putting Query on a variable
    let customers = `CREATE TABLE if not exists customers(customer_id int auto_increment, name VARCHAR(255) not null, PRIMARY KEY (customer_id))`;

    let address = `CREATE TABLE if not exists address(address_id int auto_increment, customer_id int(11) not null, address VARCHAR(255) not null, PRIMARY KEY (address_id), FOREIGN KEY (customer_id) REFERENCES customers (customer_id))`;

    let company = `CREATE TABLE if not exists company( company_id int auto_increment, customer_id int not null, company VARCHAR(255) not null, PRIMARY KEY (company_id), FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
        )`;

// exexute the query's we wrote above tables
conn.query(customers, (err,) => {
    if (err) console.log(`Error Found: ${err}`);
})
conn.query(address, (err,) => {
    if (err) console.log(`Error Found: ${err}`);
});
conn.query(company, (err,) => {
    if (err) console.log(`Error Found: ${err}`);

    res.send("Table created successfully! ");
})
});



app.listen(3000, () => console.log(" Server runing: http://localhost:3000"))





