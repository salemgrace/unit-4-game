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
console.log(randomNumber);


// Each gem needs to equal a random number between 1-12
gemA = Math.floor((Math.random() * 12) + 1);
console.log(gemA);

gemB = Math.floor((Math.random() * 12) + 1);
console.log(gemB);

gemC = Math.floor((Math.random() * 12) + 1);
console.log(gemC);

gemD = Math.floor((Math.random() * 12) + 1);
console.log(gemD);

// Each time I click a gem the score needs to go up by that assigned value


// When your score equals the random generated number - win!

// If you go over the random generated number - lose!

// Game reset - new random number, new gem numbers

