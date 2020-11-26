//POPUP//
$(document).ready(function() {

    $(".trigger_popup_fricc").click(function() {
        $('.hover_bkgr_fricc').show();
    });
    $(".trigger_popup_fricc2").click(function() {
        $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function() {
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function() {
        $('.hover_bkgr_fricc').hide();
    });
});
//POPUP//



let myProgress = document.querySelector("#myProgress");
let myBar = document.querySelector("#myBar");
let img = document.getElementById('img');
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let like = document.getElementById('like');
let likeNavBar = false;
let pressed = false;
let star1 = document.getElementById('star1');
let star2 = document.getElementById('star2');
let star3 = document.getElementById('star3');
let star4 = document.getElementById('star4');
let star5 = document.getElementById('star5');
let voted = false;
let bandName = document.getElementById('bandName');
let up = document.getElementById("up-rotate");

up.addEventListener('click', (e)=>{
   window.location.href = 'index.html';
});


bandName.addEventListener('mouseenter', (e)=>{
    bandName.style.color = "#968ABB";
    bandName.style.cursor = "pointer";
 });

 bandName.addEventListener('mouseleave', (e)=>{
    bandName.style.color = "white";
    bandName.style.cursor = "initial";
 });

star1.addEventListener('mouseenter', (e)=>{
    if(voted === false)
        star1.style.fill = "yellow";
 });

 star1.addEventListener('mouseleave', (e)=>{
    if(voted === false)
        star1.style.fill = "white";
 });

 star2.addEventListener('mouseenter', (e)=>{
    if(voted === false){
        star1.style.fill = "yellow";
        star2.style.fill = "yellow";
    }

 });

 star2.addEventListener('mouseleave', (e)=>{
    if(voted === false){
        star1.style.fill = "white";
        star2.style.fill = "white";
    }
 });

 star3.addEventListener('mouseenter', (e)=>{
    if(voted === false){
        star1.style.fill = "yellow";
        star2.style.fill = "yellow";
        star3.style.fill = "yellow";
    }
 });

 star3.addEventListener('mouseleave', (e)=>{
    if(voted === false){
        star1.style.fill = "white";
        star2.style.fill = "white";
        star3.style.fill = "white";
    }
 });

 star4.addEventListener('mouseenter', (e)=>{
    if(voted === false){
        star1.style.fill = "yellow";
        star2.style.fill = "yellow";
        star3.style.fill = "yellow";
        star4.style.fill = "yellow";
    }
 });

 star4.addEventListener('mouseleave', (e)=>{
    if(voted === false){
        star1.style.fill = "white";
        star2.style.fill = "white";
        star3.style.fill = "white";
        star4.style.fill = "white";
    }
 });

 star5.addEventListener('mouseenter', (e)=>{
    if(voted === false){
        star1.style.fill = "yellow";
        star2.style.fill = "yellow";
        star3.style.fill = "yellow";
        star4.style.fill = "yellow";
        star5.style.fill = "yellow";
    }
 });

 star5.addEventListener('mouseleave', (e)=>{
    if(voted === false){
        star1.style.fill = "white";
        star2.style.fill = "white";
        star3.style.fill = "white";
        star4.style.fill = "white";
        star5.style.fill = "white";
    }
 });

 star1.addEventListener('click', (e)=>{
        star1.style.fill = "yellow";
        star2.style.fill = "white";
        star3.style.fill = "white";
        star4.style.fill = "white";
        star5.style.fill = "white";
        voted = true;
 });

 star2.addEventListener('click', (e)=>{
        star1.style.fill = "yellow";
        star2.style.fill = "yellow";
        star3.style.fill = "white";
        star4.style.fill = "white";
        star5.style.fill = "white";
        voted = true;
 });

 star3.addEventListener('click', (e)=>{
        star1.style.fill = "yellow";
        star2.style.fill = "yellow";
        star3.style.fill = "yellow";
        star4.style.fill = "white";
        star5.style.fill = "white";
        voted = true;
 });
 
 star4.addEventListener('click', (e)=>{
        star1.style.fill = "yellow";
        star2.style.fill = "yellow";
        star3.style.fill = "yellow";
        star4.style.fill = "yellow";
        star5.style.fill = "white";
        voted = true;
 });

 star5.addEventListener('click', (e)=>{
        star1.style.fill = "yellow";
        star2.style.fill = "yellow";
        star3.style.fill = "yellow";
        star4.style.fill = "yellow";
        star5.style.fill = "yellow";
        voted = true;
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

