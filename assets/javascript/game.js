$(document).ready(function() {

// Variables:
var wins = 0;
var losses = 0;

// // A random number needs generated
// var randomNumber = Math.floor((Math.random() * 101) + 19);
// console.log("Random Number to Guess: " + randomNumber);
// $("#number-to-guess").text(randomNumber);


// // Each gem needs to equal a random number between 1-12
// gemA = Math.floor((Math.random() * 12) + 1);
// console.log("Gem A: " + gemA);

// gemB = Math.floor((Math.random() * 12) + 1);
// console.log("Gem B: " + gemB);

// gemC = Math.floor((Math.random() * 12) + 1);
// console.log("Gem C: " + gemC);

// gemD = Math.floor((Math.random() * 12) + 1);
// console.log("Gem D: " + gemD);

function startGame () {

currentCount = 0;

// A random number needs generated
var randomNumber = Math.floor((Math.random() * 101) + 19);
console.log("Random Number to Guess: " + randomNumber);
$("#number-to-guess").text(randomNumber);


// Each gem needs to equal a random number between 1-12
var gemA = Math.floor((Math.random() * 12) + 1);
console.log("Gem A: " + gemA);

var gemB = Math.floor((Math.random() * 12) + 1);
console.log("Gem B: " + gemB);

var gemC = Math.floor((Math.random() * 12) + 1);
console.log("Gem C: " + gemC);

var gemD = Math.floor((Math.random() * 12) + 1);
console.log("Gem D: " + gemD);



// Game reset - new random number, new gem numbers

// Each time I click a gem the score needs to go up by that assigned value
$("#gem-a").on("click", function() {

    currentCount += gemA;
    $("#current-count").text(currentCount);

    if (currentCount === randomNumber){
        wins++;
        $("#wins").text(wins);
        $("#win-lose").text("You won!");
        startGame ();
    
    } else if (currentCount > randomNumber){
        losses++;
        $("#losses").text(losses);
        $("#win-lose").text("You Lost :(");
        startGame ();
    }
});

$("#gem-b").on("click", function() {

    currentCount += gemB;
    $("#current-count").text(currentCount);

    if (currentCount === randomNumber){
        wins++;
        $("#wins").text(wins);
        $("#win-lose").text("You won!");
        startGame ();

    } else if (currentCount > randomNumber){
        losses++;
        $("#losses").text(losses);
        $("#win-lose").text("You Lost :(");
        startGame ();
    }
});

$("#gem-c").on("click", function() {

    currentCount += gemC;
    $("#current-count").text(currentCount);

    if (currentCount === randomNumber){
        wins++;
        $("#wins").text(wins);
        $("#win-lose").text("You won!");
        startGame ();

    } else if (currentCount > randomNumber){
        losses++;
        $("#losses").text(losses);
        $("#win-lose").text("You Lost :(");
        startGame ();
    }
});

$("#gem-d").on("click", function() {

    currentCount += gemD;
    $("#current-count").text(currentCount);

    if (currentCount === randomNumber){
        wins++;
        $("#wins").text(wins);
        $("#win-lose").text("You won!");
        startGame ();
    
    } else if (currentCount > randomNumber){
        losses++;
        $("#losses").text(losses);
        $("#win-lose").text("You Lost :(");
        startGame ();
    }
});

}

startGame();

});

// When your score equals the random generated number - win!

// If you go over the random generated number - lose!

// Game reset - new random number, new gem numbers

