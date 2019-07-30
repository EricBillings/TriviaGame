let count = 0;
let correct = 0;
let incorrect = 0;
let answer;
let gameOn = false;

let qa = {

    1: ["What is the Capital of Alabama?", "Montgomery", "Birmingham", "Mobile", "A"],
    2: ["What is the Capital of Texas?", "Dallas", "Austin", "Houston", "B"],
    3: ["What is the Capital of Idaho?", "Twin Falls", "Missoula", "Boise", "C"],
    4: ["What is the capital of Kansas?", "Kansas City", "Wichita", "Topeka", "C"],
    5: ["What is the Capital of New York?", "Albany", "New York City", "Rochester", "A"],
    6: ["What is the Capital of Oklahama?", "Tulsa", "Oklahoma City", "Broken Arrow", "B"],
    7: ["What is the Capital of New Mexico?", "Santa Fe", "Albuquerque", "Ruidoso", "A"],
    8: ["What is the Capital of Michigan", "Ann Arbor", "Detroit", "Lansing", "C"],
    9: ["What is the Capital of Florida", "Tallahassee", "Tampa", "Jacksonville", "A"],
    10: ["What is the Capital of West Virginia", "Wheeling", "Charleston", "Clarksburg", "B"]

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
    $("#button-container").html(`Correct Answers: ${correct}\u00A0\u00A0\u00A0 Incorrect Answers: ${incorrect}`);
    $(".choices").hide();
    setTimeout(stopGame, 3000);
    $("#question").html("Your Scores:");

}

function stopGame() {
    correct = 0;
    incorrect = 0;
    $("#question").html("Click Start to Play Again");
}


$("#button-container").on("click", ".choices", function () {
    answer = ($(this).attr("value"));
    if (answer === qa[count][4]) {
        correct++;
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
    $(".choices").hide();
    count++;
    if (count < 11) {
        $("#question").html(qa[count][0]);
        let newButtonA = $("<button>");
        newButtonA.addClass("choices");
        newButtonA.attr("value", "A");
        newButtonA.html(qa[count][1]);
        $("#button-container").append(newButtonA);
        let newButtonB = $("<button>");
        newButtonB.addClass("choices");
        newButtonB.attr("value", "B");
        newButtonB.html(qa[count][2]);
        $("#button-container").append(newButtonB);
        let newButtonC = $("<button>");
        newButtonC.addClass("choices");
        newButtonC.attr("value", "C");
        newButtonC.html(qa[count][3]);
        $("#button-container").append(newButtonC);




    } else {
        clearInterval(showQuestion);
        displayEnd();
    }
}



