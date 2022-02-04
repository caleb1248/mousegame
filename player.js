export default class Player{
    constructor(canvas){
        this.position = {x:0,y:0};
        this.canvas = canvas
    }
    render(){
        this.canvas.fillRect(this.position.x,this.position.y, 10, 10);
    }
}