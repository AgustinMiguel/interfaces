const web = document.querySelector(".webHidden");
const loader = document.querySelector(".loader");
const load = false;
setInterval(function(){
    web.className = "web";
    loader.className = "loaderHidden"
}, 3000);
setInterval(function(){
    window.addEventListener("scroll", function(){
        if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100){
            document.querySelector("#flip3Dcontainer").className = "flip3Dcontainer";
        }  
        if (document.body.scrollTop > 200|| document.documentElement.scrollTop > 200){
            document.querySelector("#text").className = "text";
        }  
        if (document.body.scrollTop > 400|| document.documentElement.scrollTop > 400){
            document.querySelector("#carrusel-container").className = "carrusel-container";
        }
    });

    
    const bg =  document.querySelector("#bg");
    window.addEventListener("scroll", function(){
        if (document.body.scrollTop > 75|| document.documentElement.scrollTop > 75){
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
    
    let countDownDate = new Date("dec 5, 2020 15:00:00").getTime();
    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "CORRE POR TUS ENTRADAS AL CINE!";
        }
      }, 1000);

}, 3001);

const acordionItemsHeader = document.querySelectorAll(".acordion-item-header");
acordionItemsHeader.forEach(acordionItemsHeader => {
    acordionItemsHeader.addEventListener("click", event =>{
        acordionItemsHeader.classList.toggle("active");
    });
});

   