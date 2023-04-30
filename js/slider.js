// 요소 가져오기
const lbt = document.querySelector('.left_btn');
const rbt = document.querySelector('.right_btn');
const li = document.querySelectorAll('.slider_img');
const slideBox = document.querySelectorAll('.port_box');
const portNum = document.querySelector('.fort_num p');

//슬라이드 목록 길이 설정
const list = li.length - 1;
let count = 0;

//좌우 버튼 이벤트 등록
lbt.addEventListener('click', slideLeft);
rbt.addEventListener('click', slideRight);

//슬라이드에 맞춰 표시 변경 함수
function portNumChange(i){
    i += 1;
    portNum.innerHTML = `<span class="now_num">${i}</span> / ${li.length}`;
}

function slideOn(i){
    li[i].classList.toggle('on');
    slideBox[i].classList.toggle('on');
}

//좌측 이동 버튼
function slideLeft() {
    if (count > 0) {
        slideOn(count);
        count--;
        slideOn(count);
        portNumChange(count);
    }
    else if(count == 0){
        slideOn(count);     
        count = list;
        slideOn(count);    
        portNumChange(count);
    }
}

//우측 이동 버튼
function slideRight() {
    if (count < list) {
        slideOn(count); 
        count++;
        slideOn(count); 
        portNumChange(count);
    }
    else if(count == list){
        slideOn(count); 
        count = 0;
        slideOn(count); 
        portNumChange(count);
    }
}