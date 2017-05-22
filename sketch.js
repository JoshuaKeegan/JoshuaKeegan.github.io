var img;
var van;
var x = 100;
var y = 100;
var direction=1
var speed=-4

var xVan = 700;
var yVan = 100;
var wVan = 75;
var hVan = 54;
var score= 0;
var gameOver=false;
var timepassed=0;

var vanLocations = [{x: 1000, y: 100}, {x: 800, y: 300},  {x: 1200, y: 500},{x:1500, y:700}];

//  this is a comment meant for humans, not c
function setup() {
  createCanvas(750,520);
  img = loadImage("./Dang Daniel.png");
  van = loadImage("./vans.jpg");
  imageMode(CENTER);

}

function draw() {
  if (gameOver === true) {

    textSize(100);
    text("GAME OVER", 50, 290);
    fill(255, 0, 0);

  }
  else {
    background(0,255,0);
    textBox();
    xVan += speed * direction;

for(var vanimg=0;vanimg<4;vanimg++){
   image(van,vanLocations[vanimg].x, vanLocations[vanimg].y);
 }
   vanLocations[0].x-=4
   vanLocations[1].x-=6
   vanLocations[2].x-=8
    vanLocations[3].x-=10
   if(vanLocations[0].x<0) {
     vanLocations[0].x = width;
     vanLocations[0].y=random(height);
   }
   if(vanLocations[1].x<0) {
     vanLocations[1].x = width;
     vanLocations[1].y=random(height);
   }
   if(vanLocations[2].x<0) {
     vanLocations[2].x = width;
     vanLocations[2].y=random(height);
   }
   if(vanLocations[3].x<0) {
     vanLocations[3].x = width;
     vanLocations[3].y=random(height);
   }

    if (keyIsDown(UP_ARROW))
      y-=7;

    if (keyIsDown(DOWN_ARROW))
      y+=7;

    if (y > height - 50) {
      y = height - 50;
    }

    if (y < 50) {
      y = 50;
    }

    image(img, x, y);
    //image(van,xVan,yVan);

    if (checkIfTouching(vanLocations[0].x, vanLocations[0].y)) {
      console.log("DAMN DANIEL!");
      gameOver=true
    }
    if (checkIfTouching(vanLocations[1].x, vanLocations[1].y)) {
      console.log("DAMN DANIEL!");
      gameOver=true
    }
    if (checkIfTouching(vanLocations[2].x, vanLocations[2].y)) {
      console.log("DAMN DANIEL!");
      gameOver=true
    }
    if (checkIfTouching(vanLocations[3].x, vanLocations[3].y)) {
      console.log("DAMN DANIEL!");
      gameOver=true
    }
  }
  if(gameOver==false){
   timepassed++
  }
}
  function checkIfTouching(xVan, yVan) {
  //   if (x > xVan && x < xVan + wVan && y > yVan && y < yVan+hVan) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //     console.log("you loose");
  //   }
  // }
  noFill();
  stroke(255,0,0);
  rect(xVan, yVan, 50);
    var d = Math.sqrt((x - xVan)*(x-xVan) + (y - yVan)*(y-yVan));
    if (d < 85) {
      return true;
    }
    else {
      return false;
    }

    // if(xVan<0){
    //   direction = 1;
    // }
    // else if(xVan > width){
    //   direction = -1;
    // }



}
function textBox(){
textSize(25);
text("Score:" + timepassed, 550, 50);
fill(100, 350, 100);
}
