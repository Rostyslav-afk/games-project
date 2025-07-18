function random() {
    let min = 1;
    let max = 10;
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    const userNum = document.querySelector('.random-number__number').value;
    const text = document.querySelector('.random-number__text');
  if (number === userNum) {
    text.style.color = '#039900';
    text.textContent = `Вітаю, ви вгадали число! ${number}!`;
  } else {
      text.style.color = "#900";
    text.textContent = `Ви програли, комп’ютер загадав ${number}! `;
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
