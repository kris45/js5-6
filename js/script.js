
var ms = 0;
var s = 0;
var m = 0;
var h = 0;
var lastDate;

function changeCounters (millisElapsed) {
	ms += millisElapsed;

	s += Math.floor(ms / 1000);
	ms = ms % 1000;

	m += Math.floor(s / 60);
	s = s % 60;

	h += Math.floor(m / 60);
	m = m % 60;
}

function displayCounters () {

	document.getElementById("millis").innerHTML = (ms < 10 ? "00" : (ms < 100 ? "0" : "")) + ms;
	document.getElementById("second").innerHTML = (s < 10 ? "0" : "") + s;
	document.getElementById("minute").innerHTML = (m < 10 ? "0" : "") + m;
	document.getElementById("hour").innerHTML = (h < 10 ? "0" : "") + h;
}

function time() {
	var dateNow = new Date();
	var millisElapsed = dateNow.getTime() - lastDate.getTime();

	changeCounters(millisElapsed);
	displayCounters();
	
	lastDate = new Date();
}


var paused = true;
var timer = null;
function pauseOrUnpause() {
	if (paused) {		
		unPause();
	} else{
		pause();
	}
}

function pause() {
	clearInterval(timer);
	paused = true;
	document.getElementById("pause").innerHTML = "Unpause";
}

function unPause() {
	lastDate = new Date();
	paused = false;
	timer = setInterval(time, 1);
	document.getElementById("pause").innerHTML = "Pause";
}

function clearСlock() {
	pause();
	ms = 0;
	s = 0;
	m = 0;
	h = 0;
	displayCounters();
	document.getElementById("pause").innerHTML = "Start";
}