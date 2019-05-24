var LetterJS = require("./letter.js");

function wordPicked(answer) {
  this.wordArr = [];

  for (var i = 0; i < answer.length; i++) {
    var lettersPicked = new LetterJS(answer[i]);
    this.wordArr.push(lettersPicked);
  }

  this.log = function () {
    var answerText = "";
    for (var i = 0; i < this.wordArr.length; i++) {
      answerText += this.wordArr[i] + " ";
    }
  }

  this.usersGuesses = function (input) {
    for (var i = 0; i < this.wordArr.length; i++) {
    }
  };
}

module.exports = WordJS;