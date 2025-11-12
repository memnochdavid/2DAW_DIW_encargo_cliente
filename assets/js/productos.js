const rutaFlores = "./assets/img/flores/";

const productos = [
    //ramos
    {
        id: 206,
        img: rutaFlores + "ramo-30-rosas1.jpg", // Actualizado
        nombre: '30 Rosas Rojas',
        precio: 90.00,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Ramo 30 Rosas rojas con verdes y rellenos disponibles. No incluye jarrón, ni decoración. Se entrega envuelto en papel y cinta de regalo",
    },
    {
        id: 207,
        img: rutaFlores + "ramo-rosas1.jpg", // Actualizado
        nombre: 'Ramo Rosas: 6 blancas y 6 rosas',
        precio: 55.50,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Ramo de 12 rosas, 6 rosas de color blanco y 6 rosas de color rosa. No incluye jarrón, ni decoración (foto orientativa). Con verdes y rellenos disponibles, se entrega envuelto en papel y cinta de regalo",
    },
    {
        id: 208,
        img: rutaFlores + "ramo-general-1.jpg", // Actualizado
        nombre: 'Ramo florista',
        precio: 49.50,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Ramo con flores de temporada a elección de florista. No incluye jarrón, ni decoración (foto orientativa). Con flores, verdes y rellenos disponibles. Se entrega envuelto en papel y cinta de regalo.",
    },
    {
        id: 209,
        img: rutaFlores + "ramos-tulipan1.jpg", // Actualizado
        nombre: 'Ramo 20 Tulipanes',
        precio: 49.00,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Ramo de 20 tulipanes, color según disponibilidad. No incluye jarrón, ni decoración, con verdes y rellenos disponibles (foto orientativa). Se entrega envuelto en papel y cinta de regalo.",
    },
    //centros
    {
        id: 210,
        img: rutaFlores + "centro1.jpg", // Actualizado
        nombre: 'Cesta de plantas grande',
        precio: 49.00,
        cat: "Centros",
        temp: "Primavera",
        desc: "Cesta variada con plantas de interior, varios modelos (fotos orientativas)",
    },
    {
        id: 211,
        img: rutaFlores + "centro2.jpg", // Actualizado
        nombre: 'Centro mediano',
        precio: 39.00,
        cat: "Centros",
        temp: "Primavera",
        desc: "Cesta variada con plantas de interior, varios modelos (fotos orientativas)",
    },
    {
        id: 212,
        img: rutaFlores + "cupula-cristal-mediana.jpg", // Actualizado
        nombre: 'Cúpula Cristal mediana Rosa Preservada',
        precio: 17.90,
        cat: "Centros",
        temp: "Todo el año",
        desc: "Cúpula de cristal mediana de rosa preservada, color y modelo según disponibilidad. Altura aproximada 15cm. Se entrega envuelta en papel y cinta de regalo. Consúltanos por WhatsApp disponibilidad actual de colores y medidas (sino se enviará el color y modelo al azar).",
    },
    {
        id: 213,
        img: rutaFlores + "cupula-rosa-mediana.jpg", // Actualizado
        nombre: 'Cúpula de Cristal mini de Rosa Preservada',
        precio: 11.90,
        cat: "Centros",
        temp: "Todo el año",
        desc: "Cúpula de cristal mini de rosa preservada, color y modelo según disponibilidad. Altura aproximada 10cm. Se entrega envuelta en papel y cinta de regalo. Consúltanos por WhatsApp disponibilidad actual de colores y medidas (sino se enviará el color y modelo al azar).",
    },
    //plantas
    {
        id: 214,
        img: rutaFlores + "plantas-bambu.jpg", // Actualizado
        nombre: 'Bambú',
        precio: 14.90,
        cat: "Plantas",
        temp: "Todo el año",
        desc: "6 varas de Bambú de 50 ó 60 cm de altura, rectas y curvas. No incluye jarrón, ni decoración. Se entrega en papel kraft y cinta de rafia",
    },
    {
        id: 215,
        img: rutaFlores + "plantas-anthurium1.jpg", // Actualizado
        nombre: 'Anthurium',
        precio: 18.00,
        cat: "Plantas",
        temp: "Todo el año",
        desc: "Planta de interior en macetero de 12 cm o 14cm de diametro. No incluye macetero, ni decoración. Se entrega en papel y cinta de regalo",
    },
    {
        id: 216,
        img: rutaFlores + "plantas-calathea.jpg", // Actualizado
        nombre: 'Calatheas mix',
        precio: 15.00,
        cat: "Plantas",
        temp: "Todo el año",
        desc: "Planta de interior en macetero de 12 cm o 14cm de diametro. No incluye macetero, ni decoración. Se entrega en papel y cinta de regalo",
    },
    {
        id: 217,
        img: rutaFlores + "planta-ficus-ginseng.jpg", // Actualizado
        nombre: 'Ficus Ginseng',
        precio: 20.00,
        cat: "Plantas",
        temp: "Primavera",
        desc: "En macetero de 12 cm de diámetro, no incluye macetero, se entrega en papel y cinta de regalo.",
    },
    //seco y preservado
    {
        id: 218,
        img: rutaFlores + "ramo-ramas1.jpg", // Actualizado
        nombre: 'Ramo flores secas',
        precio: 25.00,
        cat: "Seco y preservado",
        temp: "Todo el año",
        desc: "Ramo de flores secas preservadas, color según disponibilidad. No incluye jarrón, ni decoración, con verdes y rellenos disponibles (foto orientativa). Se entrega color al azar, envuelto en papel y cinta de regalo.",
    },
    {
        id: 111,
        img: rutaFlores + "centro-paniculata1.jpg", // Actualizado
        nombre: 'Paniculata',
        precio: 10.00,
        cat: "Seco y preservado",
        temp: "Todo el año",
        desc: "No incluye jarrón, ni decoración. Se entrega en papel kraft y cinta de rafia",
    },
    {id: 219,
        img: rutaFlores + "secos-lavanda1.jpg", // Actualizado
        nombre: 'Lavanda',
        precio: 15.00,
        cat: "Seco y preservado",
        temp: "Todo el año",
        desc: "No incluye jarrón, ni decoración. Se entrega en papel kraft y cinta de rafia",
    },
    {
        id: 220,
        img: rutaFlores + "secos-trigo1.jpg", // Actualizado
        nombre: 'Trigo',
        precio: 15.00,
        cat: "Seco y preservado",
        temp: "Todo el año",
        desc: "No incluye jarrón, ni decoración. Se entrega en papel kraft y cinta de rafia",
    },
    // --- RAMOS (Nuevos) ---
    {
        id: 221,
        img: rutaFlores + "ramo-tonos-c-lidos-scaled.jpg", // Actualizado
        nombre: 'Ramo en tonos cálidos',
        precio: 35.00,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Ramo de temporada en tonos cálidos (naranjas, amarillos, rojos). Flores según disponibilidad. No incluye jarrón. Se entrega envuelto en papel y cinta de regalo.",
    },
    {
        id: 222,
        img: rutaFlores + "rosas-rojas2-scaled-e1676806775567.jpg", // Actualizado
        nombre: 'Ramo 12 Rosas Rojas',
        precio: 48.00,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Clásico ramo de 12 rosas rojas con verdes y rellenos. Ideal para aniversarios. No incluye jarrón. Se entrega envuelto en papel y cinta de regalo.",
    },

    // --- CENTROS (Nuevos) ---
    {
        id: 223,
        img: rutaFlores + "centro-florecillas1.jpg", // Actualizado
        nombre: 'Centro floral variado',
        precio: 45.00,
        cat: "Centros",
        temp: "Primavera",
        desc: "Centro de flores variadas en base de esponja. Colores y flores según disponibilidad (foto orientativa). Ideal para regalar.",
    },
    {
        id: 224,
        img: rutaFlores + "centro-rosas-blancas1.jpg", // Actualizado
        nombre: 'Centro de Rosas Blancas',
        precio: 55.00,
        cat: "Centros",
        temp: "Primavera",
        desc: "Elegante centro mediano compuesto principalmente por rosas blancas y verdes variados. Presentado en cesta o base cerámica según disponibilidad.",
    },

    // --- PLANTAS (Nuevas) ---
    {
        id: 225,
        img: rutaFlores + "plantas-zamioculca2.jpg", // Actualizado
        nombre: 'Zamioculca',
        precio: 19.90,
        cat: "Plantas",
        temp: "Todo el año",
        desc: "Planta de interior Zamioculca (Planta ZZ). Muy resistente y fácil de cuidar. En macetero de 14cm de diámetro. No incluye macetero decorativo.",
    },
    {
        id: 226,
        img: rutaFlores + "centro-rosas1.jpg", // Actualizado (Archivo de Bonsái no encontrado, asignado 'centro-rosas1.jpg')
        nombre: 'Bonsái Ficus Retusa',
        precio: 29.90,
        cat: "Plantas",
        temp: "Todo el año",
        desc: "Bonsái Ficus Retusa de interior. Fácil de cuidar, ideal para iniciación. Maceta de 15cm. Se entrega en papel y cinta de regalo.",
    },

    // --- SECO Y PRESERVADO (Nuevos) ---
    {
        id: 227,
        img: rutaFlores + "alstroemeria1.jpg", // Actualizado
        nombre: 'Alstroemeria preservada',
        precio: 12.50,
        cat: "Seco y preservado",
        temp: "Todo el año",
        desc: "Manojo de Alstroemeria preservada. Varios colores disponibles. No incluye jarrón. Se entrega en papel kraft.",
    },
    {
        id: 228,
        img: rutaFlores + "centro-paniculata2.jpg", // Actualizado
        nombre: 'Paniculata (Manojo grande)',
        precio: 18.00,
        cat: "Seco y preservado",
        temp: "Todo el año",
        desc: "Manojo grande de paniculata preservada, color blanco. Ideal para jarrones decorativos. No incluye jarrón.",
    },
    // --- RAMOS (Nuevos x16) ---
    {
        id: 229,
        img: rutaFlores + "ramo-florecillas1.jpg", // Actualizado
        nombre: 'Ramo Silvestre',
        precio: 32.00,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Ramo de estilo silvestre con flores de temporada. Verdes y rellenos incluidos. No incluye jarrón.",
    },
    {
        id: 230,
        img: rutaFlores + "ramo-rosas5.jpg", // Actualizado
        nombre: 'Ramo Tonos Rosados',
        precio: 42.50,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Ramo de flores frescas en gama de rosas y blancos. Flores según disponibilidad. No incluye jarrón.",
    },
    {
        id: 231,
        img: rutaFlores + "ramo-rosas-blancas.jpg", // Actualizado
        nombre: 'Ramo Blanco Elegante',
        precio: 45.00,
        cat: "Ramos",
        temp: "Todo el año",
        desc: "Elegante ramo compuesto por flores blancas de temporada (rosas, liliums, claveles...). No incluye jarrón.",
    },
    {
        id: 232,
        img: rutaFlores + "ramo-rosas4.jpg", // Actualizado
        nombre: 'Ramo Naranja Vibrante',
        precio: 38.00,
        cat: "Ramos",
        temp: "Verano",
        desc: "Ramo enérgico en tonos naranjas y amarillos. Flores según disponibilidad. No incluye jarrón.",
    },
    {
        id: 233,
        img: rutaFlores + "ramo-florecillas2.jpg", // Actualizado
        nombre: 'Ramo Mixto Pequeño',
        precio: 25.00,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Detalle floral. Ramo mixto con flores variadas de temporada. No incluye jarrón.",
    },
    {
        id: 234,
        img: rutaFlores + "ramo-rosas6.jpg", // Actualizado
        nombre: 'Ramo Rojo Intenso',
        precio: 49.90,
        cat: "Ramos",
        temp: "Todo el año",
        desc: "Ramo compuesto por flores de intenso color rojo (rosas, claveles...). No incluye jarrón.",
    },
    {
        id: 235,
        img: rutaFlores + "ramo-florecillas3.jpg", // Actualizado
        nombre: 'Ramo Amarillo Suave',
        precio: 36.00,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Ramo luminoso en tonos amarillos y blancos. Flores según disponibilidad. No incluye jarrón.",
    },
    {
        id: 236,
        img: rutaFlores + "ramos-general.jpg", // Actualizado
        nombre: 'Ramo Primaveral Deluxe',
        precio: 55.00,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Ramo grande y variado con las mejores flores de la temporada. No incluye jarrón.",
    },
    {
        id: 237,
        img: rutaFlores + "ramo-ramas2.jpg", // Actualizado
        nombre: 'Ramo Florista (Opción B)',
        precio: 39.50,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Ramo con flores de temporada a elección de florista (foto orientativa). Con flores, verdes y rellenos disponibles.",
    },
    {
        id: 238,
        img: rutaFlores + "ramo-30-rosas2.jpg", // Actualizado
        nombre: 'Ramo 30 Rosas (Alternativo)',
        precio: 90.00,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Ramo 30 Rosas rojas con verdes y rellenos disponibles. Foto alternativa. No incluye jarrón.",
    },
    {
        id: 239,
        img: rutaFlores + "centro-anastasia1.jpg", // Actualizado
        nombre: 'Manojo Anastasia Blanca',
        precio: 15.00,
        cat: "Ramos",
        temp: "Todo el año",
        desc: "Manojo de Anastasia (Crisantemo) color blanco. No incluye jarrón, ni decoración. Se entrega en papel kraft.",
    },
    {
        id: 240,
        img: rutaFlores + "centro-anastasia2jpg", // Actualizado (con la errata del 'ls')
        nombre: 'Manojo Anastasia (Detalle)',
        precio: 15.00,
        cat: "Ramos",
        temp: "Todo el año",
        desc: "Manojo de Anastasia (Crisantemo) color blanco. Detalle de la flor. No incluye jarrón, ni decoración.",
    },
    {
        id: 241,
        img: rutaFlores + "anastasia-blanca3.jpg", // Actualizado
        nombre: 'Ramo Anastasia y Verdes',
        precio: 22.00,
        cat: "Ramos",
        temp: "Todo el año",
        desc: "Ramo sencillo de Anastasia blanca con verdes decorativos. No incluye jarrón.",
    },
    {
        id: 242,
        img: rutaFlores + "ramo-rosas-blancas2.jpg", // Actualizado
        nombre: 'Ramo 12 Rosas Blancas',
        precio: 48.00,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Clásico ramo de 12 rosas blancas con verdes y rellenos. No incluye jarrón. Se entrega envuelto en papel y cinta de regalo.",
    },
    {
        id: 243,
        img: rutaFlores + "rosas-blancas2-scaled-e1676806571594.jpg", // Actualizado
        nombre: 'Ramo 6 Rosas Blancas',
        precio: 29.00,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Ramo de 6 rosas blancas con verdes y rellenos. No incluye jarrón.",
    },
    {
        id: 244,
        img: rutaFlores + "ramo-una-rosa.jpg", // Actualizado (No había foto de 18 rosas, asignado 'ramo-una-rosa.jpg')
        nombre: 'Ramo 18 Rosas Rojas',
        precio: 65.00,
        cat: "Ramos",
        temp: "Primavera",
        desc: "Ramo de 18 rosas rojas con verdes y rellenos. No incluye jarrón.",
    },

    // --- CENTROS (Nuevos x4) ---
    {
        id: 245,
        img: rutaFlores + "ramo-florecillas-4.jpg", // Actualizado
        nombre: 'Centro Floral Pequeño',
        precio: 29.90,
        cat: "Centros",
        temp: "Primavera",
        desc: "Pequeño centro de flores variadas en base de esponja. Colores y flores según disponibilidad.",
    },
    {
        id: 246,
        img: rutaFlores + "centro-tilipan1.jpg", // Actualizado (Asignado 'centro-tilipan1.jpg')
        nombre: 'Cúpula Cristal Mini (Color B)',
        precio: 11.90,
        cat: "Centros",
        temp: "Todo el año",
        desc: "Cúpula de cristal mini de rosa preservada, color y modelo según disponibilidad. Altura aproximada 10cm.",
    },
    {
        id: 247,
        img: rutaFlores + "centros-paniculata3.jpg", // Actualizado
        nombre: 'Centro Floral (Alternativo)',
        precio: 45.00,
        cat: "Centros",
        temp: "Primavera",
        desc: "Centro de flores variadas en base de esponja. Colores y flores según disponibilidad (foto orientativa).",
    },
    {
        id: 248,
        img: rutaFlores + "ramos-rosas-blancas3.jpg", // Actualizado
        nombre: 'Centro Cesta (Tonos Rosas)',
        precio: 48.00,
        cat: "Centros",
        temp: "Primavera",
        desc: "Centro en cesta de mimbre con flores en tonos rosas y blancos. Flores según disponibilidad.",
    },

    // --- PLANTAS (Nuevos x4) ---
    {
        id: 249,
        img: rutaFlores + "ramo-ramas3.jpg", // Actualizado (Asignado 'ramo-ramas3.jpg')
        nombre: 'Planta Verde (Mix 1)',
        precio: 14.90,
        cat: "Plantas",
        temp: "Todo el año",
        desc: "Planta de interior decorativa. Especie según disponibilidad. Macetero de 12cm. No incluye macetero decorativo.",
    },
    {
        id: 250,
        img: rutaFlores + "ramos-tulipan2.jpg", // Actualizado
        nombre: 'Planta Verde (Mix 2)',
        precio: 14.90,
        cat: "Plantas",
        temp: "Todo el año",
        desc: "Planta de interior decorativa. Especie según disponibilidad. Macetero de 12cm. No incluye macetero decorativo.",
    },
    {
        id: 251,
        img: rutaFlores + "ramo-tulipanes2.jpg", // Actualizado
        nombre: 'Planta Verde (Mix 3)',
        precio: 14.90,
        cat: "Plantas",
        temp: "Todo el año",
        desc: "Planta de interior decorativa. Especie según disponibilidad. Macetero de 12cm. No incluye macetero decorativo.",
    },
    {
        id: 252,
        img: rutaFlores + "tulipanes2.jpg", // Actualizado
        nombre: 'Planta Verde (Mix 4)',
        precio: 16.00,
        cat: "Plantas",
        temp: "Todo el año",
        desc: "Planta de interior decorativa. Especie según disponibilidad. Macetero de 14cm. No incluye macetero decorativo.",
    },

    // --- SECO Y PRESERVADO (Nuevos x4) ---
    {
        id: 253,
        img: rutaFlores + "alstroemeria2.jpg", // Actualizado
        nombre: 'Alstroemeria preservada (Mix A)',
        precio: 12.50,
        cat: "Seco y preservado",
        temp: "Todo el año",
        desc: "Manojo de Alstroemeria preservada. Varios colores disponibles. No incluye jarrón.",
    },
    {
        id: 254,
        img: rutaFlores + "alstroemeria3.jpg", // Actualizado
        nombre: 'Alstroemeria preservada (Mix B)',
        precio: 12.50,
        cat: "Seco y preservado",
        temp: "Todo el año",
        desc: "Manojo de Alstroemeria preservada. Varios colores disponibles. No incluye jarrón.",
    },
    {
        id: 255,
        img: rutaFlores + "secos-trigo2.jpg", // Actualizado
        nombre: 'Paniculata (Manojo Pequeño)',
        precio: 8.00,
        cat: "Seco y preservado",
        temp: "Todo el año",
        desc: "Manojo pequeño de paniculata preservada. No incluye jarrón.",
    },
    {
        id: 256,
        img: rutaFlores + "ramo-florecillas-4.jpg", // Actualizado (Asignado 'ramo-florecillas-4.jpg', usado también en 245)
        nombre: 'Trigo (Manojo Grande)',
        precio: 18.00,
        cat: "Seco y preservado",
        temp: "Todo el año",
        desc: "Manojo grande de espigas de trigo seco. No incluye jarrón.",
    }
]

let compra = JSON.parse(localStorage.getItem('carritoPAGOS')) || [];

console.log("Carrito inicial cargado:", compra);