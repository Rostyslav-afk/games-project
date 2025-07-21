import vladdraga from '/img/photo/vladdraga.webp';
import lev from '/img/photo/lev.webp';
import davyd from '/img/photo/davyd.webp';
import mukolafok from '/img/photo/mukolafok.webp';
import nazar from '/img/photo/nazar.webp';





const team = [
  {
    name: "Ростислав",
    info: "Teamlead, Розробник",
    image: "https://img.lovepik.com/png/20231116/cartoon-coding-geek-using-a-laptop-and-headphones-vector-clipart_611738_wh860.png"
  },
  {
    name: "Влад Д.",
    info: "Scrum Master, Розробник",
    image: vladdraga
  },
  {
    name: "Лев",
    info: "Розробник",
    image: lev
  },
  {
    name: "Давид",
    info: "Розробник",
    image: davyd
  },
  {
    name: "Микола",
    info: "Розробник",
    image: mukolafok
  },
  {
    name: "Влад К.",
    info: "Розробник",
    image: "https://img.lovepik.com/png/20231116/cartoon-coding-geek-using-a-laptop-and-headphones-vector-clipart_611738_wh860.png"
  },
  {
    name: "Назар",
    info: "Розробник",
    image: nazar
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