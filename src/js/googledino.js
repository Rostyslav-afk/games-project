const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

let gameOver = false;
let gameStarted = false;
let gameInterval;

function jump() {
  if (!gameStarted || gameOver) return;

  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");

    setTimeout(() => {
      dino.classList.remove("jump");
    }, 500);
  }
}

function startGame() {
  if (gameStarted || gameOver) return;

  gameStarted = true;

  cactus.style.animation = "cactusMove 2s infinite linear";  

  gameInterval = setInterval(() => {
    if (gameOver) return;

    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      gameOver = true;
      clearInterval(gameInterval);
      cactus.style.animation = "none";
      cactus.style.left = `${cactusLeft}px`;
      alert("Game Over!");
      startBtn.style.display = "none";
      restartBtn.style.display = "inline-block";
    }
  }, 10);
}

function restartGame() {
  location.reload(); // простий перезапуск сторінки
}

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
document.addEventListener("keydown", jump);
