console.log("========6========");

// // import allows us to crate web server
// const http = require("http");

// // http.createServer(req, res)
//     // create the http server in tow parameters

//     // req (request)
//         // it contains information about what the browser/client request

//     // res (response)
//         // its our server send back to the browser.
// const server = http.createServer((req, res) => {

//     // console.log(req);
//     // set http status code to 200
//         // 200 means the request was successfull.
//             // https://www.w3schools.com/tags/ref_httpmessages.asp
//             // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
//     // res.statusCode = 200;

//     // Set the type of content we are sending
//     // res.setHeader("Contet-type", "text/plain");

//     res.writeHead(200, "Content-type", "text/plain");
//     res.write("<h1>Hello Class</h1>");
//     res.end();

//     // response back to browser

//     // res.end("Request received and processed");
// });

// server.listen(1234, () =>{
//     // if (err) throw err;
//     console.log("Server running at http://localhost:1234");
// });

console.log("========express 6========");

// const express = require("express");
// // this third-party package install
// const app = express();
// // this crate express application

// // when the client send a GET request to / run this finction 
// // // app.use
// //     // Registers middleware,	Path prefix match  Any HTTP method
// //     // middleware is between express and browser response

// app.get("/", (req, res) => {
//     res.send("Request received and processed");
// });

// app.listen(1234, () => {
//     console.log("Server running at http://localhost:1234");
// })


console.log("========7========");

// // Q7
// // import allows us to crate web server
// const http = require("http");
// // import our custom randomNumber module.
// const randomNumber = require("./randomNumber");

// // create the HTTP server
// const server = http.createServer((req, res) => {

//     //
//     res.statusCode = 200;

//     res.setHeader("Content-type", "text/plain");

//     const number = randomNumber.random();

//     res.end(`Random number: ${number}`);
// });

// server.listen(1234, () =>{
//     // display message in the terminal
//     console.log("Server running at http://localhost:1234");
// })



console.log("========express 7========");


// const express = require("express"); //imported
// const x = require("./randomNumber") //imported

// const app = express();

// app.get("/", (req, res) =>{

//     const number = x.random();

//     res.send(`Randome number: ${number}`);
// })


// app.listen(1234, () => {
//     console.log("Server running at http://localhost:1234");
// })

console.log("======== 8 Only Serve about.html========");

// Folder Structure
// // nodeModulesProject/
// │
// ├── myWebServer.js
// │
// └── static/
//     └── apple-html-css-replica/
//         ├── about.html
//         ├── index.html
//         ├── css/
//         └── images/

// // Import the built-in HTTP module.
// // We use this to create our web server.
// const http = require("http");

// // Import the built-in File System module.
// // We need our server read about.html from our computer.
// const fs = require("fs");

// // Import the built-in Path module.
// // We use this to build the correct file path.
// const path = require("path");

// // Create the HTTP server.
// const server = http.createServer((req, res) => {

//     // Build the path to about.html.
//     //__dirname
//         //  its special Node.js variable that represents the dir of the current JavaScript file.
//     // __dirname
//         // is approximately:
//             // C:\Users\Zele\Week-15\nodeModulesProject
//             // So Node knows where your project currently lives.
//     const filePath = path.join(
//         __dirname,
//         "static",
//         "apple-html-css-replica",
//         "about.html"
//         // becomes:
//         // C:\...\nodeModulesProject\static\apple-html-css-replica\about.html
//     );

//     // fs.readFile()
//         // Read a file from the filesystem.
//     // filePath
//         // Read the file located at the path stord in filePath
//     // utf8
//         // Read the filee as text using UTF-8 encoding
//             // for an HTML text file we wanty readable text
//     // (error, data) =>
//         // This is callback
//             // Node gives us two important values after it finishes reading the file.
//     // error
//         // Contains an error if something went wrong.
//     // data
//         // Contains the file contents.
//     fs.readFile(filePath, "utf8", (error, data) => {

//         // Check if an error occurred.
//         if (error) {

//             // Tell the browser that the file was not found.
//             res.statusCode = 404;

//             // Tell the browser this is plain text.
//             res.setHeader("Content-Type", "text/plain");

//             // Send an error message.
//             res.end("About page not found");

//             return;
//         }

//         // The file was found successfully.
//         res.statusCode = 200;

//         // Tell the browser that the response is HTML.
//         res.setHeader("Content-Type", "text/html");

//         // Send the contents of about.html to the browser.
//         res.end(data);
//     });
// });

// // Start the server on port 1234.
// server.listen(1234, () => {

//     // Display a message in the terminal.
//     console.log("Server running at http://localhost:1234");
// });








console.log("======== 8 e  Serve any page ========");

// Folder Structure
// // nodeModulesProject/
// │
// ├── myWebServer.js
// │
// └── static/
//     └── apple-html-css-replica/
//         ├── about.html
//         ├── index.html
//         ├── css/
//         └── images/

// // Import the built-in HTTP module.
// // We use this to create our web server.
// const http = require("http");

