const input = document.querySelector(".header__input");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const headerLogo = document.querySelector(".header__logo");

input.addEventListener("click", (event) => {
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){
        headerLogo.src = "../img/photo/white-logo.webp"
    } else{
        headerLogo.src = "../img/photo/logo.webp";
    }
});


// HEADER MODAL

const numbersButton = document.querySelector(".b1");
const gamesButton = document.querySelector(".b2");
const tutorButton = document.querySelector(".b3");

const numbersSections = document.querySelector(".number");
const gamesSections = document.querySelector(".game");
const tutorSections = document.querySelector(".tutor");
numbersSections.style.opacity = "1";
gamesSections.style.opacity = "1";
tutorSections.style.opacity = "1";

numbersButton.addEventListener("click", (event) => {
    numbersSections.style.opacity = "1";
    gamesSections.style.opacity = "0";
    tutorSections.style.opacity = "0";
    console.log("end callback");
    
})