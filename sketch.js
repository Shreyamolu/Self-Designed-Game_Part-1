var form;
var database;
var patient;
var gameState = 0;  

function setup(){
    form = new Form();
    patient = new Patient();
    game = new Game();
    database = firebase.database();
}

function draw(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    form.display();
    game.getState();
    if(gameState == 1){
        game.play();
    }
}