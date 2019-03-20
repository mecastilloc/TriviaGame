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
var qArr = [q1, q2, q3];
var count = 0;
var interval;
var timeOff;
var max = qArr.length-1;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var choosing = true;
var gameOver = false;
var answer;

var qArr = [q1, q2, q3];
var interval;
var count = 0;
var gameOver=false;

$("#start-btn").click(start);

//$("#stop").click(stopSlideshow);




function start() {
  showQ();
  interval = setInterval(pause, 3000);
  
}

function showQ() {
  $("#question").html("<h1>"+qArr[count].q +"</h1>");
  console.log("texto");
  setTimeout(showR,1000);

}

function showR() {
  $("#wrong").html("<p>PAAAUSEEE"+count+ "<p/>");
  console.log("Pausa"+count);
  console.log(gameOver);
  if(gameOver){
setTimeout(showE,1000);
  }
}

function pause() {
    
  count++;
  setTimeout(showQ, 1000);
   
  if (count == qArr.length-1) {
    gameOver=true;
        clearInterval(interval);
       
  }
  }




function showE() {
 
   
    $("#gameOver-text").html("<p>ENNNNNNDDD</p>");
    console.log("end");
  } 

// $("#a1, #a2, #a3, #a4").click(function(){

//     alert("opcion seleccionada");

// });

//en showQ


$("#title").text("Trivia Game");
$("#instructions").html("This trivia game is about sports knowledge. <br> <h2>You wil have 20 seconds select the correct answer. There are 10 questions, at the endo of the trivia your results will be shown</h2>")


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



$("#start-btn").click(start);

function start(){
   // clearTimeout(timeOff);
   if(!gameOver){
   showQ(counter);
    interval = setInterval(pause, 4000);
    
}
}


function showQ(x) {
   
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


//   if (choosing) {
//         $("#a1").click(function () {
//             choosing = false;
             

//             //clearInterval(interval);
//         if (qArr[x].v[0] === "correct") {
//               answer="correct"
//                                 //  correct++
      
//             }
//             else if (qArr[x].v[0] === "incorrect"){
//                //incorrect++
//                answer="incorrect"            
//                   }
            
            

//             console.log(answer)
//             pause();

//         });
   
//    }

//     if (choosing) {
//         $("#a2").click(function () {
//             choosing = false;
//             alert("opcion seleccionada");

//             //clearInterval(interval);
//             if (qArr[x].v[1] = "correct") {
//                 correct++

//             }
//             else {
//                 incorrect++
//             }
//             pause();


//         });
//     }
//     if (choosing) {
//         $("#a3").click(function () {
//             choosing = false;
//             alert("opcion seleccionada");

//             //clearInterval(interval);
//             if (qArr[x].v[2] = "correct") {
//                 correct++

//             }
//             else {
//                 incorrect++
//             }
//             pause();


//         });
//     }

//     if (choosing) {
//         $("#a4").click(function () {
//             choosing = false;
//             alert("opcion seleccionada");

//             //clearInterval(interval);
//             if (qArr[x].v[3] = "correct") {
//                 correct++

//             }
//             else {
//                 incorrect++
//             }
//             pause();


//         });
//     }
}//end of showQ



function pause() {
   
    if (counter === qArr.length-1 && !gameOver) {
        
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
        gameOver=true;
        console.log("gameover");
        //clearInterval(interval);
       // clearTimeout();
        
    }  
    if(!gameOver){
    counter++;
    if(answer=="correct"){
        correct++
        // $("#good").html("<h1 >Great!</h1>");
        // $(".question-cont, .answers-cont").hide();
    }
    else if(answer=="incorrect"){
        incorrect++
        // $("#wrong").html("<h1 >WRONG! The correct answer was:</h1>");
        // $(".question-cont, .answers-cont").hide();
    }

    else if(answer!="correct" && answer!="incorrect"){
       // $("#wrong").show();
    $("#wrong").html("<h1 >Time's Up! The correct answer was:</h1>");
    $(".question-cont, .answers-cont").hide();
    console.log("pause");
//setTimeout(showQ(counter), 2000); 

setTimeout(start, 2000); 
clearInterval(interval);
}
  
}
}