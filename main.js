import './style.css'
import Player from './player'
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const player = new Player(ctx);
function frame(){
  requestAnimationFrame(frame);
  ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
  player.update();
  player.render();
}
frame();
canvas.addEventListener('mousemove', player.handleMouseMove.bind(player))