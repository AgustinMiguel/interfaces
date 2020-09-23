class Board {
    constructor(context) {
        this.i = 7;
        this.j = 7;
        this.context = context;
        this.board = [];
        this.insertsPoints = [];
    }

    createBoard() {
        let square;
        for (let x = 0; x < this.i; x++) {
            this.board[x] = [];
            for (let y = 0; y < this.j; y++) {
                let posX = (x * 100) + 270;
                let posY = (y * 100) + 90;
                square = new Square(this.context, posX, posY);
                square.addImage(posX, posY);
                this.board[x][y] = square;
            }
            square = this.board[x][0];
            let pointToInsert = square.getPosition();
            pointToInsert.x = pointToInsert.x + 50 ;
            pointToInsert.y =  pointToInsert.y - 30;
            this.insertsPoints[x] = pointToInsert;
        }
    }

    clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.rect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "rgba(255,255,255,1)";
        context.fill();
    }

    getInsertsPoints() {
        return this.insertsPoints;
    }

    
    onPositionToInsert(coin) {
        for (let i = 0; i < this.insertsPoints.length; i++) {
            let position = this.insertsPoints[i];
            if(coin.isPointInside(position.x, position.y)){
                return i;
            }
        }
        return null;
    }


    resolveMove(coin) {
        let position = this.onPositionToInsert(coin);
        if(position === null){
            return false;
        }else{
            console.log("ADENTRO PUTO");
            return true;
        }
    }

}

