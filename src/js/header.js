const input = document.querySelector(".header__input");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const headerLogo = document.querySelector(".header__logo");

input.addEventListener("click", (event) => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        headerLogo.src = "../img/photo/white-logo.webp"
    } else {
        headerLogo.src = "../img/photo/logo.webp";
    }
});



// HEADER MODAL

const numbersButton = document.querySelector(".b1");
const gamesButton = document.querySelector(".b2");
const tutorButton = document.querySelector(".b3");

const calculationSection = document.querySelector(".calculation");
const chooseNumberSection = document.querySelector(".choose-number");
const dateBirthdaySection = document.querySelector(".date-birthday");
const footbalSection = document.querySelector(".football-main-div");
const googleDinoSection = document.querySelector(".google-dino");
const ourTeamSection = document.querySelector(".our__team");
const randomNumberSection = document.querySelector(".random-number");
const rspSection = document.querySelector(".rsp");
const timeCalculation = document.querySelector(".time-calculation");
const scientist = document.querySelector(".scientists");

calculationSection.removeAttribute("style");
chooseNumberSection.removeAttribute("style");
dateBirthdaySection.removeAttribute("style");
randomNumberSection.removeAttribute("style");
timeCalculation.removeAttribute("style");
footbalSection.removeAttribute("style");
googleDinoSection.removeAttribute("style");
rspSection.removeAttribute("style");

numbersButton.addEventListener("click", (event) => {
    // NUMBERS ON
    calculationSection.removeAttribute("style");
    chooseNumberSection.removeAttribute("style");
    dateBirthdaySection.removeAttribute("style");
    randomNumberSection.removeAttribute("style");
    timeCalculation.removeAttribute("style");

    // GAMES OFF
    footbalSection.style.display = "none";
    googleDinoSection.style.display = "none";
    rspSection.style.display = "none";

    // TUTORIAL OFF
    ourTeamSection.style.display = "none";
    scientist.style.display = "none";
});



gamesButton.addEventListener("click", (event) => {
    // NUMBERS OFF
    calculationSection.style.display = "none";
    chooseNumberSection.style.display = "none";
    dateBirthdaySection.style.display = "none";
    randomNumberSection.style.display = "none";
    timeCalculation.style.display = "none";

    // GAMES ON
    footbalSection.removeAttribute("style");
    googleDinoSection.removeAttribute("style");
    rspSection.removeAttribute("style");

    // TUTORIAL OFF
    ourTeamSection.style.display = "none";
    scientist.style.display = "none";
});

tutorButton.addEventListener("click", (event) => {
    // NUMBERS OFF
    calculationSection.style.display = "none";
    chooseNumberSection.style.display = "none";
    dateBirthdaySection.style.display = "none";
    randomNumberSection.style.display = "none";
    timeCalculation.style.display = "none";

    // GAMES OFF
    footbalSection.style.display = "none";
    googleDinoSection.style.display = "none";
    rspSection.style.display = "none";

    // TUTORIAL ON
    ourTeamSection.removeAttribute("style");
    scientist.removeAttribute("style");
});