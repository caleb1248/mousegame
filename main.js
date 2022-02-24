import './style.css';

class Bullet {
  constructor(initialPosition, direction) {
    this.position = initialPosition;
    this.speed = 4;
    this.direction = direction;
  }

  update() {

  }
}

class Player {
  constructor(canvas) {
    this.position = new XY();
    this.canvas = canvas;
    this.angle = Math.PI * 3 / 8;
    this.speed = 1;
    const mouse = new XY();
    this.keys = {
      'ArrowRight': false,
      'ArrowUp': false,
      'ArrowDown': false,
      'ArrowLeft': false
    }
  }

  render() {
    this.canvas.save();
    this.canvas.translate(this.position.x, this.position.y);
    this.canvas.rotate(this.angle - Math.PI / 2);
    this.canvas.fillRect(-5, -5, 10, 10);
    this.canvas.restore();
  }

  handleMouseMove({ clientX, clientY }) {
    const { x, y } = this.position;
    const dy = clientY - y,
      dx = clientX - x;
    this.angle = Math.atan2(dy, dx);
  }

  handleKeyEvent(e) {
    this.keys[e.key] = e.type == 'keydown';
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
  }
  shoot() {
    var bullet = new Bullet(this.position, this.angle);
  }
}

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const player = new Player(ctx);

function frame() {
  requestAnimationFrame(frame);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  player.update();
  player.render();
}

frame();
window.addEventListener('mousemove', player.handleMouseMove.bind(player));
window.addEventListener('keydown', player.handleKeyEvent.bind(player));
window.addEventListener('keyup', player.handleKeyEvent.bind(player));