// // Import the built-in File System module.
// // We need our server read about.html from our computer.
// const fs = require("fs");

// // Import the built-in Path module.
// // We use this to build the correct file path.
// const path = require("path");

// const server = http.createServer((req, res) =>{
//     //  to serving both pages
//     let requestFile = req.url;

//     // This is a regular expression (regex) used with JavaScript's .replace() method
//     // what is first /
//         // its regular expression
//             // Eg /hello/
//                 // find the text hello
//     // what is ^
//     // ^ is START HERE
//         // start from the string
//         // Eg /^hello/
//             // matches to hello word
//             // b/c hello is t the biginning
//         // Eg say hello
//             // dose not match
//             // b/c hello is not at the beginning
//         // so
//             //  ^ is START HERE

//     // What is \/
//         // \ is called an escap character.
//         // / is a literal character
//     // what is +
//         // one or more occurrences

//     //.replace() has two main arguments:
//         // replace(whatToFind, whatToPutInstead)
//             // So:
//                 // .replace(/^\/+/, "")

//     // Example
//        // let requestedFile = "/about.html";
//     // Then:
//         // requestedFile = requestedFile.replace(/^\/+/, "");
//     // Regex:
//         // /^\/+/
//     // finds:
//         //    /about.html
//                 // ^
//                 // ↑
//                 // /

//         // It matches the first /.
//         // Then replaces it with:
//         // ""
//         // Result:
//         // about.html

//         // Example 2
//         // let requestedFile = "///about.html";
//         // Then:
//         // Regex:
//             // /^\/+/
//         // Matches
//             // ///
//         // because:
//             // ^   → beginning
//             // \/  → slash
//             // +   → one or more
//         // After replacement:
//         // about.html
//         // So it removes all leading slashes.

//     requestFile = requestFile.replace(/^\/+/, "");

//     // if user requests "/"
//         // serve index.html
//         // browser is didn't specify a file, use index.html its work in req.url "/" and ""
//     if (requestFile === ""){
//         requestFile = "index.html";
//     }

//     const filePath = path.join(__dirname, "static", "apple-html-css-replica", requestFile);

//     fs.readFile(filePath, "utf8", (error, data) => {
//         if (error){
//             res.statusCode = 404;
//             res.setHeader("Content-Type", "text/plain");

//             res.end("404 - Page not found");
//             return;
//         }

//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/html");
//         res.end(data);
//     });
// });

// // Start the server on port 1234.
// server.listen(1234, () => {

//     // Display a message in the terminal.
//     console.log("Server running at http://localhost:1234");
// });

console.log("=====New=====");

// // Import Node's built-in HTTP module.
// // We use it to create our web server.
// const http = require("http");

// // Import Node's built-in File System module.
// // We use it to read files from our computer.
// const fs = require("fs");

// // Import Node's built-in Path module.
// // We use it to build the correct file path.
// const path = require("path");

// // Import the third-party MIME module.
// // We use it to determine the correct
// // Content-Type for HTML, CSS, JS, images, etc.
// const mime = require("mime-types");

// const server = http.createServer((req, res) => {

//     // Get the URL requested by the browser.
//     let requestFile = req.url;

//     // Check whether the URL begins with "/".
//     console.log(requestFile);
//     if (requestFile.startsWith("/")) {

//         //if URL start with / Remove that first character slash.
//         requestFile = requestFile.slice(1);
//     }

//     // In that case, use index.html.
//     if (requestFile === "") {
//         requestFile = "index.html";
//     }

//     const filePath = path.join(
//         __dirname,
//         "static",
//         "apple-html-css-replica",
//         requestFile
//     );

//     // Print the requested file and path
//     // so you can see what the server is doing.
//     // console.log("Requested file:", requestFile);
//     // console.log("File path:", filePath);

//     fs.readFile(filePath, (error, data) => {

//         if (error) {

//             // Send HTTP 404 status.
//             res.statusCode = 404;

//             // Tell browser this response is plain text.
//             res.setHeader(
//                 "Content-Type",
//                 "text/plain"
//             );

//             // Send error message.
//             res.end("404 - Page not found");

//             // Stop executing the callback.
//             return;
//         }

//         // Send HTTP 200 status.
//         res.statusCode = 200;

//         const contentType = mime.lookup(filePath) || "application/octet-stream";
//         console.log(contentType);
//         // If MIME type was found, use it.
//         // Otherwise use a generic binary type.
//         res.writeHead(
//         {  "Content-Type":contentType }
//         );

//         res.end(data);
//     });
// });

// server.listen(1234, () => {

//     console.log(
//         "Server running at http://localhost:1234"
//     );
// });

console.log("========express 8========");

// const express = require("express");

// const path = require("path");

// const app = express();

// // app.use
//     // Registers middleware,	Path prefix match  Any HTTP method
//     // middleware is between express and browser response

// app.use(
//     express.static(path.join(__dirname, "static", "apple-html-css-replica"))
// );

// app.listen(1234, () => {
//     console.log("Server running at http://localhost:1234");
// })



//abstraction  DX developer experience



99,999,999,999