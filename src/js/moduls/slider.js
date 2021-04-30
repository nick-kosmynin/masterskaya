const slider = (sliders, dir, prev, next) => {
    //   СОЗДАНИЕ СЛАЙДЕРА


    // создаем селектор отображающий слайды, указать в какую сторону движется слайдер, кнопки prev & next

    let SlideIndex = 1, // переменная, отвечающая за показ текущ слайда польз
        paused = false;
    const items = document.querySelectorAll(sliders);




    function showSlides(n) { // cоздаем функцию отвечающую за перемещ индекса и слайда
        if (n > items.length) {
            SlideIndex = 1;
        }

        if (n < 1) {
            SlideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add("animated");
            item.style.display = 'none';
        });

        items[SlideIndex - 1].style.display = 'block';
    }

    showSlides(SlideIndex);

    function plusSlides(n) {
        showSlides(SlideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[SlideIndex - 1].classList.remove('slideInLeft');
            items[SlideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[SlideIndex - 1].classList.remove('slideInRight');
            items[SlideIndex - 1].classList.add('slideInLeft');
        });

    } catch (e) {}


    function activateAnimation() {
        if (dir === 'vertical') {
         paused=   setInterval(function () {
                plusSlides(1);
                items[SlideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
          paused=  setInterval(function () {
                plusSlides(1);
                items[SlideIndex - 1].classList.remove('slideInRight');
                items[SlideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }
    activateAnimation();
    


    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });


};
export default slider;