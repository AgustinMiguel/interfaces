window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.querySelector("#buttons").className = "navbarcontainter";
    }  
});

window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 75|| document.documentElement.scrollTop > 75){
        document.querySelector("#flip3Dcontainer").className = "flip3Dcontainer";
    }  
});

const bg =  document.querySelector("#bg");
window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100){
        bg.style.backgroundPosition = +window.pageYOffset+"px";
    }  
});

const carruselSlide = document.querySelector(".carrusel-slide");
const carruselImg = document.querySelectorAll(".carrusel-slide img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;

const size = carruselImg[0].clientWidth;

carruselSlide.style.transform = "translateX(" +(-size * counter) + "px"; //PARA COMENZAR EN LA PRIMER IMG DEL CARRUSEL

nextBtn.addEventListener("click", function(){
    if(counter === carruselImg.length){
        counter = 1;
    }
    carruselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carruselSlide.style.transform = "translateX(" +(-size * counter) + "px";
});

prevBtn.addEventListener("click", function(){
    if(counter === 1){
        counter = carruselImg.length -2;
    }
    carruselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carruselSlide.style.transform = "translateX(" +(-size * counter) + "px";
});




