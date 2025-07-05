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

  if (allNumbers.some(isNaN)) {
    document.querySelector(".choose-number-text").textContent = "Найбільше число, яке ви ввели -";
  }

  else {
    const max = Math.max(...allNumbers);
  document.querySelector(".choose-number-text").textContent = `Найбільше число, яке ви ввели - ${max}`;
  }
}
document.getElementById("choose-number-input-1").addEventListener("input", findMax);
document.getElementById("choose-number-input-2").addEventListener("input", findMax);
document.getElementById("choose-number-input-3").addEventListener("input", findMax);

// const maxNumber = Math.max(...allNumbers);
// console.log(`The biggest number is: ${maxNumber}`);