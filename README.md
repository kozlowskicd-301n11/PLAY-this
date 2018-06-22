# Project Plan

### Team Members
Chris, Hai, and J

### Project Name
Coding Card Game

### Concept
A card quiz game for beginner coders.  A question or uncomplete function will appear on screen, and cards will be dealt in front of the player.  The player chooses one card, the card will flip and it will show correct/incorrect.  When the question is answered, the cards will clear out, a new question will appear, and new cards will deal out.

-------------------------------------------------

TODO -
Think up name -- card fellows    Coder Cards    

Develop questions

wireframe html

Build constructor for questions
    object array for answers sorted by html, css, and js

logic for checking answer

event handler / event listener

DOM manipulation for listing score

track incorrect answers with color changes  green/orange/red w/ effects

About me page

-----------------------------------------------------

var allCards = [];
Card {
    this.index = index; // index number to track all cards
    this.language = language; // HTML, CSS, or JS
    this.content = content; //content on card face
    this.img = img; //location of img file
}

