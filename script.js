document.addEventListener("DOMContentLoaded", () => {
    let block = document.getElementsByClassName("block")[0];
    block.style.marginLeft = 0;
});

let img = document.getElementsByClassName('main__image')[0];
img.addEventListener('mouseover', ()  => {
    img.style.height = 50 + img.offsetHeight + 'px';
});

img.addEventListener('mouseout', () => {
    img.style.height = img.offsetHeight - 50 + 'px';
});

let text = document.getElementsByClassName("block")[2];
let pictersBlock = document.getElementsByClassName('main__about-game')[0];
let picters = pictersBlock.getElementsByClassName('about');
document.addEventListener('scroll', () => {
    let textCoordinates = text.getBoundingClientRect().top;
    let pictersCoordinates = pictersBlock.getBoundingClientRect().top;
    if (textCoordinates <= 0){
        text.style.marginRight = 0;
    };
    if (pictersCoordinates <= 0){
        for (let i = 0; i<=picters.length; i++){
            let picter = picters[i];
            picter.style.opacity = 1;
            picter.style.visibility = 'visible';
        };
    };
});

let weapon__text = document.getElementsByClassName("weapon__text")[0];
let weapon__list = document.getElementsByClassName("weapon__list")[0];
weapon__text.addEventListener('click', ()  => {
    let active = weapon__text.classList.contains('active');
    if (active) {
        weapon__text.classList.remove('active');
        weapon__list.classList.remove('active');
    } else {
        weapon__text.classList.add('active');
        weapon__list.classList.add('active');
    };
});
let button = document.getElementsByClassName("footer__button")[0];
button.addEventListener('mouseover', ()  => {
    button.classList.add('active');
});
button.addEventListener('mouseout', ()  => {
    button.classList.remove('active');
});