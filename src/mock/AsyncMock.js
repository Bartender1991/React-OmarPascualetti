const productos = [
    {
        id: 1,
        name: "Laptop Dell Inspiron 15",
        category: "Computadoras",
        price: 15.00,
        stock: 5,
        img: "img/laptop-dell-inspiron-15.jpg",
        description: "Laptop con procesador Intel Core i5, 8GB de RAM y SSD de 256GB."
    },
    {
        id: 2,
        name: "Teclado Mecánico Redragon Kumara",
        category: "Periféricos",
        price: 10.00,
        stock: 7,
        img: "img/teclado-redragon-kumara.jpg",
        description: "Teclado mecánico compacto con retroiluminación RGB."
    },
    {
        id: 3,
        name: "Mouse Logitech G502 HERO",
        category: "Periféricos",
        price: 59.70,
        stock: 2,
        img: "img/mouse-logitech-g502.jpg",
        description: "Mouse gamer de alto rendimiento con 11 botones programables."
    },
    {
        id: 4,
        name: "Monitor Samsung 24\" Curvo",
        category: "Monitores",
        price: 179.68,
        stock: 25,
        img: "img/monitor-samsung-curvo-24.jpg",
        description: "Monitor curvo Full HD de 24 pulgadas con tecnología VA."
    },
    {
        id: 5,
        name: "Disco SSD Kingston 480GB",
        category: "Almacenamiento",
        price: 39.99,
        stock: 100,
        img: "img/ssd-kingston-480gb.jpg",
        description: "Unidad de estado sólido SATA III con velocidad de lectura de 500MB/s."
    },
    {
        id: 6,
        name: "Memoria RAM Corsair Vengeance 16GB DDR4",
        category: "Componentes",
        price: 69.99,
        stock: 60,
        img: "img/ram-corsair-16gb.jpg",
        description: "Memoria RAM DDR4 de alto rendimiento a 3200MHz."
    },
    {
        id: 7,
        name: "Placa de Video NVIDIA RTX 3060",
        category: "Componentes",
        price: 349.79,
        stock: 20,
        img: "img/gpu-rtx-3060.jpg",
        description: "Tarjeta gráfica con 12GB GDDR6, ideal para gaming y diseño."
    },
    {
        id: 8,
        name: "Fuente de Poder EVGA 600W 80+ Bronze",
        category: "Componentes",
        price: 49.99,
        stock: 30,
        img: "img/fuente-evga-600w.jpg",
        description: "Fuente de alimentación certificada 80+ Bronze para PC de escritorio."
    },
    {
        id: 9,
        name: "Gabinete Gamer NZXT H510",
        category: "Componentes",
        price: 89.99,
        stock: 15,
        img: "img/gabinete-nzxt-h510.jpg",
        description: "Gabinete ATX minimalista con panel lateral de vidrio templado."
    },
    {
        id: 10,
        name: "Router TP-Link Archer AX50",
        category: "Redes",
        price: 129.90,
        stock: 18,
        img: "img/router-tplink-ax50.jpg",
        description: "Router Wi-Fi 6 de doble banda con velocidades de hasta 3Gbps."
    },
    {
        id: 11,
        name: "Auriculares HyperX Cloud II",
        category: "Audio",
        price: 79.99,
        stock: 35,
        img: "img/auriculares-hyperx-cloud-ii.jpg",
        description: "Auriculares gamer con sonido envolvente 7.1 y micrófono desmontable."
    },
    {
        id: 12,
        name: "Micrófono Blue Yeti USB",
        category: "Audio",
        price: 99.91,
        stock: 25,
        img: "img/microfono-blue-yeti.jpg",
        description: "Micrófono de condensador USB ideal para streaming y grabaciones."
    },
    {
        id: 13,
        name: "Impresora Multifunción HP DeskJet 3775",
        category: "Impresoras",
        price: 69.99,
        stock: 22,
        img: "img/impresora-hp-deskjet-3775.jpg",
        description: "Impresora multifunción compacta con conectividad Wi-Fi."
    },
    {
        id: 14,
        name: "Tablet Samsung Galaxy Tab S6 Lite",
        category: "Tablets",
        price: 249.94,
        stock: 8,
        img: "img/tablet-samsung-galaxy-s6-lite.jpg",
        description: "Tablet de 10.4 pulgadas con S Pen incluido."
    },
    {
        id: 15,
        name: "Cámara Web Logitech C920 HD Pro",
        category: "Cámaras",
        price: 79.99,
        stock: 40,
        img: "img/webcam-logitech-c920.jpg",
        description: "Cámara web Full HD con enfoque automático y micrófono estéreo."
    },
    {
        id: 16,
        name: "Hub USB 3.0 de 4 Puertos",
        category: "Accesorios",
        price: 19.99,
        stock: 80,
        img: "img/hub-usb-3.jpg",
        description: "Hub USB compacto con 4 puertos y transferencia rápida."
    },
    {
        id: 17,
        name: "Disco Duro Externo Seagate 2TB",
        category: "Almacenamiento",
        price: 69.99,
        stock: 50,
        img: "img/hdd-seagate-2tb.jpg",
        description: "Disco duro externo portátil USB 3.0 de 2TB."
    },
    {
        id: 18,
        name: "Proyector Epson PowerLite X49",
        category: "Proyectores",
        price: 449.99,
        stock: 12,
        img: "img/proyector-epson-x49.jpg",
        description: "Proyector XGA con 3600 lúmenes y conectividad HDMI."
    },
    {
        id: 19,
        name: "Smartwatch Amazfit GTS 2",
        category: "Wearables",
        price: 149.99,
        stock: 30,
        img: "img/smartwatch-amazfit-gts2.jpg",
        description: "Reloj inteligente con GPS, monitor de frecuencia cardíaca y oxígeno."
    },
    {
        id: 20,
        name: "Cargador Portátil Xiaomi Mi Power Bank 20000mAh",
        category: "Accesorios",
        price: 39.99,
        stock: 70,
        img: "img/powerbank-xiaomi-20000.jpg",
        description: "Batería portátil de gran capacidad con carga rápida."
    }
]



// Promesa n° 1

export const getProducts = () => {
    let error = false

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                // existe el error, rechazamos
                reject("hubo un error intente mas tarde")
            } else {
                resolve(productos)
            }
        }, 2000);
    })
}