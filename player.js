export default class Player {
    constructor(canvas) {
        this.position = { x: 0, y: 0 };
        this.canvas = canvas;
        this.angle = Math.PI * 3 / 8;
        this.speed = 1;
        const mouse = { x: 0, y: 0 }
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
        this.
    }
    update() {
        if (this.position) {
            this.position.x += Math.cos(this.angle) * this.speed;
            this.position.y += Math.sin(this.angle) * this.speed;
        }
    }
}