$(document).ready(function() {

initializeGame();


    function initializeGame(){
        score = 0;
        var random = Math.floor(Math.random() * 120) + 1;
        console.log(random);
        $("#randomNumber").append("<h1>" + random);
        $("#score").append("<h3>" + "Your total score is " + score);
    }



    
})

