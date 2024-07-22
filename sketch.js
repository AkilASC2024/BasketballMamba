let snake;
let snakeXPos = 100;
let snakeYPos = 100;
let basketBallXPos = 300;
let basketBallYPos = 300;
let basketBall;
let basketBallSize;
let basketBallHalfSize
let arena;
let court;
let hoopSound;
let state = "chillin";
let mode;
let score = 0;
let winScore = 20;

let snakeTop,snakeRight,snakeBottom,snakeLeft;
let basketBallTop,basketBallRight,basketBallBottom,basketBallLeft;

function preload() {
    basketBall = loadImage("images/basketball.webp");
    snake = loadImage("images/snakehead.jpg");
    arena = loadImage("images/arena.jpg")
    court = loadImage("images/why.jpg");
    goat = loadImage("images/topg.webp");
    goatGlasses = loadImage("images/goatglasses.png");
}

function setup() {
    createCanvas(500,500);
    background(0);

    imageMode(CENTER);
}

function draw() {
    if (state == "chillin") {
        image(arena,250,250,500,500);
        fill(255);
        textSize(40);
        text("Basketball Mamba",80,100);
        fill(0,255,0)
        rect(100,200,300,50)
        fill(0)
        text("Ez", 220,240)
        fill(255,255,0)
        rect(100,275,300,50)
        fill(0)
        text("A lil kick", 180,315)
        fill(255,0,0)
        rect(100,350,300,50)
        fill(0)
        text("G.O.A.T Level", 122,390)
    }
    if (state == "ballin") {
        background(0)
        fill(255,0,0)
        image(court,250,250,500,500)
        image(snake,snakeXPos, snakeYPos,30,30)
        image(basketBall,basketBallXPos,basketBallYPos,basketBallSize,basketBallSize)
        if (keyIsDown(LEFT_ARROW)) {
            snakeXPos -= 10;
        }
        else if (keyIsDown(RIGHT_ARROW)) {
            snakeXPos += 10;
        }
        else if (keyIsDown(UP_ARROW)) {
            snakeYPos -= 10;
        }
        else if (keyIsDown(DOWN_ARROW)) {
            snakeYPos += 10;
        }
        
        // Keep the snake within the canvas bounds
        snakeXPos = constrain(snakeXPos, 0, width - 10);
        snakeYPos = constrain(snakeYPos, 0, height - 10);

        snakeTop = snakeYPos - 15
        snakeRight = snakeXPos + 15
        snakeBottom = snakeYPos + 15
        snakeLeft = snakeXPos - 15

        basketBallTop = basketBallYPos - basketBallHalfSize
        basketBallRight = basketBallXPos + basketBallHalfSize
        basketBallBottom = basketBallYPos + basketBallHalfSize
        basketBallLeft = basketBallXPos - basketBallHalfSize

        if (snakeLeft > basketBallRight || snakeRight < basketBallLeft || snakeTop > basketBallBottom || snakeBottom < basketBallTop) {

        }
    
        else {
        basketBallXPos = random(10,490);
        basketBallYPos = random(10,490);
        score += 1
        }

        fill(255,0,0);
        strokeWeight(10);
        textSize(15);
        text("Get",15,25);
        text(winScore,42,25);
        text("balls!",62,25);
        text("Score:",15,40);
        text(score,60,40);

        if (score == winScore && mode == "ez") {
            image(goat,250,250,500,500);
            image(goatGlasses,300,50,300,300);
            fill(255);
            textSize(40);
            text("Ight I see you",125,400); 
            basketBallSize = 0
            basketBallHalfSize = 0
        }
        if (score == winScore && mode == "aLilKick") {
            image(goat,250,250,500,500);
            image(goatGlasses,300,50,300,300);
            fill(255);
            textSize(40);
            text("You was ready for that",50,400); 
            basketBallSize = 0
            basketBallHalfSize = 0
        }
        if (score == winScore && mode == "goatLevel") {
            image(goat,250,250,500,500);
            image(goatGlasses,300,50,300,300);
            fill(255);
            textSize(40);
            text("GOAT ALERT!!!",100,400); 
            basketBallSize = 0
            basketBallHalfSize = 0
        }
   }
}

function mouseClicked() {
    if (mouseX > 100 && mouseX < 400 && mouseY > 200 && mouseY < 250) {
        state = "ballin"
        mode = "ez"
        basketBallSize = 20
        basketBallHalfSize = 10
        winScore = 20
    }

    else if (mouseX > 100 && mouseX < 400 && mouseY > 275 && mouseY < 325) {
        state = "ballin"
        mode = "aLilKick"
        basketBallSize = 15
        basketBallHalfSize = 7.5
        winScore = 30
    }

    else if (mouseX > 100 && mouseX < 400 && mouseY > 350 && mouseY < 400) {
        state = "ballin"
        mode = "goatLevel"
        basketBallSize = 10
        basketBallHalfSize = 5
        winScore = 40
    }
}
// use the curly brackets/thanks brother

// its actually keyPressed