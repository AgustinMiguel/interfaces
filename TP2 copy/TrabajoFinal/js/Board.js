class Board {
    constructor(context) {
        this.context = context;
        this.i = 6;
        this.j = 6;
        this.board = [this.i];
    }

    createBoard() {
        for (let x = 0; x < this.i; x++) {
            board[x]=[];
            for (let y = 0; y < this.j; y++) {
                let posX = (x*100)+290;
                let posY = (y*100)+70;
                let square = new Square(posX, posY, this.context);
                square.draw();
                board[x][y] = square;
                square.addImage(posX, posY);
            }
        }
    } 
}