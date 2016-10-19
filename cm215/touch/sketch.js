document.ontouchmove = function(event) {
  event.preventDefault();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  stroke(0);
  noFill();
  strokeWeight(8);
}

function draw() {
  background(255);

  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 80,80);

  }
    fill(random(0, 255), random(0, 255), random(0, 255));
  beginShape();
  for (var i = 0; i < touches.length; i++) {
    
    vertex(touches[i].x, touches[i].y);
  }
  endShape(CLOSE);

}