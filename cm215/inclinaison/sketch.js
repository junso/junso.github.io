var ballSize, vY, vX, accX, accY, posX, posY, f;

function setup() {
  createCanvas(windowWidth, windowHeight);

  ellipseMode(CENTER);
  ballSize = 50;
  vX = 0;
  vY = 0;
  posX = windowWidth / 2;
  posY = windowHeight / 2;
  f = 0.00001;
}

function draw() {
  background(255);
  drawBall();
  textSize(45);

  text("Rx: " + floor(rotationX), 100, 100);
  text("Ry: " + floor(rotationY), 100, 150);
  text("Rz: " + floor(rotationZ), 100, 200);

  accX = rotationY * f;
  accY = rotationX;
  vX += accX;
  vY += accY;
  posX += vX;
  posY += vY;

  if ((posX + ballSize / 2) >= windowWidth || posX = < 0) {
    vX = -vX;
  }

  function drawBall() {
    fill(200);
    ellipse(posX, posY, ballSize, ballSize);
  }