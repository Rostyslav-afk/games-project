function random() {
  const min = 1;
  const max = 10;
  const number = Math.floor(Math.random() * (max - min + 1)) + min;

  const inputEl = document.querySelector('.random-number__number');
  const userStr = inputEl.value.trim();
  const text = document.querySelector('.random-number__text');

  if (userStr === '' || isNaN(userStr)) {
    text.style.color = '#ff0000';
    text.textContent = 'Будь ласка, введіть число від 1 до 10.';
    return;
  }

  if (number === Number(userStr)) {
    text.style.color = '#039900';
    text.textContent = `Вітаю, ви вгадали число ${number}!`;
  } else {
    text.style.color = '#900';
    text.textContent = `Ви програли, комп’ютер загадав ${number}!`;
  }
}

const click = document.querySelector('.random-number__btn');
click.addEventListener('click', random);
document
  .querySelector('.random-number__number')
  .addEventListener('keyup', function (event) {
    if (event.key === 'Enter') random();
  });