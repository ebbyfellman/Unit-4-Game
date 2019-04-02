$(document).ready(function() {

//initializeGame();
var losses = 0;
var wins = 0;
var random = 0
var score = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

    function initializeGame(){
        score = 0;
        $("#randomNumber").empty();
        random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log(random);
        $("#randomNumber").append("<h1>" + random);
        $("#progress").text(score);
        crystal1 = Math.floor(Math.random() * 9) + 1;
        crystal2 = Math.floor(Math.random() * 9) + 1;
        crystal3 = Math.floor(Math.random() * 9) + 1;
        crystal4 = Math.floor(Math.random() * 9) + 1;
        console.log(crystal1)
        console.log(crystal2)
        console.log(crystal3)
        console.log(crystal4)

    }

    function checkScore(){
        if (score > random){
            losses++;
            initializeGame();
            $("#lossesText").text(losses);
        }
        else if (score === random){
            wins++;
            initializeGame();
            $("#winsText").text(wins);
        }

        else{
            return;
        }

    }

    $("#button1").on("click", function() {
        score = score + crystal1;
        $("#progress").text(score);
        checkScore();
      });

      $("#button2").on("click", function() {
        score = score + crystal2;
        $("#progress").text(score);
        checkScore();
      });

      $("#button3").on("click", function() {
        score = score + crystal3;
        $("#progress").text(score);
        checkScore();
      });

      $("#button4").on("click", function() {
        score = score + crystal4;
        $("#progress").text(score);
        checkScore();
      });


    
})

