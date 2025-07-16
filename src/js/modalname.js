const modalBtnNameClose = document.querySelector(".modal__name__close");
const modalName = document.querySelector(".modal__name");
modalBtnNameClose.addEventListener('click', () => {
    modalName.classList.add("hidden");
});
const input = document.getElementById("username");
const saveButton = document.querySelector(".modal_name__button");
const headerText = document.querySelector(".header__texter");

// saveButton.addEventListener("click", function () {
//   const newName = input.value.trim();

//   if (newName !== "") {
//       headerText.textContent = `Вітаємо, ${newName}!`;
//     // modalName.style.display = 'none';
//     modalName.classList.add("modal_move");
//     modalName.classList.add("hidden");
//   }
// });

saveButton.addEventListener("click", function () {
  const newName = input.value.trim();

  if (newName !== "") {
    headerText.textContent = `Вітаємо, ${newName}!`;
    
    modalName.classList.add("modal_move");

    // Чекаємо завершення transition (2s), потім ховаємо
    setTimeout(() => {
      modalName.classList.add("hidden");
    }, 1200); // або 2100 мс для безпеки
  }
});

document.body.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    modalName.classList.add("modal_move");
    setTimeout(() => {
      modalName.classList.add("hidden");
    }, 1200);
  }

// modalName.addEventListener("click", (event) => {
//   console.log(event.target);
//   console.log(event.currentTarget);
//   if (event.target !== event.currentTarget) {
//     modalName.style.display = 'none';
//   }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    modalName.classList.add("modal_move");
    setTimeout(() => {
      modalName.classList.add("hidden");
    }, 1200);
  }
});





