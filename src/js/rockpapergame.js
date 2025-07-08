const stoneButton = document.querySelector(".stone");
const scissorsButton = document.querySelector(".scissors");
const paperButton = document.querySelector(".paper");

const resultText = document.querySelector(".rsp__result");

const computerText = document.querySelector(".pc");
const playerText = document.querySelector(".you");

const showAiChoice = document.querySelector(".rsp__btn");

const sound = document.querySelector(".rsp__audio");

const choice = ["stone", "scissors", "paper"];

let playerChoice = "";
let aiChoice = "";

let playerScore = 0;
let aiScore = 0;

stoneButton.addEventListener("click", (event) => {
    playerChoice = choice[0];
    sound.play();
    getAiChoice();
    checkChoices();
});

scissorsButton.addEventListener("click", (event) => {
    playerChoice = choice[1];
    sound.play();
    getAiChoice();
    checkChoices();
});

paperButton.addEventListener("click", (event) => {
    playerChoice = choice[2];
    sound.play();
    getAiChoice();
    checkChoices();
});

function checkChoices() {
    if (playerChoice === aiChoice) {
        resultText.textContent = "Нічия!";
        resultText.style.color = "black";
    } else if (
        (playerChoice === "stone" && aiChoice === "scissors") ||
        (playerChoice === "scissors" && aiChoice === "paper") ||
        (playerChoice === "paper" && aiChoice === "stone")
    ) {
        playerScore += 1;
        resultText.textContent = "Ви виграли раунд!";
        resultText.style.color = "#039900";
    } else {
        aiScore += 1;
        resultText.textContent = "Комп'ютер виграв раунд!";
        resultText.style.color = "red";
    }

    playerText.textContent = `Ви - ${playerScore}`;
    computerText.textContent = `Комп'ютер - ${aiScore}`;

    playerText.style.fontFamily = "Montserrat Alternates";
    playerText.style.fontSize = "12px";
    computerText.style.fontFamily = "Montserrat Alternates";
    computerText.style.fontSize = "12px";
}

function getAiChoice (){
    const randomIndex = Math.floor(Math.random() * choice.length);
    aiChoice = choice[randomIndex];
};

showAiChoice.addEventListener("click", (event) => {
    alert(`Вибір комп'ютера був "${aiChoice}"`);
});



// MODS INSTRUCTION
const instructionModal = document.querySelector(".rsp__modal");
const instructionModalBackdrop = document.querySelector(".backdrop");
const instructionModalClose = document.querySelector(".rsp__modal-close");

const instructionButton = document.querySelector(".rsp__mods-instruction");
const fourtySecondsButton = document.querySelector(".rsp__mods-40seconds");
const fiftyPointsButton = document.querySelector(".rsp__mods-50points");


instructionButton.addEventListener("click", (event) => {
    instructionModal.style.opacity = "1";
    instructionModalBackdrop.style.opacity = "1";
    instructionModalBackdrop.style.pointerEvents = "all";
});

instructionModalClose.addEventListener("click", (event) => {
    instructionModal.style.opacity = "0";
    instructionModalBackdrop.style.opacity = "0";
    instructionModalBackdrop.style.pointerEvents = "none";
});