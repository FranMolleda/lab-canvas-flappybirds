class Obstacle {
  constructor(ctx, image, posX, posY, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;

    this.posX = 700;
    this.posY = posY

    this.vx = 6;
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX-200, this.posY, this.width, this.height )
  }

  move() {
    this.posX -= this.vx;
  }
}
