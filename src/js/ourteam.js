const team = [
  {
    name: "Ростислав",
    info: "Teamlead, Розробник",
    image: "https://img.lovepik.com/png/20231116/cartoon-coding-geek-using-a-laptop-and-headphones-vector-clipart_611738_wh860.png"
  },
  {
    name: "Влад Д.",
    info: "Scrum Master, Розробник",
    image: "../img/photo/vladdraga.webp"
  },
  {
    name: "Лев",
    info: "Розробник",
    image: "../img/photo/lev.webp"
  },
  {
    name: "Давид",
    info: "Розробник",
    image: "../img/photo/davyd.webp"
  },
  {
    name: "Микола",
    info: "Розробник",
    image: "../img/photo/mukolafok.webp"
  },
  {
    name: "Влад К.",
    info: "Розробник",
    image: "https://img.lovepik.com/png/20231116/cartoon-coding-geek-using-a-laptop-and-headphones-vector-clipart_611738_wh860.png"
  },
  {
    name: "Назар",
    info: "Розробник",
    image: "../img/photo/nazar.webp"
  }
];

let current = 0;

const img = document.getElementById('teamImage');
const name = document.getElementById('teamName');
const info = document.getElementById('teamInfo');
const dotsContainer = document.getElementById('dots');

function updateSlider() {
  const person = team[current];
  img.src = person.image;
  name.textContent = person.name;
  info.textContent = person.info;

  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === current);
  });
}

function createDots() {
  team.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === current) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });
}

document.getElementById('next').onclick = () => {
  current = (current + 1) % team.length;
  updateSlider();
};

document.getElementById('prev').onclick = () => {
  current = (current - 1 + team.length) % team.length;
  updateSlider();
};

createDots();
updateSlider();