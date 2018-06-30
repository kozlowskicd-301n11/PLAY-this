'use strict'
////////////////////////////////////////////////
// debugger;
var allQuestions = [];
var currentQuestion = 0;
var getCurrentQ = localStorage.getItem('currentQuestion');
currentQuestion = JSON.parse(getCurrentQ);
if(!localStorage.currentQuestion){
    var currentQuestion = 0;
}

var tallyPoint = document.getElementById('score');
tallyPoint.textContent = 'Current Score: '+currentQuestion*100;

var incorrectTally = 0;
var getTally = localStorage.getItem('incorrectTally');
var incorrectTally = JSON.parse(getTally);

var Question = function(Qindex, filePath, language){ // should add a parameter if needed
    this.Qindex = Qindex;
    this.filePath = filePath;
    this.language = language;
    this.answerCards = []; // Probably need to clear before pushing a new Answer's card so it doesnt stack up!
    allQuestions.push(this);
}
// Question.answerCards = [];
////////////////////////////////////////////////////////////////////
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
var displayQuestion = function(Qnum){
    var questEl = document.getElementById('questions-field');
    questEl.src = "img/q-"+(Qnum+1)+".png";
}
function displayDeck (){ 
    var deckcolor = document.getElementById('card-deck');
    if(currentQuestion === 0 || currentQuestion === 3 || currentQuestion === 6 || currentQuestion === 9 || currentQuestion === 12){
        deckcolor.src = "img/orangeCard.png";
    }else if(currentQuestion === 1 || currentQuestion === 4 || currentQuestion === 7 || currentQuestion === 10 || currentQuestion === 13){
        deckcolor.src = "img/blueCard.png";
    }else if(currentQuestion === 2 || currentQuestion === 5 || currentQuestion === 8 || currentQuestion === 11 || currentQuestion === 14){
        deckcolor.src = "img/greenCard.png";
    }
};

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


// Form Handler for username

// Question and Answer Constructor--------------------------------
//  needs to create question in the question-field id
//  selects the answer card and 4 incorrect cards
//  assigns cards to 'card1' through 'card5' ids
//  contains explanations of answers to be displayed after answering

// localStorage---------------------------------------------------
//  storage for highscores, usernames, which question the user is on, user's current score, # of incorrect answers
// link to form for username, stingify

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
//////////////////////////////////////////////////////////////////////////////////////////////////
function checkAnswer(card){
    var cardEl = document.getElementById(card);
    ////
    var instructP = document.getElementById('insP');
    ////
    for(var k = currentQuestion; k < (1+currentQuestion); k++){
        var correctCardPosition = allQuestions[k].answerCards.findIndex(x => x.filePath === 'img/a-'+(k+1)+'-1.png');
        for (var i = 1; i < 6; i++ ){
            if((correctCardPosition+1) === i && cardEl.id == 'card'+i){
                console.log(cardEl.id);
                if(cardEl.id === 'card1'){// possibly keeping tally here!
                    cardmove(card, '752px', '-353px');
                    var setCurrentQ = localStorage.setItem('currentQuestion' , JSON.stringify(currentQuestion+1));
                    instructP.textContent = "~~~~~~~~You are correct!~~~~~~~ Click on the deck to continue!";
                    return(currentQuestion++);
                }else if(cardEl.id === 'card2'){
                    cardmove(card, '557px', '-353px');
                    var setCurrentQ = localStorage.setItem('currentQuestion' , JSON.stringify(currentQuestion+1));
                    instructP.textContent = "~~~~~~~~You are correct!~~~~~~~ Click on the deck to continue!";
                    return(currentQuestion++);
                }else if(cardEl.id === 'card3'){
                    cardmove(card, '370px', '-353px');
                    var setCurrentQ = localStorage.setItem('currentQuestion' , JSON.stringify(currentQuestion+1));
                    instructP.textContent = "~~~~~~~~You are correct!~~~~~~~ Click on the deck to continue!";
                    return(currentQuestion++);
                }else if(cardEl.id === 'card4'){
                    cardmove(card, '182px', '-353px');
                    var setCurrentQ = localStorage.setItem('currentQuestion' , JSON.stringify(currentQuestion+1));
                    instructP.textContent = "~~~~~~~~You are correct!~~~~~~~ Click on the deck to continue!";
                    return(currentQuestion++);
                }else if(cardEl.id === 'card5'){
                    cardmove(card, '-12px', '-353px');
                    var setCurrentQ = localStorage.setItem('currentQuestion' , JSON.stringify(currentQuestion+1));
                    instructP.textContent = "~~~~~~~~You are correct!~~~~~~~ Click on the deck to continue!";
                    return(currentQuestion++);
                }
            }else if(correctCardPosition+1 === i && cardEl.id !== 'card'+i){
                shake(card);
                var setTally = localStorage.setItem('incorrectTally' , JSON.stringify(incorrectTally+1));
               ///////////////
               var wrong1 = document.getElementById('wrong1');
               wrong1.src = "img/red-x.png";
               if(incorrectTally === 1){
                    var wrong2 = document.getElementById('wrong2');
                    wrong2.src = "img/red-x.png";
               }
               ///////////////
               if(incorrectTally === 2){
                    var wrong3 = document.getElementById('wrong3');
                    wrong3.src = "img/red-x.png";
                    alert('!!!!!!!!!!!!!!!!!GAME OVER!!!!!!!!!!!!!!!!!');
                   localStorage.removeItem('currentQuestion');
                   localStorage.removeItem('incorrectTally');
                   location.reload();
                }

                return(incorrectTally++);
            }
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
if(currentQuestion === 15){
    window.location.href = "about.html";
}

var getUser = localStorage.getItem('userName');

var displayName = document.getElementById('form-name');
displayName.textContent = JSON.parse(getUser);

if(incorrectTally === 1){
    var wrong1 = document.getElementById('wrong1');
    wrong1.src = "img/red-x.png";
}else if(incorrectTally === 2){
    var wrong1 = document.getElementById('wrong1');
    wrong1.src = "img/red-x.png";
    var wrong2 = document.getElementById('wrong2');
    wrong2.src = "img/red-x.png";
}



//////////////////////////////////////////////////////////////////////////////////////////////////
function renderAll(){
    genQuestionCard();
    genAnswerCards();
    displayQuestion(currentQuestion);
    displayCards(currentQuestion);
    displayDeck();

}
renderAll();
var buttonFunc = function() {
    location.reload();
    displayQuestion(currentQuestion);
    displayCards(currentQuestion);
    displayDeck();

}
document.getElementById("deck-button").addEventListener("click", buttonFunc);
// debugger
