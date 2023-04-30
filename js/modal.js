// modal element
const dBox = document.querySelectorAll('.d_text');
const modal = document.querySelector('.modal');
const modalLi = document.querySelectorAll('.modal_box');
const modalP = document.querySelector('.modal>p');

// modal
var dBoxArr = Array.from(dBox);
dBox.forEach((li) => {
    let index = dBoxArr.indexOf(li);

    li.addEventListener('click', () => {
        modal.classList.add('on');
        modalLi[index].classList.add('on');
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = '17px';
    })
})

modal.addEventListener('click', (e) => {
    const point = e.target;
    if (point.classList.contains('on') || point == modalP) {
        modal.classList.remove('on');
        modalLi.forEach((i) => {
            i.scrollTop = 0;
            i.classList.remove('on');
        })
        document.body.style.overflow = 'auto';
        document.body.style.marginRight = 0;
    }
})