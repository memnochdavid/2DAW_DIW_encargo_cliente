document.addEventListener("DOMContentLoaded", () => {
    const objetosMenu = [
        "Catálogo",
        "Contacto",
        "Envíos",
        "Nosotras",
        "FAQs",
    ];

    const contenedorObjetosMenu = document.getElementById("objetos-menu");
    if (!contenedorObjetosMenu) {
        console.error("No se encontró el contenedor del menú");
        return;
    }

    objetosMenu.forEach(objeto => {
        const elemento = document.createElement("li");
        elemento.classList.add("menu-item");

        const enlace = document.createElement("a");

        switch (objeto) {
            case "Catálogo": enlace.href = "#"; break;
            case "Contacto": enlace.href = "#"; break;
            case "Envíos": enlace.href = "#"; break;
            case "Nosotras": enlace.href = "#"; break;
            case "FAQs": enlace.href = "#"; break;
            default: enlace.href = "#";
        }

        enlace.textContent = objeto;
        elemento.appendChild(enlace);
        contenedorObjetosMenu.appendChild(elemento);
    });
});
