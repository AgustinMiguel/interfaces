class Square {
    constructor(context, posX, posY) {
        this.context = context;
        this.posX = posX;
        this.posY = posY;
    }

    draw() {
        this.context.beginPath();
        this.context.rect(this.posX, this.posY, 100, 100);
        this.context.stroke();
    }

    addImage(posX, posY) {
        let img = new Image();
        img.src = "./images/tableroVacio.png";
        context.drawImage(img, posX, posY);
    }

    setPosition(x, y) {
        this.posX = x;
        this.posY = y;
    }

    getPosition() {
        return {
            x: this.posX,
            y: this.posY
        };
    }
}