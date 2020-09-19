"use strict"
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let figures = [];

function addFigure(){
    addCircle();
    drawFigures();
}

function drawFigures(){
    for (let i = 0; i < figures.length; i++){
        figures[i].draw();
    }
}

function addCircle(){
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeight);
    let color = "#000000";
    let circle = new Circle(posX, posY, 10, color, context);
    figures.push(circle);
}

addFigure();