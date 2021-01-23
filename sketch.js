var player; //global variable
var playerAnimation;

var coin, coin1, coin2, coin3, coin4, coin5
var coinAnimation;


var cloud, cloudImg1, cloudImg2, cloudImg3, cloudImg4
var cloudGroup;

var pipe1, pipe2, pipe3
var pipeImg1, pipeImg2, pipeImg3

var block1, block2, block3, block4
var blockImg1, blockImg2, blockImg3, blockImg4

var bg
var bgImg

var inviseGround
var inviseGround2
var ground
var groundImg

var score = 0

var deathImg

var lives = 2

var gameState = "welcome"

function preload(){
  playerAnimation = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png")
  coinAnimation = loadAnimation("images/c1.png", "images/c2.png", "images/c3.png", "images/c4.png", "images/c5.png" )

  cloudImg1 = loadImage("images/cloud1.png")
  cloudImg2 = loadImage("images/cloud2.png")
  cloudImg3 = loadImage("images/cloud3.png")
  cloudImg4 = loadImage("images/cloud4.png")

  pipeImg1 = loadImage("images/pipe1.png")
  pipeImg2 = loadImage("images/pipe2.png")
  pipeImg3 = loadImage("images/pipe3.png")

  blockImg1 = loadImage("images/block1.png")
  blockImg2 = loadImage("images/block2.png")
  blockImg3 = loadImage("images/block3.png")
  blockImg4 = loadImage("images/block4.png")

  bgImg = loadImage("images/background.png")

  groundImg = loadImage("images/ground.png")

  deathImg = loadImage("images/block2.png")

}

function setup(){
  createCanvas(displayWidth, displayHeight);
  player = createSprite(400,600,50,50);
  player.addAnimation("running",playerAnimation)
  player.scale = 0.5
  //player.visible=false

  coin1 = createSprite(displayWidth/2, displayHeight/2, 20,20 );
  coin1.addAnimation("coin", coinAnimation)
  coin1.scale = 0.5

  coin2 = createSprite(310, 500, 20,20 );
  coin2.addAnimation("coin", coinAnimation)
  coin2.scale = 0.5

  coin3 = createSprite(1540, 500, 20,20 );
  coin3.addAnimation("coin", coinAnimation)
  coin3.scale = 0.5

  coin4 = createSprite(displayWidth/2, displayHeight/2, 20,20 );
  coin4.addAnimation("coin", coinAnimation)
  coin4.scale = 0.5

  coin5 = createSprite(displayWidth/2, displayHeight/2, 20,20 );
  coin5.addAnimation("coin", coinAnimation)
  coin5.scale = 0.5

  player.setCollider("circle",0,0,40);
  player.debug = true

  inviseGround = createSprite(displayWidth/2, displayHeight-150, displayWidth,20 )
  //inviseGround.addImage(groundImg)

  inviseGround2 = createSprite(910, 710, 450,60)
  inviseGround2.visible = false
  

  block = createSprite(displayWidth/2, displayHeight/2+170, 10,10 )
  block.addImage(blockImg1);

  block1 = createSprite(displayWidth/2-50, displayHeight/2+170, 10,10 )
  block1.addImage(blockImg1);

  block2 = createSprite(displayWidth/2-100, displayHeight/2+170, 10,10 )
  block2.addImage(blockImg1);

  block3 = createSprite(displayWidth/2-150, displayHeight/2+170, 10,10 )
  block3.addImage(blockImg1);

  block4 = createSprite(displayWidth/2-200, displayHeight/2+170, 10,10 )
  block4.addImage(blockImg1);

  block5 = createSprite(displayWidth/2-250, displayHeight/2+170, 10,10 )
  block5.addImage(blockImg1);
  
  block6 = createSprite(displayWidth/2+50, displayHeight/2+170, 10,10 )
  block6.addImage(blockImg1);

  block7 = createSprite(displayWidth/2+100, displayHeight/2+170, 10,10 )
  block7.addImage(blockImg1);

  block8 = createSprite(displayWidth/2+150, displayHeight/2+170, 10,10 )
  block8.addImage(blockImg1);

  block9 = createSprite(displayWidth/2-400, displayHeight/2, 10,10 )
  block9.addImage(blockImg1);

  block10 = createSprite(displayWidth/2-450, displayHeight/2, 10,10 )
  block10.addImage(blockImg1);


  block12 = createSprite(displayWidth/2-550, displayHeight/2, 10,10 )
  block12.addImage(blockImg1);

  block13 = createSprite(displayWidth/2-600, displayHeight/2, 10,10 )
  block13.addImage(blockImg1);

  block14 = createSprite(displayWidth/2-650, displayHeight/2, 10,10 )
  block14.addImage(blockImg1);

  block15 = createSprite(displayWidth/2-350, displayHeight/2, 10,10 )
  block15.addImage(blockImg1);

  block16 = createSprite(displayWidth/2+350, displayHeight/2, 10,10 )
  block16.addImage(blockImg1);

  block17 = createSprite(displayWidth/2+400, displayHeight/2, 10,10 )
  block17.addImage(blockImg1);

  block18 = createSprite(displayWidth/2+450, displayHeight/2, 10,10 )
  block18.addImage(blockImg1);

  block19 = createSprite(displayWidth/2+500, displayHeight/2, 10,10 )
  block19.addImage(blockImg1);

  block20 = createSprite(displayWidth/2+550, displayHeight/2, 10,10 )
  block20.addImage(blockImg1);

  block21 = createSprite(displayWidth/2+600, displayHeight/2, 10,10 )
  block21.addImage(blockImg1);

  deathblock = createSprite(displayWidth/2-500, displayHeight/2, 10, 10)
  deathblock.addImage(deathImg)

  deathblock1 = createSprite(displayWidth/2-500, displayHeight/2, 10,10)
  deathblock1.addImage(deathImg)
  
  player.velocityX = 0

}

