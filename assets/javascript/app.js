let count = 0;
let correct = 0;
let incorrect = 0;
let answer;
let gameOn = false;

let qa = {

    1: ["Question 1", "Answer 1A", "Answer 1B", "Anwser 1C", "A"],
    2: ["Question 2", "Answer 2A", "Answer 2B", "Answer 2C", "B"],
    3: ["Question 3", "Answer 3A", "Answer 3B", "Answer 3C", "C"],
    4: ["Question 4", "Answer 4A", "Answer 4B", "Answer 4C", "A"],
    5: ["Question 5", "Answer 5A", "Answer 5B", "Answer 5C", "B"]

}

$(".choices").hide();


$("#start").on("click", function () {
    if (gameOn === true) {
        count = 0;
        startGame();
    } else {
        startGame();
    }

});

function startGame() {
    showQuestion = setInterval(nextQuestion, 5000);
    gameOn = true;
}


$("#stop").click(displayEnd);

function displayEnd() {
    clearInterval(showQuestion);
    $("#display").html(`Questions Answered Correctly: ${correct}
    Questions Answered Incorrectly: ${incorrect}`);
    $(".choices").hide();
    $("#answer-a").empty();
    $("#answer-b").empty();
    $("#answer-c").empty();
    setTimeout(stopGame, 3000);

}

function stopGame() {
    correct = 0;
    incorrect = 0;
    $("#display").html("Click Start to Begin");
}


$(".choices").on("click", function () {
    answer = ($(this).attr("value"));
    console.log(answer);
    if (answer === qa[count][4]) {
        correct++;
        console.log(correct);
        clearInterval(showQuestion);
        showQuestion = setInterval(nextQuestion, 5000);
        nextQuestion();
    } else {
        incorrect++;
        clearInterval(showQuestion);
        showQuestion = setInterval(nextQuestion, 5000);
        nextQuestion();

    }
}
)

function nextQuestion() {
    $(".choices").show();

    count++;
    if (count < 6) {
        $("#display").html(qa[count][0]);
        $("#answer-a").html(qa[count][1]);
        $("#answer-b").html(qa[count][2]);
        $("#answer-c").html(qa[count][3]);

    } else {
        $(".choices").hide();
        clearInterval(showQuestion);
        setTimeout(displayEnd, 3000);
    }
}



