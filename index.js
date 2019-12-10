var Word = require("./word.js");
var inquirer = require('inquirer');
var isGameStarted = false;
var randNum = Math.floor(Math.random() * (4));
var wordArray = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
function gameStart() {
    if (!isGameStarted) {
        globalArr = new Word(wordArray[randNum]);
        globalArr.wordMaker();
        console.log(globalArr.mysteryArray)
        isGameStarted = true;
    }
}
var globalArr;
function checkWord(answer) {
    globalArr.wordChecker(answer);
    console.log(globalArr.mysteryArray)
}
function start() {
    inquirer.prompt([
        {
            name: "guessTheLetter",
            type: "input",
            message: "Guess a letter to reveal the word"
        },
    ]).then(function (answers) {
        checkWord(answers.guessTheLetter);
        start();
        if (!globalArr.mysteryArray.includes("_")) {
            isGameStarted = false;
            console.log("You guessed the right word! Heres another one:")
            gameStart();
        }
    });
}
gameStart();
start();