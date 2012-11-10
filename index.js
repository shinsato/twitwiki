var fs = require('fs'),
http = require('http');
http.createServer(function (req, res) {
	var html = '';

	html = fs.readFileSync(__dirname + "/views/header.html");
	html = html + fs.readFileSync(__dirname + "/views/index.html");
	html = html + fs.readFileSync(__dirname + "/views/footer.html");
  res.writeHead(200);
  res.end(html);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');