// Global variables


var scoreCount = 0;
var winCount = 0;
var loseCount = 0;
var targetNumber = 0;


var crystal = {
    blue: { 
        value: 0
    },
    red: {
        value: 0
    },
    yellow: {
        value: 0
    },
    black: {
        value: 0
    },

    randomNumberGenerator : function(start, end){
        var ranndomNumber;
        ranndomNumber = Math.floor(Math.random()* (end - start) + start);
        return ranndomNumber;
    }
};

// FUNCTIONS //


// Computer will generate a random number between 19-120
// Number will display in the random number section as the target number
// Computer will generate 4 random numbers and assign those to each of the 4 crystals (1-19).  This value is hidden to the user.
function newGame(){
    targetNumber = crystal.randomNumberGenerator(19,120);
    $("#target").text(targetNumber);
    crystal.blue.value = crystal.randomNumberGenerator(1,19);
    crystal.red.value = crystal.randomNumberGenerator(1,19);
    crystal.yellow.value = crystal.randomNumberGenerator(1,19);
    crystal.black.value = crystal.randomNumberGenerator(1,19);
    // console.log(crystal.blue.value);
    scoreCount = 0;
    $("#score").html(scoreCount);

}

newGame();


// Player will click on crystal, depending on crystal value, that value will display in "your score" section.
// These values will add up in the "your score" section.

$(".blue-crystal").on("click", function(){
    scoreCount+=crystal.blue.value;
    $("#score").html(scoreCount);
    checkScore();
    // console.log("blue");

});

$(".red-crystal").on("click", function(){
    scoreCount+=crystal.red.value;
    $("#score").html(scoreCount);
    checkScore();
    // console.log("red");
});

$(".yellow-crystal").on("click", function(){
    scoreCount+=crystal.yellow.value;
    $("#score").html(scoreCount);
    checkScore();
    // console.log("yellow");
});

$(".black-crystal").on("click", function(){
    scoreCount+=crystal.black.value;
    $("#score").html(scoreCount);
    checkScore();
    // console.log("black");
});

// If "your score" < "random number"; game will continue.
// If "your score" == "random number; game will end, player wins.
// New game will begin, new random number is chosen, all 4 crystals will have new random values.
function checkScore(){
    if(scoreCount == targetNumber){
        alert("YOU WIN! Your score was: " + scoreCount);
        winCount++;
        $("#wins").html(winCount);
        newGame();

    }

    // If "your score" > "random number"; game will end, player loses.
    // New game will begin, new random number is chosen, all 4 crystals will have new random values.
    else if (scoreCount > targetNumber){
        alert("YOU LOSE... Your score was: " + scoreCount);
        loseCount++;
        $("#losses").html(loseCount);
        newGame();
    }

    }









