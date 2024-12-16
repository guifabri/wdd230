const jsonURL = "https://raw.githubusercontent.com/guifabri/wdd230/refs/heads/main/chamber/data/members.json";

async function getMembers() {
    try {
        const response = await fetch(jsonURL);
        if (!response.ok) throw new Error("Error al cargar los datos");
        const membersData = await response.json();
        displaySpotlightMembers(membersData);
    } catch (error) {
        console.error("Error:", error);
    }
}
function displaySpotlightMembers(membersData) {
    const spotlightContainer = document.getElementById("spotlight");
    spotlightContainer.innerHTML = ""; // Limpiar contenedor

    // Filtrar empresas de categoría Silver y Gold
    const eligibleMembers = membersData.filter(
        member => member.membershipLevel === "Silver" || member.membershipLevel === "Gold"
    );

    // Seleccionar aleatoriamente dos empresas
    const spotlightMembers = [];
    while (spotlightMembers.length < 2 && eligibleMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
        spotlightMembers.push(eligibleMembers.splice(randomIndex, 1)[0]); // Remover y agregar
    }

    spotlightMembers.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        // Crear lista de enlaces para todos los `websiteURLs`
        const linksHTML = member.websiteURLs
            .map(url => `<a href="${url}" target="_blank">${url}</a>`)
            .join(" | ");

        // Estructura en formato grid-view
        card.innerHTML = `
            <img src="${member.icon}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.addresses.join(", ")}</p>
            <p><strong>Phone:</strong> ${member.phoneNumbers.join(", ")}</p>
            <p><strong>Websites:</strong> ${linksHTML}</p>
            <p><strong>Membership:</strong> ${member.membershipLevel}</p>
            <p><strong>Industry:</strong> ${member.industry}</p>
        `;

        spotlightContainer.appendChild(card);
    });

    // Asegurar que el contenedor esté en formato grid-view
    spotlightContainer.className = "spotlight";
}


getMembers();