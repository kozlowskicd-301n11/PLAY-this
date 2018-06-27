'use strict'
////////////////////////////////////////////////
// debugger;

var Question = function(Qindex, filePath, language){ // should add a parameter if needed
    this.Qindex = Qindex;
    this.filePath = filePath;
    this.language = language;
    this.answerCards = []; // Probably need to clear before pushing a new Answer's card so it doesnt stack up!
    allQuestions.push(this);
}
// Question.answerCards = [];
var allQuestions = [];
// Generate card into Question.answerCards []
var Card = function(Aindex, filePath, language) {
    this.Aindex = Aindex; // index number to track all cards
    this.filePath = filePath;
    this.language = language; // html, js, css
    allQuestions[this.Aindex - 1].answerCards.push(this); // Testing for the first value of array [0] will end up put in a loop or so to push all
}

// Generating Question card
function genQuestionCard(){
    new Question(1,'img/js-q-1.png', 'JS');    
    new Question(2, 'img/js-q-2.png', 'CSS');  /////TEST QUESTION CARD
    new Question(3, 'img/js-q-3.png', 'HTML'); /////TEST QUESTION CARD
}
genQuestionCard();
// debugger;
// Generate answer cards and push them into the answerCards array
// Question.prototype.genAnswerCards = function (){
//     for(var j = 1; j < allQuestions.length; j++){
//         for(var i = 1; i < 9; i++){
//             new Card(j, 'img/js-a-'+j+'-'+i+'.png', 'JS');
            
//         }// try to do if Qindex 1 1-1.png
//     }
        
// }
var genAnswerCards = function() {
    for (var i = 1; i < allQuestions.length + 1; i++) {
        for (var j = 1; j < 9; j++) {
            new Card((i), 'img/js-a-'+i+'-'+j+'.png', 'JS');
        }
    }
}
genAnswerCards();  // Generates 8 answer cards per question for however many are in allQuestions array.


// function displayQuestion(){ 
//      for(var i = 1; i < allQuestions.length+1; i++){
//         var questEl = document.getElementById('questions-field');
//         questEl.src = 'img/js-q-'+i+'.png';
// }
Question.prototype.displayQuestion = function() {     // Will display the question for this instance when called.
    var questEl = document.getElementById('questions-field');
    questEl.src = this.filePath;
}
allQuestions[0].displayQuestion();


// function displayDeck(){ // displaying the deck card color accordingly to each set
//     for(var i = 0; i < allQuestions.length; i++){
//         var deckcolor = document.getElementById('card-deck');
//         if (allQuestions[i].language === 'HTML'){
//             deckcolor.src = "img/orangeCard.png";
//         } else if(allQuestions[i].language === 'CSS'){
//             deckcolor.src = "img/blueCard.png";
//         }else if(allQuestions[i].language === 'JS'){
//             deckcolor.src = "img/greenCard.png";
//         }
//     }
// }

Question.prototype.displayDeck = function() { // displaying the deck card color accordingly to each set
        var deckcolor = document.getElementById('card-deck');
        if (this.language === 'HTML'){
            deckcolor.src = "img/orangeCard.png";
        } else if(this.language === 'CSS'){
            deckcolor.src = "img/blueCard.png";
        }else if(this.language === 'JS'){
            deckcolor.src = "img/greenCard.png";
        }
}
allQuestions[i].displayDeck();
//display cards

var displayCards = function() {
    if(allQuestions[0]){
        for(var i = 0; i< 1; i++){
            shuffling(allQuestions[i].answerCards);
            for(var j = 1; j < 6; j++){
                var cardEl = document.getElementById('card'+j);
                cardEl.src = allQuestions[i].answerCards[j-1].filePath;
            }
        }
    }
}
displayCards();

function shuffling( array ){
    var count = array.length,
        randomnumber,
        temp;
    while( count ){
     randomnumber = Math.random() * count-- | 0;
     temp = array[count];
     array[count] = array[randomnumber];
     array[randomnumber] = temp
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Hai's todo
    //protyope shuffle check for first 5 splice ???
    //set correct answer func 
//while not in first 5 call shuffle???
// make sure the correct answer is displayed EVERYTIME.
// if answer not correct do the animation buzzz if correct rotate the cards up.!!!!!!
// animation card sending out
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Form Handler for username

// Question and Answer Constructor--------------------------------
//  needs to create question in the question-field id
//  selects the answer card and 4 incorrect cards
//  assigns cards to 'card1' through 'card5' ids
//  contains explanations of answers to be displayed after answering

// localStorage---------------------------------------------------
//  storage for highscores, usernames, which question the user is on, user's current score, # of incorrect answers
// link to form for username, stingify
var questionData = JSON.stringify(allQuestions);
localStorage.setItem('questionData', questionData);


// Event Listener and Click Handler-------------------------------
//  username form, clicking on cards

// Answer-checking Logic-------------------------------------------
//  if function to check if answer is correct
//  while loop to track # of incorrect answers, game over if too many

// DOM Manipulation------------------------------------------------
//  display username
//  display highscores
//  display explanation after answering question
// displayDeck();








/////////////////////////////////////////////////
// Animation moves card to the other deck
function cardmove (card, x, y){
    var cardEl = document.getElementById(card);
    cardEl.style.transform = 'perspective( 1000px ) rotateY( 0deg )'
    cardEl.style.transform = 'translate('+x+', '+y+') rotate(720deg)';
    if(card === 'card1'){
        cardEl.setAttribute('onclick',"moveBack('card1')");
    }else if(card === 'card2'){
        cardEl.setAttribute('onclick',"moveBack('card2')");
    }else if(card === 'card3'){
        cardEl.setAttribute('onclick',"moveBack('card3')");
    }else if(card === 'card4'){
        cardEl.setAttribute('onclick',"moveBack('card4')");
    }else if(card === 'card5'){
        cardEl.setAttribute('onclick',"moveBack('card5')");
    }
}
// find a way to move card back if its not the right answer. 
// function moveBack(card){
//     var cardUl = document.getElementById(card)
//     cardUl.style.transform = 'perspective( 1000px ) rotateY( 0deg )'
//     cardUl.style.transform = 'translate(0px, 0px;) rotate(-1440deg)';
// }

// function answerCheck(){
//     while(Question.allQuestions[0] && allCards[2]){
//         cardmove(card, x, y)
//     }
// }????????????
/////////////////////////////////////////////////

//======== Nav-Bar JS =======//

function toggleSideBar(ref) {
    ref.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');

};

//======== End Nav Bar JS =====//
