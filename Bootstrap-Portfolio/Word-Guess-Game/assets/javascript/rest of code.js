
// generate a word at random and store it in a variable
// display the length of the word to the user
// prompt the user to guess a letter
// if the guess is correct increment correct_guesses by 1
// if the guess is incorrect increment incorrect_guesses by 1 
// and draw the next part of the hangman
// if the incorrect_guesses is greater than 8, tell the user 
// they lost and exit the program
// if correct_guesses is equal to the length of the word, tell the user they won

//while the word has not been guessed {
    //show the player their current progress
    //get a guess from the player
    //if the guess is in the word {
    //update the player's progress with the guess


//Wordlist & variables
var words = ['It', 'Saw', 'Ring', 'Psycho', 'Shining', 'Exorcist', 'Halloween', 'Poltergeist', 'Frankenstein'];
//console.log(Words);

var wrongWords = [];
//track the right words
var rigthWords = ["_", "_"];
var rigthWords1 = ["_", "_", "_"];
var rigthWords2 = ["_", "_", "_", "_"];
var rigthWords3 = ["_", "_", "_", "_", "_", "_"];
var rigthWords4 = ["_", "_", "_", "_", "_", "_", "_"];
var rigthWords5 = ["_", "_", "_", "_", "_", "_", "_", "_"];
var rigthWords6 = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
var rigthWords7 = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
var rigthWords8 = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

var userInputKey;
var currentWord = words[0];
var wordSplit = currentWord.split('');

//to HTML
var wrongWordTxt = document.getElementById('wrongGuess');
var rightWordTxt = document.getElementById('rightGuess');
var livesTxt = document.getElementById('lives');
var loseTxt = document.getElementById('lose');
var winTxt = document.getElementById('win');
var wrongCount = 8;

//First word
// Let's get a random number

function randomNumb() {
var randomNumb = Math.floor(Math.random() * words.length);
return randomNumb;
console.log(randomNumb);
}

function randomWord() {
//using randomNumb, choose a word from the words array and split it into stings
var randomWord = words[randomNumb()];
//need to split words into strings
var randomWordSplit = randomWord.split('');
return randomWordSplit;
}

//make randomWord function into a variable
var randomWordSplitFunc = randomWord();


//make an underscore set for each possile secret word result to equal the number of letters in word
function makeUnderScore() {
    if(randomWordSplitFunc.length === 2) {
        var underScoreIt = rightWordTxt.textContent = ["_", "_"];
        return underScoreIt;
    } 
    
    if(randomWordSplitFunc.length === 3) {
        var underScoreSaw = rightWordTxt.textContent = ["_", "_", "_"];
        return underScoreSaw;
    } 

    if(randomWordSplitFunc.length === 4) {
        var underScoreRing = rightWordTxt.textContent = ["_", "_", "_", "_"];
        return underScoreRing;
    } 
    
    if(randomWordSplitFunc.length === 6) {
        var underScorePsycho = rightWordTxt.textContent = ["_", "_", "_", "_", "_", "_"];
        return underScorePsycho;
    }

    if(randomWordSplitFunc.length === 7) {
        var underScoreShining = rightWordTxt.textContent = ["_", "_", "_", "_", "_", "_", "_"];
        return underScoreShining;
    }

    if(randomWordSplitFunc.length === 8) {
        var underScoreExorcist = rightWordTxt.textContent = ["_", "_", "_", "_", "_", "_", "_", "_"];
        return underScoreExorcist;
    }

    if(randomWordSplitFunc.length === 9) {
        var underScoreHalloween = rightWordTxt.textContent = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
        return underScoreHalloween;
    }

    if(randomWordSplitFunc.length === 11) {
        var underScorePoltergeist = rightWordTxt.textContent = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
        return underScorePoltergeist;
    }

    if(randomWordSplitFunc.length === 12) {
        var underScoreFrankenstein = rightWordTxt.textContent = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
        return underScoreFrankenstein;
    }
}

var holdUnder = makeUnderScore();

function checkRightWord() {
    for(var i = 0, x = 1;i <randomWordSplitFunc.length; i++, x++) {
        if(userInputKey === randomWordSplitFunc[i]) {
            rightWords.fill(userInputKey,i,x);
            //add the array rightWords to the Dom
            rightWordTxt.textContent = rightWords;
        }
    }
}

function wrongWord() {
    wrongWords.push(userInputKey);
    wrongWordTxt.textContent = wrongWords;
    wrongCount--;
    livesTxt.textContent = wrongCount;
}

//if right word is guesses
function checkWord() {
    if(currentWord.indexOf(userInputKey) > -1) {
        checkRightword();
        winGameOver();
    } else {
        wrongWord();
        loseGameOver();
    }
}

//when you lose
function loseGameOver() {
    if(wrongCount === 0) {
        loseTxt.textContent = "You Lose!";
        setTimeout(function() {
        loseTxt.textContent = 8;
        wrongCount = 8;
        wrongWords = [];
        wrongWordTxt.textContent = "";
        //rightWordTxt.Content = ["_", "_","_"]
        //rightWords = ["_", "_","_"]
        winTxt.textContent = " ";
        loseTxt.textContent = " ";
        currentWord = words[1];
        wordSplit = currentWord.split('');
        start1();
        }, 3500);
    }
}



//how to win

function winGameOver() {
    if(randomWordSplitFunc.join() === holdUnder.join())
    livesTxt.textContent = wrongCount;
    rightwordTxt.textContent = rightWords;
    winTxt.textContent = "Winner!";

    //reset game if these things occur
    setTimeOut (function() {
        livesTxt.textContent = 8;
        wrongCount = 8;
        wrongWords = [];
        wrongWordTxt.textContent = "";
        //rightWordTxt.Content = ["_", "_","_"]
        //rightWords = ["_", "_","_"]
        winTxt.textContent = " ";
        loseTxt.textContent = " ";
        currentWord = words[1];
        wordSplit = currentWord.split('');
        start1();
    }, 3500); 
    //speed
}

//Start Game
function start() {
    document.onkeyup = function() {
    //prints _, _, _, _ into HTML
    //rightWordTxt.textContent = rightWords
    //logs key user presses to user inputkey
    userInputKey = event.key;
    checkWord();
    }
}

    //call start of function
    //rightWordTxt.textContent = rightWords; 
    start();