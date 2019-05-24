//require keys
var WordJS = require("./word.js");
var inquirer = require("inquirer");

//index.js node code
var lettersArr = "abcdefghijklmnopqrstuvwxyz";

var unicornColours = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "pink",
  "brown",
  "black",
  "white"
];

function wordGuessGame() {
  if (newWordGenerated) {
    var randomPickedColours = Math.floor(Math.random() * unicornColours.length);
    var randomColours = unicornColours[randomPickedColours];
    var computerGenColour = new WordJS(randomColours);
    var newWordGenerated = false;
  }

  var wordsGuessed = [];
  if (wordsGuessed.includes(false)) {
    inquirer.prompt([{
      type: "input",
      message: "Select a letter from A to Z",
      name: "usersInput"
    }

    ]).then(function (input) {
      if (wordArr.includes(input.userInput) || input.userInput.length > i) {
        console.log("\nOoops! Try again\n");
        wordGuessGame();

      } else {
        if (wrongLettersPicked.includes(input.userInput) || correctLettersPicked.includes(input.userInput) || input.userInput === "") {
          console.log("\n Guess again! Nothing Entered!\n");
          wordGuessGame();
        } else {
          var colourCheckPicked = [];

          computerGenColour.guessesRemain(input.userInput);
          computerGenColour.colourCheckPicked.forEach(colourCheck);
          if (colourCheckPicked.join("") === colourPicked.join("")) {
            wrongLettersPicked.push(input.userInput);
            guessesRemain--;
          }
        }
      }

    })
  } else {
    console.log("You're a winner!\n");
  }

}
