document.addEventListener("DOMContentLoaded", async () => {
    const main = document.querySelector("main");

    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "inicio"; // página por defecto
    const id = params.get("id"); // id del producto (si aplica)

    // Determinar qué archivo HTML cargar
    let pageFile = "";

    switch (page) {
        case "inicio":
            pageFile = "./pages/inicio.html";
            break;
        case "catalogo":
            pageFile = "./pages/catalogo.html";
            break;
        case "contacto":
            pageFile = "./pages/contacto.html";
            break;
        case "envios":
            pageFile = "./pages/envios.html";
            break;
        case "nosotras":
            pageFile = "./pages/nosotras.html";
            break;
        case "faqs":
            pageFile = "./pages/faqs.html";
            break;
        case "producto":
            pageFile = "./pages/producto.html";
            break;
        default:
            pageFile = "./pages/404.html";
    }

    // Cargar el contenido de la página correspondiente
    try {
        const response = await fetch(pageFile);

        if (!response.ok) throw new Error(`No se pudo cargar ${pageFile}`);

        const html = await response.text();
        main.innerHTML = html;

        // Reejecutar scripts incluidos en el HTML cargado
        const scripts = main.querySelectorAll("script");
        scripts.forEach(oldScript => {
            const newScript = document.createElement("script");
            if (oldScript.src) {
                newScript.src = oldScript.src;
                newScript.defer = true;
            } else {
                newScript.textContent = oldScript.textContent;
            }
            document.body.appendChild(newScript);
        });

        // Si es una página de producto, mostrar la ficha
        if (page === "producto" && id) {
            // Esperar un pequeño tiempo para asegurar que producto.js esté cargado
            setTimeout(() => {
                if (typeof mostrarProducto === "function") {
                    mostrarProducto(id);
                } else {
                    console.warn("mostrarProducto() no está disponible todavía.");
                }
            }, 200);
        }

    } catch (error) {
        console.error("Error al cargar la página:", error);
        main.innerHTML = "<p>Error al cargar el contenido.</p>";
    }
});
