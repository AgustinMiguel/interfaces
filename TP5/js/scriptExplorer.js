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
let filtersection = document.getElementById("filtersection");
let litleup = document.getElementById("litleup");

filtersection.addEventListener('mouseenter', (e)=>{
    litleup.style.fill = '#968ABB';
    filtersection.style.color = '#968ABB';

 });

 filtersection.addEventListener('mouseleave', (e)=>{
    litleup.style.fill = 'white';
    filtersection.style.color = 'white';
 });


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
    myBar.style.animation = "timer 120s";
 });

 pause.addEventListener('click', (e)=>{
    pause.style.display = 'none';
    play.style.display = 'initial';
 });

myProgress.addEventListener('click', (e)=>{
   myBar.style.backgroundPosition = -400+e.offsetX+"px";
});














