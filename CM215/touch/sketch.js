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

textSize(45);
text("x: " + floor(),10,10);
text("y: " + floor(),10,10);

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
