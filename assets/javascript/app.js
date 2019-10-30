$(document).ready(function () {
    $("#questions").hide();
var questions =[
    {
        quest: "What is dwights cousin's name?",
        choice: ["Ted", "Mose", "Joe", "Matthew"],
        ans: "Mose",
    },
    {
        quest: "What university did Andy go to?",
        choice: ["Cornell", "UTSA", "Yale", "Harvard"],
        ans: "Cornell",
    },
    {
        quest: "Toby broke his back in ______ ?",
        choice: ["Hawaii", "Greece", "Port A", "Cosa Rica"],
        ans: 3
    }];

    // $("input[name='Q1']:checked").val();

var correct = 0;
var wrong = 0;
var time = 60;
var qlist = questions.length;
var questArray = [];
var running = false;


// reset //
function timer(){
	if (!running) {
	intervalId = setInterval(countDown, 1000); 
	running = true;
	}
}
function result_count(){
    var a = [$("input[name='q1']:checked").val(),$("input[name='q2']:checked").val()];
    console.log("A array:"+a);
    for(var i=0;i<a.length;i++){
        if(a[i]===questions[i].ans){
            correct++;
            console.log("Correct: "+correct);
        }
        else{
            wrong++;
        }
    }
}
// start button //
$("#ans").on("click", function(){
   result_count();
})

$("#start").on("click",function() {
    $("#start").hide();
    $("#questions").show();
    //showQuests();
    timer();
    /*for (let i = 0; i < questions.length; i++) {
        questArray.push (questions[i]);
        }*/
})


// start timer //


// count down //
function countDown() {
	$("#timeleft").html("Time remaining: " + time);
	time --;

//stop timer if reach 0
	if (time === 0) {
		//unanswerCount++;
        stop();
        result_count();
	}	
}

//timer stop
function stop() {
	running = false;
	clearInterval(intervalId);


}







})