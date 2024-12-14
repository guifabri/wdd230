const container = document.getElementById("members-container");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

// URL del JSON
const jsonURL = "https://raw.githubusercontent.com/guifabri/wdd230/refs/heads/main/chamber/data/members.json"; // Reemplaza con la URL real

// Función para obtener JSON desde la URL
async function fetchMembers() {
    try {
        const response = await fetch(jsonURL);
        if (!response.ok) throw new Error("Error al cargar los datos");
        const membersData = await response.json();
        displayMembers(membersData, "grid");
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

        // Crear lista de enlaces para todos los `websiteURLs`
        const linksHTML = member.websiteURLs
            .map(url => `<a href="${url}" target="_blank">${url}</a>`)
            .join(" | ");
        if(view==="grid"){
            card.innerHTML = `
            <img src="${member.icon}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.addresses.join(", ")}</p>
            <p><strong>Phone:</strong> ${member.phoneNumbers.join(", ")}</p>
            <p><strong>Websites:</strong> ${linksHTML}</p>
            <p><strong>Membership:</strong> ${member.membershipLevel}</p>
            <p><strong>Industry:</strong> ${member.industry}</p>
            `;
        }
        else{
            card.innerHTML = `
            <div class="list-card">
                <span><img src="${member.icon}" alt="${member.name}"></span>
                <span> --- ${member.name}</span>
                <span> --- ${member.addresses.join(", ")}</span>
                <span> --- ${member.phoneNumbers.join(", ")}</span>
                <span> --- ${linksHTML}</span>
                <span> --- ${member.membershipLevel}</span>
                <span> --- ${member.industry}</span>
            </div>
            `;
        }

        container.appendChild(card);
    });

    container.className = view === "grid" ? "grid-view" : "list-view";
}

// Event Listeners para alternar vistas
function addListeners(membersData) {
    gridBtn.addEventListener("click", () => displayMembers(membersData, "grid"));
    listBtn.addEventListener("click", () => displayMembers(membersData, "list"));
}

// Llamar a la función
fetchMembers();
