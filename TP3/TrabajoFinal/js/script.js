window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.querySelector("#buttons").className = "navbarcontainter";
    }  
});

