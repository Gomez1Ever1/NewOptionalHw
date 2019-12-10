var letter = function (randLetter) {
    this.underChar = randLetter,
        this.guessed = false,
        this.letterPlaceholder = function () {
            if (this.guessed) {
                return this.underChar;
            }
            else if (!this.guessed) {
                return "_";
            }
        },
        this.letterCheck = function (guess) {
            if (guess === this.underChar.toLowerCase()) {
                this.guessed = true;
                return this.letterPlaceholder();
            }
            else {
                return this.letterPlaceholder();
            }
        }
};
module.exports = letter;