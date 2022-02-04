import './style.css'
import Player from './player'
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const player = new Player(ctx);
player.render();
function frame(){
  reqestAnimationFrame(frame);
  player.render()
}