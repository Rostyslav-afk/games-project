// BUTTONS
const stoneButton = document.querySelector(".stone");
const scissorsButton = document.querySelector(".scissors");
const paperButton = document.querySelector(".paper");

// RESULT
const resultText = document.querySelector(".rsp__result");

// SCORE TEXT
const computerText = document.querySelector(".pc");
const playerText = document.querySelector(".you");

// SHOW AI CHOICE
const showAiChoice = document.querySelector(".rsp__btn");

// SOUND EFFECTS
const sound = document.querySelector(".rsp__audio");

// ARRAY CHOICE
const choice = ["stone", "scissors", "paper"];

// RANGS
const rangs = ["Noob🤓", "Advanced💡", "Hacker🛸"];
const rangText = document.querySelector(".rsp__mods-rang");
let actualRang = "Noob🤓";

// CHOICE
let playerChoice = "";
let aiChoice = "";

// SCORE
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

// CHECK CHOICE
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

    if (isFourtySecondsModeOn && playerScore >= 20) {
        clearInterval(timeInterval);
        isFourtySecondsModeOn = false;
        alert("Вітаю!Ви виграли!");
        actualRang = rangs[1];
        rangText.textContent = `Ваш ранг: ${actualRang}`;
        playerScore = 0;
        aiScore = 0;
        playerText.textContent = `Ви - ${playerScore}`;
        computerText.textContent = `Комп'ютер - ${aiScore}`;
    }
}

// GET AI CHOICE
function getAiChoice() {
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

// MODS 40 SECONDS
const fourtySecondsButton = document.querySelector(".rsp__mods-40seconds");
let isFourtySecondsModeOn = false;
let isPlayerWin = false;
let seconds = 40;
let timeInterval;

fourtySecondsButton.addEventListener("click", (event) => {
    alert("Гра почалась!У вас лишилось 40 секунд.")
    isFourtySecondsModeOn = true;

    // If timer is on, turn off
    clearInterval(timeInterval);
    seconds = 40;

    timeInterval = setInterval(() => {
        seconds -= 1;
        console.log(`Залишилось: ${seconds} секунд`);

        // Коли час вичерпано
        if (seconds <= 0) {
            clearInterval(timeInterval);
            isFourtySecondsModeOn = false;
            alert("Час вичерпано!");

            if (playerScore >= 20) {
                alert("Вітаю!Ви виграли!");
                clearInterval(timeInterval);
                actualRang = rangs[1];
                rangText.textContent = `Ваш ранг: ${actualRang}`;
                playerScore = 0;
                aiScore = 0;
                playerText.textContent = `Ви - ${playerScore}`;
                computerText.textContent = `Комп'ютер - ${aiScore}`;
            } else {
                alert("Нажаль,ви програли:(");
                rangText.textContent = `Ваш ранг: ${actualRang}`;
                playerScore = 0;
                aiScore = 0;
                playerText.textContent = `Ви - ${playerScore}`;
                computerText.textContent = `Комп'ютер - ${aiScore}`;
            }
        }
    }, 1000);
});