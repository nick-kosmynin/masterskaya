const modal = () => {
    // modal windows

    const modalTrigger = document.querySelectorAll('.button-design'),
        modal = document.querySelector('.popup-design'),
        modalCloseBtn = document.querySelector('[data-close]');


    modalTrigger.forEach(item => {
        item.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
        });
    });

    function closeModal() {
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
};
export default modal;