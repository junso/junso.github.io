var ball, vX, vY, xPos, yPos, aX, aY, bounce, f;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);

  vX = 0;
  vY = 0;
  score = 0;
  ballSize = 50;
  bounce = 0.5;
  xPos = windowWidth / 2;
  yPos = windowHeight / 2;
}


function draw() {
  background(255);
  drawBall();
  fill(0);
  textSize(40)
  text("Rx: " + rotationX, 100, 100);
  text("Ry: " + rotationY, 100, 150);
  text("Rz: " + rotationZ, 100, 200);

}

function drawBall() {

  fill(150, 50, 0);
  ellipse(xPos, yPos, ballSize, ballSize);
}