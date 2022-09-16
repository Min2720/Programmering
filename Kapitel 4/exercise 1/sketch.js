let x;
let y;
let a;
let b;
let d;
let speed;

function setup() {
  createCanvas(500, 500);
  fill(0);
  x = random(0,width);
  y = random(0,height);
  speed = 3;
  a = speed;
  b = 0;
  d = 50;

}
function preload() {
  img = loadImage('RAHULBABY.jpg');
 }
function draw() {
  background(155);
  image(img,x,y,d,d);
  x += a;
  y += b;
 borderCheck();
/*
if (x + d / 2 >= width) {
  x-=a;
} 
*/
}

function borderCheck() {
  if (x + d>= width) {
    a = -speed;
    b = 0;
  }
  if (x  <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d>= height) {
    a = 0;
    b = -speed;
  }
  if (y < 0) {
    a = 0;
    b = speed;
  }
 }

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
 }
