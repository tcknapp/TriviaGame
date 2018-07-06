//variables



//timer
var number = 10;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number --;
    $("#show-timer").html("<h2>" + number + "</h2>");

}

if (number === 0) {
    stop();
    console.log("time up")
}

function stop() {
    clearInterval(intervalId);
}

run();



//Questions - Jquery


//restart