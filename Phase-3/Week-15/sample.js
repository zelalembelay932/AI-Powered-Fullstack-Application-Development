// const os =require("os");

// console.log(os.arch());
// console.log(os.platform());



// "
// // Write the server 
//     // 1, Import the http core module
//             const http = require("http");
//             // Why? Because `http` contains the function that create the server. 
//     // 2, Create a server with createServer()
//         http.createServer();
//             // this makes your computer behave as an HTTP server. 
//                 // it accepts the argument 
//                     // a `request listener function`
//     // 3, Write the request listener function
//         function x (req, res){
//             res.writeHead(200);
//             res.end("My first server!");
//         }

//     // 4, Store the server in a variable
//         var myServer = http.createServer((req, res) =>{
//             res.writeHead(200);
//             res.end("My first server!");
//         }) 
// "


const http = require("http");

const server = http.createServer((req, res) =>{
    console.log(req); // check only request in browser

    // res.end(); // to break response
    res.end("HELLO WORLD");

});

server.listen(5000, (err) => {
    if (err) throw err;
    console.log("Server is running on PORT: http://localhost:5000/");
});





