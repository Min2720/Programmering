function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(0);
}

function draw() {
  background(220);
  if (mouseIsPressed == true) {
    fill(255); // White
  }
  else {
    fill(0);   // Black
  }
  rect(25, 25, 50, 50);
  background(255);
  frameRate(5000);
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
  if (mouseX < 100){
    background(255,0,0)
  }
  else{
    background(220);
  }
    ellipse(mouseX, mouseY, 33, 33);
}