  var obstacles = []; /* Aray */
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    for (var i=0; i<10; i++) {
      obstacles[i] = new Obstacle("malus");
    }
    
  }

  function draw() {
    for (var i=0; i<10; i++) {
      obstacles[i].display();
    }
  }

  function Obstacle(genre) {
    this.type = genre;
    this.xPos = random(0, windowWidth);
    this.yPos = random(0, windowHeight);
    this.size = random(20, 50);
    this.color = color(random(0, 255), random(0, 255), random(0, 255));

    this.display = function() {
      fill(this.color);
      ellipse(this.xPos, this.yPos, this.size, this.size);
    }
  }
  
