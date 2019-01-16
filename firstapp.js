//Creating Node.js Application

//Step 1 - Import Required Module
var http = require('http');

//Step 2 - Create Server
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello world');
}).listen(8081);

//print it to terminal 
console.log("Server running at 8081");

/* http.createServer() method is used to create a server instance 
and then bind it at port 8081 using the listen method associated with the server instances.
Pass it a function with parameters request and response. */