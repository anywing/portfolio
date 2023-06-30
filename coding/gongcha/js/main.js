const h1 = document.querySelector('.main h1');
const mainP = document.querySelector('.main p');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const section4 = document.querySelector('.section4');
window.addEventListener('DOMContentLoaded',mainShow);
window.addEventListener('scroll',scrollShow);

function mainShow(){
    h1.style.transition = 700 + 'ms';
    h1.style.opacity = 1;
    
    setTimeout (()=>{
        mainP.style.transition = 700 + 'ms';
        mainP.style.opacity = 1;
    }, 500);
}

function scrollShow(){
    let scrollY = window.scrollY;
    if(scrollY > 300 && scrollY < 1900){
        section2.style.transition = 700 + 'ms';
        section2.style.opacity = 1;
        console.log(scrollY);
    }
    else if(scrollY > 1900 && scrollY < 3000){
        section3.style.transition = 700 + 'ms';
        section3.style.opacity = 1;
        console.log(scrollY);
    }
    else if(scrollY > 3000){
    section4.style.transition = 700 + 'ms';
    section4.style.opacity = 1;
    }
}