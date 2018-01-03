var express = require("express");
var app = express();

function start(route) {
	
	app.get('/index.html', function (req, res) {
  		res.sendFile(__dirname + "/" + "index.html");
	})

	app.get('/', function(req, res){
		route('/');
		res.send("hello world");
	})

	app.get('/registed', function(req, res){
		route('registed');
		res.send("registed");
	})

	app.get('/login', function(req, res){
		route('login');
		res.send("login");
	})

	var server = app.listen(8081, function(){
		var host = server.address().address;
		var port = server.address().port;
		console.log("应用实例，访问地址为http://%s",host);
	});
}

exports.start = start;