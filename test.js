console.log("Hello World 4!");

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/html"});

    if(page == '/') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("Vous êtes à l'accueil !\n");
        res.write("<a href='http://localhost:8080/contacts'>" +
        "ezaeza </a>")
    }
    else if(page == '/contacts') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("Mon 06 : 07.86.99.08.46")
    }
    else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<strong> ERROR 404 </strong>")
    }

    res.end();
})

server.listen(8080);