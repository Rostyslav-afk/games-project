const btnEl = document.querySelector(".box__btn");
const modEl = document.querySelector(".modal");
const inpEl = document.querySelector(".box__inp")
btnEl.addEventListener("click", () => {
 
})

document.querySelector('.box__form').addEventListener('submit', (e) => {
    e.preventDefault(); 
  const email = document.querySelector('.box__inp');
  if (!email.checkValidity()) {
    e.preventDefault();
  } else {
      modEl.style.display = 'block'; 
    }
});
