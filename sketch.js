var castle, castleImage;
var wizard, wizardImage;
var goblin, goblinGroup, goblinImage;
var ogre, ogreGroup, ogreImage;
var dragon, dragonGroup, dragonImage;
var rand;



function preload(){
  wizardImage = loadImage("wizard2.png");

  castleImage = loadImage("castle.jpg");

  goblinImage = loadImage("goblin.png");

  ogreImage = loadImage("ogre6.png");

  dragonImage = loadImage("dragon2.png")
}

function setup(){

  createCanvas(windowWidth, windowHeight);

  /*castle = createSprite(windowWidth/2+40, windowHeight/2, 20, 20);
  castle.addImage(castleImage);
  castle.scale = 3*/

  wizard = createSprite(windowWidth/2+300, windowHeight/2+300, 20, 20);
  wizard.addImage(wizardImage);
  wizard.scale = 0.8;

  ogreGroup = createGroup();

  goblinGroup = createGroup();

  dragonGroup = createGroup();


}

function draw(){
  background(castleImage)




  if(keyDown("UP_ARROW")){
    wizard.y = wizard.y - 20;
  }

  if(keyDown("DOWN_ARROW")){
    wizard.y = wizard.y + 20;
  }

  rand = Math.round(random(1, 2));

  switch(rand){
    case 1: spawnDragons();
            break;
    case 2: spawnOgres();
            break;
    default: break;
  }
  


  drawSprites();

  //spawnOgres();

  //spawnDragons();

  spawnGoblins()

  fill("black")
  textSize(25)
  text("Use Arrow Keys to move up and down", windowWidth/2, windowHeight/2-500 )
}

function spawnOgres(){
  if(frameCount%110 === 0 ){
    ogre = createSprite(0, Math.round(random(height-100, height-700)), 20, 20)
    ogre.addImage(ogreImage);
    ogre.scale = 0.15;
    ogre.velocityX= Math.round(random(5, 15));

    ogre.lifetime = width/ogre.velocityX;

    ogreGroup.add(ogre);


  }
}

function spawnDragons(){
  if(frameCount%120 === 0 ){
    dragon = createSprite(0, Math.round(random(height-600, height-1000)), 20, 20)
    dragon.addImage(dragonImage);
    dragon.scale = 0.4;
    dragon.velocityX= Math.round(random(7, 15));

    dragon.lifetime = width/dragon.velocityX;

    dragonGroup.add(dragon);


  }
}

function spawnGoblins(){
  if(frameCount%75 === 0){
    goblin = createSprite(0 , Math.round(random(height-100, height-500, 20, 20)))
    goblin.addImage(goblinImage);
    goblin.scale = 0.15;
    goblin.velocityX = Math.round(random(3, 10));

    goblin.lifetime = width/goblin.velocityX;

    goblinGroup.add(goblin);
  }
}