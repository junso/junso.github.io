var text;
document.ontouchmove = function(event) {
  event.preventDefault();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  stroke(10);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(255);
  fill(random(0, 255), random(0, 255), random(0, 255));

  textSize(20);
  text("x: " + floor(),100,100);
  text("y: " + floor(),100,100);

  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 80, 80);

  }
  fill(random(0, 255), random(0, 255), random(0, 255));

  beginShape();
  for (var i = 0; i < touches.length; i++) {

    vertex(touches[i].x, touches[i].y);
  }

  endShape(CLOSE);
}