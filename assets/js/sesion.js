// ===========================
// INICIO DE SESIÓN
// ===========================
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