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

//inicio sesión
document.addEventListener('DOMContentLoaded', () => {
    const dialogo = document.getElementById('dialogoUsuario');
    const botonAbrir = document.getElementById('abrirDialogoUsuario');
    const botonCerrar = document.getElementById('cerrarDialogoUsuario');

    botonAbrir.addEventListener('click', (e) => {
        e.preventDefault();
        if (dialogo) {
            dialogo.showModal();
        }
    });

    if (dialogo) {
        dialogo.addEventListener('click', (e) => {
            const rect = dialogo.getBoundingClientRect();
            const isInDialog =
                rect.top <= e.clientY && e.clientY <= rect.bottom &&
                rect.left <= e.clientX && e.clientX <= rect.right;

            if (!isInDialog) {
                dialogo.close();
            }

        });
    }
});