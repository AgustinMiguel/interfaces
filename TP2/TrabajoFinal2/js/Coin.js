class Coin {
    constructor(id, context, posX, posY) {
        this.id = id;
        this.context = context;
        this.posX = posX;
        this.posY = posY;
    }

    drawCoin() {
        context.beginPath();
        let img = new Image();
        img.src = "./images/FichaVioleta.png"
        let imgSize = 270;
        context.drawImage(img, this.posX - (imgSize / 2), this.posY - (imgSize / 2), imgSize, imgSize);
        context.stroke();
        this.context.closePath();
    }

    isPointInside(posX, posY) {
        let x = this.posX - posX;
        let y = this.posY - posY;
        return Math.sqrt(x * x + y * y) < 35;
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