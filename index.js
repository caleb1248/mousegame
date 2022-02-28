const express = require('express'),
  app = express(),
  server = app.listen(3000, () => console.log('Go to http://localhost:3000'));
  io = require('socket.io')(server);

app.use(express.static('.'));
io.on('connection', socket => {
  console.log('connection');
  socket.on('joining', () => {
    var player = new Player();
    users.push(player);

    socket.on('mousemove', player.handleMouseMove.bind(player));
    socket.on('shoot', player.shoot.bind(player));
    socket.on('keychange', player.handleKeyEvent.bind(player));
  });
});

/**
 * @type {Array<Player>}
 */
var users = [];

class Bullet {
  constructor({x,y}, direction, canvas) {
    this.canvas = canvas;
    this.pos = {x: x, y: y};
    this.speed = 8;
    this.direction = direction;
  }

  update() {
    this.pos.x += this.speed * Math.cos(this.direction);
    this.pos.y += this.speed * Math.sin(this.direction);
  }
}

class Player {
  constructor() {
    this.position = { x: 0, y: 0 }
    this.angle = Math.PI * 3 / 8;
    this.speed = 1;
    this.keys = {
      'ArrowRight': false,
      'ArrowUp': false,
      'ArrowDown': false,
      'ArrowLeft': false
    };
    this.bullets = [];
  }

  handleMouseMove({ clientX, clientY }) {
    const { x, y } = this.position;
    const dy = clientY - y,
      dx = clientX - x;
    this.angle = Math.atan2(dy, dx);
  }

  handleKeyEvent(newKeys) {
    console.log('keychange fired: new keys are', newKeys);
    this.keys = newKeys
  }

  update() {
    var { ArrowRight, ArrowLeft, ArrowUp, ArrowDown } = this.keys;
    if (ArrowRight && ArrowLeft) {

    } else if (ArrowUp && ArrowDown) {

    } else {
      if (ArrowUp) this.position.y -= this.speed;
      if (ArrowRight) this.position.x += this.speed;
      if (ArrowDown) this.position.y += this.speed;
      if (ArrowLeft) this.position.x -= this.speed;
    }
    for(var bullet of this.bullets){
      bullet.update();
    }
  }
  shoot() {
    console.log('someone shooted')
    this.bullets.push(new Bullet(this.position, this.angle, this.canvas));
  }
}