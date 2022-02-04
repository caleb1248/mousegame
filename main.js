import './style.css'
import Player from './player'
const canvas = document.querySelector('canvas');
const player = new Player(canvas);
player.render()