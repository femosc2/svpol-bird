function Pipe() {
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 100;
    this.speed = 3.5;
    this.hightlight = false;
    this.img = loadImage("graphics/pipe.png");
    this.imgReverse = loadImage("graphics/pipeReverse.png");

    this.pipeGenerator = true;

    this.hits = function(bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true;
                return true;
            }
        }
        this.highlight = false;
        return false;
    }

    this.show = function() {
        fill(255);
        if (this.highlight) {
            fill(255, 0, 0);
        }
        image(this.imgReverse, this.x, 0, this.w, this.top);
        image(this.img, this.x, height-this.bottom, this.w, this.bottom);
    };
    this.update = function() {
        this.x -= this.speed;
    };

}
