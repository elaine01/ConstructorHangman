var Word = require('./word.js');
var inquirer = require('inquirer');
var isLetter = require('is-letter');

var wordList = [
	'bangkok', 'london', 'paris', 'dubai',
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
console.log("   +++++++++++++++++++++++++ \n");

inquirer.prompt([
  {
    type: "confirm",
    message: "Are you ready to play",
    name: "confirm",
    default: true
  },
]).then(function(answer) {

	if (!answer.confirm) { // don't play if the user confirms a 'no'
		console.log("\n >>> Sorry to see you go. Hope to see you next time! \n");
		return 
	} else { // start game


		// for testing purposes
		console.log(currentWord);


		console.log("\n >>> New Game! \n\n");

	  var newWord = new Word(currentWord);
	  newWord.getLetters();
	  console.log(newWord.showWord());
	  console.log("");
	  // console.log("answers ", answers);

	  var guessPrompt = function() {
		// if statement to ensure that our questions are only asked five times
		if (count < 10) {
			console.log("\n >>> You currently have " + guessesLeft + " guesses left");
			console.log(" >>> Your guesses so far: " + currentGuesses.join(", ") + "\n");

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
		    	var userGuess = character.userGuess.toLowerCase();
		    	var haveGuessed = false;
		    	for (var k = 0; k < currentGuesses.length; k++) {
		    		if (userGuess === currentGuesses[k]) {
		    			haveGuessed = true; // log all current guesses
		    		}
		    	}
		    	if (haveGuessed === false) { // if user didn't already guess the letter
		    		currentGuesses.push(userGuess);
		    		var found = newWord.letterCheck(userGuess);

		    		if (found === 0) { // if guessed letter isn't a right answer

				    	console.log("\n -------------------------------- \n");
				    	console.log(newWord.showWord());
				    	count++;
				    	guessesLeft--;
				    	console.log("\n\n Incorrect \n\n You guessed: " + userGuess + "\n");

		    		} else { // if guessed letter is correct
		    			console.log("\n\n Correct guess!");

		    			if (newWord.wordCheck() === true) {
		    				newWord.wordCheck();
		    				newWord.showWord();
		    			} else {
		    				console.log("\n -------------------------------- \n");
					    	console.log(newWord.showWord());
					    	console.log("\n You guessed: " + userGuess +"\n");
		    			}
		    		}
		    		if (guessesLeft > 0 && newWord.wordFound === false) {
		    			guessPrompt();
		    		} else if (newWord.wordFound === true) {
		    			console.log("\n\n **** Congrats! You won! **** \n\n");
		    		} else {
		    			console.log("\n You used up all your guesses. Play again.");
		    		}
		    	} else {
		    		console.log("\n\n !! You already guessed that letter. Please pick another letter. !! \n \n");
		    		guessPrompt();
		    	}   
		    });
		  }
		};
	  guessPrompt();
	}

});



