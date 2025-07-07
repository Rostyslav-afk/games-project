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