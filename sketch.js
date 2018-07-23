var bird;
var pipes = [];
var bg1;
var bg2;
var interval = setInterval( increment, 700);
var score = -12;
var gameRunning = true;
var communist = new Audio('soviet-anthem.mp3');
var nazi = new Audio('nazi-anthem.mp3');


function setup() {
    createCanvas(1960, 600);
    bird = new Bird();
    pipes.push(new Pipe());
    bg1 = loadImage("graphics/background.png");
    bg2 = loadImage("graphics/background2.png");
}


function draw() {
    background(bg1);
    communist.play();
    for (var i = 1; i < pipes.length; i += 1) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            background(bg2);
            pipes = [];
            communist.pause();
            nazi.play();
            alert("The Nazis won, Your score: " + score);
            gameRunning = false;
            window.location.reload();
        }

        if (pipes[i].x <0) {
            pipes.slice(i, 1);
        }
    }

    bird.show();
    bird.update();

    if (frameCount % 40 == 0) {
        pipes.push(new Pipe());
    }
}

this.update = function() {

}

function increment(){
    score = score % 360 + 1;
    if (score > 0){
    document.getElementById("jsScore").innerHTML = score;
    } else {
        document.getElementById("jsScore").innerHTML = 0;
    }
};

function keyPressed() {
    if (key == " ") {
        bird.up();
    }
}