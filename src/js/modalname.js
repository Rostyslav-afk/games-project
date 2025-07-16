const modalBtnNameClose = document.querySelector(".modal__name__close");
const modalName = document.querySelector(".modal__name");
modalBtnNameClose.addEventListener('click', () => {
    modalName.classList.add("hidden");
});
const input = document.getElementById("username");
const saveButton = document.querySelector(".modal_name__button");
const headerText = document.querySelector(".header__texter");

saveButton.addEventListener("click", function () {
  const newName = input.value.trim();

  if (newName !== "") {
    headerText.textContent = `Вітаємо, ${newName}!`;
    
    modalName.classList.add("modal_move");

    setTimeout(() => {
      modalName.classList.add("hidden");
    }, 1200);
  }
});

document.body.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    modalName.classList.add("modal_move");
    setTimeout(() => {
      modalName.classList.add("hidden");
    }, 1200);
  }

});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    modalName.classList.add("modal_move");
    setTimeout(() => {
      modalName.classList.add("hidden");
    }, 1200);
  }
});





