const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create a card for each prophet
    let card = document.createElement('div');
    card.className = 'card';

    // Add the prophet's name
    let name = document.createElement('h2');
    name.textContent = `${prophet.name} ${prophet.lastname}`;
    card.appendChild(name);

    // Add the prophet's birthdate
    let birthdate = document.createElement('p');
    birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
    card.appendChild(birthdate);

    // Add the prophet's death date
    let death = document.createElement('p');
    death.textContent = `Death: ${prophet.death}`;
    card.appendChild(death);

    // Add the prophet's birthplace
    let birthplace = document.createElement('p');
    birthplace.textContent = `Birthplace: ${prophet.birthplace}`;
    card.appendChild(birthplace);

    // Add the prophet's number of children
    let numofchildren = document.createElement('p');
    numofchildren.textContent = `Number of Children: ${prophet.numofchildren}`;
    card.appendChild(numofchildren);

    // Add the prophet's image
    let image = document.createElement('img');
    image.src = prophet.imageurl;
    image.alt = `${prophet.name} ${prophet.lastname}`;
    card.appendChild(image);

    // Append the card to the cards container
    cards.appendChild(card);
  });
}

// Calling the function once
getProphetData(url);
