"use strict";
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let color = "#000000";
let pencil = false;
let eraser = false;
let active;
let coordinates1;
let coordinates2;
let imageAspectRatio;
let imageScaledWidth;
let imageScaledHeight;
let input = document.querySelector('.inputFile');
let oldImage;
ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "rgba(255,255,255,1)";
ctx.fill();

document.querySelector("#buttonSave").addEventListener("click", save); //EVENTO PARA GUARDAR TU CANVAS
document.querySelector("#buttonRemoveFilters").addEventListener("click", removeFilters);
document.querySelector("#buttonBinary").addEventListener("click", getBinary);
document.querySelector("#buttonSepia").addEventListener("click", getSepia);
document.querySelector("#buttonNegative").addEventListener("click", getNegativeFilter);
document.querySelector("#buttonBrightness").addEventListener("click", getBrightnessFilter);
document.querySelector("#buttonBlur").addEventListener("click", blurFilter);
document.querySelector("#buttonClear").addEventListener("click", clearCanvas);
document.querySelector("#buttonPencil").addEventListener("click", function () { //EVENTO PARA SWITCHEAR EL LAPIZ
        if (pencil) {
                pencil = false;
        }
        else {
                pencil = true;
                eraser = false;
        }
});
document.querySelector("#buttonEraser").addEventListener("click", function () { //EVENTO PARA SWITCHEAR LA GOMA
        if (eraser) {
                eraser = false;
        }
        else {
                eraser = true;
                pencil = false;
        }
});
canvas.addEventListener("mousedown", function () { //EVENTO PARA ACTIVAR EL PAINT
        active = true;
});
canvas.addEventListener("mousedown", mouseClick); //EVENTO PARA PINTAR
canvas.addEventListener("mouseup", function () { //EVENTO PARA DEJAR DE PINTAR
        active = false;
});
input.onchange = e => {    //EVENTO PARA SUBIR LA IMAGEN CON ESCALAMIENTO         
        clearCanvas();
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = readerEvent => {
                let content = readerEvent.target.result;
                let image = new Image();
                image.src = content;
                image.onload = function () {
                        if (this.width > this.height) {
                                imageAspectRatio = (1.0 * this.height) / this.width;
                                imageScaledWidth = canvas.width;
                                imageScaledHeight = canvas.width * imageAspectRatio;
                        } else {
                                imageAspectRatio = (1.0 * this.width) / this.height;
                                imageScaledWidth = canvas.height;
                                imageScaledHeight = canvas.height * imageAspectRatio;
                        }
                        ctx.drawImage(this, 0, 0, imageScaledWidth, imageScaledHeight);
                        let imageData = ctx.getImageData(0, 0, imageScaledWidth, imageScaledHeight);
                        oldImage = imageData;
                        ctx.putImageData(imageData, 0, 0);
                }
        }
}

function removeFilters() {
        ctx.putImageData(oldImage, 0, 0);
}

function clearCanvas() {
        pencil = false;
        eraser = false;
        color = "#000000";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function mouseClick() {                 //FUNCION PARA COMENZAR A PINTAR EN EL CANVAS
        if (active) {
                coordinates1 = getCoordinates(event);
                canvas.addEventListener("mousemove", function () {
                        draw(ctx, event);
                })
        }
}

function draw(ctx, event) {             //FUNCION PARA PINTAR EN EL CANVAS
        if ((pencil || eraser) && (active)) {
                coordinates2 = getCoordinates(event);
                console.log();
                ctx.lineWidth = 3;
                if (eraser)
                        ctx.strokeStyle = "#ffffff";
                else {
                        color = document.querySelector("#colorPicker").value;
                        ctx.strokeStyle = color;
                }
                ctx.beginPath();
                ctx.moveTo(coordinates1.x, coordinates1.y);
                ctx.lineTo(coordinates2.x, coordinates2.y);
                ctx.stroke();
                coordinates1 = coordinates2;
        }
}

function getCoordinates(event) {        //RETORNA LAS COORDENADAS DEL PUNTERO
        return {
                x: event.clientX,
                y: event.clientY
        };
}

function save() {                               //PREPARA EL ARCHIVO PARA HACER UN SAVE
        let dataURL = canvas.toDataURL();
        downloadImage(dataURL, 'my-canvas.jpeg');
}

function downloadImage(data, filename = 'untitled.jpeg') {              //DESCARGA LO QUE HAYA EN TU CANVAS
        let a = document.createElement('a');
        a.href = data;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
}

function getRed(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 0];
}

function getGreen(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 1];
}

function getBlue(imageData, x, y) {
        let index = (x + y * imageData.width) * 4;
        return imageData.data[index + 2];
}

function getSepia() {
        let index;
        let pixel;
        let imageData = ctx.getImageData(0, 0, imageScaledWidth, imageScaledHeight);
        for (let x = 0; x < imageData.width; x++) {
                for (let y = 0; y < imageData.height; y++) {
                        index = (x + y * imageData.width) * 4;
                        pixel = 0.3 * getRed(imageData, x, y) + 0.6 * getGreen(imageData, x, y) + 0.1 * getBlue(imageData, x, y);
                        let r = Math.min(pixel + 35, 255);
                        let g = Math.min(pixel + 20, 255);
                        let b = pixel;
                        imageData.data[index + 0] = r;
                        imageData.data[index + 1] = g;
                        imageData.data[index + 2] = b;
                }
        }
        ctx.putImageData(imageData, 0, 0);
}

