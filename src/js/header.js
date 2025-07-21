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