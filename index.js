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

var randomNum = Math.floor(Math.random() * wordList.length);
var currentWord = wordList[randomNum];
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
]).then(function(answer) {

	if (!answer.confirm) { // don't play if the user confirms a 'no'
		console.log("");
		console.log("    Sorry to see you go. Hope to see you next time!");
		console.log("");
		return 
	} else { // start game
		console.log("");
		console.log("    New Game! Only lowercase letters please");
		console.log("");
		console.log("");

	  var newWord = new Word(currentWord);
	  newWord.getLetters();
	  console.log(newWord.showWord());
	  console.log("");
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
		      message: "Pick a letter",
		      validate: function(value) {
		      	if (isLetter(value)) {
		      		return true;
		      	} else {
		      		return false;
		      	}
		      }
		    },
		    ]).then(function(character) {
		    	var userGuess = character.userGuess;
		    	var haveGuessed = false;
		    	for (var k = 0; k < currentGuesses.length; k++) {
		    		if (userGuess === currentGuesses[k]) {
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
				    	count++;
				    	guessesLeft--;
							console.log("");
				    	console.log("You guessed: " + userGuess);
				    	console.log("");
				    //	console.log("index.js res", res.userGuess);
		    		} else {
		    			console.log("Correct guess!");
		    			if (newWord.wordCheck() === true) {
		    				console.log(newWord.showWord());
		    			} else {
		    				console.log("--------------------------------");
					    	console.log(newWord.showWord());
								console.log("");
					    	console.log("You guessed: " + userGuess);
					    	console.log("");
		    			}
		    		}
		    		if (guessesLeft > 0 && newWord.wordFound === false) {
		    			guessPrompt();
		    		}
		    	}
		      // run the askquestion function again so as to either end the loop or ask the questions again
		      guessPrompt();
		    });
		  }
		  // else {
		  //   console.log("You used up all your guesses. Play again.");
		  // }
		};

	  guessPrompt();

	}



});



