  var i, newGame, obstacles = [];
  var type = 0;
  var iMax, obsX, obsY;
  var ballSize, vY, vX, accX, accY, xPos, yPos, bounce, f, colision, bonus, malus, block;
  var score, typeObstacle, level, img, timer, cycle;
  var scoreLevel = [0, 50, 100, 200],
    timerLevel = [20 * 60, 40 * 60, 60 * 60];

  function preload() {
    img = loadImage("s.kezako.jpg");
  }

  function setup() {
    createCanvas(windowWidth, windowHeight);
    ellipseMode(CENTER);
    level = 1;
    timer = timerLevel;
    newGame = true;
    vX = 0;
    vY = 0;
    score = 0;
    ballSize = 30;
    bounce = 0.8;
    xPos = windowWidth / 2;
    yPos = windowHeight / 2;
  }
  /*******************************************************/
  function draw() {
    if (newGame === true) {
      obst();
      newGame = false;
    }
    background(img, 100);
    newGame = false;
    testColl();
    drawBall();
    for (i = 0; i < iMax; i++) {
      obstacles[i].drawObstacles();
    }
    fill(255);
    textSize(25);
    text("score:" + score, 15, 35);
    text("Time:" + floor(timer / 60), windowWidth / 2 - 25, 25);
    text("Niveau suivant : 100 points", 25, 40);

    if (timer <= 0) {
      if (score >= scoreLevel[level]) {
        level += 1;
        newGame = false;
        score = 0;
        timerLevel[level];
      } else {
        gameOver();
      }
    } else {
      timer--;
    }

    function drawBall() {
      if (timer >= 0) {
        fill(0, 255, 255);
        ellipse(xPos, yPos, ballSize, ballSize);
        vX += accX; //vitesseX
        vY += accY; //vitesseY
        f = 0.01; // soit f la friction.
        accX = rotationY * f; //accélérationX
        accY = rotationX * f; //accélérationY
        xPos += vX; //position
        yPos += vY; //position

        //condition de rebond sur les bords de gauche et de droite.
        if (xPos + ballSize / 2 >= windowWidth) {
          vX = -vX * bounce;
          xPos = windowWidth - ballSize / 2;
        }
        if (xPos - ballSize / 2 <= 0) {
          vX = -vX * bounce;
          xPos = ballSize / 2;
        }
        //condition de rebond sur les bords du haut et du bas.
        if (yPos + ballSize / 2 >= windowHeight) {
          vY = -vY * bounce;
          yPos = windowHeight - ballSize / 2;
        }
        if (yPos - ballSize / 2 <= 0) {
          vY = -vY * bounce;
          yPos = ballSize / 2;
        }
      }
    }
}
    //condition de rebond sur les obstacles.

    function obst() {
      obstacles = random(30, 60);
      var cycle = true;
      if (level == 1) {
        iMax = 3;
      } else if (level == 2) {
        iMax = 8;
      } else if (level == 3) {
        iMax = 16;
      }
      for (i = 0; i < iMax; i++) {
        if (type === 1) {
          typeobs = "block";
          type++;
        } else if (type === 2) {
          typeobs = "malus";
          type++;
        } else {
          typeobs = "bonus";
          type = 0;
        }
        obstacles[i] = new Obs(typeobs, obstacles, obsX, obsY);
      }
      while (cycle) {
        obsX = random(10, windowWidth);
        obsY = random(10, windowHeight);
        cycle = false;

        for (var k = 0; k < i; k++) {
          if (dist(obsX, obsY, ob[k].obsX, ob[k].obsY <= obstacles / 2 + ob[k].size)) {
            cycle = true;
            break;
          }
        }
      }
    }

    function testCol() {
      for (i = 0; i < iMax; i++) {
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
    /******************************************** fin fonction draw ******************************************/
    function Obstacle(obstacles) {
      this.type = obstacles;
      this.xPos = random(0, windowWidth);
      this.yPos = random(0, windowHeight);
      this.size = random(25, 50);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      if (this.type == "block") {
        this.color = color(0);
      } else if (this.type == "bonus") {
        this.color = color(0, 255, 20);
        this.colision = false;
      } else {
        this.color = color(0);
      }
      this.drawObstacles = function() {
        fill(this.color);
        ellipse(this.xPos, this.yPos, this.size, this.size);
      }
    }

    function gameover() {
      fill(255);
      rect(windowWidth / 2, windowHeight / 2, 40, 40);
      fill(10);
      rect(windowWidth / 2, windowHeight / 2, 45, 45);
      text("VOUS AVEZ PERDU", windowWidth / 2, windowHeight / 2);
    }