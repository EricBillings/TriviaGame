let count = -1;

let questions = ["Q1", "Q2", "Q3"]

$("#start").click(startGame);
$("#stop").click(stopGame);


function displayEnd() {
    $("#display").html("END OF GAME");
    setTimeout(stopGame, 3000);

    
}

function nextQuestion() {
    count++;
    if(count < questions.length) {
    $("#display").html(questions[count]);
    } else {
    clearInterval(showQuestion);
    setTimeout(displayEnd, 3000);
    }
}

function startGame() {

    showQuestion = setInterval(nextQuestion, 2000);

}

function stopGame() {

    $("#display").html("Click Start to Begin");

}

