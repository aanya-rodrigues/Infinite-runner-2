var blue_balloon;
var green_balloon;
var pink_balloon;
var red_balloon;
var groundImage;
var ground;
var bow;
var bowImage;
var arrowImage;
var arrow;
var spawnBalloon;
var score = 0;
var swoosh;
var sound;
var arrowGroup;
var redGroup;
var blueGroup;
var greenGroup;
var pinkGroup;
var gameState=1;
function preload() {
  //loading the images here:
  blue_balloon = loadImage("blue_balloon0.png");
  green_balloon = loadImage("green_balloon0.png");
  pink_balloon = loadImage("pink_balloon0.png");
  red_balloon = loadImage("red_balloon0.png");
  groundImage = loadImage("park.jpg");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  swoosh = loadSound("Arrow_swoosh.mp3");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  ground = createSprite(300, 300, 600, 600);
  ground.addImage("park.jpg", groundImage);
  ground.scale = 2.5;
  ground.x = ground.width / 2;
  ground.velocityX = -4;
  bow = createSprite(510, 300, 40, 70);
  bow.addImage("bow0.png", bowImage);
  bow.scale = 2;
  redGroup= new Group();
  blueGroup= new Group();
  pinkGroup= new Group();
  greenGroup= new Group();
  arrowGroup= new Group();
}

function draw() {
  createEdgeSprites();
  if (ground.x < 0) {
    ground.x = ground.width / 2;

  }
  if(gameState===1){
  bow.y = World.mouseY;
  if (keyDown("space")) {
    createArrow();
    arrow.y = bow.y;
  }
  console.log(frameCount);
  createBalloon();
  if(arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  if(arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }
  if(arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
  if(arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
  }
}
  if(score===5){
    gameState=2
  }
  if(gameState===2){
    bow.y=200;
    ground.velocityX=0;
  }
  drawSprites();
  textSize(20);
  fill("red");
  text("score=" + score, displayWidth/2,50);
}

function createArrow() {
  arrow = createSprite(500, 300, 40, 10);
  arrow.addImage("arrow0.png", arrowImage);
  arrow.scale = 0.5;
  arrow.velocityX = -3;
  arrow.lifetime = 100;
  arrow.setCollider("rectangle",0,0,250,30);
  swoosh.play();
  arrowGroup.add(arrow);
}

function createBlueballoon() {
  if (frameCount % 150 === 0) {
    console.log(frameCount)
  var blueB = createSprite(0, Math.round(random(20, 500)), 40, 60);
  blueB.addImage("blue_balloon0.png", blue_balloon);
  blueB.velocityX = 3.5
  blueB.lifetime = 120
  blueB.scale = 0.15;
  blueGroup.add(blueB);
}
}
function createRedballoon() {
  if (frameCount % 130 === 0) {
  var redB = createSprite(0, Math.round(random(20, 500)), 40, 60);
  redB.addImage("red_balloon0.png", red_balloon);
  redB.velocityX = 3
  redB.lifetime = 150
  redB.scale = 0.15
  redGroup.add(redB);
}
}    

function createGreenballoon() {
  if (frameCount % 170 === 0) {
  var greenB = createSprite(0, Math.round(random(20, 500)), 40, 60);
  greenB.addImage("green_balloon0.png", green_balloon);
  greenB.velocityX = 2.5
  greenB.lifetime = 150
  greenB.scale = 0.13
  greenGroup.add(greenB);
}
}
function createPinkballoon() {
  if (frameCount % 200 === 0) {
  var pinkB = createSprite(0, Math.round(random(20, 500)), 40, 60);
  pinkB.addImage("pink_balloon0.png", pink_balloon);
  pinkB.velocityX = 2
  pinkB.lifetime = 150
  pinkB.scale = 2
  pinkGroup.add(pinkB);
  }
}
function createBalloon() {
  var spawnBalloon = Math.round(random(1, 4));
  console.log(spawnBalloon)
    if (spawnBalloon == 1) {
      createRedballoon()
    }
    if (spawnBalloon = 2) {
      createBlueballoon()
    }
    if (spawnBalloon = 3) {
      createPinkballoon()
    }
    if (spawnBalloon = 4) {
      createGreenballoon()
    }
    camera.position.x=displayWidth/2;
    camera.position.y=displayHeight/2;
}
