// display question
// set interval
// catch question selected
// see if it is corerct and ad corrects
// see if it is incoirrect and add incoirrect
// see if it is unansered and add unanswered
// wehn interavl ends show next question

var q1 = {
    q: "cual es mi nombre",
    a: ["ricardo", "manuel ", "chicho", "lola"],
    v: ["incorrect", "correct", "incorrect", "incorrect"],
    a1: "ricardo",
    v1: "incorrect",
    a2: "chuchu",
    v2: "incorrect",
    a3: "manuel",
    v3: "correct",
    a4: "Lola",
    v4: "incorrect",

}

var q2 = {
    q: "cual es mi apellido",
    a: ["casas", "chozas", "castillo", "hoetels"],
    v: ["incorrect", "incorrect", "correct", "incorrect"],
    v1: "incorrect",
    a2: "chozas",
    v2: "incorrect",
    a3: "castillo",
    v3: "correct",
    a4: "hoteles",
    v4: "incorrect",

}

var q3 = {
    q: "cual es mi segundo",
    a: ["casas", "chozas", "castillo", "hoetels"],
    v: ["incorrect", "incorrect", "correct", "incorrect"],
    v1: "incorrect",
    a2: "chozas",
    v2: "incorrect",
    a3: "castillo",
    v3: "correct",
    a4: "hoteles",
    v4: "incorrect",

}


var q4 = {
    q: "cual perro tengo",
    a: ["casas", "chozas", "castillo", "hoetels"],
    v: ["incorrect", "incorrect", "correct", "incorrect"],
    v1: "incorrect",
    a2: "chozas",
    v2: "incorrect",
    a3: "castillo",
    v3: "correct",
    a4: "hoteles",
    v4: "incorrect",

}
// var answerArr = ["a1", "a2", "a3", "a4"];
var qArr = [q1, q2, q3, q4];
var counter = 0;
var interval;
var timeOff;
var max = qArr.length-1;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var choosing = true;
var gameOver = false;
var answer;






// console.log(qArr[1].a[0]);
// console.log(qArr[1].a[1]);
// console.log(qArr[1].a[2]);
// console.log(qArr[1].a[3]);
// console.log(q1.answerArr[0]);
// console.log(qArr[0].answerArr[0]);
// for(var j=0; j<qArr.length; j++){

// for (var h = 0; h < qArr[j].a.length; h++) {
//     //console.log(j+ " -- "+h);
//     console.log(qArr[j].a[h]);
// }
// }



$("#title").text("Trivia Game");
$("#instructions").html("This trivia game is about sports knowledge. <br> <h2>You wil have 20 seconds select the correct answer. There are 10 questions, at the endo of the trivia your results will be shown</h2>")


$("#start-btn").click(start);




function start(){  
   showQ();
   //pause's interval unless last pass
    interval = setInterval(pause,27000);    
}




function showQ() {
   
  answer="";   
    $("#instructions-cont").empty();
    $("#good, #wrong").empty();
    $(".question-cont, .answers-cont").show();
    $("#question-tag").text("Question:");
    $("#question").text(qArr[count].q);
    $("#choices-tag").text("Choices:");
    $("#a1").text(qArr[count].a[0]);
    $("#a2").text(qArr[count].a[1]);
    $("#a3").text(qArr[count].a[2]);
    $("#a4").text(qArr[count].a[3]);

    setTimeout(showR,20000);

}//end of showQ

function showR(){ 
        console.log("pause"+count);
    if(answer=="correct"){
        correct++
        
    }
    else if(answer=="incorrect"){
        incorrect++
        
    }

    else if(answer!="correct" && answer!="incorrect"){
          $("#wrong").html("<h1 >Time's Up! The correct answer was:</h1>");
    $(".question-cont, .answers-cont").hide();
    console.log("pause");
    }
    if(gameOver){
        setTimeout(showE,7000);
    }
}


function pause() {
    count++; 
    //setTimeout(showQ, 100);
    showQ();
     if (count == qArr.length-1) {
        gameOver=true;
        clearInterval(interval);
               } 
               
}


function showE(){
   unanswered = qArr.length - correct - incorrect;
        $(".question-cont").empty();
        $(".answers-cont").empty();
        $("#good, #wrong").empty();
        $("#gameOver-text").html("End of The Game. <br> Here are Your Stats");
        $("#correct").text(correct);
        $("#incorrect").text(incorrect);
        $("#unanswered").text(unanswered);
        
        console.log(correct);
        console.log(incorrect);
        console.log(unanswered);
        
        console.log("gameover");
        
      
}