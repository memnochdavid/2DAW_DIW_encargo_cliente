const contenedor = document.getElementById("catalogo-container");

// Obtener categoría desde la URL
const params = new URLSearchParams(window.location.search);
const categoriaSeleccionada = params.get("cat");

let productosFiltrados = productos;
let tituloTexto = "Mostrando todas las categorías";
// Si hay una categoría seleccionada, filtramos
if (categoriaSeleccionada) {
    productosFiltrados = productos.filter(p => p.cat === categoriaSeleccionada);
    tituloTexto = `Mostrando ${categoriaSeleccionada}`;
}
const titulo = document.getElementById("titulo-categoria-catalogo");
const h1 = document.createElement("h1");
h1.classList.add("titulo-categoria-catalogo");
h1.innerHTML = tituloTexto;
titulo.appendChild(h1);



//titulo
// const titulo = document.getElementById("categoria-titulo")
// titulo.innerHTML = `
//         <h1>Categoría ${productosFiltrados[0].cat}</h1>
//     `;

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