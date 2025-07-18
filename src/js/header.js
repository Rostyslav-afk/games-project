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

const numbersSections = document.querySelectorAll(".number");
const gamesSections = document.querySelectorAll(".game");
const tutorSections = document.querySelectorAll(".tutor");

numbersSections.forEach(section => {
    section.style.display = "block";
});

gamesSections.forEach(section => {
    section.style.display = "block";
});

tutorSections.forEach(section => {
    section.style.display = "block";
});

console.log(numbersSections, gamesSections, tutorSections)

numbersButton.addEventListener("click", (event) => {
    numbersSections.forEach(section => {
        section.style.display = "block";
    });

    gamesSections.forEach(section => {
        section.style.display = "none";
    });

    tutorSections.forEach(section => {
        section.style.display = "none";
    });

    console.log("end callback");

})

gamesButton.addEventListener("click", (event) => {
    numbersSections.forEach(section => {
        section.style.display = "none";
    });

    gamesSections.forEach(section => {
        section.style.display = "block";
    });

    tutorSections.forEach(section => {
        section.style.display = "none";
    });

    console.log("end callback");

});

tutorButton.addEventListener("click", (event) => {
    numbersSections.forEach(section => {
        section.style.display = "none";
    });

    gamesSections.forEach(section => {
        section.style.display = "none";
    });

    tutorSections.forEach(section => {
        section.style.display = "block";
    });

    console.log("end callback");

})