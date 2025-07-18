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

calculationSection.style.opacity = "1";
chooseNumberSection.style.display = "block";
dateBirthdaySection.style.display = "block";
randomNumberSection.style.display = "block";
timeCalculation.style.display = "block";
footbalSection.style.display = "block";
googleDinoSection.style.display = "block";
rspSection.style.display = "block";

numbersButton.addEventListener("click", (event) => {
    // NUMBERS ON
    calculationSection.style.opacity = "1";
    chooseNumberSection.style.display = "block";
    dateBirthdaySection.style.display = "block";
    randomNumberSection.style.display = "block";
    timeCalculation.style.display = "block";

    // GAMES OFF
    footbalSection.style.display = "none";
    googleDinoSection.style.display = "none";
    rspSection.style.display = "none";

    // TUTORIAL OFF
    ourTeamSection.style.display = "none";
});



gamesButton.addEventListener("click", (event) => {
    // NUMBERS OFF
    calculationSection.style.opacity = "0";
    chooseNumberSection.style.display = "none";
    dateBirthdaySection.style.display = "none";
    randomNumberSection.style.display = "none";
    timeCalculation.style.display = "none";

    // GAMES ON
    footbalSection.style.display = "block";
    googleDinoSection.style.display = "block";
    rspSection.style.display = "block";

    // TUTORIAL OFF
    ourTeamSection.style.display = "none";
});

tutorButton.addEventListener("click", (event) => {
    // NUMBERS OFF
    calculationSection.style.opacity = "0";
    chooseNumberSection.style.display = "none";
    dateBirthdaySection.style.display = "none";
    randomNumberSection.style.display = "none";
    timeCalculation.style.display = "none";

    // GAMES OFF
    footbalSection.style.display = "none";
    googleDinoSection.style.display = "none";
    rspSection.style.display = "none";

    // TUTORIAL ON
    ourTeamSection.style.display = "block";
});