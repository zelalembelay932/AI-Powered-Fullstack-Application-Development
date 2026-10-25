// 1. Import the required packages
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
// allows requests from our React website runiing on another port.
require("dotenv").config();

// 2. Create the Express application
const app = express();
app.use(cors({origin : "http://localhost:5173"}))
// app.use(cors());


app.use(bodyParser.urlencoded({extended: true }));
// app.use() registers middleware that runs while Express handles requests. 
    // allows the frontend origin http://localhost:5173 to make cross-origin requests.

// cors() adds the appropriate CORS response headers.

// origin specifies the frontend address allowed to make cross-origin requests.


// 3. Read the port for our web server
const PORT = Number(process.env.PORT || 3000);

// 4. Create the MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT || 3306),
});



// 5. Create a simple home route
app.get("/", (req, res) => {
  res.send("Node.js and MySQL application is running!");
});

// app.get()	Registers a route for HTTP GET requests.
// "/"	The URL path for this route.
// req	Represents the incoming HTTP request.
// res	Represents the HTTP response your server sends back.




// Create an API endpoint to retrieve products

app.get("/iphone", (req, res) => {
  connection.query(
    "SELECT * FROM products JOIN product_description JOIN product_price ON products.product_id = product_description.product_id AND products.product_id = product_price.product_id",
    (err, rows, filds) =>{
      let iphone = {product: []};
      iphone.product = rows;
      const stringIphone = JSON.stringify(iphone);
      if (!err) res.end(stringIphone);
      else console.log(err);
    }
  );
})



















// app.get("/iphone", (req, res) => {
//     // registers a GET route with the path /iphone
//   const sql = `${productSellect} WHERE LOWER(TRIM(p.product_name)) LIKE 'iphone%' ORDER BY p.product_id ASC`;
// //SELECT =>	Retrieves data.
// // * =>	Selects all columns.
// // FROM =>	Specifies the source table.
// // products =>	The table from which data is retrieved.

//   connection.query(sql, (error, rows) => {
//     if (error) {
//       console.error("Product query failed:", error.message);

//       return res.status(500).json({
//         // HTTP response status to 500, meaning the server encountered an unexpected problem while handling the request.
//         message: "Failed to retrieve products",
//         error: error.message,
//       });
//     }
//     return res.json({
//     //   count: rows.length,
//       products: rows,
//     });
//   });
// });

// // Q3  Singel product iPhone using its product_id
// app.get("/iphone/:id", (req, res) =>{
//   const id = Number(req.params.id);

//   if(!Number.isInteger(id) || id <= 0) {
//     return res.status(400).json({
//       message: "Invalid Product ID"
//     });
//   }
//   const sql = `${productSellect} WHERE p.product_id = ? AND LOWER(TRIM(p.product_name)) LIKE 'iphone%' LIMIT 1`;

//   connection.query(sql, [id], (error, rows) =>{
//     if (error) {
//       console.error("Single iPhone query failed:", error.message);

//       return  res.status(500).json({
//         message: "Failed to retrive the product.",
//       });
//     }

//     if (rows.length === 0) {
//         return res.status(400).json({
//           message: "iPhone product not found",
//         });
//     }

//     return res.json({
//       product: rows[0],
//     })


//   })
// })







//  Connect to MySQL before starting the server
connection.connect((error) => {
  if (error) {
    console.error("MySQL connection failed:", error.message);
    return;
  }

  console.log("Connected to MySQL successfully!");

  // Start the Express server after the database connects
  app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
  });
});
