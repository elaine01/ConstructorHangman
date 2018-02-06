var Letter = require('./letter.js');

var Word = function (word) {
	this.word = word;
	this.actualLetters = [];
	this.letters = [];
	this.wordFound = false;
	this.getLetters = function() {
		for (let i = 0; i < this.word.length; i++) {
			var newLetter = new Letter(this.word[i]);
			this.letters.push(newLetter);
		}
	}

	this.wordCheck = function() {
		if (this.letters.every(function(ltr) {
			console.log("word 78: ", ltr);
			return ltr.appear === true;
		})) {
			//console.log("word 81: ");
			this.wordFound = true;
			return true;
		}
	}

	this.letterCheck = function(guessedLetter) {
		var returnCount = 0;
		this.letters.forEach(function(ltr) {
			ltr.check(guessedLetter);
		})
	}
	this.showWord = function() {
		var display = '';
		this.letters.forEach(function(ltr) {
			console.log("word 127: ", ltr);
			var checkLetter = ltr.check(ltr);
			var thisLetter = ltr.revealCharacter();
			display += thisLetter;
		})
		return display
	}
}


module.exports = Word;

