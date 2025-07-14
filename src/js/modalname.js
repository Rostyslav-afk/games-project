const modalBtnNameClose = document.querySelector(".modal__name__close");
const modalName = document.querySelector(".modal__name");
modalBtnNameClose.addEventListener('click', () => {
    modalName.style.display = 'none';
});
const input = document.getElementById("username");
const saveButton = document.querySelector(".modal_name__button");
const headerText = document.querySelector(".header__texter");

saveButton.addEventListener("click", function () {
  const newName = input.value.trim();

  if (newName !== "") {
      headerText.textContent = `Вітаємо, ${newName}!`;
      modalName.style.display = 'none';
  }
});






