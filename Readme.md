# Phaser Game Project
*Introduction*
<br><br>
Welcome to the Phaser Game Project! This project is built using Phaser, a fast and versatile framework for creating HTML5 games. Phaser is highly modular and allows developers to create rich and interactive experiences that can run in the browser.

In this repository, you'll find the code and assets for our game, along with instructions on how to run, modify, and extend the project.

*Features*
<br><br>
2D game engine: Uses Phaser's robust rendering capabilities for smooth performance.
Physics engine: Leveraging Arcade Physics for collision detection and object interactions.
Asset management: Built-in support for loading images, sounds, spritesheets, and other game assets.
Input handling: Keyboard, mouse, and touch input supported.
Scene management: Easily create and switch between different game scenes.
*Prerequisites*
To run this project locally, you'll need:

Node.js (version 12 or higher)
A basic understanding of JavaScript, HTML, and CSS
*Installation*
<br><br>
Clone the repository to your local machine:

bash
Copiar código
git clone https://github.com/jviera100/Phaser
cd phaser-game
Install the required dependencies:

bash
Copiar código
npm install
Start the local development server:

bash
Copiar código
npm start
Open your browser and navigate to http://localhost:8080 to view the game.


*How to Play*
<br><br>
Use the arrow keys to move your character.
Press spacebar to interact with objects.
Avoid obstacles and enemies to reach the goal.
Customizing the Game
Adding New Assets
Place your new assets (images, audio, etc.) into the assets/ directory.

In your scene or script file, load the asset using Phaser's this.load method:

javascript
Copiar código
this.load.image('player', 'assets/player.png');
Use the asset in your game logic:

javascript
Copiar código
this.add.image(400, 300, 'player');
Creating a New Scene
Create a new file in the src/scenes/ directory, e.g., NewScene.js.

Extend the Phaser.Scene class and define the preload, create, and update methods:

javascript
Copiar código
class NewScene extends Phaser.Scene {
    constructor() {
        super({ key: 'NewScene' });
    }

    preload() {
        // Load assets
    }

    create() {
        // Initialize game objects
    }

    update() {
        // Game logic here
    }
}

export default NewScene;
Import and add the scene to the game's configuration:

javascript
Copiar código
import NewScene from './scenes/NewScene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [NewScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};

const game = new Phaser.Game(config);
Built With
Phaser 3 - The game framework used
Webpack - Module bundler
Node.js - JavaScript runtime
Contributing
Contributions are welcome! If you'd like to help improve the game or add new features, feel free to open a pull request or submit issues.

Fork the project
Create your feature branch: git checkout -b feature/new-feature
Commit your changes: git commit -m 'Add new feature'
Push to the branch: git push origin feature/new-feature
Open a pull request
License
This project is licensed under the MIT License - see the LICENSE file for details.

*Acknowledgments*
<br><br><hr><hr>
The Phaser community for continuous support and tutorials.
Open source assets from [Kenney.nl.](https://kenney.nl/)
https://developers.facebook.com/docs/games/build/instant-games/
https://labs.phaser.io/
https://photonstorm.github.io/phaser3-docs/index.html

