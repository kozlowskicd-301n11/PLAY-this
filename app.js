
'use strict'
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
    'font-weight:']
var makeCssCards = function() {
    for (var i = 0; i < cssCardContent.length; i++) {
        new Card(i, 'css', cssCardContent[i], 'http://placehold.it/220x300/444');
    }
}

// display cards

var displayCards = function() {
    for (var i = 0; i <allCards.length; i++) {
        var ele = document.getElementById('card-deck');
        ele.src = 'http://placehold.it/220x300/12345';
    }
}