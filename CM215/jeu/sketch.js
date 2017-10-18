var ball, vX, vY, xPos, yPos, bounce, f;

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
  fill(0);
  textSize(40)
  drawBall();
}

// soit f la friction.
f = 0.01;

//accélération

accX = rotationY * f;
accY = rotationX * f;

//vitesse

vX += accX;
vY += accY;

//position

xPos += vX;
yPos += vY;

function drawBall() {
  
  fill(150, 50, 0jeu
  ellipse(xPos, yPos, ballSize, ballSize);
}