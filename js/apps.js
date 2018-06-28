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
    new Question(1,'img/q-1.png', 'HTML');
    new Question(2,'img/q-2.png', 'CSS');
    new Question(3,'img/q-3.png', 'JS');
    new Question(4,'img/q-4.png', 'HTML');
    new Question(5,'img/q-5.png', 'CSS');
    new Question(6,'img/q-6.png', 'JS');
    new Question(7,'img/q-7.png', 'HTML');
    new Question(8,'img/q-8.png', 'CSS');
    new Question(9,'img/q-9.png', 'JS');
    new Question(10,'img/q-10.png', 'HTML');
    new Question(11,'img/q-11.png', 'CSS');
    new Question(12,'img/q-12.png', 'JS');
    new Question(13,'img/q-13.png', 'HTML');
    new Question(14,'img/q-14.png', 'CSS');
    new Question(15,'img/q-15.png', 'JS');


}
// genQuestionCard();
// debugger;
// Generate answer cards and push them into the answerCards array
var genAnswerCards = function(){
    for(var i =1; i < allQuestions.length +1; i++){
        for(var j =1; j<9 ; j++){
            new Card(i, 'img/a-'+i+'-'+j+'.png', 'JS');
        }
    }
}
// genAnswerCards(); //testing and it work! need to make a loop or stick this somnewhere.

var displayQuestion = function(Qnum){
    var questEl = document.getElementById('questions-field');
    questEl.src = "img/q-"+(Qnum+1)+".png";
}
// allQuestions[0].displayQuestion();

// Question.prototype.displayDeck = function (){// displaying the deck card color accordingly to each question
//     var deckcolor = document.getElementById('card-deck');
//     if(this.language === 'HTMl'){
//         deckcolor.src= 'img/orangeCard.png'
//     }else if( this.language === 'CSS'){
//         deckcolor.src = 'img/blueCard.png'
//     }else if(this.language === 'JS'){
//         deckcolor.src = 'img/greenCard.png'
//     }
// }

function displayDeck(){ // displaying the deck card color accordingly
    for(var i = 0; i < allQuestions.length; i++){
        var deckcolor = document.getElementById('card-deck');
        if (allQuestions[i].language === 'HTML'){
            deckcolor.src = "img/orangeCard.png";
        } else if(allQuestions[i].language === 'CSS'){
            deckcolor.src = "img/blueCard.png";
        }else if(allQuestions[i].language === 'JS'){
            deckcolor.src = "img/greenCard.png";
        }
        return;
    }
}
// allQuestions[0].displayDeck();

//display cards
// debugger
// var displayCards = function() {
//     for(var k = 0; k < allQuestions.length; k++){
//         w++hile(allQuestions[k]){
//             // for(var i = 0; i< 15; i++){
//             shuffling(allQuestions[k].answerCards);
//             if(allQuestions[k].answerCards.findIndex(i => i.filePath === 'img/a-'+(k+1)+'-1.png') > 4){//look here
//                 shuffling(allQuestions[k].answerCards);
//                 for(var j = 1; j < 6; j++){
//                     var cardEl = document.getElementById('card'+j);
//                     cardEl.src = allQuestions[k].answerCards[j-1].filePath;
//                 }
//             }
//             for(var j = 1; j < 6; j++){
//                 var cardEl = document.getElementById('card'+j);
//                 cardEl.src = allQuestions[k].answerCards[j-1].filePath;
//             }
//             // }
//         }   
//     }
// }
// displayCards();

var displayCards = function(Qnum){ // from 0-14
    shuffling(allQuestions[Qnum].answerCards);
    for(var i = 1; i< 6; i++){
        var cardEl = document.getElementById('card'+i);
        cardEl.src = allQuestions[Qnum].answerCards[i-1].filePath;
    }
    while(allQuestions[Qnum].answerCards.findIndex(i => i.filePath === 'img/a-'+(Qnum+1)+'-1.png') > 4){
        shuffling(allQuestions[Qnum].answerCards);
        for(var i = 1; i< 6; i++){
            var cardEl = document.getElementById('card'+i);
            cardEl.src = allQuestions[Qnum].answerCards[i-1].filePath;
    }
}
}


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
// link to form for username, stingify
// localStorage.setItem('questionData', questionData);


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
// var correctCardPosition = allQuestions[0].answerCards.findIndex(i => i.filePath === 'img/a-1-1.png');

