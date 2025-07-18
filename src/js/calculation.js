const firstNum = document.querySelector('.calculation__numbers');
  const secondNum = document.getElementById('number');
    const resultEl = document.querySelector('.calculation__result');
    
  const operations = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : 'ділення на нуль не можливе'),
  };

  document.querySelectorAll('.calculation__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const a = parseFloat(firstNum.value);
      const b = parseFloat(secondNum.value);

      if (btn.classList.contains('plus')) {
          resultEl.textContent = operations.plus(a, b);
          resultEl.style.color = "#000"
      } else if (btn.classList.contains('minus')) {
          resultEl.textContent = operations.minus(a, b);
          resultEl.style.color = '#000';
      } else if (btn.classList.contains('multiply')) {
          resultEl.textContent = operations.multiply(a, b);
          resultEl.style.color = '#000';
      } else if (btn.classList.contains('divide')) {
          resultEl.textContent = operations.divide(a, b);
          resultEl.style.color = '#000';
      }
    });
  });