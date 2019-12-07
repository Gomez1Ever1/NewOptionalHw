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
    }
    this.wordChecker = function (guess) {
        for (let i = 0; i < this.value.length; i++) {
            var newLetter = new Letter(this.value[i]);
            console.log(newLetter.letterCheck(guess))
            if (newLetter.letterCheck(guess) !== '_') {
                console.log("correct")
                this.mysteryArray.splice(i, 1, newLetter);
            }

            // this.wordMaker();
        };
        return this.mysteryArray;
    }
}
module.exports = word;