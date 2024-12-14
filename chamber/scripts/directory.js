const container = document.getElementById("members-container");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

// URL del JSON
const jsonURL = "URL_DEL_JSON"; // Reemplaza esto con la URL real

// Función para obtener JSON desde la URL
async function fetchMembers() {
    try {
        const response = await fetch(jsonURL);
        if (!response.ok) throw new Error("Error al cargar los datos");
        const membersData = await response.json();
        displayMembers(membersData, "grid"); // Mostrar en vista grid por defecto
        addListeners(membersData);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Función para mostrar miembros
function displayMembers(membersData, view) {
    container.innerHTML = ""; // Limpiar contenedor

    membersData.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.icon}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.addresses.join(", ")}</p>
            <p><strong>Phone:</strong> ${member.phoneNumbers.join(", ")}</p>
            <p><a href="${member.websiteURLs[0]}" target="_blank">Visit Website</a></p>
            <p><strong>Membership:</strong> ${member.membershipLevel}</p>
            <p><strong>Industry:</strong> ${member.industry}</p>
        `;

        container.appendChild(card);
    });

    container.className = view === "grid" ? "grid-view" : "list-view";
}

// Event Listeners para alternar vistas
function addListeners(membersData) {
    gridBtn.addEventListener("click", () => displayMembers(membersData, "grid"));
    listBtn.addEventListener("click", () => displayMembers(membersData, "list"));
}

// Llamar a la función para obtener y mostrar miembros
fetchMembers();
