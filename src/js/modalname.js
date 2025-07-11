const modalBtnName = document.querySelector(".modal__name__close");
const modalName = document.querySelector(".modal__name")
modalBtnName.addEventListener('click', () => {
    modalName.style.display = 'none';
})