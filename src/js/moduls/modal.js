const modal = (btnOpenSelector, modalSekector, btnCloseSelector, destroy = false) => {

    let btnPressed = false; // переменная, кот следит нажата хоть какая то кнопка или нет

    // modal windows

    const modalTrigger = document.querySelectorAll(btnOpenSelector),
        modal = document.querySelector(modalSekector),
        modalCloseBtn = document.querySelector(btnCloseSelector);


    modalTrigger.forEach(item => { // УДАЛЕНИЕ ПОДАРКА
        item.addEventListener('click', () => {
            if (destroy) {
                item.remove();
            }
        });
    });

    btnPressed = true;

    modalTrigger.forEach(item => { // ОТКРЫТИЕ ОКНА
        item.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            modal.classList.add('animated', 'fadeIn');
        });



    });

    function closeModal() { // ЗАКРЫТИЕ ОКНА
        modalCloseBtn.addEventListener('click', () => {
            modal.classList.add('hide');
            modal.classList.remove('show');
        });
    }
    closeModal();

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hide');
            modal.classList.remove('show');
        }
    });

    function showModalTime(selector, time) { //функция показа модального окна через 6 сек
        setTimeout(function () {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = "block"; // переменная
                } // если модальное окно будет показано пользователю, то мод окна перезаписываются в то же значение
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                // document.body.style.overflow = "hidden";
            } // если не одно мод окно не показано то  poup-consultation


        }, time);
    }

    

    function openByScroll(selector) {
        modal.addEventListener('scroll', () => {
            if (!btnPressed && (modal.pageYOffset + document.documentElement.clientHeight >= 
                document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    openByScroll('.fixed-gift');

    //showModalTime('.popup-consultation', 6000);
};
export default modal;