var express = require('express');
var path = require('path');
var {Board, Servo} = require('johnny-five');
var app = new express();
//declare board variable
var board = new Board({
	port:"Com5"
});
function onReady(){
	var servo = new Servo.Continuous(10);
	
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/Servo.html'));
	});
	
	app.get('/CW', function(req, res){
		res.sendFile(path.join(__dirname + '/Servo.html'));
		servo.cw();
		res.redirect('/')
	});
	
	app.get('/CCW', function(req, res){
		res.sendFile(path.join(__dirname + '/Servo.html'));
		servo.ccw();
		res.redirect('/')
	});
	
	app.listen(8080);
	console.log('App is listening on PORT 8080');
}
board.on('ready', onReady);