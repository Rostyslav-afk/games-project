import darkLogo from "/img/photo/logo.webp";
import whiteLogo from "/img/photo/white-logo.webp";


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