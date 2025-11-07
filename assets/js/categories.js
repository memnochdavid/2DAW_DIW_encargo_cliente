const categorias = [
    {
        nombre: "Ramos",
        descripcion: "Clásicos y modernos para cada ocasión.",
        imagen: "./assets/img/flores/1000043426.jpg",
    },
    {
        nombre: "Centros",
        descripcion: "Composiciones que transforman espacios.",
        imagen: "./assets/img/flores/426280fb-74f9-4a97-9b54-edea622b3a08-1_all_144241.jpg",
    },
    {
        nombre: "Plantas",
        descripcion: "Verde todo el año, bajo mantenimiento.",
        imagen: "./assets/img/flores/zamioculca2-scaled-e1676805365692-1024x1024.jpg",
    },
    {
        nombre: "Seco y preservado",
        descripcion: "Un toque de añoranza para tu hogar.",
        imagen: "./assets/img/flores/trigo2-scaled-e1676805839351-1024x1024.jpg",
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
    <a href="#" class="boton-1">Ver más</a>
  `;


    contenedor.appendChild(card);
});