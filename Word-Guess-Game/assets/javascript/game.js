document.addEventListener("DOMContentLoaded", function(){
    
//Wordlist & variables
var scaryWords = ['It', 'Saw', 'Scray Movie', 'The Ring', 'Seven', 'Psycho', 'Shining', 'Exorcist', 'Halloween', 'Poltergeist', 'Frankenstein', 'Insidious', 'Scream', 'Alien', 'Carrie', 'Hellraiser', 'Misery', 'Goosebumps', 'Shutter', 'The Conjuring'];
//console.log(possibleWords);

const maxGuess = 8
var pauseGame = false
var guessedLetters = []
var guessingWord = []
var wordToMatch
var numGuess
var wins = 0
var losses = 0

resetGame()

//Player keypress starts the game
document.onkeypress = function(event) {
    // Make sure key pressed is an alpha character
    if (isAlpha(event.key) && !pauseGame) {
        checkForLetter(event.key.toUpperCase())
    }
}

// Game Functions
// Check if letter is in word & process
function checkForLetter(letter) {
    var foundLetter = false

    // Search string for letter
    for (var i=0, j= wordToMatch.length; i<j; i++) {
        if (letter === wordToMatch[i]) {
            guessingWord[i] = letter
            foundLetter = true
            // If guessing word matches random word
            if (guessingWord.join("") === wordToMatch) {
                // Increment # of wins
                wins++
                pauseGame = true
                updateDisplay()
                setTimeout(resetGame,5000)
            }
        }
    }

    if (!foundLetter) {
        // Check if incorrect guess has already been used
        if (!guessedLetters.includes(letter)) {
            // Add incorrect letter to guessed letter array
            guessedLetters.push(letter)
            // Decrement the number of remaining guesses
            numGuess--
        }
        if (numGuess === 0) {
            // Display word before reseting game
            losses++
            guessingWord = wordToMatch.split()
            pauseGame = true
            setTimeout(resetGame, 5000)
        }
    }

    updateDisplay()

}
// Check if key pressed is between A-Z or a-z
function isAlpha (ch){
    return /^[A-Z]$/i.test(ch);
}

function resetGame() {
    numGuess = maxGuess
    pauseGame = false

    // Get a new word and then link wordToMatch to original word to replace it
    wordToMatch = scaryWords[Math.floor(Math.random() * scaryWords.length)].toUpperCase()
    console.log(wordToMatch)

    // Reset word arrays
    guessedLetters = []
    guessingWord = []

    // Reset the guessed word and assign marker to replace scaryWord
    for (var i=0, j=wordToMatch.length; i < j; i++){
        // Loop through string and return an underscore for each letter. If there is a space between two words, put a space instead of an underscore between the words
        if (wordToMatch[i] === " ") {
            guessingWord.push(" ")
        } else {
            guessingWord.push("_")
        }
    }

    // Update the Display
    updateDisplay()
}

//Display on HTML page
function updateDisplay () {
    document.getElementById("totalWins").innerText = wins
    document.getElementById("totalLosses").innerText = losses
    document.getElementById("currentWord").innerText = guessingWord.join("")
    document.getElementById("remainingGuesses").innerText = numGuess
    document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ")
}
})
