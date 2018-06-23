'use strict'

//======== Nav-Bar JS =======//

function toggleSideBar(ref) {
    ref.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');

};

//======== End Nav Bar JS =====//

var allCards = [];

var Card = function(index, language, content, img) {
    this.index = index; // index number to track all cards
    this.language = language; // html, js, css
    this.content = content; //content on card face
    this.img = img; //location of img file
    allCards.push(this);
}

// Card Constructors
var cardBack = 'http://placehold.it/220x300/777';
var cssCardContent = [
    'rgb()',
    '*',
    ':first-child',
    ':last-child',
    ':nth-child',
    'display: inline-block;',
    'color:',
    'margin:',
    'padding:',
    'border:',
    'clear:',
    'float: left;',
    'float: right;',
    'position: static;',
    'position: absolute;',
    'position: fixed;',
    'font-family:',
    'background-color:',
    'line-height:',
    'font-weight:'
]
var makeCssCards = function() {
    for (var i = 0; i < cssCardContent.length; i++) {
        new Card(i, 'css', cssCardContent[i], 'http://placehold.it/220x300/444');
    }
}

// display cards

var displayCards = function() {
        {
            var ele = document.getElementById('card-deck');
            ele.src = 'http://placehold.it/150x200/12345';
            for (var i = 0; i < 5; i++) {
                var ele = document.getElementById('card' + String(i + 1))
                ele.src = 'http://placehold.it/150x200/12345';
            }
        }
    }
    // Form Handler for username

// Question and Answer Constructor--------------------------------
//  needs to create question in the question-field id
//  selects the answer card and 4 incorrect cards
//  assigns cards to 'card1' through 'card5' ids
//  contains explanations of answers to be displayed after answering

// localStorage---------------------------------------------------
//  storage for highscores, usernames, which question the user is on, user's current score, # of incorrect answers

// Event Listener and Click Handler-------------------------------
//  username form, clicking on cards

// Answer-checking Logic-------------------------------------------
//  if function to check if answer is correct
//  while loop to track # of incorrect answers, game over if too many

// DOM Manipulation------------------------------------------------
//  display username
//  display highscores
//  display explanation after answering question