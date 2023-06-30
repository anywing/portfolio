const menu = document.querySelector('.menu_icon');
const menuSpan = document.querySelectorAll('.menu_icon>span');
const gnb = document.querySelector('.gnb_m');
const gnbLi = document.querySelectorAll('.gnb_m> ul > li');
const gnbLiA = document.querySelectorAll('.gnb_m> ul > li > a')
const snb = document.querySelectorAll('.gnb_m .snb');
const gnbLiArr = Array.from(gnbLi);

menu.addEventListener('click', () => {
    if (gnb.clientHeight == 0) {
        gnb.style.height = 305 + "px";
    } else {
        gnb.style.height = 0 + "px";
        gnbLi.forEach((li) => {
            li.style.height = 50 + "px";
        })
    }
    menuSpan.forEach((item)=>{
        item.classList.toggle('on');
    })
})

gnbLi.forEach((li) => {
    let index = gnbLiArr.indexOf(li);
    gnbLiA[index].addEventListener('click', (e) => {
        console.log("ddd");
        if (li.clientHeight == 50) {
            gnbLi.forEach((li) => {
                li.style.height = 50 + "px";
            })
            let LiHeight = snb[index].clientHeight + 50;
            li.style.height = LiHeight + "px";
            gnb.style.height = 305 + LiHeight + "px";
        } else {
            li.style.height = 50 + "px";
            gnb.style.height = 305 + "px";
        }
        e.preventDefault();
    })
})