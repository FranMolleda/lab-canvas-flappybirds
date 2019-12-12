const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    framesCounter: 0,
    playerKeys: {
    SPACE: 32
    },
    score: 0,
  
    init: function() {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.width = window.innerWidth/2;//Aquí le damos el tamaño.
      this.height = window.innerHeight*0.65;//Aquí le damos el tamaño.
      this.canvas.width = this.width;//Aquí metemos el dato que le hemos dado anteriormente
      this.canvas.height = this.height;
      
  
      this.start();
    },
  
    start: function() {
      this.reset()
      this.interval = setInterval(() => {
        this.framesCounter++;
  
        this.clear();
        this.drawAll();
        this.moveAll();
        this.clearObstacles()
        if(this.framesCounter % 70 === 0) this.generateObstacles()
        if(this.isCollision()) this.gameOver()
        if(this.player.posY>550 || this.player.posY<-50) this.gameOver()

      }, 1000/this.fps)
    },
  
    reset: function() {
      this.background = new Background(this.ctx, this.width, this.height);
      this.player = new Player(this.ctx, 50, 50,'./images/flappy.png', this.width,this.height, this.playerKeys);
      this.obstacles = []
      this.obstaclesTop = []

    },
  
    clear: function() {
      this.ctx.clearRect(0, 0, this.width, this.height)
    },
  
    drawAll: function() {
      this.background.draw();
      this.player.draw();
      this.obstacles.forEach(obstacle => obstacle.draw())
      this.obstaclesTop.forEach(obstacle => obstacle.draw())

        
    },
  
    moveAll: function() {
      this.background.move()
      this.player.move()
      this.obstacles.forEach(obstacle => obstacle.move())
      this.obstaclesTop.forEach(obstacle => obstacle.move())

    },

    generateObstacles: function() {
      this.height=Math.floor(Math.random()*(350-550))+475
      this.obstaclesTop.push(new Obstacle(this.ctx,'./images/obstacle_top.png', this.width, this.height, this.width, this.height-650))
      this.obstacles.push(new Obstacle(this.ctx,'./images/obstacle_bottom.png', this.width, this.height, this.width, this.height))
      },
  
      clearObstacles: function() {
        this.obstacles = this.obstacles.filter(obstacle => (obstacle.posX >= 0))
        this.obstaclesTop = this.obstaclesTop.filter(obstacle => (obstacle.posX >= 0))

      },
  
     gameOver: function() {
       clearInterval(this.interval)
       console.log('game over')
     },
  

  }