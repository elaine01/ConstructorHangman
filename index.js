var Word = require('./word.js');
var inquirer = require('inquirer');

wordList = ['happy', 'sad', 'angry', 'excited'];


// * Randomly selects a word and uses the `Word` constructor to store it

var randomNumber = Math.floor(Math.random() * wordList.length);
var currentWord = wordList[randomNumber];



// * Prompts the user for each guess and keeps track of the user's remaining guesses
inquirer.prompt([
  {
    type: "confirm",
    message: "Are you ready to play",
    name: "confirm",
    default: true
  },
]).then(function(answers) {

  var newWord = new Word(currentWord);



});
