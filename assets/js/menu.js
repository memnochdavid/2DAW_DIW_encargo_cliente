document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('menu-button');
    const menu = document.getElementById('objetos-menu');

    boton.addEventListener('click', () => {
        const abierto = menu.classList.toggle('oculto');
        boton.setAttribute('aria-expanded', !abierto);
    });
});