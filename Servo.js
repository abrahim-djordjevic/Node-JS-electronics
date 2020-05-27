const {Board, Servo} = require('johnny-five');
const keyPress = require('keypress'); 
//declare board variable
const board = new Board({
	port:"Com5"
});
keyPress(process.stdin);
//board on ready method
board.on("ready",() => {
	console.log("Up for CW and Down for CCW");
	//initialise servo 
	var servo = new Servo.Continuous(10);
	//process key presses
	process.stdin.resume();
	process.stdin.setEncoding("utf8");
	process.stdin.setRawMode(true);
	process.stdin.on("keypress", (ch, key) => {
		if(!key){
		return "error";
	}
	if(key.name === "q"){
		console.log("Quitting");
		process.exit();
	}else if(key.name === "up"){
		console.log("CW");
		servo.cw();
	}else if(key.name === "down"){
		console.log("CCW");
		servo.ccw();
	}else if(key.name === "space"){
		console.log("Stopping");
		servo.stop;
	}
	});
});