  var obstacles = []; /* Aray */
  var ballSize, vY, vX, accX, accY, xPos, yPos, f, bonus, malus, block, score, typeObstacle;

  function setup() {
    createCanvas(windowWidth, windowHeight);
    ellipseMode(CENTER);
    var typeObstacle = 0;

    for (var i = 0; i < 12; i++) {

      if (typeObstacle == 0) {
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
    score = 0;
    ballSize = 30;
    vX = 0;
    vY = 0;
    posX = windowWidth / 2;
    posY = windowHeight / 2;
  }

  function draw() {

    background(255);

    drawBall();

    // soit f la friction.
    f = 0.001;
    //accélération
    accX = rotationY * f;
    accY = rotationX * f;
    //vitesse
    vX += accX;
    vY += accY;
    //position
    posX += vX;
    posY += vY;

    /*********************************************************************************/

    text("score:" + score, 10, 17);
    //condition de rebond sur les bords de gauche et de droite.
    if ((xPos + ballSize / 2) >= windowWidth || (xPos - ballSize / 2) <= 0) {
      vX = -vX;
    }
    //condition de rebond sur les bords du haut et du bas.
    if ((yPos + ballSize / 2) >= windowHeight || (xPos - ballSize / 2) <= 0) {
      vY = -vY;
    }
    //condition de rebond sur les obstacles.
    for (var i = 0; i < 2; i++) {

      if (dist(posX, posY, obstacles[i].xPos, obstacles[i].yPos) <= ballSize / 2 + obstacles[i] / 2) {
        score = score + 10;
      }
    }

    /************************************************ fin fonction draw ************************************************/

    function Obstacle(genre) {
      this.type = genre;
      this.xPos = random(0, windowWidth);
      this.yPos = random(0, windowHeight);
      this.size = random(25, 50);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));

      this.display = function() {
        fill(this.color);
        ellipse(this.xPos, this.yPos, this.size, this.size);
      }
    }

    function drawBall() {
      fill(200, 10, 0);
      ellipse(posX, posY, ballSize, ballSize);
    }
  }