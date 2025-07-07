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

function checkGoal() {
  const ballRect = document.getElementById("ball").getBoundingClientRect();
  const goalRect = document.querySelector(".goal").getBoundingClientRect();

  const isGoal =
    ballRect.right > goalRect.left &&
    ballRect.left < goalRect.right &&
    ballRect.bottom > goalRect.top &&
    ballRect.top < goalRect.bottom;

  if (isGoal) {
    document.getElementsByClassName("football-text")[0].textContent = `Ви забили ГОЛ`;
  }
}

// const goal = document.querySelector(".ball"); 
// const rect = goal.getBoundingClientRect();

// console.log("Координати ball:");
// console.log("top:", rect.top);
// console.log("left:", rect.left);
// console.log("right:", rect.right);
// console.log("bottom:", rect.bottom);
