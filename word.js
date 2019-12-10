var Letter = require("./letter.js");
var word = function (randWord) {
    this.value = randWord;
    this.mysteryArray = [];
    this.wordMaker = function () {
        for (let i = 0; i < this.value.length; i++) {
            var newLetter = new Letter(this.value[i]);
            this.mysteryArray.push(newLetter.letterCheck());
        }
        return this.mysteryArray;
    };
    this.wordChecker = function (guess) {
        for (let i = 0; i < this.value.length; i++) {
            var newLetter = new Letter(this.value[i]);
            newLetter.letterCheck(guess);
            if (newLetter.guessed) {
                console.log("Correct!")
                this.mysteryArray.splice(i, 1, newLetter.underChar);
            }
        }

        return this.mysteryArray;
    }
}
module.exports = word;