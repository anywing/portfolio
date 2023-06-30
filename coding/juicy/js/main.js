// modal element
const seasonLi = document.querySelectorAll('.season ul li');
const seasonPopup = document.querySelector('.popup');
const seasonPopupLi = document.querySelectorAll('.popup .popup_box');
const body = document.querySelector('body');

// tab element
const tabs = document.querySelectorAll('.tabs ul li');
const tabContent = document.querySelector('.section2 .tab_content');
const tabContentLi = document.querySelectorAll('.section2 .tab_content > div');

//tab menu
const tabArr = Array.from(tabs);
tabs.forEach((tab)=>{
    let index = tabArr.indexOf(tab);

    tab.addEventListener('click',(e)=>{
        for(let i = 0; i < tabs.length; i++){
            tabs[i].classList.remove('now_tab');
            tabContentLi[i].classList.remove('on');
        }
        tab.classList.add('now_tab');
        tabContentLi[index].classList.add('on');
        const tabHeight = tabContentLi[index].offsetHeight;
        tabContent.style.height = tabHeight + 'px';
        e.preventDefault();
    })
})

addEventListener('load',()=>{
    tabContent.style.height = tabContentLi[0].offsetHeight + 'px';
})
addEventListener('resize',()=>{
    tabContentLi.forEach((tabCon)=>{
        if(tabCon.offsetHeight !== 0){
            tabContent.style.height = tabCon.offsetHeight + 'px';

        }
    })
})

// modal
var seasonArr = Array.from(seasonLi);
seasonLi.forEach((li)=>{
    let index = seasonArr.indexOf(li);
    
    li.addEventListener('click',(e)=>{
        seasonPopup.classList.add('on');
        seasonPopupLi[index].style.display = 'block';
        body.style.overflow = 'hidden';
        body.style.marginRight = '17px';
        e.preventDefault();
    })
})

seasonPopup.addEventListener('click', (e)=>{
    const point = e.target;
    if(point.classList.contains('close')){
        seasonPopup.classList.remove('on');
        seasonPopupLi.forEach((i)=>{
            i.style.display = 'none';})
        body.style.overflow = 'auto';
        body.style.marginRight = 0;
    }
})