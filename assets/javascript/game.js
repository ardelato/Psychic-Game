var numWins = 0;
var wins;

var numLoses = 0;
var loses;

var gLeft = 9;
var numGuesses;

var guessArray = [];
var currentGuesses;

var correctLetter;

var popUpMessage;
var popUpWindow;

function resetGame() {
	wins.innerHTML = 'Wins: ' + numWins.toString();
	loses.innerHTML = 'Loses: ' + numLoses.toString();
	numGuesses.innerHTML = 'Guesses Left: ' + gLeft.toString();
	currentGuesses.innerHTML = 'Your Guesses so far: ';
	guessArray = [];
	correctLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
	popUpWindow.style.visibility = 'hidden';
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
		popUpMessage.innerHTML = 'Sorry! You ran out of Guesses...';
		popUpWindow.style.visibility = 'visible';
		popUpWindow.style.backgroundColor = 'rgba(255,0,0,0.7)';
		setTimeout(resetGame, 2000);
	} else {
		updateStats(guess);
	}
}

function correctGuess() {
	popUpMessage.innerHTML = 'Congrats! You guessed correctly!';
	popUpWindow.style.visibility = 'visible';
	popUpWindow.style.backgroundColor = 'rgba(0,255,0,0.7)';
	numWins++;
	gLeft = 9;
	setTimeout(resetGame, 2000);
}

window.onload = function() {
	wins = document.getElementById('wins');
	loses = document.getElementById('loses');
	numGuesses = document.getElementById('numGuesses');
	currentGuesses = document.getElementById('currentGuesses');
	popUpWindow = document.getElementById('bg-modal');
	popUpMessage = document.getElementById('resultsText');
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
