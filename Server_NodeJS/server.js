var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/pdva', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(function(req, res, next){
	res.setHeader('Content-Type', 'text/plain');
	res.send(404, 'Page non répertoriée');
})

app.listen(8080);