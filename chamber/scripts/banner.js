document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("banner");
    const closeButton = document.getElementById("close-banner");

    // Mostrar el banner solo en lunes, martes y miércoles
    const today = new Date().getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
    if (today >= 1 && today <= 3) { // Lunes (1) a Miércoles (3)
        banner.classList.remove("hidden");
    }

    // Cerrar el banner
    closeButton.addEventListener("click", function () {
        banner.classList.add("hidden");
    });
});
