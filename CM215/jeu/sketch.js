var ball, vX, vY, xPos, yPos, aX, aY, bounce, f;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);

  vX = 0;
  vY = 0;
  score = 0;
  ballSize = 100;
  bounce = 0.5;
  xPos = windowWidth / 2;
  yPos = windowHeight / 2;
}


function draw() {
  background(255);
  drawBall();
  fill(0);
  
  textSize(20)
  text("Rx: " + rotationX, 100, 100);
  text("Ry: " + rotationY, 100, 150);
  text("Rz: " + rotationZ, 100, 200);
  
   // soit f la friction.
    f = 0.005;
    
    //accélération
    aX = rotationY * f;
    aY = rotationX * f;
    
    //vitesse
    vX += aX;
    vY += aY;
    
    //position
    xPos += vX;
    yPos += vY;
    
/*************************** CONDITIONS DE REBONDISSEMENT *********************/

if ((xPos + ballSize / 2) >= windowWidth) {
      vX = -vX * bounce;
      xPos = windowWidth - ballSize / 2;
    } else if ((xPos - ballSize / 2) <= 0) {
      vX = -vX * bounce;
      xPos = ballSize / 2;
    }
    //condition de rebond sur les bords du haut et du bas.

    if ((yPos + ballSize / 2) >= windowHeight) {
      vY = -vY * bounce;
      yPos = windowHeight - ballSize / 2;
    } else if ((yPos - ballSize / 2) <= 0) {
      vY = -vY * bounce;
      yPos = ballSize / 2;
    }
}

function drawBall() {

  fill(250, 2550, 0);
  ellipse(xPos, yPos, ballSize, ballSize);
}