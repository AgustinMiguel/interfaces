let myProgress = document.querySelector("#myProgress");
let myBar = document.querySelector("#myBar");
let img = document.getElementById('img');
let play1 = document.getElementById('play1');
let pause = document.getElementById('pause');
let like1 = document.getElementById('like1');
let likeNavBar = false;
let startx;
let x;
let filtersection = document.getElementById("filtersection");
let litleup = document.getElementById("litleup");
let up = document.getElementById("up");
let sidebartext = document.getElementById("side-bar-text");
let backarrow = document.getElementById("back-arrow");

backarrow.addEventListener('click', (e)=>{
   window.location.href = 'index.html';
});

sidebartext.addEventListener('click', (e)=>{
   window.location.href = 'index.html';
});

up.addEventListener('click', (e)=>{
   window.location.href = 'musicPlayer.html';
});

filtersection.addEventListener('mouseenter', (e)=>{
    litleup.style.fill = '#968ABB';
    filtersection.style.color = '#968ABB';

 });

 filtersection.addEventListener('mouseleave', (e)=>{
    litleup.style.fill = 'white';
    filtersection.style.color = 'white';
 });


like1.addEventListener('mouseenter', (e)=>{
    if(likeNavBar===false)
        like1.style.fill = 'red';
        else
        like1.style.fill = 'white';
 });

 like1.addEventListener('mouseleave', (e)=>{
    if(likeNavBar===false)
        like1.style.fill = 'white';
        else
        like1.style.fill = 'red';
 });

 like1.addEventListener('click', (e)=>{
    if(likeNavBar===false){
        like1.style.fill = 'red';
        likeNavBar = true;
    }else{
        like1.style.fill = 'white'; 
        likeNavBar = false;
    }

 });


play1.addEventListener('click', (e)=>{
    play1.style.display = 'none';
    pause.style.display = 'initial';
    myBar.style.animation = "timer 120s";
 });

 pause.addEventListener('click', (e)=>{
    pause.style.display = 'none';
    play1.style.display = 'initial';
 });

myProgress.addEventListener('click', (e)=>{
   myBar.style.backgroundPosition = -400+e.offsetX+"px";
});


let canciones = document.querySelectorAll(".cancion");
for (let i = 0; i < canciones.length; i++) {
   canciones[i].addEventListener("mouseenter", function() {
       this.classList.toggle("hoverCancion");
       let like = document.getElementById('likeCancion' + (i + 1));
       let play = document.getElementById('playCancion' + (i + 1));
       //let texto = document.querySelectorAll('#texto' + (i + 1));
       let puntos = document.querySelector('#puntos' + (i + 1));
       like.classList.toggle("svgBlack");
       play.classList.toggle("svgBlack");
       puntos.classList.toggle("puntosNegro");

       /*for (let i = 0; i < texto.length; i++) {
           texto[i].classList.toggle("textoNegro");
       }*/
   }); 
}

for (let i = 0; i < canciones.length; i++) {
   canciones[i].addEventListener("mouseleave", function() {
       this.classList.toggle("hoverCancion");
       let like = document.getElementById('likeCancion' + (i + 1));
       let play = document.getElementById('playCancion' + (i + 1));
       //let texto = document.querySelectorAll('#texto' + (i + 1));
       let puntos = document.querySelector('#puntos' + (i + 1));
       like.classList.toggle("svgBlack");
       play.classList.toggle("svgBlack");
       puntos.classList.toggle("puntosNegro");

       /*for (let i = 0; i < texto.length; i++) {
           texto[i].classList.toggle("textoNegro");
       }*/
   });
}