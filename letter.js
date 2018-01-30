// Contains a constructor, Letter. This constructor should be able to either
// display an underlying character or a blank placeholder (such as an underscore),
// depending on whether or not the user has guessed the letter.
// That means the constructor should define:

var Letter = function(character) {
	this.character = character;
	this.guessed = false;
	this.revealCharacter = function() {
		if (this.guessed) {
			console.log(this.character);
		} else {
			console.log("_");
		}
	}
	this.check = function(character) {
		if (character === this.character) {
			this.guessed = true;
		}
	}
}


var a = new Letter("a");
a.guessed = true;
a.revealCharacter();
// console.log(a);


// * A string value to store the underlying character for the letter
// * A boolean value that stores whether that letter has been guessed yet
// * A function that returns the underlying character if the letter has been guessed,
// or a placeholder (like an underscore) if the letter has not been guessed
// * A function that takes a character as an argument and checks it
// against the underlying character, updating the stored boolean value to true if
// it was guessed correctly


