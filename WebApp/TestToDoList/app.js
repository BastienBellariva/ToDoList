var express = require('express');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var pool = mysql.createPool({
	host	:'localhost',
	user    :'tasks',
	password:'',
	database:'ToDoList'
});


var urlencodedParser = bodyParser.urlencoded({ extended: false});

var app = express();

app.use(session({secret: 'maSession'}))

.use(function(req, res, next){
	if (typeof(req.session.todolist) == 'undefined') {
		req.session.todolist =[];
	}
	next();
})

.get('/toDo', function(req, res){
	res.render('todo.ejs', {todolist: req.session.todolist});
})

.post('/toDo/add/', urlencodedParser, function(req, res){
	if (req.body.newtodo != '') {
		req.session.todolist.push(req.body.newtodo);
	}
	res.redirect('/toDo');
})

.get('/toDo/delete/:id', function(req, res){
	if (req.params.id != '') {
		req.session.todolist.splice(req.params.id, 1);
	}
	res.redirect('/toDo');
})

app.listen('8080');