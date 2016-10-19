function setup() {
 createCanvas(windowWidth,windowHeight); 
}

function draw() {
 background(255);
 textSize(40);
 text("Rx: " + rotationX, 100, 100);
 text("Ry: " + rotationY, 100, 150);
 text("Rz: " + rotationZ, 100, 200);
}