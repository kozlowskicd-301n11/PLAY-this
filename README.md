# PLAY.this [i]

PLAY.this [i] is a card quiz game for a beginner coding developer.  A question or incomplete function will appear on screen, and cards will be given to the player.  The player selects one card, and the card will flip to show if it is correct or incorrect.  Upon answering the question correctly, the cards will clear out, a new question will appear, and new cards will deal out.

## Getting Started

PLAY.this [i] will consist of three HTML and have human user interaction to select cards to answer questions. Furthermore, the other pages include a welcome HTML and about_us HTML. A general scaffold will be built on GitHub to have all team members utilize and work from the standard project template.

### Prerequisites

The developers will utilize Visual Studio Code (VS Code) to create the necessary code for the project. Additionally, VS Code will integrate with GitHub to manage the project successfully. 

Adobe Photoshop CC is required to develop all the card images and template for the questions. 

GIMP will provide quick service to the developer for adding text to the white side of the card and avoid time wasted with an online image manipulation app. 

### Installing

The developer will create a wireframe of the game to assist with inserting images that will transform to a tally if correct. 
The developer will create all artwork for the images and provide up to 5 possible answers 
The developer will develop constructors to recall the images of possible solutions (Answer). 
The developer will incorporate a mobile solution to broaden the user base and attract unique users. 
The developer will create an authentic card game that displays the functions of a physical card game. 

## Running the tests

The developer will encompass a cornucopia of tests to obtain any issues with usability. Furthermore, the developer will scale this project if there is time allocated to include additional functionality. 

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc








# Project Plan

### Team Members
Chris, Hai, and J

### Project Name
PLAY.this [i]

### Concept
Develop a card quiz game for a beginner coding developer.  A question or incomplete function will appear on screen, and cards will be given to the player.  The player selects one card, and the card will flip to show if it is correct or incorrect.  Upon answering the question correctly, the cards will clear out, a new question will appear, and new cards will deal out.

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

