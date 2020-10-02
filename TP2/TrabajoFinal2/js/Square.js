class Square {
    constructor(id,context, posX, posY) {
        this.context = context;
        this.posX = posX;
        this.posY = posY;
        this.status = false;
        this.id = id;
    }

    draw() {
        this.context.beginPath();
        this.context.rect(this.posX, this.posY, 100, 100);
        this.context.stroke();
    }

    addImage() {
        let img = new Image();
        if(this.status == false){        
            context.drawImage(document.querySelector("#tableroVacio"), this.posX, this.posY);
        }else{
            if(this.status === "rojo"){
                context.drawImage(document.querySelector("#tableroRojo"), this.posX, this.posY);
            }else{
                if(this.status ==="azul"){
                    context.drawImage(document.querySelector("#tableroAzul"), this.posX, this.posY);
                }
            }
        }
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