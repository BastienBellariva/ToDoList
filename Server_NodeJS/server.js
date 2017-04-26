var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.get('/web-app', function(req, res) {
    res.sendFile(path.join(__dirname, '../WebApp', '/home.html'));
});

app.use(bodyParser.urlencoded({
	extended: true
}));

app.post("/web-app#login", function (req, res){
	console.log(req.body.user.name);
	console.log(req.body.user.email);
	console.log(req.body.user.password);
})

app.use(function(req, res, next){
	res.setHeader('Content-Type', 'text/plain');
	res.status(404).send('Page non répertoriée');
})

app.listen(8080);