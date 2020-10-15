

window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 80|| document.documentElement.scrollTop > 80){
        document.querySelector("#flip3Dcontainer").className = "flip3Dcontainer";
    }  
});

const bg =  document.querySelector("#bg");
window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 5|| document.documentElement.scrollTop > 5){
        bg.style.backgroundPosition = +window.pageYOffset+ 200 +"px";
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
    console.log(carruselImg.length);
    if(counter === carruselImg.length -2){
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

const acordionItemsHeader = document.querySelectorAll(".acordion-item-header");
acordionItemsHeader.forEach(acordionItemsHeader => {
    acordionItemsHeader.addEventListener("click", event =>{
        acordionItemsHeader.classList.toggle("active");
    });
});

let countDownDate = new Date("dec 5, 2020 15:00:00").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours += days * 24;
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);



