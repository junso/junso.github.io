var   ballSize, vX, vY, xPos, yPos, aX, aY, bounce, multiplier,value ;

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
  
   // soit "multiplier" la friction.
   
    multiplier = 0.0060;
    
    //soit aX et aY l'accélération
    
    aX = rotationY * multiplier;
    aY = rotationX * multiplier;
    
    //soit vY et vX la vitesse
    
    vX += aX;
    vY += aY;
    
    // soit xPos et yPos la position initiale de la balle
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
function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
function drawBall() {

  fill(18, 02, 92);
  ellipse(xPos, yPos, ballSize, ballSize);
}