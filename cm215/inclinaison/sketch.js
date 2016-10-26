var ballSize, vY, vX, accX, accY, posX, posY, f;

function setup() {
  createCanvas(windowWidth, windowHeight);

  ellipseMode(CENTER);
  ballSize = 50;
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

  f = 0.1;
  
  accX = rotationY * f;
  accY = rotationX * f;
  
  vX += accX;
  vY += accY
  
  posX += vX;
  posY += vY;
  
  text("accX: " + floor(accX), 100, 300);
  text("vX: " + floor(vX), 100, 350);
  text("accY: " + floor(accY), 100, 400);
  text("vY: " + floor(vY), 100, 450);
  
  if ((posX + ballSize / 2) >= windowWidth || (posX - ballSize/2) <= 0) {
    vX = -vX;
  }

  if ((posY + ballSize / 2) <= windowHeight || (posY - ballSize/2) <= 0) {
    vY = -vY;
  }
}

function drawBall() {
  fill(0, 0, 255);
  ellipse(posX, posY, ballSize, ballSize);
}