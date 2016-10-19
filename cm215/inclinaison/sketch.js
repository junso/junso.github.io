function setup() {
 createCanvas(windowWidth,windowHeight); 
}

function draw() {
  
 background(255);
 
 textSize(90);
 text("Rx: " + floor(rotationX), 100, 100);
 text("Ry: " + floor(rotationY), 100, 150);
 text("Rz: " + floor(rotationZ), 100, 200);
}
