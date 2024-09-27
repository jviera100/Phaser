const { Physics, GameObjects } = require("phaser");

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
                // gravity: {y: 500}, // se comento por reemplazo metodo rebote linea 97
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
    this.load.audio('sonido', '../Assets/audio.mp3')
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
    raqueta = this.physics.add.image(400, 520, 'raqueta').setInteractive().setImmovable();
    const eventos = Phaser.Input.Events;
    console.log(eventos);
    this.input.on('pointermove', function(pointer){
        raqueta.x= pointer.x;
    }) 
    this.input.on(eventos.GAMEOBJECT_DOWN,(pointer, GameObject)=>{
        gameObject.setTint(0x00ff00);        
    })
    const KeyCodes = Phaser.Input.Keyboard.KeyCodes;
    console.log(KeyCodes);
    teclaJ = this.input.Keyboard-addkey(KeyCodes);

    // teclaJ.on('down', ()=>{
    //     console.log('Soy la tecla J');
    // }); 
    const cursor = this.input.keyboard.createCursorKeys();
    cursor.up.on('down',()=>{
        Mundo.setScale(0.3);
    });
    cursor.down.on('down',()=>{
        Mundo.setScale(1);
    });
    this.physics.add.collider(raqueta,Mundo,rebote,null,this);
    function rebote(){ // se comento metodo gravedad linea 21
        Mundo.setBounce(1);
        efecto.play();
    };
    this.physics.worl.setBoundsCollision(true, true, true, false);
    const efecto = this.sound.add('sonido');
};
function update(time, delta){
    Mundo.angle+= 5;
    if (teclaJ.isDown){
        console.log('la tecla J esta presionada');
    }else if (teclaJ.isUp)
        console.log('la tecla J no esta presionada')
}; 



