const convertTime = () => {
  const input = parseInt(document.getElementById('hoursInput').value);
  if (isNaN(input) || input < 0) {
    document.getElementById('result').innerText = 'Введіть коректне число';
    return;
  }

  const days = Math.floor(input / 86400);
  const hours = Math.floor((input % 86400) / 3600);
  const minutes = Math.floor((input % 3600) / 60);
  const seconds = input % 60;

  const formatted = `${days} дн. ${String(hours).padStart(2, '0')}:${String(
    minutes
  ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  document.getElementById('result').innerText = formatted;
};


document.querySelector('.time__button').addEventListener('click', convertTime);