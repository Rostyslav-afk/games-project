function day() {
  const birthday = document.querySelector('.date-birthday__number').value;
  const number = birthday / 4;
  if (number % 1 === 0) {
    const text = document.querySelector('.date-birthday__text');
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