$(document).ready(function () {

var questions =[
    {
        quest: "What is dwights cousin's name?",
        choice: ["Ted", "Mose", "Joe", "Matthew"],
        ans: 1,
    },
    {
        quest: "What university did Andy go to?",
        choice: ["Cornell", "UTSA", "Yale", "Harvard"],
        ans: 0,
    },
    {
        quest: "Toby broke his back in ______ ?",
        choice: ["Hawaii", "Greece", "Port A", "Cosa Rica"],
        ans: 3
    }];


var correct = 0;
var wrong = 0;
var timer = 60;
var qlist = questions.length;


// reset //


// Timer //

function runTimer(){
	if (!running) {
	intervalId = setInterval(decrement, 1000); 
	running = true;
	}
}
// count down //
function decrement() {
	$("#timeleft").html("Time remaining: " + timer + "");
	timer --;

//stop timer if reach 0
	if (timer === 0) {
		unanswerCount++;
		stop();
	}	
}

//timer stop
function stop() {
	running = false;
	clearInterval(intervalId);


// functions








})