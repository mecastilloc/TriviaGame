var q1 = {
    q: "Who has won more F1 titles?",
    a: ["a)Lewis Hamilton", "b) Michael Schumacher", "c) Ayrton Senna", "d) Sebastian Vettel"],
    v: ["incorrect", "correct", "incorrect", "incorrect"],


}

var q2 = {
    q: "In 2016, who became F1 World Champion and then announced his retirement from the sport five days ",
    a: ["a) Jenson Button", "b) Felipe Massa", "c) Nico Rosberg", "d) Fernando Alonso"],
    v: ["incorrect", "incorrect", "correct", "incorrect"],


}

var q3 = {
    q: "How many points an F1 driver can win on a Grand Prix Weekend?",
    a: ["a) 25 points", "b) 26 points", "c) 8 points", "d) 17 points"],
    v: ["incorrect", "correct", "incorrect", "incorrect"],
}


var q4 = {
    q: "Who was the first F1 Grand Prix Champion in 1950?",
    a: ["a) Juan Fangio", "b) Peter Collins", "c) Jack Brabham", "d) Giuseppe Farina"],
    v: ["incorrect", "incorrect", "incorrect", "correct"],
}

var q5 = {
    q: "When and where was 'The Flying Finn' Mika Hakkinen's first victory?",
    a: ["a) GP of Europe 1997", "b) GP of Brazil 1996", "c) GP of USA 1998", "d) GP of Italy 1997"],
    v: ["correct", "incorrect", "incorrect", "incorrect"],
}

var q6 = {
    q: "Which of these years did Damon Hill win the World Championship?",
    a: ["a) 1997", "b) 1994", "c) 1996", "d) All listed"],
    v: ["incorrect", "incorrect", "correct", "incorrect"],
}

var q7 = {
    q: "Which of the following Brazilian F1 drivers have won the 24 Hours of Le Mans?",
    a: ["a) Carlos Pace", "b) Raul Boesel", "c) Nelson Piquet", "d) None listed"],
    v: ["incorrect", "incorrect", "incorrect", "correct"],
}

var q8 = {
    q: "Alberto Ascari won how many F1 Championships?",
    a: ["a) 2 Championships", "b) 1 Championship", "c) None", "d) 3 Championships"],
    v: ["correct", "incorrect", "incorrect", "incorrect"],
}

var q9 = {
    q: "Lewis Hamilton won his first F1 world championship title with which team?",
    a: ["a) Ferrari", "b) Williams", "c) McLaren", "d) Red Bull"],
    v: ["incorrect", "incorrect", "correct", "incorrect"],
}

var q10 = {
    q: "Which was the former name of Sport PesaRacing Point F1 Yeam",
    a: ["a) Sauber Motorsport", "b) Lotus F1", "c) Toro Rosso Racing", "d) Sahara Force India"],
    v: ["incorrect", "incorrect", "incorrect", "correct"],
}


var qArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var count = 0;
var interval;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var gameOver = false;
var answer;
var toInShowQ;

$("#title").text("Trivia Game");
$("#instructions").html("This trivia game is about Formula One &#8482 knowledge. <br> <h3>You will have about 15 seconds to select your answer. There are 10 questions, at the end of the trivia your results will be shown.</h2>")
$("#start-btn").css({ display: "initial" });

$("#start-btn").click(start);
$("#new-btn").click(start);


function start() {
    count = 0;
    interval;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    choosing = true;
    gameOver = false;
    answer;
    toInShowQ;
    $("#gameOver").hide();
    showQ(count);
}


function showQ(x) {
    console.log("counter es " + count);
    answer = "";
    $("#instructions-cont").empty();
    $("#good, #wrong").empty();
    $(".question-cont, .answers-cont").show();
    $("#question-tag").text("Question:");
    $("#question").text(qArr[x].q);
    $("#choices-tag").text("Choices:");
    $("#a1").text(qArr[x].a[0]);
    $("#a2").text(qArr[x].a[1]);
    $("#a3").text(qArr[x].a[2]);
    $("#a4").text(qArr[x].a[3]);
    toInShowQ = setTimeout(showR, 15000);
}


$("#a1").click(function () {
    answerChosen(count, 0);
});

$("#a2").click(function () {
    answerChosen(count, 1);
});

$("#a3").click(function () {
    answerChosen(count, 2);
});
$("#a4").click(function () {
    answerChosen(count, 3);
});


function answerChosen(x, vIndex) {
    clearTimeout(toInShowQ);
    if (qArr[x].v[vIndex] == "correct") {
        answer = "correct";
    }
    if (qArr[x].v[vIndex] == "incorrect") {
        answer = "incorrect";
    }
    showR();
}


function showR() {
    console.log("ShowR" + count);
    setTimeout(pause, 4200)
    //debugger;
    if (answer == "correct") {
        correct++
        $("#good").html("<h1 >Great! Keep it going</h1>");
        $(".question-cont, .answers-cont").hide();
        console.log("pause" + count);
    }
    else if (answer == "incorrect") {
        incorrect++
        $("#wrong").html("<h1 >Wrong! The correct answer was:</h1>");
        ansCorrect(count);
        $(".question-cont, .answers-cont").hide();
        console.log("pause" + count);
    }
    else if (answer != "correct" && answer != "incorrect") {
        $("#wrong").html("<h1 >Time's Up! The correct answer was:</h1>");
        ansCorrect(count);
        $(".question-cont, .answers-cont").hide();
        console.log("pause" + count);
    }
}


function pause() {
    if (count == qArr.length - 1) {
        gameOver = true;
        showE();
    }
    if (!gameOver) {
        count++;
        showQ(count);
    }
}


function showE() {
    unanswered = qArr.length - correct - incorrect;
    $(".question-cont").hide();
    $(".answers-cont").hide();
    $("#good, #wrong").empty();
    $("#gameOver").show();
    $("#gameOver-text").html("End of The Game. <br> Here are Your Stats");
    $("#correct").text("Correct answers: " + correct);
    $("#incorrect").text("Incorrect answers: " + incorrect);
    $("#unanswered").text("Unanswered questions: " + unanswered);
    $("#new-btn").css({ display: "initial" });

    console.log(correct);
    console.log(incorrect);
    console.log(unanswered);
    console.log("gameover");
}


function ansCorrect(x) {
    for (var h = 0; h < qArr[x].v.length; h++) {
        if (qArr[x].v[h] == "correct") {
            var ansCorrect = $("<h2 id='ansCorrect'>");
            ansCorrect.text(qArr[x].a[h]);
            $("#wrong").append(ansCorrect);

        }
    }
}