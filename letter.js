function lettersPicked(value) {
  this.lettersPicked = value;
  this.guessed = false;

  this.letterString = function () {
    if (this.lettersPicked === " ") {
      this.guessed = true;
      return " ";
    } else {
      if (this.gussed === false) {
        return "_";
      } else {
        return this.lettersPicked;
      }
    }
  };
  this.guess = function (guess) {
    if (guess === this.lettersPicked) {
      this.guessed = true;
    }
  };
}
module.exports = LetterJS;


