class Player {
    constructor(ctx,image, posX, posY, width, height, keys) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
  
      this.image = new Image();
      this.image.src = image;
  
      this.posX = 100;
      this.posY = 350;
      this.vy = 2;
      this.gravity = 0.3;
  
      this.frames = 3;
      this.framesIndex = 0;
  
      this.keys = keys;
      
      this.setListeners()
    }


  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
      
  }
  move() {
    
      this.posY += this.vy;
      this.vy += this.gravity;
    
    }
    setListeners() {
        document.addEventListener('keydown', (e) => {
          switch(e.keyCode) {
            case this.keys.SPACE:
                this.vy -= 10;
              break;
          }
        })
      }
  }