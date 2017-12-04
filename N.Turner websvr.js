var http = require("http");
//var websvr = require("websvr");

http.createServer(function (request, response) {

// Send the HTTP header
// HTTP Status: 200 : OK
// Content Type: text/html
response.writeHead(200, {'Content-Type': 'text/html'});

// Send the response body
response.end('Hello World, my name is Natasha Turner\n');
}).listen(8001);

// Console will print the message
console.log('Server running at http://127.0.0.1:8001/');