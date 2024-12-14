const baseURL = "https://guifabri.github.io/wdd230/";
const linksURL = "https://guifabri.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(data) {
  const linksContainer = document.querySelector("ul.links"); // Selecciona el ul con la clase "links"

  data.weeks.forEach((week) => {
    // Para cada semana, recorre sus enlaces
    week.links.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `${baseURL}${link.url}`; // Construye la URL completa
      a.textContent = link.title; // Título del enlace
      li.appendChild(a);
      linksContainer.appendChild(li); // Agrega el <li> al contenedor
    });
  });
}

getLinks();
