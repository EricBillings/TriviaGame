let count = 0;
let correct = 0;
let incorrect = 0;

let qa = {

    1: ["Question 1", "Answer 1A", "Answer 1B", "Anwser 1C", "A"],
    2: ["Question 2", "Answer 2A", "Answer 2B", "Answer 2C", "B"],
    3: ["Question 3", "Answer 3A", "Answer 3B", "Answer 3C", "C"],
    4: ["Question 4", "Answer 4A", "Answer 4B", "Answer 4C", "A"],
    5: ["Question 5", "Answer 5A", "Answer 5B", "Answer 5C", "B"]

}


$("#start").click(startGame);
$("#stop").click(displayEnd);
$(".choices").on("click", function () {
    console.log($(this).attr("value"));
})



function displayEnd() {
    clearInterval(showQuestion);
    $("#display").html("END OF GAME");
    setTimeout(stopGame, 3000);
}

function nextQuestion() {
    count++;
    if (count < 6) {
        $("#display").html(qa[count][0]);
        $("#answer-a").html(qa[count][1]);
        $("#answer-b").html(qa[count][2]);
        $("#answer-c").html(qa[count][3]);

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

