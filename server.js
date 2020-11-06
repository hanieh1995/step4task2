var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function (request, response){

	var filePath = "." + request.url;
	 
	 var extname = path.extname(filePath);
     var contentType = 'text/html';
	 switch(extname){
		 case ".js":
		 contentType = 'text/javascript';
		      break;
         case ".css":
            contentType = 'text/css';
            break;
	 }
	 
	 
	fs.readFile(filePath, function(error, content) {
		if(error){
				response.writeHead(404, {"Content-Type": "text/html"});
				response.write("Set url to this : /todo/index.html Or /calculator/index.html");
				response.end();
		}
		 response.writeHead(200, { "Content-Type": contentType });
		 response.write(content);
         response.end();
	});
}).listen(8080);