// function checkAnswer(card){
//     var cardEl = document.getElementById(card);

//     for (var i = 1; i < 6; i++ ){
//         // var cardEl = document.getElementById('card'+i);
//         // var correctCardPosition = allQuestions[i-1].answerCards.findIndex(x => x.filePath === 'img/a-'+i+'-1.png');
//         if(correctCardPosition == i-1 && cardEl.id === 'card'+i){
//             if(cardEl.id === 'card1'){
    //                 cardmove(card, '773px', '-324px');
//             }else if(cardEl.id === 'card2'){
//                 cardmove(card, '576px', '-324px');
//             }else if(cardEl.id === 'card3'){
//                 cardmove(card, '382px', '-324px');
//             }else if(cardEl.id === 'card4'){
//                 cardmove(card, '188px', '-324px');
//             }else if(cardEl.id === 'card5'){
//                 cardmove(card, '-9px', '-324px');
//             }
//         } else if(correctCardPosition == i-1 && cardEl.id !== 'card'+i){
    //             shake(card);
//         }
//     }

// }
function checkAnswer(card){
    var cardEl = document.getElementById(card);
    var correctCardPosition;
    for(var k = 0; k < allQuestions.length; k++){
            correctCardPosition = allQuestions[k].answerCards.findIndex(x => x.filePath === 'img/a-'+(k)+'-1.png');
            for (var i = 0; i < 5; i++ ){
                // var cardEl = document.getElementById('card'+i);
                if(correctCardPosition === i && cardEl.id === card) {
                    if(cardEl.id === 'card1'){
                        cardmove(card, '736px', '-322px');
                    }else if(cardEl.id === 'card2'){
                        cardmove(card, '539px', '-322px');
                    }else if(cardEl.id === 'card3'){
                        cardmove(card, '345px', '-322px');
                    }else if(cardEl.id === 'card4'){
                        cardmove(card, '151px', '-322px');
                    }else if(cardEl.id === 'card5'){
                        cardmove(card, '-46px', '-322px');
                    }
                } else if(correctCardPosition == i-1 && cardEl.id !== 'card'+i){
                    shake(card);
                }

                
    }return;
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
// need make button, event listener, event handler
// genQuestionCard(); //done
// genAnswerCards();
// function renderAll(Qnum){
    //     displayQuestion(Qnum); //done
    //     displayCards(Qnum);
    //     // for(var i = 0; i < 15; i++){
        //     displayDeck();
        //     // }
        // }
        // // renderAll(0);
        // debugger;
        // var buttonFunc = function() {
            //     if (document.getElementById('questions-field').src !== '') {
                //         renderAll(i);
                //         i++;
                //     }
                //     else {
                    //         var i = 1;
                    //         renderAll(0);
                    // }}
var currentQuestion = 0;
function renderAll(){
    if (!localStorage.currentQ) {
        localStorage.setItem('currentQ', '1');
        genQuestionCard();
        genAnswerCards();
        displayQuestion(currentQuestion);
        displayCards(0);
        displayDeck();
    }
    else {
        var currentQuestion = parseInt(localStorage.getItem('currentQ'));
        currentQuestion++;
        displayQuestion(currentQuestion);
        displayCards(currentQuestion);
        displayDeck();
    }
}
var questionData;
renderAll();

var buttonFunc = function() {
    currentQuesiton++;
    var Qnum = localStorage.getItem('currentQ');
    Qnum = parseInt(Qnum) + 1;
    localStorage.setItem('currentQ', Qnum);

    displayQuestion(currentQuestion);
    displayCards(currentQuestion);
    displayDeck();
}

document.getElementById("deck-button").addEventListener("click", buttonFunc);
