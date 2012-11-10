var http = require("http");
var url = require("url");
var fs = require('fs');

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/html"});
    var html = fs.readFileSync(__dirname + "/views/index.html");
    response.write(html);
    response.end();
  }

  http.createServer(onRequest).listen(1337, '127.0.0.1');
  console.log("Server has started.");
}

start();