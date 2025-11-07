function mostrarProducto(id) {
    const producto = productos.find(p => p.id == id);

    const contenedor = document.getElementById("producto-section");

    if (!producto) {
        contenedor.innerHTML = "<p>Producto no encontrado.</p>";
        return;
    }

    // Divide la descripción en frases y genera párrafos
    const descripcionHTML = producto.desc
        .split(". ")
        .map(parrafo => `<p>${parrafo}.</p>`)
        .join("");

    contenedor.innerHTML = `
        <article class="producto-ficha">
            <img src="${producto.img}" alt="${producto.nombre}">
            <div class="info">
                <h2>${producto.nombre}</h2>
                ${descripcionHTML}
                <h3>${producto.precio} €</h3>
                <p>Categoría: ${producto.cat}</p>
                <a href="#" class="boton-1">Añadir al carrito</a>
            </div>
        </article>
    `;
    relacionados(producto.cat);
}

function relacionados(cat) {
    const relacionados = productos.filter(p => p.cat === cat);
    const contenedor = document.getElementById("productos-relacionados");

    // Limpiar contenido anterior
    contenedor.innerHTML = "";

    // Crear el título h2
    const titulo = document.createElement("h2");
    titulo.textContent = "Productos relacionados";
    contenedor.appendChild(titulo);

    // Crear un div contenedor para las cards
    const grid = document.createElement("div");
    grid.classList.add("relacionados-grid");

    relacionados.forEach(relacionado => {
        const card = document.createElement("article");
        card.classList.add("relacionado-card");

        card.innerHTML = `
            <img src="${relacionado.img}" alt="${relacionado.nombre}">
            <h3>${relacionado.nombre}</h3>
            <a href="?page=producto&id=${relacionado.id}" class="boton-1">Ver más</a>
        `;

        grid.appendChild(card);
    });

    contenedor.appendChild(grid);
}
