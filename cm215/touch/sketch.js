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
      
      fill(random(0,255),random(0,255),random(0,255)); 
      for (var i = 0; i < touches.length; i++) {
        
      vertex(touches[i].x, touches[i].y);

      endShape(CLOSE);
      
      //line(touches[i].x,touches[i].y,touches[i+1].x,touches[i+1].y);
      
    } else {

      beginShape();
      
      
      vertex(touches[i].x, touches[i].y);

      vertex(touches[i].x, touches[i].y);

      vertex(touches[0].x, touches[0].y);

      vertex(touches[0].x, touches[0].y);
      
      endShape(CLOSE);
      
    }

    ellipse(touches[i].x, touches[i].y, 75);
  }
}

//function touchStarted() {
//}