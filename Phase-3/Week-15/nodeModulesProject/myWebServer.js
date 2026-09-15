
// import allows us to crate web server
// const http = require("http");


// http.createServer(req, res)
    // create the http server in tow parameters

    // req (request) 
        // it contains information about what the browser/client request
            
    // res (response)
        // its our server send back to the browser.
// const server = http.createServer((req, res) => {


    // set http status code to 200
        // 200 means the request was successfull.
            // https://www.w3schools.com/tags/ref_httpmessages.asp
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
    // res.statusCode = 200;

    // Set the type of content we are sending
    // res.setHeader("Content-type", "text/plain");
    // res.writeHead("Content-type", "text/html");
    // res.write("<h1>Hello Class</h1>");
    

    // response back to browser


//     res.end("Request received and processed");
// });

// server.listen(1234, () =>{
   
//     console.log("Server running at http://localhost:1234");
// });







// Q7
// import allows us to crate web server
const http = require("http");
// import our custom randomNumber module.
const randomNumber = require("./randomNumber");

// create the HTTP server
const server = http.createServer((req, res) => {

    // 
    res.statusCode = 200;

    res.setHeader("Content-type", "text/plain");

    const number = randomNumber.random();

    res.end(`Random number: ${number}`);
});

server.listen(1234, () =>{
    // display message in the terminal
    console.log("Server running at http://localhost:1234");
})












