var asteriod,asteriodImage,spaceShip,spaceShipImage;
var spaceImage;
var gameState="PLAY";
var PLAY=1;
var END=0;
function preload(){
spaceImage= loadImage("space.png");
spaceShipImage = loadImage("spaceship.png");
asteriodImage = loadImage("asteriod.png");
}

function setup() {
 createCanvas(650,500);
 score=0;
 spaceShip = createSprite(50,250,20,20);
 spaceShip.addImage(spaceShipImage);
 spaceShip.scale=0.2;
 AsteriodGroup =createGroup();
}

function draw() {
   background("black");
  if(gameState==="PLAY"){
    score = score + Math.round(getFrameRate()/60);
    spaceShip.x=mouseX;
    spaceShip.y=mouseY;
    SpawnAsteriods();
    if(AsteriodGroup.isTouching(spaceShip)){
      gameState=END;
      AsteriodGroup.destroyEach();
      score=0;
      
     
     }
  }
  text("Score : "+ score,300,30);
 drawSprites();
}
function SpawnAsteriods(){
  if(frameCount%100===0){
    asteriod=createSprite(700,250,20,20);
    asteriod.addImage(asteriodImage);
    asteriod.scale=0.15;
    asteriod.velocityX=-10;
    asteriod.y=Math.round(random(100,400));
    asteriod.lifetime=1000;
    AsteriodGroup.add(asteriod);
    
    
  }
}