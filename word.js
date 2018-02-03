// Contains a constructor, Word that depends on the Letter constructor.
// This is used to create an object representing the current word
// the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word
//   * A function that returns a string representing the word.
//   This should call the function on each letter object
//   (the first function defined in `Letter.js`) that displays the character
//   or an underscore and concatenate those together.
//   * A function that takes a character as an argument and calls the guess
//   function on each letter object (the second function defined in `Letter.js`)

var Letter = require('./letter.js');

var Word = function(word) {
	this.word = word;
	this.letters = [];
	this.getLetters = function() {
		for (var i = 0; i < this.word.length; i++) {
			var newLetter = new Letter(this.word[i]);
			this.letters.push(newLetter);
		}
	}

	// this.array = word.split("").map(function(letter) {
	// 	return new Letter(letter);
	// });
	// this.word = function() {
	// 	return this.array.map(function(letter) {
	// 		return letter.character;
	// 	}).join("");
	// }
	// this.letterCheck = function(character) {
	// 	this.guessed();
	// }

	// this.wordCheck = function() {
	// 	if (this.letters.every(function (character) {
	// 		return letter.guessed === true;
	// 	}))
	// }
	this.letterCheck = function(guessedLetter) {
		console.log("44 guessedLetter", guessedLetter);
		this.letters.forEach(function(character) {
			console.log("43 letter ", character.character);
			if (character.character === guessedLetter) {
				this.guessed = true;
				console.log(this.guessed);
			}
		})
	}
}

module.exports = Word;


// var happy = new Word("happy");
// happy.getLetters();
// console.log(happy);
// happy.letterCheck("a");

// console.log("test ", happy.array);
// console.log(happy.letters[0].character);


//console.log("happy.letters ", happy.letters);


//console.log("array ", cat.array);
// cat.word();
//console.log("line 32: word", cat.word());
//console.log("letter-check", cat.letterCheck());

	// this.letters = [];
	// this.getLetters = word.split("").map(function(letter) {
	// 	var newLetter = new Letter(letter);
	// 	this.letters.push(newLetter);
	// });



// 	var Word = function(word) {
// 	this.array = word.split("").map(function(letter) {
// 		return new Letter(letter);
// 	});
// 	this.word = function() {
// 		return this.array.map(function(letter) {
// 			return letter.character;
// 		}).join("");
// 	}
// 	this.letterCheck = function(character) {
// 		this.guessed();
// 	}
// }