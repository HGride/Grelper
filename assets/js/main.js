const slider_1 = document.querySelector('#slider-1');
const slider_2 = document.querySelector('#slider-2');
const slider_3 = document.querySelector('#slider-3');
const slider_4 = document.querySelector('#slider-4');

function switchSliderState(state) {
    switch (state) {
        case 1:
            slider_1.firstElementChild.setAttribute('class', "point-active active");
            slider_2.firstElementChild.setAttribute('class', "point-active");
            slider_3.firstElementChild.setAttribute('class', "point-active");
            slider_4.firstElementChild.setAttribute('class', "point-active");
            break;
        case 2:
            slider_2.firstElementChild.setAttribute('class', "point-active active");
            slider_1.firstElementChild.setAttribute('class', "point-active");
            slider_3.firstElementChild.setAttribute('class', "point-active");
            slider_4.firstElementChild.setAttribute('class', "point-active");
        case 3:
            slider_3.firstChild.setAttribute('class', 'point-active active');
            slider_1.firstElementChild.setAttribute('class', "point-active");
            slider_2.firstElementChild.setAttribute('class', "point-active");
            slider_4.firstElementChild.setAttribute('class', "point-active");
        case 4:
            slider_4.firstChild.setAttribute('class', 'point-active active');
            slider_1.firstElementChild.setAttribute('class', "point-active");
            slider_2.firstElementChild.setAttribute('class', "point-active");
            slider_3.firstElementChild.setAttribute('class', "point-active");

        default:
            break;
    };
};

slider_1.addEventListener('click',()=> {switchSliderState(1)});
slider_2.addEventListener('click', ()=> {switchSliderState(2)});
slider_3.addEventListener('click', ()=> {switchSliderState(3)});
slider_4.addEventListener('click', ()=> {switchSliderState(4)});