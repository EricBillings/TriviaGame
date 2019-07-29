let count = 0;

let qa = {

    1: ["Question 1", "Answer 1"],
    2: ["Question 2", "Answer 2"],
    3: ["Question 3", "Answer 3"],
    4: ["Question 4", "Answer 4"],
    5: ["Question 5", "Answer 5"]

}

let questions = ["Q1", "Q2", "Q3"]

$("#start").click(startGame);
$("#stop").click(displayEnd);


function displayEnd() {
    clearInterval(showQuestion);
    $("#display").html("END OF GAME");
    setTimeout(stopGame, 3000);
}

function nextQuestion() {
    count++;
    if (count < 6) {
        $("#display").html(qa[count][0]);
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

