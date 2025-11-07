const faqs = [
    {
        pregunta: "¿Cómo cuido de mis flores?",
        respuesta: "Mantén el agua limpia y fresca, cambia el agua cada dos días y corta los tallos en diagonal para una mejor absorción."
    },
    {
        pregunta: "¿Con cuánta antelación debo hacer mi pedido?",
        respuesta: "Para asegurar disponibilidad, recomendamos realizar el pedido con al menos 24 horas de antelación."
    },
    {
        pregunta: "¿Puedo personalizar un ramo?",
        respuesta: "Sí, puedes elegir el tipo de flores, el color predominante y el tamaño. Solo indícalo en el formulario de contacto."
    },
    {
        pregunta: "¿Qué hago si mi ramo llega dañado?",
        respuesta: "Contacta con nosotras en las primeras 24 horas tras la entrega, y te ofreceremos una reposición sin coste adicional."
    }
];

const contenedorFaqs = document.getElementById("faqs-section");

faqs.forEach(faq => {
    const faqItem = document.createElement("article");
    faqItem.classList.add("faq-item");

    faqItem.innerHTML = `
    <button class="faq-pregunta">
        ${faq.pregunta}
        <span class="icon">+</span>
    </button>
    <div class="faq-respuesta">
        <p>${faq.respuesta}</p>
    </div>
  `;

    contenedorFaqs.appendChild(faqItem);
});

const botones = document.querySelectorAll(".faq-pregunta");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const respuesta = boton.nextElementSibling;
        const icon = boton.querySelector(".icon");

        respuesta.classList.toggle("visible");
        icon.textContent = respuesta.classList.contains("visible") ? "–" : "+";
    });
});
