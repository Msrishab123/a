var canvas, edges;
var music;
var Block
var BlueB, GreenB, RedB, YellowB;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
canvas = createCanvas(800,600);

BlueB = createSprite(100,570,180,25);
BlueB.shapeColor = "blue";
GreenB = createSprite(300,570,180,25);
GreenB.shapeColor = "green";
RedB = createSprite(500,570,180,25);
RedB.shapeColor = "red";
YellowB = createSprite(700,570,180,25);
YellowB.shapeColor = "yellow";
//create box sprite and give velocity

Block = createSprite(Math.round(random(20,750)), 100,50,50);
Block.shapeColor = "white";
Block.velocityX = -15;
Block.velocityY = 13;

}
function draw() {
background(rgb(169,169,169));
    
if(BlueB.isTouching(Block)&& Block.bounceOff(BlueB)){
Block.shapeColor = "blue";    
music.play()
}

if(GreenB.isTouching(Block)&& Block.bounceOff(GreenB)){
Block.shapeColor = "green"    
Block.velocityX = 0;
Block.velocityY = 0;
music.stop()
}

if(RedB.isTouching(Block)&& Block.bounceOff(RedB)){
Block.shapeColor = "red"    
music.play()
}

if(YellowB.isTouching(Block)&& Block.bounceOff(YellowB)){
Block.shapeColor = "yellow"    
Block.velocityX = 0;
Block.velocityY = 0;
music.stop()
}

edges = createEdgeSprites();
Block.bounceOff(edges);
drawSprites();
    //add condition to check if box touching surface and make it box
}
