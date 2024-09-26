const { Physics } = require("phaser");

// init.js
const config = {
    title: "Hola Phaser",
    type: Phaser.AUTO,
    parent: "contenedor",
    width: 800,
    height: 600,
    scene: {
        preload,
        create,
        update,
    }, 
    Physics:{
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false

        }   
    }
}

var game = new Phaser.Game(config);

function preload (){
    this.load.setBaseUrl("http://labs.phaser.io");
    this.load.image("fondo", "assets/skies/nebula.jpg");
    this.load.image("planeta", "assets/sprites/phaser1.png");
    this.load.image('particula','assets/particles/yellow.png')    
};
function create (){
    console.log(this.add.image(400, 300, "fondo"));
    particulas = this.add.particles('particula');
        var emitter = particulas.createEmitter({
            speed: 100,
            scale: {start:1, end:0},
            blendMode: 'ADD',
        });
    Mundo = this.physics.add.image(400, 250, 'planeta');
    console.log(Mundo);
    Mundo.setAlpha(0.6); //class image
    Mundo.setAngle(45); //class image
    Mundo.setScale(0.7); //class image
    Mundo.setFlipx(true); //class image
    Mundo.setOrigin(0.5, 0.5); //columna - fila  //class image
    Mundo.setCollideWorldBounds(true); // class physics
    Mundo.setBounce(1.5); // class physics
    Mundo.setVelocityX(300, 400); // class physics
    emitter.starFollow(Mundo); // class physics
};
function update(time, delta){
    Mundo.angle+= 5;


}; 
