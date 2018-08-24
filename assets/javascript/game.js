// Variables:
var wins = 0;
var losses = 0;
var currentCount = 0;

var gemA;
var gemB;
var gemC;
var gemD;

// A random number needs generated
var randomNumber = Math.floor((Math.random() * 101) + 19);
console.log("Random Number to Guess: " + randomNumber);
$("#number-to-guess").text(randomNumber);


// Each gem needs to equal a random number between 1-12
gemA = Math.floor((Math.random() * 12) + 1);
console.log("Gem A: " + gemA);

$("#gem-a").click

gemB = Math.floor((Math.random() * 12) + 1);
console.log("Gem B: " + gemB);

gemC = Math.floor((Math.random() * 12) + 1);
console.log("Gem C: " + gemC);

gemD = Math.floor((Math.random() * 12) + 1);
console.log("Gem D: " + gemD);

// Each time I click a gem the score needs to go up by that assigned value


// When your score equals the random generated number - win!

// If you go over the random generated number - lose!

// Game reset - new random number, new gem numbers

