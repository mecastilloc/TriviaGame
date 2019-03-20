var q1 = {
    q: "cual es mi nombre",
    a: ["manuel", "ricardo", "chicho", "lola"],
    v: ["correct", "incorrect", "incorrect", "incorrect"],


}

var q2 = {
    q: "cual es mi apellido",
    a: ["casas", "chozas", "castillo", "hoetels"],
    v: ["incorrect", "correct", "incorrect", "incorrect"],
    

}

var q3 = {
    q: "cual es mi segundo",
    a: ["casas", "chozas", "castillo", "casas2"],
    v: ["incorrect", "incorrect", "correct", "incorrect"],
    

}


var q4 = {
    q: "cual perro tengo",
    a: ["casas", "chozas", "chihuahua", "st bernardo"],
    v: ["incorrect", "incorrect", "incorrect", "correct"],
    

}
var qArr = [q1, q2, q3, q4];
var count = 0;
var interval;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var choosing = true;
var gameOver = false;
var answer;
var toInShowQ;

$("#title").text("Trivia Game");
$("#instructions").html("This trivia game is about sports knowledge. <br> <h2>You wil have 20 seconds select the correct answer. There are 10 questions, at the endo of the trivia your results will be shown</h2>")
$("#new-btn").hide();


$("#start-btn").click(start);


function start(){  
   showQ(count);
   
    interval = setInterval(pause,8000); // interval time sam as the sum of te tiemouts   
}

function showQ(x) {
   choosing=true;
    answer="";
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
console.log("ans is" + answer);
console.log("respueste en bd"+ qArr[x].v[0]);
    toInShowQ= setTimeout(showR,5000);
    }//end of showQ
         $("#a1").click(function () {
            answerChosen(count,0);
        });

        $("#a2").click(function () {
            answerChosen(count,1);
        });

        $("#a3").click(function () {
            answerChosen(count,2);
        });
        $("#a4").click(function () {
            answerChosen(count,3);
        });

            function answerChosen(x,vIndex){
            choosing = false;
           clearTimeout(toInShowQ);
             if (qArr[x].v[vIndex] == "correct") {
                //correct++  
              answer="correct";
             }
            if (qArr[x].v[vIndex] == "incorrect"){
                //incorrect++
              
                                answer="incorrect" ;           
        }
        
         console.log(answer);
         console.log(correct);
         console.log(incorrect);
         showR();

        }
    
 
function showR(){ 
        console.log("pause"+count);
    if(answer=="correct"){
       correct++
        $("#good").html("<h1 >Great! Keep it going</h1>");
    $(".question-cont, .answers-cont").hide();
    }
    else if(answer=="incorrect"){
        incorrect++
        $("#wrong").html("<h1 >Wrong! The correct answer was:</h1>");
        ansCorrect(count);
    $(".question-cont, .answers-cont").hide();
    }

    else if(answer!="correct" && answer!="incorrect"){
          $("#wrong").html("<h1 >Time's Up! The correct answer was:</h1>");
          ansCorrect(count);
          $(".question-cont, .answers-cont").hide();
    console.log("pause");
    }
    if(gameOver){
        setTimeout(showE,3000);
    }
}


function pause() {
    
    
    count++; 
     showQ(count);
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
        $("#new-btn").show();
        
        console.log(correct);
        console.log(incorrect);
        console.log(unanswered);
        
        console.log("gameover");
    
}


function ansCorrect(x){

for (var h = 0; h < qArr[x].v.length; h++) {
    
    if(qArr[x].v[h]=="correct"){
        var ansCorrect = $("<h2 id='ansCorrect'>");
        ansCorrect.text(qArr[x].a[h]);
        $("#wrong").append(ansCorrect);
        
        }
    }
}