function draw(){
  background(bgImg);
  fill("black");
  text(mouseX+","+mouseY, mouseX,mouseY)

 
  if(keyDown("UP_ARROW")&& player.collide(inviseGround)){
    player.y = player.y -16;
   
  }

  if(keyDown("UP_ARROW")&& player.collide(inviseGround2)){
    player.y = player.y -16;
   
  }

  
  if(keyDown("UP_ARROW")&& player.collide(deathblock)){
    lives -= 1 ;
   
  }

  
   
  

  if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 12
  }
  
  if(keyDown("LEFT_ARROW")){
    player.x = player.x - 12;
  }

  if(player.collide(coin3)){
    score += 1;
    coin3.remove()
  }

  if(player.collide(coin1)){
    score += 1;
    coin1.remove()
  }

  if(player.collide(coin2)){
    score += 1;
    coin2.remove()
  }

  if(player.collide(coin4)){
    score += 1;
    coin4.remove()
  }

  if(player.collide(coin5)){
    score += 1;
    coin5.remove()
  }

  
  //add gravity
  player.velocityY = player.velocityY + 0.5


  
  if(player.collide(inviseGround)|| player.collide(inviseGround2)){
    player.velocityY = 0 
  }

  if(player.collide(inviseGround2)){
    player.velocityY = 0 
  }
 

  spawnClouds();
  drawSprites();

 fill("black");
  text("Score: "+ score,1760,70)
  text("lives "+ lives, 50,50 )
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
     cloud = createSprite(displayWidth,displayHeight/2-500,40,10);
    cloud.y = Math.round(random(displayWidth/2-900, displayWidth/2-700));
    var rand = Math.round(random(1,4))
    switch(rand) {
      case 1: cloud.addImage(cloudImg1);
              break;
      case 2: cloud.addImage(cloudImg2);
              break;
      case 3: cloud.addImage(cloudImg3);
              break;
      case 4: cloud.addImage(cloudImg4);
              break;
      default: break;
    }
   // cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.lifetime = 1000;
  // cloudGroup.add(cloud);
    }
} 