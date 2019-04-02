$(document).ready(function () {



  //Initialize variables.
  var losses = 0;
  var wins = 0;
  var random = 0;
  var score;
  var crystal1 = 0;
  var crystal2 = 0;
  var crystal3 = 0;
  var crystal4 = 0;


  //Function to re-initialize randomized variables.
  function initializeGame() {
    score = 0;
    $("#currentNumber").empty();
    random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(random);
    $("#currentNumber").text("Current number:  " + random);
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

  //Check to see whether or not the user has won or lost the game by matching the number or exceeding it.
  function checkScore() {
    if (score > random) {
      losses++;
      alert("You lost!");
      initializeGame();
      $("#lossesText").text(losses);
    }
    if (score === random) {
      wins++;
      alert("You won!");
      initializeGame();
      $("#winsText").text(wins);
    }

    return;

  }


  //Onclick events for each crystal button.
  $("#button1").on("click", function () {
    score = score + crystal1;
    $("#progress").text(score);
    checkScore();
  });


  $("#button2").on("click", function () {
    score = score + crystal2;
    $("#progress").text(score);
    checkScore();
  });


  $("#button3").on("click", function () {
    score = score + crystal3;
    $("#progress").text(score);
    checkScore();
  });

  $("#button4").on("click", function () {
    score = score + crystal4;
    $("#progress").text(score);
    checkScore();
  });

  initializeGame();

})

