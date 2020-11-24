let slider1 = document.querySelector("#slider1");
let innerSlider1 = document.querySelector("#slider-inner1");
let slider2 = document.querySelector("#slider2");
let innerSlider2 = document.querySelector("#slider-inner2");
let slider3 = document.querySelector("#slider3");
let innerSlider3 = document.querySelector("#slider-inner3");
let slider4 = document.querySelector("#slider4");
let innerSlider4 = document.querySelector("#slider-inner4");
let myProgress = document.querySelector("#myProgress");
let myBar = document.querySelector("#myBar");
let play = document.getElementById('play')
let pause = document.getElementById('pause');

let pressed = false;
let startx;
let x;

play.addEventListener('click', (e)=>{
    play.style.display = 'none';
    pause.style.display = 'initial';
 });

 pause.addEventListener('click', (e)=>{
    pause.style.display = 'none';
    play.style.display = 'initial';
 });

myProgress.addEventListener('click', (e)=>{
   myBar.style.backgroundPosition = -400+e.offsetX+"px";
});


slider1.addEventListener('mousedown', (e)=>{
    pressed = true;
    startx = e.offsetX - innerSlider1.offsetLeft;
    slider1.style.cursor = 'grabbing';
});

slider1.addEventListener('mouseenter', ()=>{
    slider1.style.cursor = 'grab';
});

slider1.addEventListener('mouseup', ()=>{
    slider1.style.cursor = 'grab';
});

slider1.addEventListener('mouseup', ()=>{
    pressed= false;
});

slider1.addEventListener('mousemove', (e)=>{
   if(!pressed) return;
   e.preventDefault();
   x= e.offsetX;
    innerSlider1.style.left = `${x-startx}px`;
    checklimit(slider1,innerSlider1);
});

slider2.addEventListener('mousedown', (e)=>{
    pressed = true;
    startx = e.offsetX - innerSlider2.offsetLeft;
    slider2.style.cursor = 'grabbing';
});

slider2.addEventListener('mouseenter', ()=>{
    slider2.style.cursor = 'grab';
});

slider2.addEventListener('mouseup', ()=>{
    slider2.style.cursor = 'grab';
});

slider2.addEventListener('mouseup', ()=>{
    pressed= false;
});

slider2.addEventListener('mousemove', (e)=>{
   if(!pressed) return;
   e.preventDefault();
   x= e.offsetX;
    innerSlider2.style.left = `${x-startx}px`;
    checklimit(slider2,innerSlider2);
});

slider3.addEventListener('mousedown', (e)=>{
    pressed = true;
    startx = e.offsetX - innerSlider3.offsetLeft;
    slider3.style.cursor = 'grabbing';
});

slider3.addEventListener('mouseenter', ()=>{
    slider3.style.cursor = 'grab';
});

slider3.addEventListener('mouseup', ()=>{
    slider3.style.cursor = 'grab';
});

slider3.addEventListener('mouseup', ()=>{
    pressed= false;
});

slider3.addEventListener('mousemove', (e)=>{
   if(!pressed) return;
   e.preventDefault();
   x= e.offsetX;
    innerSlider3.style.left = `${x-startx}px`;
    checklimit(slider3,innerSlider3);
});

slider4.addEventListener('mousedown', (e)=>{
    pressed = true;
    startx = e.offsetX - innerSlider4.offsetLeft;
    slider4.style.cursor = 'grabbing';
});

slider4.addEventListener('mouseenter', ()=>{
    slider4.style.cursor = 'grab';
});

slider4.addEventListener('mouseup', ()=>{
    slider4.style.cursor = 'grab';
});

slider4.addEventListener('mouseup', ()=>{
    pressed= false;
});

slider4.addEventListener('mousemove', (e)=>{
   if(!pressed) return;
   e.preventDefault();
   x= e.offsetX;
    innerSlider4.style.left = `${x-startx}px`;
    checklimit(slider4, innerSlider4);
});

function checklimit(slider, innerSlider){
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();
    if(inner.left > document.querySelector(".side-bar").getBoundingClientRect().right){
        innerSlider.style.left = '0px';
    }else if(inner.right <outer.right ){
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
}
checklimit(slider1,innerSlider1);
checklimit(slider2,innerSlider2);
checklimit(slider3,innerSlider3);
checklimit(slider4,innerSlider4);













