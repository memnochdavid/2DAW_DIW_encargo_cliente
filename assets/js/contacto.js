const rutaImg = "./assets/img/";

const metodosContacto =[
    {
        icon: rutaImg + "phone.svg",
        content: "958 26 56 09  |   678 43 73 74",
    },
    {
        icon: rutaImg + "mail.svg",
        content: "hola@floristeriagranada.com",
    },
    {
        icon: rutaImg + "address.svg",
        content: "C/ Magnolia 12, 28000",
    },
    {
        icon: rutaImg + "time.svg",
        content: "L–V M(0:00–14:00) / T(17:00–20:30) | S M(0:00–14:00)",
    },

]

const contenedorContacto = document.getElementById("metodos-contacto-container");

metodosContacto.forEach(element => {
    const item = document.createElement("div");
    item.classList.add("metodo-item");

    item.innerHTML = `
        <img src="${element.icon}" alt="">
        <p>${element.content}</p>
    `;

    contenedorContacto.appendChild(item);
});


