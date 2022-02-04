export default class Player{
    constructor(canvas){
        this.position = {x:0,y:0};
    }
    render(){
        canvas.fillRect(this.position.x,this.position.y);
    }
}