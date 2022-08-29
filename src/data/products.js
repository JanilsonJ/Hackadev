const imgPath = "/assets/img/Products/";

const products = [
    {
        id: 1,
        name: "Blusa Verde Simples",
        img: {
            front: imgPath + "Produto01_frente.webp",
            back: imgPath + "Produto01_verso.webp"
        },
        type: 'Blusa',
        keywords: ['Blusa', 'Verde', 'Simples'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 59.90,
        actual_price: 53.90,
        porcent_descount: 10
    },
    {
        id: 2,
        name: "Camiseta Gola Redonda",
        img: {
            front: imgPath + "Produto02_frente.webp",
            back: imgPath + "Produto02_verso.webp"
        },
        type: 'Camiseta',
        keywords: ['Camiseta', 'Gola Redonda', 'Verde'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 77.90,
        actual_price: 77.90,
        porcent_descount: 50
    },
    {
        id: 3,
        name: "Terno e blazer - Frontal aberto - Com Gola Xale",
        img: {
            front: imgPath + "Produto03_frente.webp",
            back: imgPath + "Produto03_verso.webp"
        },
        type: 'Terno e blazer',
        keywords: ['Terno', 'Blazer', 'Azul Marinho', 'Conjunto'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 186.90,
        actual_price: 186.90,
        porcent_descount: 0
    },
    {
        id: 4,
        name: "Camiseta Ocasional Plantas",
        img: {
            front: imgPath + "Produto04_frente.webp",
            back: imgPath + "Produto04_verso.webp"
        },
        type: 'Camiseta',
        keywords: ['Camiseta', 'Plantas', 'Verde'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 39.90,
        actual_price: 39.90,
        porcent_descount: 0
    },
    {
        id: 5,
        name: "Camisa Listrada Formal - Masculina",
        img: {
            front: imgPath + "Produto05_frente.webp",
            back: imgPath + "Produto05_verso.webp"
        },
        type: 'Camiseta',
        keywords: ['Camisa', 'Listrada', 'Branca'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 76.90,
        actual_price: 76.90,
        porcent_descount: 0
    },
    {
        id: 6,
        name: "Moletom de bolso com cordão",
        img: {
            front: imgPath + "Produto06_frente.webp",
            back: imgPath + "Produto06_verso.webp"
        },
        type: 'Moletom',
        keywords: ['Moletom', 'Verde', 'Capuz', 'Bolso'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 105.90,
        actual_price: 105.90,
        porcent_descount: 15
    },
    {
        id: 7,
        name: "Moletom Impressão gráfica Bloco de cores Cordão",
        img: {
            front: imgPath + "Produto07_frente.webp",
            back: imgPath + "Produto07_verso.webp"
        },
        type: 'Moletom',
        keywords: ['Moletom', 'Preta', 'Preto', 'Emoji', 'Capuz'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 106.90,
        actual_price: 106.90,
        porcent_descount: 20
    },
    {
        id: 8,
        name: "Moletom Halloween - EXCUSE ME BUT BOO",
        img: {
            front: imgPath + "Produto08_frente.webp",
            back: imgPath + "Produto08_verso.webp"
        },
        type: 'Moletom',
        keywords: ['Moletom', 'Azul', 'Halloween'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 59.95,
        actual_price: 59.95,
        porcent_descount: 35
    },
    {
        id: 9,
        name: "Blusa Branca",
        img: {
            front: imgPath + "Produto09_frente.webp",
            back: imgPath + "Produto09_verso.webp"
        },
        type: 'Blusa',
        keywords: ['Blusa', 'Branco', 'Branca'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 49.90,
        actual_price: 49.90,
        porcent_descount: 0
    },
    {
        id: 10,
        name: "Vestido regata com estampados florais",
        img: {
            front: imgPath + "Produto10_frente.webp",
            back: imgPath + "Produto10_verso.webp"
        },
        type: 'Vestido',
        keywords: ['Vestido', 'Branca', 'Branco', 'Florais', 'Regata'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 75.90,
        actual_price: 75.90,
        porcent_descount: 0
    },
    {
        id: 11,
        name: "Camisa botões na frente - Espaço",
        img: {
            front: imgPath + "Produto11_frente.webp",
            back: imgPath + "Produto11_verso.webp"
        },
        type: 'Camisa',
        keywords: ['Camisa', 'Botões', 'Espaço', 'Manga Curta'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 85.90,
        actual_price: 85.90,
        porcent_descount: 0
    },
    {
        id: 12,
        name: "Blusa - Escritas Japonesas",
        img: {
            front: imgPath + "Produto12_frente.webp",
            back: imgPath + "Produto12_verso.webp"
        },
        type: 'Blusa',
        keywords: ['Blusa', 'Preta', 'Preto', 'Escrita', 'Japão', 'Escritas Japonesas'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 85.90,
        actual_price: 85.90,
        porcent_descount: 0
    },
    {
        id: 13,
        name: "Vestido Floral Estampado",
        img: {
            front: imgPath + "Produto13_frente.webp",
            back: imgPath + "Produto13_verso.webp"
        },
        type: 'Vestido',
        keywords: ['Vestido', 'Floral', 'Preta', 'Preto', 'Regata'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 63.99,
        actual_price: 63.99,
        porcent_descount: 0
    },
    {
        id: 14,
        name: "Camisa com bolso ",
        img: {
            front: imgPath + "Produto14_frente.webp",
            back: imgPath + "Produto14_verso.webp"
        },
        type: 'Camisa',
        keywords: ['Camisa', 'Preta', 'Preto', 'Bolso', 'Manga Longa', 'Botão'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 105.99,
        actual_price: 105.99,
        porcent_descount: 0
    }
]

module.exports = products