var Word = require("./word.js");
var inquirer = require('inquirer');
var isGameStarted = false;
var randNum = Math.floor(Math.random() * (4));
var wordArray = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
var globalArr;
function checkWord(answer) {
    isGameStarted = true;
    globalArr = new Word(wordArray[randNum]);
    globalArr.wordChecker(answer);
    console.log(globalArr.wordMaker())
}
inquirer.prompt([
    {
        name: "guessTheLetter",
        type: "input",
        message: "Guess a letter to reveal the word!"
    },
]).then(function (answers) {
    checkWord(answers.guessTheLetter);
    console.log(answers.guessTheLetter)
})
