var numWins = 0;
var wins;

var numLoses = 0;
var loses;

var gLeft = 9;
var numGuesses;

var guessArray = [];
var currentGuesses;

var correctLetter;

function resetGame() {
	wins.innerHTML = 'Wins: ' + numWins.toString();
	loses.innerHTML = 'Loses: ' + numLoses.toString();
	numGuesses.innerHTML = 'Guesses Left: ' + gLeft.toString();
	currentGuesses.innerHTML = 'Your Guesses so far: ';
	guessArray = [];
	correctLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
	console.log('Current Letter: ' + correctLetter);
}

function updateStats(newGuess) {
	wins.innerHTML = 'Wins: ' + numWins.toString();
	loses.innerHTML = 'Loses: ' + numLoses.toString();
	numGuesses.innerHTML = 'Guesses Left: ' + gLeft.toString();
	guessArray.push(newGuess);
	currentGuesses.innerHTML = 'Your Guesses so far: ' + guessArray.toString();
}

function wrongGuess(guess) {
	if (--gLeft == 0) {
		numLoses++;
		gLeft = 9;
		resetGame();
	} else {
		updateStats(guess);
	}
}

function correctGuess() {
	numWins++;
	gLeft = 9;
	resetGame();
}
window.onload = function() {
	wins = document.getElementById('wins');
	loses = document.getElementById('loses');
	numGuesses = document.getElementById('numGuesses');
	currentGuesses = document.getElementById('currentGuesses');
	resetGame();
};

document.onkeydown = function(event) {
	console.log('Event Char Code: ' + event.keyCode);
	//Check guess is an alphabetical letter
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		var guess = event.key.toLowerCase();
		if (guess !== correctLetter && !guessArray.includes(guess)) {
			wrongGuess(guess);
		} else if (guess === correctLetter) {
			correctGuess();
		}
		console.log('Guess:' + guess);
	}
};
