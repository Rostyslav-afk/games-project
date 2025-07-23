function day() {
  const year = Number(document.querySelector('.date-birthday__number').value);
  const text = document.querySelector('.date-birthday__text');

  const isLeap = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);

  if (year === '' || Number(year) === 0) {
    text.style.color = '#ff0000';
    text.textContent = 'Будь ласка, введіть коректний рік ';
    return;
  }

  if (isLeap) {
    text.style.color = '#039900';
    text.textContent = 'Ви народилися у високосний рік!';
  } else {
    text.style.color = '#900';
    text.textContent = 'Ви народилися не у високосний рік!';
  }
}

const push = document.querySelector('.date-birthday__button');
push.addEventListener('click', day);

document
  .querySelector('.date-birthday__number')
  .addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      day();
    }
  });