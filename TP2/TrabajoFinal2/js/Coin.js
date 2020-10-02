class Coin {
    constructor(id, context, posX, posY, color ) {
        this.id = id;
        this.context = context;
        this.posX = posX;
        this.posY = posY;
        this.color = color;
    }

    drawCoin(color) {
        let imgSize = 100;
        context.beginPath();
        let img = new Image();
        if (color === "rojo") {
            context.drawImage(document.querySelector("#fichaRoja"), this.posX - (imgSize / 2), this.posY - (imgSize / 2), imgSize, imgSize);
        } else {
            if (color === "azul")
            context.drawImage(document.querySelector("#fichaAzul"), this.posX - (imgSize / 2), this.posY - (imgSize / 2), imgSize, imgSize);
        }
        context.stroke();
        context.closePath();
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

    getColor(){
        return this.color;
    }
    getId(){
        return this.id;
    }
}