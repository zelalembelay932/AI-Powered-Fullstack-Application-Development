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
// CORS(Cross Origin Resource Sharing) 
    // Browsers use origin rules to restrict how webpages request resources from different origins.


// app.use(bodyParser.urlencoded({extended: true }));

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
  // this create an endpoint that responds to GET request at /iphone
  // When the React component requests http://localhost:3000/iphone
  // Express runs the callback defined here.
      // The req and res arguments represent the incoming request and outgoing response.
  connection.query(
    // send a SQL statement to the database.
    "SELECT * FROM products JOIN product_description JOIN product_price ON products.product_id = product_description.product_id AND products.product_id = product_price.product_id",
    // SELECT 
        // requests data from the database.
    // * all columns from the table included in the query
    // FROM products
        // identifie product as the starting table in our query
    // JOIN product_description
        // wincludes records from product_description 
        // contains information such as the brief description, full description, image and product link.
    // JOIN product_price
        // This includes records from product_price, which contains the starting price and price range
    // ON products.product_id = product_description.product_id
          // this condtion matches a "product" to its related "description" record using  `product_id`

    // AND products.product_id = product_price.product_id
        // This condition also matches the product to its related price record.

        // The shared `product_id` is the link between your three tables.

    // eg:-
        // when the product ID is 1, the query can combine the matching product, description and price information into a result row.
    (err, rows) =>{
      // This is the callback function for the MySQL query.
      // - err contains an error if the query fails.
      // - rows contains the records returned by MySQL.
      let iphone = { product: [] };
      // The object has a property named product, which initially contains an empty array.

      // Why create this object? The backend wants to send the product rows to React inside a property named product.
      iphone.product = rows;
        // This assigns the MySQL result array to the object's product property.
        // After the query succeeds, the object contains the returned product records.
      const stringIphone = JSON.stringify(iphone);
      // JSON.stringify() 
          // converts a JavaScript value into a JSON-formatted string
      if (!err) res.end(stringIphone);
         // !err means that err is false, indicating there is no reported error.
          // res.end(stringIphone) sends the JSON string as the response and ends the response.
      else console.log(err);
    }
  );
})




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
