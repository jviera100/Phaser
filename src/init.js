const { Physics } = require("phaser");

// init.js
const config = {
    title: "Hola Phaser",
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
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
    
}

var game = new Phaser.Game(config);

function preload (){
    this.load.setBaseUrl("http://labs.phaser.io");
    this.load.image("fondo", "assets/skies/nebula.jpg");
    this.load.image("planeta", "assets/sprites/phaser1.png");
    this.load.image('particula','assets/particles/yellow.png');
    this.Load.image('raqueta', '../Assets/raqueta.png');
    this.load.image('sonido', '../Assets/audio.mp3');
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
    Mundo.setAlpha(0.6); //class image transparencia
    Mundo.setAngle(45); //class image
    Mundo.setScale(0.7); //class image
    Mundo.setFlipx(true); //class image
    Mundo.setOrigin(0.5, 0.5); //columna - fila  //class image
    Mundo.setCollideWorldBounds(true); // class physics gravedad
    Mundo.setBounce(1.5); // class physics
    Mundo.setVelocityX(300, 400); // class physics
    emitter.starFollow(Mundo); // class physics
    const texto = this.add.text(300, 550, 'Hola Mundo',{
        color: 'green',
        fontSize: '20',
        backgroundColor: 'white',
        padding: {
            top: 15,
            bottom: 15,
            left: 15,
            right: 15,
        },
        align: 'center',
    });  
    texto.alpha= 0.5; 
};
function update(time, delta){
    Mundo.angle+= 5;


}; 
