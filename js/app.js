'use strict'

//======== Nav-Bar JS =======//

function toggleSideBar(ref) {
    ref.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');

};

//======== End Nav Bar JS =====//

var allCards = [];

var Card = function(index,filePath, language) {
    this.index = index; // index number to track all cards
    this.filePath = filePath;
    this.language = language; // html, js, css
    allCards.push(this);
}
////////////////////////////////////////////////

var Question = function(index, filePath, language){
    this.index = index;
    this.filePath = filePath;
    this.language = language;
    Question.allQuestions.push(this);
}
Question.allQuestions = [];

function genQuestionCard(){
    new Question(1,'img/js-q-1.png', 'JS');
}
genQuestionCard();
function genAllCard (){
    //question 1 card
    for(var i = 0; i <7; i++){
        new Card(1,'img/js-a-1-'+i+'.png', 'JS');
    }
   
}
genAllCard();

function displayQuestion(){
    for(var i = 1; i < Question.allQuestions.length+1; i++){
        var questEl = document.getElementById('questions-field');
        questEl.src = 'img/js-q-'+i+'.png';
    }
}
displayQuestion();






function displayDeck(){ // displaying the deck card color accordingly
    for(var i = 0; i < Question.allQuestions.length; i++){
        var deckcolor = document.getElementById('card-deck');
        if (Question.allQuestions[i].language === 'HTML'){
            deckcolor.src = "img/orangeCard.png";
        } else if(Question.allQuestions[i].language === 'CSS'){
            deckcolor.src = "img/blueCard.png";
        }else if(Question.allQuestions[i].language === 'JS'){
            deckcolor.src = "img/greenCard.png";
        }
    }
}
displayDeck();
// allCards = [];
// shuffle(allCards);
// display cards
var displayCards = function() {
    if(Question.allQuestions[0]){
        for(var i = 1; i < allCards.length-1; i++){
            var cardEl = document.getElementById('card'+i);
            cardEl.src = 'img/js-a-1-'+i+'.png';
        }
    }
}
displayCards();
// working on shuffling!
// function shuffling( array ){
//     var count = array.length,
//         randomnumber,
//         temp;
//     while( count ){
//      randomnumber = Math.random() * count-- | 0;
//      temp = array[count];
//      array[count] = array[randomnumber];
//      array[randomnumber] = temp
//     }
//     // allCards.push(this);
// }

// make a randomizer !!!
// look on how to change image using java to manipulate CSS





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

// <<<<<<< nav-bar
// var displayCards = function() {
//         {
//             var ele = document.getElementById('card-deck');
//             ele.src = 'http://placehold.it/150x200/12345';
//             for (var i = 0; i < 5; i++) {
//                 var ele = document.getElementById('card' + String(i + 1))
//                 ele.src = 'http://placehold.it/150x200/12345';
//             }
//         }
//     }
    // Form Handler for username
// =======
// var displayCards = function() {
//     {
//         var ele = document.getElementById('card-deck');
//         ele.src = 'http://placehold.it/150x200/12345';
//         for (var i = 0; i < 5; i++) {
//             var ele = document.getElementById('card' + String(i+1))
//             ele.src = 'http://placehold.it/150x200/12345';
//         }
//     }
// }
// Form Handler for username
// >>>>>>> master

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
// <<<<<<< nav-bar
//  display explanation after answering question
// =======
//  display explanation after answering question









/////////////////////////////////////////////////

// function cardmove (card, x, y){
//     var cardEl = document.getElementById(card);
//     cardEl.style.transform = 'perspective( 1000px ) rotateY( 0deg )'
//     cardEl.style.transform = 'translate('+x+', '+y+') rotate(720deg)';
//     if(card === 'card1'){
//         cardEl.setAttribute('onclick',"moveBack('card1')");
//     }else if(card === 'card2'){
//         cardEl.setAttribute('onclick',"moveBack('card2')");
//     }else if(card === 'card3'){
//         cardEl.setAttribute('onclick',"moveBack('card3')");
//     }else if(card === 'card4'){
//         cardEl.setAttribute('onclick',"moveBack('card4')");
//     }else if(card === 'card5'){
//         cardEl.setAttribute('onclick',"moveBack('card5')");
//     }
// }

// // find a way to move card back if its not the right answer. 
// function moveBack(card){
//     var cardUl = document.getElementById(card)
//     cardUl.style.transform = 'perspective( 1000px ) rotateY( 0deg )'
//     cardUl.style.transform = 'translate(0px, 0px;) rotate(-1440deg)';
// }

// function answerCheck(){
//     while(Question.allQuestions[0] && allCards[2]){
//         cardmove(card, x, y)
//     }
// }
// >>>>>>> master
