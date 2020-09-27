class Player {
    constructor(nombre, color, posX,context){
        this.nombre = nombre;
        this.color = color;
        this.playerCoins = [];
        this.posY = 800;
        this.posX = posX;
        this.context = context;
        this.turn = false;
    }

    createCoins(){
        for(let i = 0; i < 25; i++){
            let coin = new Coin(i, this.context, this.posX, this.posY, this.color);
            this.posY = this.posY - 30;
            coin.drawCoin(this.color);
            this.playerCoins[i] = coin;
        }
        this.posY = 800;
    }

    getCoins(){
        return this.playerCoins;
    }

    setColor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    getTurn(){
        return this.turn;
    }
    setTurn(turn){
        this.turn = turn;
    }
}