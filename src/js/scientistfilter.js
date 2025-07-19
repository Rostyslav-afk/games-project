const scientists = [
  { name: "Albert", surname: "Einstein", birth: 1879, death: 1955 },
  { name: "Isaac", surname: "Newton", birth: 1643, death: 1727 },
  { name: "Marie", surname: "Curie", birth: 1867, death: 1934 },
  { name: "Nikola", surname: "Tesla", birth: 1856, death: 1943 },
  { name: "Ada", surname: "Lovelace", birth: 1815, death: 1852 },
  { name: "Charles", surname: "Darwin", birth: 1809, death: 1882 },
  { name: "Galileo", surname: "Galilei", birth: 1564, death: 1642 },
  { name: "Carl", surname: "Sagan", birth: 1934, death: 1996 },
  { name: "Alan", surname: "Turing", birth: 1912, death: 1954 },
  { name: "Stephen", surname: "Hawking", birth: 1942, death: 2018 }
];


const grid = document.querySelector('.scientists__grid');

function renderScientists(data) {
  grid.innerHTML = "";
  data.forEach(scientist => {
    const card = document.createElement('li');
    card.className = 'scientists__card';
    card.innerHTML = `
      <strong>${scientist.name} ${scientist.surname}</strong><br>
      ${scientist.birth}–${scientist.death}
    `;
    grid.appendChild(card);
  });
}

const tasks = document.querySelectorAll(".tasks__item");

tasks[0].addEventListener("click", () => {
  const res = scientists.filter(s => s.birth >= 1801 && s.birth <= 1900);
  renderScientists(res);
});

tasks[1].addEventListener("click", () => {
  const einstein = scientists.find(s => s.name === "Albert" && s.surname === "Einstein");
  alert(`Albert Einstein народився в ${einstein.birth} році.`);
});

tasks[2].addEventListener("click", () => {
  const sorted = [...scientists].sort((a, b) => a.surname.localeCompare(b.surname));
  renderScientists(sorted);
});

tasks[3].addEventListener("click", () => {
  const res = scientists.filter(s => s.surname.startsWith("C"));
  renderScientists(res);
});

tasks[4].addEventListener("click", () => {
  const sorted = [...scientists].sort((a, b) => (b.death - b.birth) - (a.death - a.birth));
  renderScientists(sorted);
});

tasks[5].addEventListener("click", () => {
  const filtered = scientists.filter(s => !s.name.startsWith("A"));
  renderScientists(filtered);
});

tasks[6].addEventListener("click", () => {
  const latestBorn = [...scientists].sort((a, b) => b.birth - a.birth)[0];
  renderScientists([latestBorn]);
});

tasks[7].addEventListener("click", () => {
  const sorted = [...scientists].sort((a, b) => (b.death - b.birth) - (a.death - a.birth));
  const maxLived = sorted[0];
  const minLived = sorted[sorted.length - 1];
  renderScientists([maxLived, minLived]);
});

tasks[8].addEventListener("click", () => {
  const res = scientists.filter(s => s.name[0] === s.surname[0]);
  renderScientists(res);
});