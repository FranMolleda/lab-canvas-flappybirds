class Obstacle {
  constructor(ctx, image, width, height, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.width = 80;
    this.height = height;
    this.image = new Image();
    this.image.src = image;

    this.posX = gameWidth +400;
    this.posY = gameHeight;

    this.vx = 6;
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX-200, this.posY, this.width, this.height )
  }

  move() {
    this.posX -= this.vx;
  }
}