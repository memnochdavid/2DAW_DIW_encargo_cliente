const rutaImg = "./assets/img/";

const metodosContacto =[
    {
        icon: rutaImg + "phone.svg",
        content: "958 26 56 09",
    },
    {
        icon: rutaImg + "phone.svg",
        content: "678 43 73 74",
    },
    {
        icon: rutaImg + "mail.svg",
        content: "hola@floristeriagranada.com",
    },
    {
        icon: rutaImg + "time.svg",
        content: "De lunes a sábado: 9:00-14:00",
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
