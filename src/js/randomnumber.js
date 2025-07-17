function random() {
  let number = Math.floor(Math.random() * 100);
  const userNum = document.querySelector('.random-number__number');
  let fixNum = number % 1 === 0;
  if (fixNum === userNum) {
    const text = document.querySelector('.random-number__text');
    text.style.color = '#039900';
    text.textContent = `Вітаю, ви вгадали число! ${fixNum}!`;
  } else {
    text.style.color = '#900';
    text.textContent = `Ви програли, комп’ютер загадав ${fixNum}! `;
  }
}
const click = document.querySelector('.random-number__btn');
click.addEventListener('click', random);
document
  .querySelector('.random-number__number')
  .addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      random();
    }
  });