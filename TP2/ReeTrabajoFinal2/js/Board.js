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
        let id = 0;
        for (let x = 0; x < this.i; x++) {
            this.board[x] = [];
            for (let y = 0; y < this.j; y++) {
                let posX = (x * 100) + 270;
                let posY = (y * 100) + 90;
                square = new Square(id, this.context, posX, posY,false);
                square.addImage(posX, posY);
                this.board[x][y] = square;
                id = id + 1;
            }
            square = this.board[x][0];
            let pointToInsert = square.getPosition();
            pointToInsert.x = pointToInsert.x + 50;
            pointToInsert.y = pointToInsert.y - 30;
            this.insertsPoints[x] = pointToInsert;
        }
    }

    resetBoard() {
        for (let x = 0; x < this.i; x++) {
            for (let y = 0; y < this.j; y++) {
                let square = this.board[x][y];
                square.setStatus = "false";
                this.board[x][y] = square;
            }
        }
    }

    drawBoard() {
        let square;
        for (let x = 0; x < this.i; x++) {
            for (let y = 0; y < this.j; y++) {
                square = this.board[x][y];
                square.addImage();
            }
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
            if (coin.isPointInside(position.x, position.y)) {
                return i;
            }
        }
        return null;
    }

    insertInBoard(x, coin) {                 //RECORRO LA MATRIZ SOLO POR EL EJE Y PORQUE YA SE LA POSICION DEL X
        let square = new Square();
        for (let y = 0; y < this.j; y++) {
            square = this.board[x][y];
            if (square.getStatus() !== false) {
                if (y - 1 < 0) {
                    return
                } else {
                    square = this.board[x][y - 1];
                    square.setStatus(coin.getColor());
                    return;
                }
            } else {
                if (y === this.j - 1) {
                    square = this.board[x][y];
                    square.setStatus(coin.getColor());
                    return;
                }
            }
        }
    }

    resolveMove(coin) {
        let position = this.onPositionToInsert(coin);
        if (position === null) {
            return false;
        } else {
            this.insertInBoard(position, coin);
            return true;                                 //////////ACA TENGO QUE METERLO A LA MATRIZ
        }
    }

    checkPlay(color) {
        let square = new Square();
        for (let x = this.i - 1; x > -1; x--) {
            for (let y = 0; y < this.j; y++) {
                let counter = 0;
                square = this.board[x][y];
                if (square.getStatus() === color) {
                    counter = this.checkUp(color, x, y);
                    if (counter === 4) {
                        return true;
                    }
                    counter = this.checkLeft(color, x, y);
                    if (counter === 4) {
                        return true;
                    }
                    counter = this.checkRight(color, x, y);
                    if (counter === 4) {
                        return true;
                    }
                    counter = this.checkLeftDiagonal(color, x, y);
                    if (counter === 4) {
                        return true;
                    }
                    counter = this.checkRigthDiagonal(color, x, y);
                    if (counter === 4) {
                        return true;
                    }
                }
            }
        }
    }

    checkUp(color, x, y) {
        let counter = 0;
        while (counter < 5 && y > -1) {
            let square = this.board[x][y];
            if (square.getStatus() === color) {
                counter++;
                y--;
            } else {
                return 0;
            }
            if (counter === 4) {
                return counter;
            }
        }
    }

    checkLeft(color, x, y) {
        let counter = 0;
        while (counter < 5 && x > -1) {
            let square = this.board[x][y];
            if (square.getStatus() === color) {
                counter++;
                x--;
            } else {
                return 0;
            }
            if (counter === 4) {
                return counter;
            }
        }
    }

    checkRight(color, x, y) {
        let counter = 0;
        while (counter < 5 && x < this.i) {
            let square = this.board[x][y];
            if (square.getStatus() === color) {
                counter++;
                x++;
            } else {
                return 0;
            }
            if (counter === 4) {
                return counter;
            }
        }
    }



    checkLeftDiagonal(color, x, y) {
        let counter = 0;
        while (counter < 5 && x > -1 && y > -1) {
            let square = this.board[x][y];
            if (square.getStatus() === color) {
                counter++;
                x--;
                y--;
            } else {
                return 0;
            }
            if (counter === 4) {
                return counter;
            }
        }
    }


    checkRigthDiagonal(color, x, y) {
        let counter = 0;
        while (counter < 5 && x < this.i && y > -1) {

            let square = this.board[x][y];
            if (square.getStatus() === color) {
                counter++;
                x++;
                y--;
            } else {
                return 0;
            }
            if (counter === 4) {
                return counter;
            }
        }
    }
}

