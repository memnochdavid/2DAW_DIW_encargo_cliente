const categorias = [
    {
        nombre: "Ramos",
        descripcion: "Clásicos y modernos para cada ocasión.",
        imagen: "./assets/img/flores/ramo-una-rosa.jpg",
    },
    {
        nombre: "Centros",
        descripcion: "Composiciones que transforman espacios.",
        imagen: "./assets/img/flores/centro-florecillas1.jpg",
    },
    {
        nombre: "Plantas",
        descripcion: "Verde todo el año, bajo mantenimiento.",
        imagen: "./assets/img/flores/centro2.jpg",
    },
    {
        nombre: "Seco y preservado",
        descripcion: "Un toque de añoranza para tu hogar.",
        imagen: "./assets/img/flores/secos-lavanda1.jpg",
    }
];

const contenedor = document.getElementById("categories-section");


categorias.forEach(cat => {
    const card = document.createElement("article");
    card.classList.add("category-card");

    card.innerHTML = `
        <img src="${cat.imagen}" alt="${cat.nombre}">
        <h2>${cat.nombre}</h2>
        <p>${cat.descripcion}</p>
        <a href="?page=catalogo&cat=${encodeURIComponent(cat.nombre)}" class="boton-1">Ver más</a>
    `;

    contenedor.appendChild(card);
});