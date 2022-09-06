// create a new scene
let gameScene = new Phaser.Scene('Game');

// load assets
gameScene.preload = function(){
    // load images
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('enemy', 'assets/dragon.png');
};

//called once after the preload ends
gameScene.create = function(){
    //create bg sprite
    let bg = this.add.sprite(0, 0, 'background');

    //change the origin to top left
    //bg.setOrigin(0,0);

    // place sprite in the center
    bg.setPosition(640/2, 360/2);

    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    //create the player
    this.player = this.add.sprite(70, 180, 'player');

    // reduce width 50% but double the height
    this.player.setScale(0.5);

    //create the enemy1
    this.enemy1 = this.add.sprite(250, 180, 'enemy');

    this.enemy1.scaleX = 2;
    this.enemy1.scaleY = 2;

    //create a second enemy (enemy2)
    this.enemy2 = this.add.sprite(450, 180, 'enemy');

    //fliping
    this.enemy1.flipX = true;
    this.enemy1.flipY = false;

    //this is called up to 60 times per second
    gameScene.update = function(){
        this.enemy1.x += 1;

        this.enemy2.y -= 1;
       
        
       

        if(this.player.scaleX < 2) {
            //make the player grow
            this.player.scaleX += 0.01;
            this.player.scaleY += 0.01;
        }
       
    };

    


    console.log(gameW, gameH);

    console.log(bg);
};
// set the configuration of the game
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
};
// create a new game, pass the configuration
let game = new Phaser.Game(config);