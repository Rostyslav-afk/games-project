import darkLogo from "/img/photo/logo.webp";
import whiteLogo from "/img/photo/white-logo.webp";
import bodyBackground from "/img/photo/bg.webp";
document.body.style.backgroundImage = `url(${bodyBackground})`;

const input = document.querySelector(".header__input");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const headerLogo = document.querySelector(".header__logo");

input.addEventListener("click", (event) => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        headerLogo.src = whiteLogo;
    } else {
        headerLogo.src = darkLogo;
    }
});



const btns = document.querySelectorAll('.header__modal-button');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedType = btn.textContent.trim(); // число, ігри, ознайомчий

    const typeMap = {
      'Числовий': ['Калькулятор', 'Введіть 3 числа'],
      'Ігровий': ['Камінь - ножиці - папір', 'Google динозавр', 'Футбол'],
      'Ознайомчий': ['Популярні інетрактивні ігри', 'Калькулятор часу', 'Обери вченого/их']
    };

    const selectedTitles = typeMap[selectedType];
    const allSections = document.querySelectorAll('section');

    allSections.forEach(section => {
      const heading = section.querySelector('h1, h2, h3');
      if (!heading) {
        section.style.display = 'none';
        return;
      }

      const text = heading.textContent.trim();
      if (selectedTitles.includes(text)) {
        section.style.display = ''; 
      } else {
        section.style.display = 'none'; 
      }
    });
  });
});
