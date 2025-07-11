const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const scoreEl = document.getElementById('score');
const recordEl = document.getElementById('record');

let gameOverFlag = false;
let gameStarted = false;
let gameInterval;

let score = 0;
let record = localStorage.getItem('dinoRecord')
  ? parseInt(localStorage.getItem('dinoRecord'))
  : 0;

recordEl.textContent = `Ваш рекорд: ${record}`;

let cactusPassed = false;

function jump() {
  if (!gameStarted || gameOverFlag) return;

  if (!dino.classList.contains('jump')) {
    dino.classList.add('jump');
    setTimeout(() => {
      dino.classList.remove('jump');
    }, 400);
  }
}

function startGame() {
  if (gameStarted || gameOverFlag) return;

  gameStarted = true;
  score = 0;
  cactusPassed = false;
  scoreEl.textContent = `Pахунок: ${score}`;

  cactus.style.animation = 'cactusMove 1s infinite linear';

  gameInterval = setInterval(() => {
    if (gameOverFlag) return;

    let dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue('top')
    );
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue('left')
    );

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      gameOverFlag = true;
      clearInterval(gameInterval);
      cactus.style.animation = 'none';
      cactus.style.left = `${cactusLeft}px`;
      alert('Game Over!');
      startBtn.style.display = 'none';
      restartBtn.style.display = 'inline-block';

      if (score > record) {
        record = score;
        localStorage.setItem('dinoRecord', record);
        recordEl.textContent = `Ваш рекорд: ${record}`;
      }
      return;
    }

    if (cactusLeft < 0 && !cactusPassed) {
      score++;
      scoreEl.textContent = `Pахунок: ${score}`;
      cactusPassed = true;
    }

    if (cactusLeft > 300) {
      cactusPassed = false;
    }
  }, 10);
}

function restartGame() {
  location.reload();
}

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);
document.addEventListener('keydown', jump);
