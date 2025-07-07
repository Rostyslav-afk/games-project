  // const firstNumber = Number(document.getElementById("choose-number-input-1").value);
  // const secondNumber = Number(document.getElementById("choose-number-input-2").value);
  // const thirdNumber = Number(document.getElementById("choose-number-input-3").value);
  // const allNumbers = [firstNumber, secondNumber, thirdNumber];
  // const maxNumber = Math.max(...allNumbers);
  // console.log(`Найбільше число: ${maxNumber}`);

  function findMax() {
    const firstNumber = Number(document.getElementById("choose-number-input-1").value);
    const secondNumber = Number(document.getElementById("choose-number-input-2").value);
    const thirdNumber = Number(document.getElementById("choose-number-input-3").value);

    const allNumbers = [firstNumber, secondNumber, thirdNumber];
    console.log(allNumbers);

    if (allNumbers.some(isNaN)) {
      document.getElementById("choose-number-text-1").textContent = "Найбільше число, яке ви ввели -";
    document.getElementById("choose-number-text-2").textContent = `Найменше число, яке ви ввели -`;
    document.getElementById("choose-number-text-3").textContent = `Середне число, яке ви ввели - `;  
    }

    else {
      const max = Math.max(...allNumbers);
    document.getElementById("choose-number-text-1").textContent = `Найбільше число, яке ви ввели - ${max}`;
    const min = Math.min(...allNumbers);
    document.getElementById("choose-number-text-2").textContent = `Найменше число, яке ви ввели -  ${min}`;
      const sorted = [...allNumbers].sort((a, b) => a - b);
  const mid = sorted[1];
    document.getElementById("choose-number-text-3").textContent = `Середне число, яке ви ввели -  ${mid}`;
    }
  }
  document.getElementById("choose-number-input-1").addEventListener("input", findMax);
  document.getElementById("choose-number-input-2").addEventListener("input", findMax);
  document.getElementById("choose-number-input-3").addEventListener("input", findMax);

  // const maxNumber = Math.max(...allNumbers);
  // console.log(`The biggest number is: ${maxNumber}`);