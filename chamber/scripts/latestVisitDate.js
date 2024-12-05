const sidebar = document.getElementById('lvd');
const lastVisitKey = 'lastVisit';

// Obtener la fecha actual
const now = new Date();
const currentTimestamp = now.getTime();

// Verificar si hay un último registro de visita
const lastVisitTimestamp = localStorage.getItem(lastVisitKey);

if (!lastVisitTimestamp) {
    // Primera visita
    sidebar.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calcular la diferencia en milisegundos
    const timeDifference = currentTimestamp - lastVisitTimestamp;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        sidebar.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        sidebar.textContent = "You last visited 1 day ago.";
    } else {
        sidebar.textContent = `You last visited ${daysDifference} days ago.`;
    }
}

// Guardar la fecha de la visita actual en localStorage
localStorage.setItem(lastVisitKey, currentTimestamp);
