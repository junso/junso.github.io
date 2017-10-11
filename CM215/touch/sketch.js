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



  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 80, 80);

  }
  fill(random(0, 255), random(0, 255), random(0, 255));

  beginShape();
  for (var i = 0; i < touch.length; i++) {

    vertex(touches[i].x, touch[i].y);
    
    textSize(60);
    text("x: " + floor(), touch[i].x, touch[i].y);
    text("y: " + floor(), touch[i].y, touch[i].x);
  }

  endShape(CLOSE);
}