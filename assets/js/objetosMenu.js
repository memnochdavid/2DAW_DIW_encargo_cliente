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
            case "Catálogo":
                enlace.href = "index.html?page=catalogo";
                break;
            case "Contacto":
                enlace.href = "index.html?page=contacto";
                break;
            case "Envíos":
                enlace.href = "index.html?page=envios";
                break;
            case "Nosotras":
                enlace.href = "index.html?page=nosotras";
                break;
            case "FAQs":
                enlace.href = "?page=inicio#faqs-section";
                break;
            default:
                enlace.href = "index.html?page=inicio";
        }

        enlace.textContent = objeto;
        elemento.appendChild(enlace);
        contenedorObjetosMenu.appendChild(elemento);
    });
});