function getBrightnessFilter() {
        let index;
        let imageData = ctx.getImageData(0, 0, imageScaledWidth, imageScaledHeight);
        for (let x = 0; x < imageData.width; x++) {
                for (let y = 0; y < imageData.height; y++) {
                        index = (x + y * imageData.width) * 4;
                        let r = imageData.data[index + 0] + 77;
                        let g = imageData.data[index + 1] + 77;
                        let b = imageData.data[index + 2] + 77;
                        imageData.data[index + 0] = r;
                        imageData.data[index + 1] = g;
                        imageData.data[index + 2] = b;
                }
        }
        ctx.putImageData(imageData, 0, 0);
}

function getBinary() {
        let r;
        let b;
        let g;
        let imageData = ctx.getImageData(0, 0, imageScaledWidth, imageScaledHeight);
        for (let y = 0; y < canvas.height; y++) {
                for (let x = 0; x < canvas.width; x++) {
                        let index = (x + y * imageData.width) * 4;
                        r = getRed(imageData, x, y);
                        g = getGreen(imageData, x, y);
                        b = getBlue(imageData, x, y);
                        let promedio = (r + g + b) / 3;
                        imageData.data[index + 0] = promedio;
                        imageData.data[index + 1] = promedio;
                        imageData.data[index + 2] = promedio;
                }
        }
        ctx.putImageData(imageData, 0, 0);
}

function getNegativeFilter() {
        let index;
        let imageData = ctx.getImageData(0, 0, imageScaledWidth, imageScaledHeight);
        for (let x = 0; x < imageData.width; x++) {
                for (let y = 0; y < imageData.height; y++) {
                        index = (x + y * imageData.width) * 4;
                        let r = 255 - getRed(imageData, x, y);
                        let g = 255 - getGreen(imageData, x, y);
                        let b = 255 - getBlue(imageData, x, y);
                        imageData.data[index + 0] = r;
                        imageData.data[index + 1] = g;
                        imageData.data[index + 2] = b;
                }
        }
        ctx.putImageData(imageData, 0, 0);
}

function blurFilter() {
        let index;
        let imageData = ctx.getImageData(0, 0, imageScaledWidth, imageScaledHeight);
        let matriz = [
                [1 / 9, 1 / 9, 1 / 9],
                [1 / 9, 1 / 9, 1 / 9],
                [1 / 9, 1 / 9, 1 / 9]
        ];


        let r = 0;
        let g = 0;
        let b = 0;


        for (let x = 1; x < imageData.width - 1; x++) {
                for (let y = 1; y < imageData.height - 1; y++) {
                        promedioMatriz(imageData, x, y, matriz, r, g, b, index);
                        index = (x + y * imageData.width) * 4;
                }
        }
        ctx.putImageData(imageData, 0, 0);
}

function promedioMatriz(imageData, x, y, matriz, r, g, b, index) {
        r = getRed(imageData, x - 1, y - 1) * 1 / 9 + getRed(imageData, x, y - 1) * 1 / 9 + getRed(imageData, x + 1, y - 1) * 1 / 9
                + getRed(imageData, x - 1, y) * 1 / 9 + getRed(imageData, x, y) * 1 / 9 + getRed(imageData, x + 1, y) * 1 / 9
                + getRed(imageData, x - 1, y + 1) * 1 / 9 + getRed(imageData, x, y + 1) * 1 / 9 + getRed(imageData, x + 1, y + 1) * 1 / 9;
        g = getGreen(imageData, x - 1, y - 1) * 1 / 9 + getGreen(imageData, x, y - 1) * 1 / 9 + getGreen(imageData, x + 1, y - 1) * 1 / 9
                + getGreen(imageData, x - 1, y) * 1 / 9 + getGreen(imageData, x, y) * 1 / 9 + getGreen(imageData, x + 1, y) * 1 / 9
                + getGreen(imageData, x - 1, y + 1) * 1 / 9 + getGreen(imageData, x, y + 1) * 1 / 9 + getGreen(imageData, x + 1, y + 1) * 1 / 9;
        b = getBlue(imageData, x - 1, y - 1) * 1 / 9 + getBlue(imageData, x, y - 1) * 1 / 9 + getBlue(imageData, x + 1, y - 1) * 1 / 9
                + getBlue(imageData, x - 1, y) * 1 / 9 + getBlue(imageData, x, y) * 1 / 9 + getBlue(imageData, x + 1, y + 1) * 1 / 9
                + getBlue(imageData, x - 1, y + 1) * 1 / 9 + getBlue(imageData, x, y + 1) * 1 / 9 + getBlue(imageData, x + 1, y + 1) * 1 / 9;
        imageData.data[index + 0] = r;
        imageData.data[index + 1] = g;
        imageData.data[index + 2] = b;
}

