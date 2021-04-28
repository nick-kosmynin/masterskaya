window.addEventListener('DOMContentLoaded', () => {

    //   СОЗДАНИЕ СЛАЙДЕРА

    
    // создаем селектор отображающий слайды, указать в какую сторону движется слайдер, кнопки prev & next

    let SlideIndex = 1, // переменная, отвечающая за показ текущ слайда польз 
        items = document.querySelectorAll('.feedback-slider-item'),
        prevBtn = document.querySelector('.main-prev-btn'),
        nextBtn = document.querySelector('.main-next-btn');

    // cоздаем функцию отвечающую за перемещ индекса и слайда

    function showSlides(n) {
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
});