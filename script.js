// var slider = document.getElementById('slider');
//     noUiSlider.create(slider, {
//         start: [20, 80],
//         connect: true,
//         range: {
//             'min': 0,
//             'max': 100
//                 }
// });
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
} else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
}
});   

    const rangeSlider = document.getElementById("range-slider");

    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [5, 8],
            connect: true,
            step: 1,
            range: {
                'min': 1,
                'max': 10
                    }
    });

    const input0 = document.getElementById("input-0");
    const input1 = document.getElementById("input-1");
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on("update", function(values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        console.log(arr);
        rangeSlider.noUiSlider.set(arr)
    };

    inputs.forEach((el, index) => {
        el.addEventListener("change", (e)=> {
            console.log(index)
        setRangeSlider(index, e.currentTarget.value);
        });
        
    })
    
    }



    const items = document.querySelectorAll('.section-product__list-item1');

items.forEach(item => {
item.addEventListener('click', function() {
items.forEach(elem => elem.classList.remove('section-product__list-item--color1'));
this.classList.add('section-product__list-item--color1');
});
})