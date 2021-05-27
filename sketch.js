var bgIMG
var snow , snowIMG
function preload(){
  bgIMG=loadImage("snow2.jpg")
  
  snowIMG=loadImage("snow4.webp")
}
function setup() {
  createCanvas(displayWidth, displayHeight);

 
}

function draw() {
  background(bgIMG);
  if(frameCount%20===0){  
 var x = random(100,displayWidth-100)
 snow = createSprite( x,-20 )

 snow.addImage(snowIMG)
 snow.scale=0.3
 snow.velocityY=5
 snow.lifetime=600
  }
  drawSprites();
}