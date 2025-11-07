const menuButton = document.getElementById("menu-button");
const contenedorObjetosMenu = document.getElementById("objetos-menu");

menuButton.addEventListener("click", (event) => {
    event.preventDefault(); // evita salto si usas <a>
    event.stopPropagation(); // no cierre al hacer clic en el botón
    contenedorObjetosMenu.classList.toggle("visible");
    contenedorObjetosMenu.classList.remove("oculto"); // <- importante
});

document.addEventListener("click", (event) => {
    const clicDentroMenu = contenedorObjetosMenu.contains(event.target);
    const clicEnBoton = menuButton.contains(event.target);

    if (!clicDentroMenu && !clicEnBoton) {
        contenedorObjetosMenu.classList.remove("visible");
    }
});
