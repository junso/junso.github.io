var ballSize, vY, vX, accX, accY, posX, posY, f, bonus, malus, block;

function setup() {

  createCanvas(windowWidth, windowHeight);

  ellipseMode(CENTER);
  bonus = 22;
  malus = 20;
  block = 25;

  ballSize = 50;
  vX = 0;
  vY = 0;
  posX = windowWidth / 2;
  posY = windowHeight / 2;


}

function draw() {

  background(255);

  bomablock();
  drawBall();

  textSize(45);
  text("Rx: " + floor(rotationX), 100, 100);
  text("Ry: " + floor(rotationY), 100, 150);
  text("Rz: " + floor(rotationZ), 100, 200);
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
  //texte afficher
  text("accX: " + floor(accX), 100, 300);
  text("vX: " + floor(vX), 100, 350);
  text("accY: " + floor(accY), 100, 400);
  text("vY: " + floor(vY), 100, 450);
  //condition
  if ((posX + ballSize / 2) >= windowWidth || (posX - ballSize / 2) <= 0) {
    vX = -vX;
  }
  if ((posY + ballSize / 2) >= windowHeight || (posY - ballSize / 2) <= 0) {
    vY = -vY;
  }
}

function drawBall() {

  fill(200, 10, 110);
  ellipse(posX, posY, ballSize, ballSize);

}

function bomablock() {
  fill(200, 0, 100);
  ellipse(posX, posY, bonus, bonus)

  fill(100, 0, 100);
  ellipse(posX, posY, malus, malus)

  fill(250, 0, 10);
  ellipse(posX, posY, block, block)

}