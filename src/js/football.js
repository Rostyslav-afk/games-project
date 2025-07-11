 const ball = document.getElementById("ball");
const field = document.getElementById("field"); 


const initialBallPosition = {
  top: 0,
  left: 0
};

let direction = 1;
const goalkeeper = document.querySelector(".goalkeeper");

setInterval(() => {
  let currentLeft = parseInt(getComputedStyle(goalkeeper).left);
  
  if (currentLeft >= 50) direction = -1;
  if (currentLeft <= 0) direction = 1;
  
  goalkeeper.style.left = currentLeft + direction * 2 + "px";
}, 30);

 field.onclick = function(event) {
  let fieldCoords = this.getBoundingClientRect();

  let ballCoords = {
    top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
  };

  if (ballCoords.top < 0) ballCoords.top = 0;
  if (ballCoords.left < 0) ballCoords.left = 0;
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';

  checkGoal(); 
};

//     const goal = document.querySelector(".goal"); // або #goal, якщо це ID
// const rect = goal.getBoundingClientRect();

// console.log("top:", rect.top);
// console.log("left:", rect.left);
// console.log("right:", rect.right);
// console.log("bottom:", rect.bottom);

let goalCount = 0;

function checkGoal() {
  const ballRect = ball.getBoundingClientRect();
  const goalRect = document.querySelector(".goal").getBoundingClientRect();
  const keeperRect = document.querySelector(".goalkeeper").getBoundingClientRect();

  const isGoal =
    ballRect.right > goalRect.left &&
    ballRect.left < goalRect.right &&
    ballRect.bottom > goalRect.top &&
    ballRect.top < goalRect.bottom;

  const hitKeeper =
    ballRect.right > keeperRect.left &&
    ballRect.left < keeperRect.right &&
    ballRect.bottom > keeperRect.top &&
    ballRect.top < keeperRect.bottom;

  if (isGoal && !hitKeeper) {
    goalCount++;
    document.getElementById("goal-count").textContent = goalCount;

    setTimeout(() => {
      ball.style.top = initialBallPosition.top + "px";
      ball.style.left = initialBallPosition.left + "px";
    }, 500);
  } else if (hitKeeper) {
    alert("Воротар зловив м’яч!");
    
    setTimeout(() => {
      ball.style.top = initialBallPosition.top + "px";
      ball.style.left = initialBallPosition.left + "px";
    }, 500);
  }
}




// const goal = document.querySelector(".ball"); 
// const rect = goal.getBoundingClientRect();

// console.log("Координати ball:");
// console.log("top:", rect.top);
// console.log("left:", rect.left);
// console.log("right:", rect.right);
// console.log("bottom:", rect.bottom);
