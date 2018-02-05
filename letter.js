var Letter = function(character) {
	//console.log("letter 2: character ", this.character);
	this.character = character;
	this.guessed = false;
	this.revealCharacter = function() {
		//console.log("letter 6: character ", this.character);
		//console.log("letter.js 7: this.guessed ", this.guessed);
		if (this.guessed) {
			//console.log("letter.js 9: this guessed");
			return this.character;
		} else {
			//console.log("letter.js 12: not correctly guessed");
			return " _ ";
		}
	}
	this.check = function(character) {
		//console.log("17 ", character);
		//console.log("18 ", this.character);
		if (character == this.character) {
			//console.log("letter.js 20: if character = this.character");
			this.guessed = true;
			//console.log('21', this.guessed);
		} else {
			//console.log("letter.js 24: if character doesn't equal this.character");
			this.guessed = false;
		}
	}
}


module.exports = Letter;
