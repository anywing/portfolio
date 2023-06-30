const hands = document.querySelectorAll('.hand');
let viewWid = innerWidth;

addEventListener('resize', () => {
    viewWid = innerWidth;
    screenOn();
})

function screenOn() {
    if(viewWid <= 380 ){
        hands.forEach(item => {
            item.style.top = -60 + 'px';
        })

    }
    else if(viewWid > 380 && viewWid <740){
        hands.forEach(item => {
            item.style.top = -90 + 'px';
        })

    }
    else{
        hands.forEach(item => {
            item.style.top = -100 + 'px';
        })

    }
}

addEventListener('load', ()=>{
    screenOn();
    setTimeout(()=>{
        hands[1].classList.remove('on');
        hands[0].classList.add('on');
    }, 300)
})