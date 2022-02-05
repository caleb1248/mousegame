export default class Bullet{
    constructor(initialPosition, direction){
        this.position = initialPosition;
        this.speed = 4;
        setInterval(() => {
            console.log(this.position)
        })
    }
    
    update(){
        
    }
}