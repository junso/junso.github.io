cocument.ontouchmove = function(event){
  event.preventDefault();
  }
  
  function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
 stroke(0);
 noFill();
 strokeWeight(5);
}

function draw() 
{
  background (255);
  fill(random(0,255),random(0,255),random(0,255));
    
  for(var i=0; i<touches.length;i++){
    rect(touches[i].x,touches[i].y,150,150);
    
  for(var l=0,l=touches,l++){
line(touches[i].x,touches[i].y,150,150);  }
  }
    
  }
}
function touchStarted(){
  
}