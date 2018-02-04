var Word = require('./word.js');
var inquirer = require('inquirer');
var isLetter = require('is-letter');

var wordList = [
	'bangkok', 'landon', 'paris', 'dubai',
	'singapore', 'istanbul', 'tokyo', 'seoul',
	'barcelona', 'amsterdam', 'milan', 'taipei',
	'rome', 'osaka', 'prague', 'madrid', 'dublim'
];

// * Randomly selects a word and uses the `Word` constructor to store it

var randomNumber = Math.floor(Math.random() * wordList.length);
var currentWord = wordList[randomNumber];
var currentGuesses = [];
var count = 0;	
var guessesLeft = 10;



// * Prompts the user for each guess and keeps track of the user's remaining guesses
console.log("   +++++++++++++++++++++++++");
console.log("   +                       +");
console.log("   +  Welcome to Hangman!  +");
console.log("   +                       +");
console.log("   +++++++++++++++++++++++++");
console.log("");
inquirer.prompt([
  {
    type: "confirm",
    message: "Are you ready to play",
    name: "confirm",
    default: true
  },
]).then(function(inquirerResponse) {

	if (!inquirerResponse.confirm) { // don't play if the user confirms a 'no'
		return
	} else { // start game
		console.log("");
		console.log("    Only lowercase letters please");
		console.log("");
		console.log("");

	  var newWord = new Word(currentWord);
	  newWord.getLetters();
	  // console.log("answers ", answers);

	  var guessPrompt = function() {
		// if statement to ensure that our questions are only asked five times
		if (count < 10) {
			console.log("You currently have " + guessesLeft + " guesses left");
			console.log("Your guesses so far: " + currentGuesses);

		  inquirer.prompt([
		    {
		   	  type: "input",
		      name: "userGuess",
		      message: "Pick a letter"
		    },
		    ]).then(function(res) {
		    	var userGuess = res.userGuess;
		    	var haveGuessed = false;
		    	for (var k = 0; k < currentGuesses.length; k++) {
		    		if (userGuess = currentGuesses[k]) {
		    			haveGuessed = true;
		    		}
		    	}
		    	if (haveGuessed === false) {
		    		currentGuesses.push(userGuess);
		    		var found = newWord.letterCheck(userGuess);

		    		if (found === 0) {
				    	//newWord.letterCheck(userGuess);
				    	console.log("--------------------------------");
				    	console.log(newWord.showWord());
							console.log("");
				    	console.log("You guessed: " + userGuess);
				    	console.log("");
				    //	console.log("index.js res", res.userGuess);
				    	currentGuesses.push(userGuess);
				      count++;
				      guessesLeft--;
		    		} else {
		    			if (newWord.wordCheck() === true) {
		    				console.log(newWord.showWord());
		    			} else {
		    				console.log(newWord.showWord());
		    			}
		    		}		    		

		    	}

		      // run the askquestion function again so as to either end the loop or ask the questions again
		      guessPrompt();
		    });
		  }
		  else {
		    console.log("You used up all your guesses. Play again.");
		  }
		};


	  guessPrompt();

	}



});



