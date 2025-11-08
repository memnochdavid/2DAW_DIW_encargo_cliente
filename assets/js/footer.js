const elementosCopyright = [
    "Floristería Pétalo&Co",
    "Todos los derechos reservados",
    "C/Magnolia 12, 28000",
    "©2025 David Duque Díaz para Diseño de Interfaces Web"
]
const contenedorCopyright = document.getElementById("copyright");

elementosCopyright.forEach((element, index) => {

    const elementoCopyright = document.createElement("span");
    elementoCopyright.textContent = element;
    contenedorCopyright.append(elementoCopyright);


    if (index < elementosCopyright.length - 1) {
        const separador = document.createElement("span");
        separador.textContent = " | ";
        contenedorCopyright.append(separador);
    }
});