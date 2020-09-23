let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let board = new Board(context);
let posicionFichasY = 800;
let coins = [];
let lastClickedFigure = null;
let isMouseDown = false;
let img = new Image();
img.src = "./images/tableroVacio.png";
img.onload = function () {
    let img = new Image();
    img.src = "./images/FichaVioleta.png";
    img.onload = function () {
        board.createBoard();
        for (let i = 22; i > 0; i--) {
            let coin = new Coin(i, context, 150, posicionFichasY);
            posicionFichasY = posicionFichasY - 20;
            coin.drawCoin();
            coins[i] = coin;
        }

        canvas.addEventListener('mousedown', function () {              //Evento mousedown comienza el draggeo
            isMouseDown = true;
            let clickedFigure = findClickedFigure(event.layerX, event.layerY);
            if (clickedFigure != null) {
                lastClickedFigure = clickedFigure;
            }
            canvas.addEventListener('mousemove', function () {              ///Evento mousemove draggea la ficha
                if (isMouseDown && lastClickedFigure != null) {
                    lastClickedFigure.setPosition(event.layerX, event.layerY);
                    drawCoins();
                }
            })
        })

        canvas.addEventListener('mouseup', function () {            // Evento, analizo si se clikeo una ficha, y si se clikeo analizo en que lugar esta.
            if (lastClickedFigure != null) {
                board.resolveMove(lastClickedFigure);
                lastClickedFigure = null;
                clickedFigure = null;
                isMouseDown = false;
            }

        })

        function findClickedFigure(posX, posY) {
            for (let i = 1; i < coins.length; i++) {
                let coin = coins[i];
                if (coin.isPointInside(posX, posY)) {
                    return coin;
                }
            }
        }

        function drawCoins() {
            clearCanvas();
            board.createBoard();
            for (let i = 1; i < coins.length; i++) {
                let coin = coins[i];
                coin.drawCoin();
            }
        }

        function clearCanvas() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.rect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "rgba(255,255,255,1)";
            context.fill();
        }
    }
}