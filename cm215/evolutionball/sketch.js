  var obstacles = []; /* Aray */
  var ballSize, vY, vX, accX, accY, xPos, yPos, bounce, f, colision, bonus, malus, block, score, typeObstacle, level, img, timer, cycle;
  var scoreLevels = [0, 50, 100, 200],
    timerLevel = [20 * 60, 40 * 60, 60 * 60];

  function preload() {
    img = loadImage("s.kezako.jpg");
  }

  function setup() {
    createCanvas(windowWidth, windowHeight);
    ellipseMode(CENTER);
    var typeObstacle = 0;
    for (var i = 0; i < 3; iMax++) {
      obstacles[0] = new Obstacle("bonus");
      obstacles[1] = new Obstacle("malus");
      obstacles[2] = new Obstacle("block");
    }
    level = 0;
    timer = 20 * 60;
    vX = 0;
    vY = 0;
    score > 0;
    ballSize = 30;
    bounce = 0.8;
    xPos = windowWidth / 2;
    yPos = windowHeight / 2;
  }
  /*******************************************************/
  function draw() {
    background(img, 100);
    fill(0);
    textSize(40);
    drawBall();
    f = 0.01; // soit f la friction.
    accX = rotationY * f; //accélérationX
    accY = rotationX * f; //accélérationY
    vX += accX; //vitesseX
    vY += accY; //vitesseY
    //position
    xPos += vX;
    yPos += vY;

    for (i = 0; i < 3; i++) {
      obstacles[i].drawObstacles();

      if (timer >= 0) {
        if (score >= 50) {
          newGame = true;
          level += 1;
          accX = 0;
          accY = 0;
          text("NIVEAU SUIVANT");
        } else {
          newGame = false;
          text("GAME OVER");
        }

        if (score >= 100) {
          text("NIVEAU SUIVANT");
        }
        if (score >= 200) {
          text("NIVEAU SUIVANT");
        }
      }
    }
    text("score:" + score, 15, 35);
    text("Time" + floor(timer / 60), windowHeight / 2 - 25, 25);
    text("Niveau suivant : 100 points");
    //condition de rebond sur les bords de gauche et de droite.
    if ((xPos + ballSize / 2) >= windowWidth) {
      vX = -vX * bounce;
      xPos = windowWidth - ballSize / 2;
    } else if ((xPos - ballSize / 2) <= 0) {
      vX = -vX * bounce;
      xPos = ballSize / 2;
    }
    //condition de rebond sur les bords du haut et du bas.
    if ((yPos + ballSize / 2) >= windowHeight) {
      vY = -vY * bounce;
      yPos = windowHeight - ballSize / 2;
    } else if ((yPos - ballSize / 2) <= 0) {
      vY = -vY * bounce;
      yPos = ballSize / 2;
    }
    //condition de rebond sur les obstacles.
    function testCol {
      for (i = 0; i < 3; i++) {
        if (dist(xPos, yPos, obstacles[i].xPos, obstacles[i].yPos) <= ballSize / 2 + obstacles[i].size / 2) {
          if (obstacles[i].type === "block") {
            vX = -vX * bounce;
            vY = -vY * bounce;
          } else if (obstacles[i].type === "bonus") {
            if (obstacles[i].colision === false) {
              obstacles[i].colision = true;
              score += 10;
            }
          } else if (obstacles[i].type === "malus") {
            if (obstacles[i].colision === false) {
              obstacles[i].colision = true;
              score -= 5;
            }
          }
        } else {
          obstacles[i].colision = false;
        }
      }
    }
  }
  /******************************************** fin fonction draw ******************************************/
  function drawBall() {
    fill(200, 10, 0);
    ellipse(xPos, yPos, ballSize, ballSize);
  }
  function obs {
    obstacle = random(30, 60);
    var cycle = true;
    if (level == 1) {
      iMax = 3;
    } else(level == 2) {
      iMax = 8;
    } else(level == 3) {
      iMax = 16;
    }
  }
  }
  function Obstacle(obstacles) {
    this.type = obstacles;
    this.xPos = random(0, windowWidth);
    this.yPos = random(0, windowHeight);
    this.size = random(25, 50);
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    if (this.type == "block") {
      this.color = color(0);
    }
    this.colision = false;
    this.drawObstacles = function() {
      fill(this.color);
      ellipse(this.xPos, this.yPos, this.size, this.size);
    }
  }
  }