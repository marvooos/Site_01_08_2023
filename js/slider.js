let offset = 0; 
const sliderLine = document.querySelector('.main__slider__line');

document.getElementById('-').addEventListener('click', function() {
    offset = offset + 1280;
    sliderLine.style.left = -offset + 'px';
});