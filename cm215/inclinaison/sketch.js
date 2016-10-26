var ballSize, vY, vX, accX, accY, posX, posY;

function setup() {
  createCanvas(windowWidth, windowHeight);

  ellipseMode(CENTER);
  ballSize = 20;
  vX = 0;
  vY = 0;
  posX = windowWidth/2;
  posY = windowHeight/2;
}

function draw() {
  background(255);

  drawBall();
  textSize(45);

  text("Rx: " + floor(rotationX), 100, 100);
  text("Ry: " + floor(rotationY), 100, 150);
  text("Rz: " + floor(rotationZ), 100, 200);

  accX = rotationY;
  accY = rotationX;
  vX += accX;
  vY += accY;
  posX += vX;
  posY += vY;
}


function drawBall() {
  fill(100);
  ellipse( posX,posY, ballSize, ballSize);
}