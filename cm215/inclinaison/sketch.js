var ballSize;

function setup() {
  createCanvas(windowWidth, windowHeight);

  ellipseMode(CENTER);
  ballSize = 200;
}

function draw() {
  background(255);

  drawBall();
    textSize(45);

    text("Rx: " + floor(rotationX), 100, 100);
    text("Ry: " + floor(rotationY), 100, 150);
    text("Rz: " + floor(rotationZ), 100, 200);
  }

  function drawBall() {
    fill(100);
    ellipse(windowWidth / 2, rotationX + windowHeight / 2, ballSize, ballSize);
  }