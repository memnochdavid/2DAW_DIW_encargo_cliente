const contenedor = document.getElementById("catalogo-section");

// Obtener categoría desde la URL
const params = new URLSearchParams(window.location.search);
const categoriaSeleccionada = params.get("cat");

let productosFiltrados = productos;

// Si hay una categoría seleccionada, filtramos
if (categoriaSeleccionada) {
    productosFiltrados = productos.filter(p => p.cat === categoriaSeleccionada);
}

// Mostrar los productos (filtrados o todos)
productosFiltrados.forEach(prod => {
    const card = document.createElement("article");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <h3>${prod.precio}€</h3>
        <a href="?page=producto&id=${prod.id}" class="boton-1">Comprar</a>
    `;

    contenedor.appendChild(card);
});