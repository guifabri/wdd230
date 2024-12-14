const baseURL = "https://guifabri.github.io/wdd230/";
const linksURL = "https://guifabri.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(data) {
  const linksContainer = document.querySelector("ul.links"); // Selecciona el contenedor de enlaces

  data.weeks.forEach((week) => {
    // Crea un encabezado para la semana
    const weekHeader = document.createElement("h3");
    weekHeader.textContent = week.week;

    // Crea una lista para los enlaces de la semana
    const weekList = document.createElement("ul");
    weekList.classList.add("week-links");

    week.links.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `${baseURL}${link.url}`; // Construye la URL completa
      a.textContent = link.title; // Título del enlace
      li.appendChild(a);
      weekList.appendChild(li); // Agrega el <li> a la lista
    });

    // Agrega el encabezado y la lista de la semana al contenedor principal
    linksContainer.appendChild(weekHeader);
    linksContainer.appendChild(weekList);
  });
}

getLinks();
