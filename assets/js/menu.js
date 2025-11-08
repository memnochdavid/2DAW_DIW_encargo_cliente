const menuButton = document.getElementById("menu-button");
const contenedorObjetosMenu = document.getElementById("objetos-menu");

menuButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    contenedorObjetosMenu.classList.toggle("visible");
    contenedorObjetosMenu.classList.remove("oculto");
});

document.addEventListener("click", (event) => {
    const clicDentroMenu = contenedorObjetosMenu.contains(event.target);
    const clicEnBoton = menuButton.contains(event.target);

    if (!clicDentroMenu && !clicEnBoton) {
        contenedorObjetosMenu.classList.remove("visible");
    }
});

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

// ===========================
// CARRITO
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const dialogoCarrito = document.getElementById('dialogoCarrito');
    const botonAbrirCarrito = document.getElementById('abrirDialogoCarrito');
    const contenedorCarrito = document.getElementById('carrito-contenido');
    const totalCarrito = document.getElementById('carrito-total');
    const botonVaciar = document.getElementById('vaciarCarrito');

    // 🔹 Renderiza los productos del carrito
    function actualizarCarrito() {
        contenedorCarrito.innerHTML = "";

        if (compra.length === 0) {
            contenedorCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
            totalCarrito.textContent = "0 €";
            actualizarContador();
            return;
        }

        let total = 0;

        compra.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("carrito-item");
            div.innerHTML = `
                <p>${item.nombre}</p>
                <p>${item.precio.toFixed(2)} € x ${item.cantidad}</p>
            `;
            contenedorCarrito.appendChild(div);
            total += item.precio * item.cantidad;
        });

        totalCarrito.textContent = total.toFixed(2) + " €";
        actualizarContador();
    }

    // 🔹 Mostrar el diálogo del carrito
    botonAbrirCarrito.addEventListener('click', (e) => {
        e.preventDefault();
        actualizarCarrito();
        dialogoCarrito.showModal();
    });

    // 🔹 Cerrar si se hace clic fuera del diálogo
    dialogoCarrito.addEventListener('click', (e) => {
        const rect = dialogoCarrito.getBoundingClientRect();
        const dentroDialogo =
            rect.top <= e.clientY && e.clientY <= rect.bottom &&
            rect.left <= e.clientX && e.clientX <= rect.right;

        if (!dentroDialogo) {
            dialogoCarrito.close();
        }
    });

    // 🔹 Vaciar carrito
    botonVaciar.addEventListener('click', () => {
        compra.length = 0; // vacía el array sin perder referencia
        localStorage.setItem('carritoPAGOS', JSON.stringify(compra)); // guarda el cambio
        actualizarCarrito();
        actualizarContador();
    });

    // 🔹 Al cargar la página, muestra el contador actualizado
    actualizarContador();
});

// ===========================
// CONTADOR DE CARRITO
// ===========================
const contadorCarrito = document.getElementById('contador-carrito');

function actualizarContador() {
    const totalItems = compra.reduce((acc, item) => acc + item.cantidad, 0);
    if (totalItems > 0) {
        contadorCarrito.style.display = 'block';
        contadorCarrito.textContent = totalItems;
    } else {
        contadorCarrito.style.display = 'none';
    }
}
