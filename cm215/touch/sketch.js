document.ontouchmove = function(event) {
  event.preventDefault();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  stroke(0);
  noFill();
  strokeWeight(5);
}

function draw() {
  background(255);



  if ((i + 1) < touches.length) {

    beginShape();
    for (var i = 0; i < touches.length; i++) {
      vertex(touches[i].x, touches[i].y);
    }
    endShape(CLOSE);

  } else {

    beginShape();
    
    for (var i = 0; i < touches.length; i++) {

      vertex(touches[i].x, touches[i].y);

      vertex(touches[i].x, touches[i].y);

      vertex(touches[0].x, touches[0].y);

      vertex(touches[0].x, touches[0].y);
    }
    endShape(CLOSE);
  }

  for (var i = 0; i < touches.length; i++) {

    ellipse(touches[i].x, touches[i].y, 80);
  }
}
//}