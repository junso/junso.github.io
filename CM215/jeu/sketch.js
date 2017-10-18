var ball, vX, vY, xPos, yPos, aX, aY, bounce, multiplier;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);

  vX = 0;
  vY = 0;
  ballSize = 100;
  bounce = 0.75;
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
  
   // soit multiplier la friction.
   
    multiplier = 0.0010;
    
    //soit accélération
    
    aX = rotationY * multiplier;
    aY = rotationX * multiplier;
    
    //soit vY et vX la vitesse
    
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

  fill(18, 02, 92);
  ellipse(xPos, yPos, ballSize, ballSize);
}