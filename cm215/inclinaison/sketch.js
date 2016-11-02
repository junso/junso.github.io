var ballSize, vY, vX, accX, accY, posX, posY, f, bonus, malus, block, bpX, bpY, blpX, blpY, mpX, mpY;

function setup() {

  createCanvas(windowWidth, windowHeight);

  ellipseMode(CENTER);

  bonus = 25;
  bpX = random(50, windowWidth);
  bpY = random(50, windowHeight);

  malus = 25;
  mpX = random(50, windowWidth);
  mpY = random(50, windowHeight);

  block = 25;
  blpX = random(50, windowWidth);
  blpY = random(50, windowHeight);

  ballSize = 30;
  vX = 0;
  vY = 0;
  posX = windowWidth / 2;
  posY = windowHeight / 2;
}

function draw() {
  background(255);
  
  bomablock();
  drawBall();
  
  /*textSize(45);
  text("Rx: " + floor(rotationX), 100, 100);
  text("Ry: " + floor(rotationY), 100, 150);
  text("Rz: " + floor(rotationZ), 100, 200);
  */
  // soit f la friction.
  f = 0.01;
  
  //accélération
  accX = rotationY * f;
  accY = rotationX * f;
  
  //vitesse
  vX += accX;
  vY += accY;
  
  //position
  posX += vX;
  posY += vY;
  
  /*texte afficher
  text("accX: " + floor(accX), 100, 300);
  text("vX: " + floor(vX), 100, 350);
  text("accY: " + floor(accY), 100, 400);
  text("vY: " + floor(vY), 100, 450);
  */
  //condition de rebond sur les bords
  if ((posX + ballSize / 2) >= windowWidth || (posX - ballSize / 2) <= 0) {
    vX = -vX;
  }
  if ((posY + ballSize / 2) >= windowHeight || (posY - ballSize / 2) <= 0) {
    vY = -vY;
  }
}

function drawBall() {
  fill(200, 10, 0);
  ellipse(posX, posY, ballSize, ballSize);
}

function bomablock() {

  fill(255, 0, 255);
  ellipse(bpX, bpY, bonus, bonus);

  fill(150, 0, 0);
  ellipse(blpX, blpY, block, block);

  fill(0, 0, 255);
  ellipse(mpX, mpY, malus, malus);

}