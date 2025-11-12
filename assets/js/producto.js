
function mostrarProducto(id) {
    const producto = productos.find(p => p.id === parseInt(id));
    const contenedor = document.getElementById("producto-section");

    if (!producto) {
        contenedor.innerHTML = "<p>Producto no encontrado.</p>";
        return;
    }

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
                <h3>Desde ${producto.precio} €</h3>
                <p><b>Temporada:</b> ${producto.temp}</p>
                <p><b>Categoría:</b> ${producto.cat}</p>
                <a href="#" class="boton-1" id="btn-add-carrito-${producto.id}">Añadir al carrito</a>
            </div>
        </article>
    `;

    const botonCarrito = document.getElementById(`btn-add-carrito-${producto.id}`);

    botonCarrito.addEventListener('click', (e) => {
        e.preventDefault();

        anadirAlCarrito(producto);

        botonCarrito.textContent = '¡Añadido!';
        setTimeout(() => {
            botonCarrito.textContent = 'Añadir al carrito';
        }, 1000);
    });

    relacionados(producto);
}

function anadirAlCarrito(producto) {

    const itemExistente = compra.find(item => item.id === producto.id);

    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        compra.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
        actualizarContador();
    }

    //localStorage
    // convierte el array de JS a un string
    localStorage.setItem('carritoPAGOS', JSON.stringify(compra));

    console.log("Producto añadido y guardado. Contenido actual:", compra);
}

function relacionados(prod) {
    const relacionados = productos.filter(p => p.cat === prod.cat && p.id !== prod.id);
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
            <p>${relacionado.nombre}</p>
            <a href="?page=producto&id=${relacionado.id}" class="boton-1">Ver más</a>
        `;

        grid.appendChild(card);
    });

    contenedor.appendChild(grid);
}
