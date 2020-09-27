let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let board = new Board(context);
let player1 = new Player("agustin", "rojo", 150, this.context);
let player2 = new Player("mariano", "azul", 1080, this.context);
let posicionFichasY = 800;
let lastClickedFigure = null;
let isMouseDown = false;
let img = new Image();
let turn = player1;
let coinsPlayer1 = player1.getCoins();
let coinsPlayer2 = player2.getCoins();
let oldPosition = 0;
let moves = 0;

board.createBoard(); //PASAR IMGENES DEL BOARD VACIO
player1.createCoins();
player2.createCoins();
canvas.addEventListener('mousedown', function () {              //Evento mousedown comienza el draggeo
    isMouseDown = true;
    let clickedFigure = findClickedFigure(event.layerX, event.layerY);
    if (clickedFigure != null) {
        lastClickedFigure = clickedFigure;
        oldPosition = clickedFigure.getPosition();
    }
    canvas.addEventListener('mousemove', function () {              ///Evento mousemove draggea la ficha
        if (isMouseDown && lastClickedFigure != null) {
            lastClickedFigure.setPosition(event.layerX, event.layerY);
            drawCanvas();
        }
    })
})

canvas.addEventListener('mouseup', function () { // Evento, analizo si se clikeo una ficha, y si se clikeo analizo en que lugar esta.         
    if (lastClickedFigure != null) {
        let outcome = board.resolveMove(lastClickedFigure);
        if (outcome === true) {
            let play = board.checkPlay(lastClickedFigure.getColor());
            if (play === true) {
                console.log("GANO EL ")
                console.log(lastClickedFigure.getColor());
                document.querySelector("#canvas").className = "Hidden";
                if (lastClickedFigure.getColor() === "rojo") {
                    document.querySelector("#redMessage").className = "Paint";
                } else {
                    document.querySelector("#blueMessage").className = "Paint";
                }
            }
            deleteCoin(lastClickedFigure);
            moves++;
            if (moves === 49) {
                document.querySelector("#canvas").className = "Hidden";
                document.querySelector("#drawMessage").className = "Paint";
            }
            changeTurn(lastClickedFigure.getColor());
        } else {
            lastClickedFigure.setPosition(oldPosition.x, oldPosition.y);
        }
    }
    lastClickedFigure = null;
    clickedFigure = null;
    isMouseDown = false;
    drawCanvas();
})

function findClickedFigure(posX, posY) {
    for (let i = 0; i < coinsPlayer1.length; i++) {
        if (turn === player1) {
            let coin = coinsPlayer1[i];
            if (coin !== null) {
                if (coin.isPointInside(posX, posY)) {
                    return coin;
                }
            }
        } else {
            if (turn === player2) {
                let coin = coinsPlayer2[i];
                if (coin !== null) {
                    if (coin.isPointInside(posX, posY)) {
                        return coin;
                    }
                }
            }
        }
    }
}

function drawCanvas() {
    clearCanvas();
    board.drawBoard();
    for (let i = 0; i < coinsPlayer1.length; i++) {
        let coin1 = coinsPlayer1[i];
        let coin2 = coinsPlayer2[i];
        if (coin1 !== null) {
            coin1.drawCoin(player1.getColor());
        }
        if (coin2 !== null) {
            coin2.drawCoin(player2.getColor());
        }
    }
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(255,255,255,1)";
    context.fill();
}


function changeTurn() {
    if (turn === player1) {
        turn = player2;
    } else {
        turn = player1;
    }
}

function deleteCoin(lastClickedFigure) {
    if (turn === player1) {
        for (let i = 0; i < coinsPlayer1.length; i++) {
            let coin = coinsPlayer1[i];
            if (coin === lastClickedFigure) {
                coinsPlayer1[i] = null;
                lastClickedFigure.setPosition(0, 0);
            }
        }
    } else {
        for (let i = 0; i < coinsPlayer2.length; i++) {
            let coin = coinsPlayer2[i];
            if (coin === lastClickedFigure) {
                coinsPlayer2[i] = null;
                lastClickedFigure.setPosition(0, 0);
            }
        }
    }
}
function restart() {
    board.createBoard();
    player1.createCoins();
    player2.createCoins();
    document.querySelector("#blueMessage").className = "Hidden";
    document.querySelector("#redMessage").className = "Hidden";
    document.querySelector("#canvas").className = "Paint";
    document.querySelector("#drawMessage").className = "Hidden";
    turn = player1;
    moves = 0;

}
document.querySelector("#buttonRestart").addEventListener("click", restart);

