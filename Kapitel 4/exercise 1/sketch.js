let x;
let y;
let a;
let b;
let d;
let speed;

function setup() {
  createCanvas(400, 400);
  fill(0);
  x = random(0,width);
  y = random(0,height);
  speed = 10;
  a = speed;
  d = 20;

}

function draw() {
  background(155);
  ellipse(x,y,d/2,d/2);

x+=a;


if (x + d / 2 >= width) {
  y -=a;
  x-=a;
}
console.log('INDIAN ASLLLLLLLLLLl');
}