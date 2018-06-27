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
////////////////////////////////////////////////////////////////////
var allQuestions = [];
// Generate card into Question.answerCards []
var Card = function(Aindex, filePath, language) {
    this.Aindex = Aindex; // index number to track all cards
    this.filePath = filePath;
    this.language = language; // html, js, css
    allQuestions[this.Aindex-1].answerCards.push(this); // Testing for the first value of array [0] will end up put in a loop or so to push all
}

// Generating Question card
function genQuestionCard(){
    new Question(1,'img/js-q-1.png', 'JS');

}
genQuestionCard();
// Generate answer cards and push them into the answerCards array
var genAnswerCards = function(){
    for(var i =1; i < allQuestions.length +1; i++){
        for(var j =1; j<9 ; j++){
            new Card(i, 'img/js-a-'+i+'-'+j+'.png', 'JS');
        }
    }
}
genAnswerCards(); //testing and it work! need to make a loop or stick this somnewhere.

Question.prototype.displayQuestion = function(){
    var questEl = document.getElementById('questions-field');
    questEl.src = this.filePath
}
allQuestions[0].displayQuestion();

Question.prototype.displayDeck = function (){// displaying the deck card color accordingly to each question
    var deckcolor = document.getElementById('card-deck');
    if(this.language === 'HTMl'){
        deckcolor.src= 'img/orangeCard.png'
    }else if( this.language === 'CSS'){
        deckcolor.src = 'img/blueCard.png'
    }else if(this.language === 'JS'){
        deckcolor.src = 'img/greenCard.png'
    }
}
allQuestions[0].displayDeck();

//display cards
var displayCards = function() {
    if(allQuestions[0]){
        for(var i = 0; i< allQuestions.length; i++){
            shuffling(allQuestions[i].answerCards);
            while(allQuestions[i].answerCards.findIndex(i => i.filePath === 'img/js-a-1-1.png') > 4){//look here
                shuffling(allQuestions[i].answerCards);
                for(var j = 1; j < 6; j++){
                    var cardEl = document.getElementById('card'+j);
                    cardEl.src = allQuestions[i].answerCards[j-1].filePath;
                    // cardEl.style.backgroundImage = "url('img/greenCard.png')";
                    // cardEl.style.opacity = 0;
                    // cardEl.style.animation = 'fade-in-right ease 1s forwards'
                }
            }
            for(var j = 1; j < 6; j++){
                var cardEl = document.getElementById('card'+j);
                cardEl.src = allQuestions[i].answerCards[j-1].filePath;
                // cardEl.style.backgroundImage = "url('img/greenCard.png')";
                // cardEl.style.opacity = 0;
                // cardEl.style.animation = 'fade-in-right ease 1s forwards'
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
    //set correct answer func ???
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

// Event Listener and Click Handler-------------------------------
//  username form, clicking on cards

// Answer-checking Logic-------------------------------------------
//  if function to check if answer is correct
//  while loop to track # of incorrect answers, game over if too many

// DOM Manipulation------------------------------------------------
//  display username
//  display highscores
//  display explanation after answering question
// Animation moves card to the other deck

//======== Nav-Bar JS =======//

function toggleSideBar(ref) {
    ref.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');
    
};

//======== End Nav Bar JS =====//
                                
//////////////////////////////////////////////////////////////////////////////////////////////////
function cardmove (card, x, y){
    var cardEl = document.getElementById(card);
    cardEl.style.transition = 'transform 0.5s ease-in-out 0.1s';
    cardEl.style.transform = 'perspective( 1000px ) rotateY( 0deg )';
    cardEl.style.transform = 'translate('+x+', '+y+') rotate(720deg)';

}

/////////////////////////////////////////////////
var correctCardPosition = allQuestions[0].answerCards.findIndex(i => i.filePath === 'img/js-a-1-1.png');

function checkAnswer(card){
    var cardEl = document.getElementById(card);

    for (var i = 1; i < 6; i++ ){
        // var cardEl = document.getElementById('card'+i);
        if(correctCardPosition === i-1 && cardEl.id === 'card'+i){
            if(cardEl.id === 'card1'){
                cardmove(card, '773px', '-324px');
            }else if(cardEl.id === 'card2'){
                cardmove(card, '576px', '-324px');
            }else if(cardEl.id === 'card3'){
                cardmove(card, '382px', '-324px');
            }else if(cardEl.id === 'card4'){
                cardmove(card, '188px', '-324px');
            }else if(cardEl.id === 'card5'){
                cardmove(card, '-9px', '-324px');
            }
        } else if(correctCardPosition === i-1 && cardEl.id !== 'card'+i){
            shake(card);
        }
    }

}

function shake(card){
    for (var i = 1; i < 6; i++ ){
        var cardEl = document.getElementById(card);
        cardEl.style.animation = 'shake 0.5s';
        cardEl.style.animationIterationCount = '2s';
    }
}






//////////////////////////////////////////////////////////////////////////////////////////////////