const bullets = document.querySelectorAll('.bul_list li');
const sect = document.querySelectorAll('section');
const floatNav = document.querySelector('.floatnav');

function scrollAni(go){
    let k = -90;
    let scrollY = window.scrollY;
    let a = setInterval(()=>{
        if(k >= 0 ){
            k = 0;
        }
        let easeUp = (Math.sin(k*Math.PI / 180)) + 1;
        let easeDown = Math.sin((k+180)*Math.PI / 180);
        scrollTo(0, scrollY * easeDown + go * easeUp);
        k += 3;
        if(k > 0){
            clearInterval(a);
        }
    }, 1000 / 60);

}

function addOn(i){
    for(var j = 0; j < bullets.length; j++){
        bullets[j].classList.remove('on');
    }
    bullets[i].classList.add('on');
}

function colorChange(section){
    section.classList.contains('bg_w') ? 
        bullets.forEach((bul)=>{bul.classList.add('sect')}) :
        bullets.forEach((bul)=>{bul.classList.remove('sect')});
}

let showCheck = 0;
const sectArray = Array.from(sect);
sect.forEach(function(item){
    const index = sectArray.indexOf(item);
    item.addEventListener('wheel', function (a) {
        let scrollY = window.scrollY;
        if (!modal.classList.contains('on')){
        if(a.deltaY < 0){
            if(this.previousElementSibling){
                if(showCheck == 0){
                    showCheck = 1;
                let go = scrollY + this.previousElementSibling.getBoundingClientRect().top;
                scrollAni(go);
                for(var j = 0; j < bullets.length; j++){
                    bullets[j].classList.remove('on');
                }
                const pre = this.previousElementSibling;
                colorChange(pre);
               bullets[index-1].classList.add('on');
                setTimeout(()=>{
                    showCheck = 0;
                }, 600);
            }
        }}
        else if(a.deltaY > 0){
            if(this.nextElementSibling){
                if(showCheck == 0){
                    showCheck = 1;
                let go = scrollY + this.nextElementSibling.getBoundingClientRect().top;
                scrollAni(go);
                for(var j = 0; j < bullets.length; j++){
                    bullets[j].classList.remove('on');
                }
                const next = this.nextElementSibling;
                colorChange(next);
               bullets[index+1].classList.add('on');
                setTimeout(()=>{
                    showCheck = 0;
                }, 600);}
            }
        }
        a.preventDefault();}
        })
    
})

function scrollClick(i){
    let k = -90;
    let scrollY = window.scrollY;
    let a = setInterval(()=>{
        if(k >= 90 ){
            k = 90;
        }
        let easeUp = ((Math.sin(k*Math.PI / 180)) + 1 ) / 2;
        let easeDown = ((Math.sin((k+180)*Math.PI / 180)) + 1) / 2 ;
        scrollTo(0, scrollY * easeDown + i * innerHeight * easeUp);
        k += 3;
        if(k > 90){
            clearInterval(a);
            showCheck = 0;
        }
    }, 1000 / 60)

}

for(let i = 0; i < bullets.length; i++){
    bullets[i].addEventListener('click', ()=>{
        if(showCheck == 0){
            showCheck = 1;
        colorChange(sect[i]);
        scrollClick(i);
        addOn(i);
    }
    })
}