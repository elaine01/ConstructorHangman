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



function Word(word) {
	this.word = word;
	this.actualLetters = [];
	this.letters = [];
	this.wordFound = false;
	this.getLetters = function() {
		for (let i = 0; i < this.word.length; i++) {
			var newLetter = new Letter(this.word[i]);
			this.letters.push(newLetter);

			//this.letters.push(new Letter(this.word[i]));

			//populate each letter in the word as new Letter objects
			// var newLetterObj = new Letter(this.word[i]);
			// var underscoreLetterObj = newLetterObj.revealCharacter();
			// // console.log("word.js revealLetterOjb ", underscoreLetterObj)
			// //console.log("word.js getLetters() newLetterObj", newLetterObj.character);
			// this.actualLetters.push(newLetterObj.character);
			// this.letters.push(underscoreLetterObj);
			// console.log("word.js getLetters() this.letters ", this.letters[0]);
			

			// // { character: 'h', guesseD: false}
			// console.log("word.js newLetter", newLetterObj);
			// var revealedNewLetter = newLetterObj.revealCharacter();
			// console.log("word.js newLetter.revealCharacter" , revealedNewLetter);

			// var newLetterArr = this.letters.push(newLetterObj);

			//var underscoreLetters = this.letters.push(newLetterObj.revealCharacter());

		}
		// console.log("word.js this.actualLetters ", this.actualLetters.join(" "));
		// //console.log("word.js this.letters ", this.letters);
		// console.log("word.js just underscore ", this.letters.join(" "));
		// console.log("word.js this.actualLetters ", this.actualLetters);
		// //console.log("word.js this.letters ", this.letters);
		// console.log("word.js just underscore ", this.letters);		
		// console.log(this.letters.join(" "));
		//console.log("word.js underscore ", underscoreLetters);
		// console.log("word.js this.letters", this.letters);
		// console.log("word.js newLetterArr ", newLetterArr);
	}

	// finds the current word
	// this.findWord = function() {
	// 	this.checkWord = this.letter.every(function(letter) {
	// 		return letter.appear;
	// 	});
	// 	return this.checkWord;
	// }

	// this.array = word.split("").map(function(letter) {
	// 	return new Letter(letter);
	// });
	//console.log("this.array ", this.array);

	// this.word = function() {
	// 	return this.array.map(function(letter) {
	// 		return letter.character;
	// 	}).join("");
	// }
	//console.log("this.word ", this.word[0]);
	// this.letterCheck = function(character) {
	// 	this.guessed();
	// }

	// this.wordCheck = function() {
	// 	if (this.letters.every(function (character) {
	// 		return letter.guessed === true;
	// 	}))
	// }

	this.wordCheck = function() {
		if (this.letters.every(function(ltr) {
			return ltr.appear === true;
		})) {
			this.wordFound = true;
			return true;
		}
	}

	this.letterCheck = function(guessedLetter) {
		var returnCount = 0;
		this.letters.forEach(function(ltr) {
			if (ltr.letter === guessedLetter) {
				lttr.appear = true;
				returnCount++
			}
		})
		return returnCount

		// console.log("44 guessedLetter", guessedLetter);
		// console.log("word.js lettercheck() this.actualLetters ", this.actualLetters.join(" "));
		// console.log("word.js lettercheck() this.actualLetters ", this.actualLetters);
		// console.log("word.js letterCheck function this.letters", this.letters.join(" "));
		// console.log("word.js letterCheck() foreach ", this.letters);
		// this.letters.forEach(function(character) {
		// 	// var currentLetter = character.checked();
		// 	//guessedLetter.check(character);
		// 	//console.log("43 letter ", character);
		// 	//guessedLetter.revealCharacter(character);
		// 	console.log("word.js letterCheck() foreach ", character);
		// 	console.log("word.js letterCheck() foreach ", this.letters);

			// if (character === guessedLetter) {
			// 	character.guessed = true;
			// 	console.log(this.guessed);
			// 	character = character.revealCharacter();
			// 	console.log("letters", letters)
			// }
		// })
	}
	this.showWord = function() {
		var display = '';
		this.letters.forEach(function(ltr) {
			var thisLetter = ltr.revealCharacter();
			display += thisLetter;
		})
		return display
	}

	// this.letterCheck = function(guessedLetter) {
	// 	var return = 0;
	// }



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