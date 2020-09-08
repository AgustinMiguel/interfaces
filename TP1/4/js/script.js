let ctx = document.querySelector("#canvas").getContext("2d");
let imageData = ctx.createImageData(canvas.width,canvas.height);
let color = imageData;
for(let i = 0; i < imageData.width; i++){
  for(let j = 0; j < imageData.height; j++){
    color.r = j/imageData.height * 255;
    color.g = j/imageData.height * 255;
    color.b = j/imageData.height * 255;
    setPixel(imageData, i, j , color.r, color.g, color.b, 255);
  }
}
ctx.putImageData(imageData, 0, 0);
function setPixel(imageData,x , y, r, g, b, a){
  let index = (x + y * imageData.width) * 4;
  imageData.data[index+0] = r;
  imageData.data[index+1] = g;
  imageData.data[index+2] = b;
  imageData.data[index+3] = a;
}