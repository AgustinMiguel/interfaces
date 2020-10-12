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

let bg =  document.querySelector("#bg");
window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 75|| document.documentElement.scrollTop > 75){
        bg.style.backgroundPosition = +window.pageYOffset+"px";
    }  
});

