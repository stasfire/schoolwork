/*
 * Word Guessing Game - Solution
 *
 */
'use strict';
// Define a container for the game variables
var game = {
  answerPosition: 0,   // position of the answer in the wordList 
  display: '',         // the current dash/guessed letters display
  wrong: '',           // all the wrong letters guessed so far
  answer: '',          // the correct answer
  wrongCount: 0,       // the number of wrong guesses so far
  over: false,         // is the game over?
  answersList: [       // list of answers to cycle through
    'JavaScript',
    'document',
    'element',
    'ajax',
    'property',
    'event',
    'propagation',
    'listener',
    'transition',
    'animation'
  ]
  };

function dashes(number) {
    // this function takes a number as a parameter
    // and returns a string with that many dashes
    var result = '';
    for (var i = 1; i <= number; i++)  {
        result = result + '-';
    }
    return result;
}

function check(letter) {
    // Checks all occurrences of the letter guessed against game.answer. 
    // Returns true if the guess is correct and false otherwise. 
    // Updates the game dash display variable game.display if applicable.
    var position;
    var result = false;
    if (letter) {   // check that guess is not the empty string
        // Find the first occurrence of guess in the answer
        position = game.answer.indexOf(letter);
        // if the guessed letter is found in the answer
        if (position > - 1) {
            result = true;
        }
        while (position >= 0) {
            // update the dash display and find all remaining occurrences
            game.display = game.display.substring(0, position) + letter + game.display.substring(position + 1);
            // get the next occurrence
            position = game.answer.indexOf(letter, position + 1);
        }
    }
    return result;
}

function restart() {
    // Initialize the game at the beginning or after restart
    // Initialize the game variables - the model
    game.answer = game.answersList[game.answerPosition].toLowerCase(); // get the word for this round
    // use the modulo operator to cycle through the answersList
    game.answerPosition = (game.answerPosition + 1) % game.answersList.length;
    game.display = dashes(game.answer.length);
    game.wrong = '';
    game.wrongCount = 0;
    game.over = false;
    // Initialize the web page - the view
    document.getElementById('indicator').value = 0; // initialize the progress bar
    document.getElementById('display').textContent = game.display;
    document.getElementById('wrong').textContent = '';
    document.getElementById('guessedletter').value = '';
    document.getElementById('guessedletter').focus();
}

function play() {
    // Invoked when the user clicks on GUESS
    if (game.over) {// if the game is over
        document.getElementById('wrong').textContent = 'Press RESTART to play again.';  // user has to restart
    } else {
        //if the game is not over yet
        var guess = document.getElementById('guessedletter').value.toLowerCase();
        if (check(guess)) {
            // if the guess is valid
            document.getElementById('display').textContent = game.display;
        } else if (guess) {
            // If it's a wrong non-empty guess 
            game.wrong = guess + ' ' + game.wrong;
            game.wrongCount++;
            document.getElementById('wrong').textContent = game.wrong;
            document.getElementById('indicator').value = game.wrongCount;
        }
        // reinitialize the guess
        document.getElementById('guessedletter').value = '';
        document.getElementById('guessedletter').focus();
        // check for a win or loss
        gameOutcome();
    }
}

function gameOutcome() {
    // check if the game is won or lost
    if (game.answer === game.display) {
        document.getElementById('wrong').textContent = 'Congratulations!  You win';
        game.over = true;  // game is over.  User has to restart to play again
    } else if (game.wrongCount >= 10) {  // 10 guesses only
        document.getElementById('wrong').textContent = 'No more guesses - the answer was ' + game.answer;
        game.over = true;  // game is over.  User has to restart to play again
    }
}

// Main program starts here
restart();
document.getElementById('guessbutton').addEventListener('click', play, false);
document.getElementById('restart').addEventListener('click', restart, false);
