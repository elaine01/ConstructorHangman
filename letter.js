var Letter = function(character) {
	this.character = character;
	this.guessed = false;
	this.revealCharacter = function() {
		if (this.guessed) {
			return this.character;
		} else {
			return " _ ";
		}
	}
	this.check = function(character) {
		console.log("17 ", character);
		console.log("18 ", this.character);
		if (character == this.character) {
			this.guessed = true;
		}
	}
}


module.exports = Letter;
