  var obstacles = []; /* Aray */
  var ballSize, vY, vX, accX, accY, xPos, yPos, bounce, f, colision, bonus, malus, block, score, typeObstacle;

  function setup() {
    createCanvas(windowWidth, windowHeight);
    ellipseMode(CENTER);
    var typeObstacle = 0;

    for (var i = 0; i < 6; i++) {
      if (typeObstacle === 0) {
        obstacles[i] = new Obstacle("bonus");
      } else if (typeObstacle == 1) {
        obstacles[i] = new Obstacle("malus");
      } else if (typeObstacle == 2) {
        obstacles[i] = new Obstacle("block");
      }
      //typeObstacle = floor(random(0,3));
      if (typeObstacle < 2) {
        typeObstacle++;
      } else {
        typeObstacle = 0;
      }
    }
    vX = 0;
    vY = 0;
    score = 0;
    ballSize = 30;
    bounce = 0.05;
    colision === false;
    xPos = windowWidth / 2;
    yPos = windowHeight / 2;
  }

  function draw() {

    background(255);
    fill(0);
    drawBall();
    // soit f la friction.
    f = 0.1;
    //accélération
    accX = rotationY * f;
    accY = rotationX * f;
    //vitesse
    vX += accX;
    vY += accY;
    //position
    xPos += vX;
    yPos += vY;

    /******************************************DEBUT DES CONDITIONS***************************************/

    text("score:" + score, 10, 17);
    //condition de rebond sur les bords de gauche et de droite.

    if ((xPos + ballSize / 2) >= windowWidth || (xPos - ballSize / 2) <= 0) {
      vX = -vX * bounce;
    }
    //condition de rebond sur les bords du haut et du bas.

    if ((yPos + ballSize / 2) >= windowHeight || (yPos - ballSize / 2) <= 0) {
      vY = -vY * bounce;
    }
    //condition de rebond sur les obstacles.

    for (var i = 0; i < 2; i++) {

      if (dist(xPos, yPos, obstacles[i].xPos, obstacles[i].yPos) <= ballSize / 2 + obstacles[i] / 2) {

        if (obstacles[i].type === "Obstacle") {
          vX = -vX * bounce;
          vY = -vY * bounce;

        } else if (obstacles[i].type === "bonus") {
          if (obstacles[i].colision === false) {
            obstacles.colision = true;
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

  function drawBall() {
    fill(200, 10, 0);
    ellipse(xPos, yPos, ballSize, ballSize);
  }

  function Obstacle(obstacles) {
    this.type     = obstacles;
    this.xPos     = random(0, windowWidth);
    this.yPos     = random(0, windowHeight);
    this.size     = random(25, 50);
    this.color    = color(random(0, 255), random(0, 255), random(0, 255));
    this.colision = false;

    this.display = function() {
      fill(this.color);
      ellipse(this.xPos, this.yPos, this.size, this.size);
    }
  }