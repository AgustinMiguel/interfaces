let slider3 = document.querySelector("#slider3");
let innerSlider3 = document.querySelector("#slider-inner3");
let slider4 = document.querySelector("#slider4");
let innerSlider4 = document.querySelector("#slider-inner4");
let myProgress = document.querySelector("#myProgress");
let myBar = document.querySelector("#myBar");
let img = document.getElementById('img');
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let like = document.getElementById('like');
let likeNavBar = false;
let pressed = false;
let startx;
let x;



like.addEventListener('mouseenter', (e)=>{
    if(likeNavBar===false)
        like.style.fill = 'red';
        else
        like.style.fill = 'white';
 });

 like.addEventListener('mouseleave', (e)=>{
    if(likeNavBar===false)
        like.style.fill = 'white';
        else
        like.style.fill = 'red';
 });

 like.addEventListener('click', (e)=>{
    if(likeNavBar===false){
        like.style.fill = 'red';
        likeNavBar = true;
    }else{
        like.style.fill = 'white'; 
        likeNavBar = false;
    }

 });


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

slider3.addEventListener('mousedown', (e)=>{
    pressed = true;
    startx = e.offsetX - innerSlider3.offsetLeft;
    slider3.style.cursor = 'grabbing';
});

slider3.addEventListener('mouseup', ()=>{
    slider3.style.cursor = 'initial';
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


slider4.addEventListener('mouseup', ()=>{
    slider4.style.cursor = 'initial';
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
checklimit(slider3,innerSlider3);
checklimit(slider4,innerSlider4);













