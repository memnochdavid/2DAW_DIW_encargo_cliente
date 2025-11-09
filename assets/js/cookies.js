document.addEventListener("DOMContentLoaded", () => {
    const cookieDialog = document.getElementById("cookieDialog");
    const botonCerrar = document.getElementById("cerrarCookies");

    // Mostrar el popup automáticamente al cargar
    cookieDialog.showModal();

    // Cerrar al hacer clic en "Aceptar"
    botonCerrar.addEventListener("click", () => {
        cookieDialog.close();
    });

    // Impedir que se cierre haciendo clic fuera
    cookieDialog.addEventListener("cancel", (e) => e.preventDefault());
});
