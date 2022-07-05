/*1-е худи*/
let offset1 = 0;
const sliderline1 = document.querySelector('.slider-line1');

document.querySelector('.slider-next1').addEventListener('click', function(){
    offset1 = offset1 + 450;
    if (offset1 > 900) {
        offset1 = 0;
    }
    sliderline1.style.left = -offset1 + 'px';
});

document.querySelector('.slider-prev1').addEventListener('click', function(){
    offset1 = offset1 - 450;
    if (offset1 < 0) {
        offset1 = 900;
    }
    sliderline1.style.left = -offset1 + 'px';
});

/*2-е худи*/
let offset2 = 0;
const sliderline2 = document.querySelector('.slider-line2');

document.querySelector('.slider-next2').addEventListener('click', function(){
    offset2 = offset2 + 450;
    if (offset2 > 900) {
        offset2 = 0;
    }
    sliderline2.style.left = -offset2 + 'px';
});

document.querySelector('.slider-prev2').addEventListener('click', function(){
    offset2 = offset2 - 450;
    if (offset2 < 0) {
        offset2 = 900;
    }
    sliderline2.style.left = -offset2 + 'px';
});

/*1-я футблока*/
let offset3 = 0;
const sliderline3 = document.querySelector('.slider-line3');

document.querySelector('.slider-next3').addEventListener('click', function(){
    offset3 = offset3 + 450;
    if (offset3 > 450) {
        offset3 = 0;
    }
    sliderline3.style.left = -offset3 + 'px';
});

document.querySelector('.slider-prev3').addEventListener('click', function(){
    offset3 = offset3 - 450;
    if (offset3 < 0) {
        offset3 = 450;
    }
    sliderline3.style.left = -offset3 + 'px';
});

/*2-я футблока*/
let offset4 = 0;
const sliderline4 = document.querySelector('.slider-line4');

document.querySelector('.slider-next4').addEventListener('click', function(){
    offset4 = offset4 + 450;
    if (offset4 > 450) {
        offset4 = 0;
    }
    sliderline4.style.left = -offset4 + 'px';
});

document.querySelector('.slider-prev4').addEventListener('click', function(){
    offset4 = offset4 - 450;
    if (offset4 < 0) {
        offset4 = 450;
    }
    sliderline4.style.left = -offset4 + 'px';
});
