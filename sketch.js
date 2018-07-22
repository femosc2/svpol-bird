var bird;
var pipes = [];
var bg;

function setup() {
    createCanvas(800, 600);
    bird = new Bird();
    pipes.push(new Pipe());
    bg = loadImage("graphics/background.jpg");
}


function draw() {
    background(bg);

    for (var i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            console.log("HIT");
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

function keyPressed() {
    if (key == " ") {
        bird.up();
    }
}