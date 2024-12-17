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

    if (view === "grid") {
        membersData.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");

            const linksHTML = member.websiteURLs
                .map(url => `<a href="${url}" target="_blank">${url}</a>`)
                .join(" | ");

            card.innerHTML = `
                <img src="${member.icon}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.addresses.join(", ")}</p>
                <p><strong>Phone:</strong> ${member.phoneNumbers.join(", ")}</p>
                <p><strong>Websites:</strong> ${linksHTML}</p>
                <p><strong>Membership:</strong> ${member.membershipLevel}</p>
                <p><strong>Industry:</strong> ${member.industry}</p>
            `;
            container.appendChild(card);
        });
    } else {
        // Crear tabla
        const table = document.createElement("table");
        table.classList.add("member-table");

        // Encabezados de la tabla
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Websites</th>
                    <th>Membership</th>
                    <th>Industry</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        const tbody = table.querySelector("tbody");

        // Filas de la tabla
        membersData.forEach(member => {
            const linksHTML = member.websiteURLs
                .map(url => `<a href="${url}" target="_blank">${url}</a>`)
                .join(" | ");

            const row = `
                <tr>
                    <td><img src="${member.icon}" alt="${member.name}" width="50"></td>
                    <td>${member.name}</td>
                    <td>${member.addresses.join(", ")}</td>
                    <td>${member.phoneNumbers.join(", ")}</td>
                    <td>${linksHTML}</td>
                    <td>${member.membershipLevel}</td>
                    <td>${member.industry}</td>
                </tr>
            `;
            tbody.insertAdjacentHTML("beforeend", row);
        });

        container.appendChild(table);
    }

    container.className = view === "grid" ? "grid-view" : "list-view";
}


// Event Listeners para alternar vistas
function addListeners(membersData) {
    gridBtn.addEventListener("click", () => displayMembers(membersData, "grid"));
    listBtn.addEventListener("click", () => displayMembers(membersData, "list"));
}

// Llamar a la función
fetchMembers();
