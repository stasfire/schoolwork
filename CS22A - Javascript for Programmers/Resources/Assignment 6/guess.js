/*
 * Word Guessing Game - Template
 *
 */
'use strict';
// Define a container for the game variables
var game = {
  answerPosition: 0,   // position of the current answer in the wordList - start at 0
  display: '',         // the current dash/guessed letters display - ex '-a-a--r--t'
  wrong: '',           // all the wrong letters guessed so far
  answer: '',          // the correct answer - one word from game.answersList
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
    // you may use your function definition from question 4 in assignment 2 here.
    // this function takes a number as a parameter
    // and returns a string with that many dashes
}

function restart() {
    // Initialize the game at the beginning or after restart
    // Make sure you initialize the game variables (the model)
    // and the web page (the view)
    // Enter you code here
    
    
    // The focus method invoked on an input allows the user to type in that input without having to click it.
    document.getElementById('guessedletter').focus();
}

function play() {
    // This function is invoked when the user clicks on GUESS
    // Get the user input
    // Check the letter guessed against the current answer
    // update the game variables accordingly
    // update the web page accordingly
    // check the game outcome
    // Enter your code here

}

function gameOutcome() {
    // check if the game is won or lost  
    // game is won if game.display === game.answer
    // game is lost if we've had 10 wrong guesses or more
    // update the web page and the game variable game.over accordingly
}

// Main program starts here
restart();
document.getElementById('guessbutton').addEventListener('click', play, false);
document.getElementById('restart').addEventListener('click', restart, false);