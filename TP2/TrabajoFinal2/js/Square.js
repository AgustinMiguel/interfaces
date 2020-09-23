class Square {
    constructor(context, posX, posY) {
        this.context = context;
        this.posX = posX;
        this.posY = posY;
        this.status = false;
    }

    draw() {
        this.context.beginPath();
        this.context.rect(this.posX, this.posY, 100, 100);
        this.context.stroke();
    }

    addImage() {
        let img = new Image();
        if(this.status === false){        
            img.src = "./images/tableroVacio.png";
        }else{
            img.src = "./images/tableroUsado.png";
        }
        context.drawImage(img, this.posX, this.posY);
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

    getStatus(){
        return this.status;
    }

    setStatus(status){
        this.status = status;
    }
}