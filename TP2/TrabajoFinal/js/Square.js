class Square {
    constructor(posX, posY, context) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.height = 100;
        this.width = 100;
    }
    setFill(fill) {
        this.fill = fill;
    }

    getPosition() {
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }

    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }

    getFill() {
        return this.fill;
    }

    draw() {
        this.context.rect(this.posX, this.posY, this.height, this.width);
        this.fill = "#000000";
        this.context.fill();
        this.context.closePath();
    }

    addImage(posX, posY) {
        let img = new Image();
        img.src = "./images/tablero.png";
        img.onload = function(){
            context.drawImage(img,posX,posY);
        }
    }
}