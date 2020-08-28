let ctx = document.querySelector("#canvas").getContext("2d");
ctx.fillStyle = "#ffff00";
ctx.fillRect(100,100,20,50);
let imgData = ctx.createImageData(100, 100);
ctx.putImageData(imgData, 25, 25);