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
        keywords: ['Blusa', 'Verde', 'Simples', 'Desconto', 'Promoção'],
        sizes: [
            {available: true, size: 'PP'},
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],
        regular_price: 59.90,
        actual_price: 53.90,
        porcent_discount: 10

    },
    {
        id: 2,
        name: "Camiseta Gola Redonda",
        img: {
            front: imgPath + "Produto02_frente.webp",
            back: imgPath + "Produto02_verso.webp"
        },
        type: 'Camiseta',
        keywords: ['Camiseta', 'Gola Redonda', 'Verde', 'Desconto', 'Promoção'],
        sizes: [
            {available: true, size: 'PP'},
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],
        regular_price: 77.90,
        actual_price: 77.90,
        porcent_discount: 0

    },
    {
        id: 3,
        name: "Terno e blazer - Frontal aberto - Com Gola Xale",
        img: {
            front: imgPath + "Produto03_frente.webp",
            back: imgPath + "Produto03_verso.webp"
        },
        type: 'Conjunto',
        keywords: ['Terno', 'Blazer', 'Azul Marinho', 'Conjunto'],
        sizes: [
            {available: true, size: 'PP'},
            {available: true, size: 'P'},
            {available: false, size: 'M'},
            {available: false, size: 'G'},
            {available: true, size: 'GG'}
        ],
        regular_price: 186.90,
        actual_price: 186.90,
        porcent_discount: 0
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
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 39.90,
        actual_price: 39.90,
        porcent_discount: 0
    },
    {
        id: 5,
        name: "Camisa Listrada Formal - Masculina",
        img: {
            front: imgPath + "Produto05_frente.webp",
            back: imgPath + "Produto05_verso.webp"
        },
        type: 'camisa',
        keywords: ['Camisa', 'Listrada', 'Branca'],
        sizes: [
            {available: false, size: 'PP'},
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],
        regular_price: 76.90,
        actual_price: 76.90,
        porcent_discount: 0
    },
    {
        id: 6,
        name: "Moletom de bolso com cordão - Verde",
        img: {
            front: imgPath + "Produto06_frente.webp",
            back: imgPath + "Produto06_verso.webp"
        },
        type: 'Moletom',
        keywords: ['Moletom', 'Verde', 'Capuz', 'Bolso', 'Desconto', 'Promoção'],
        sizes: [
            {available: false, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],

        regular_price: 105.90,
        actual_price: 105.90,
        porcent_discount: 15
    },
    {
        id: 16,
        name: "Moletom de bolso com cordão - Marrom",
        img: {
            front: imgPath + "Produto16_frente.webp",
            back: imgPath + "Produto16_verso.webp"
        },
        type: 'Moletom',
        keywords: ['Moletom', 'Marrom', 'Capuz', 'Bolso', 'Desconto', 'Promoção'],
        sizes: [
            {available: false, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],
        regular_price: 77.90,
        actual_price: 70.11,
        porcent_discount: 10

    },
    {
        id: 7,
        name: "Moletom Impressão gráfica Bloco de cores Cordão",
        img: {
            front: imgPath + "Produto07_frente.webp",
            back: imgPath + "Produto07_verso.webp"
        },
        type: 'Moletom',
        keywords: ['Moletom', 'Preta', 'Preto', 'Emoji', 'Capuz', 'Desconto', 'Promoção'],
        sizes: [
            {available: false, size: 'PP'},
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],

        regular_price: 119.90,
        actual_price: 83.93,
        porcent_discount: 30

    },
    {
        id: 8,
        name: "Moletom Halloween - EXCUSE ME BUT BOO",
        img: {
            front: imgPath + "Produto08_frente.webp",
            back: imgPath + "Produto08_verso.webp"
        },
        type: 'Moletom',
        keywords: ['Moletom', 'Azul', 'Halloween', 'Desconto', 'Promoção'],
        sizes: [
            {available: false, size: 'PP'},
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: false, size: 'G'},
            {available: false, size: 'GG'}
        ],

        regular_price: 59.95,
        actual_price: 59.95,
        porcent_discount: 35

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
            {available: false, size: 'PP'},
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: false, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 49.90,
        actual_price: 49.90,
        porcent_discount: 0
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
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 75.90,
        actual_price: 75.90,
        porcent_discount: 0

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
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],
        regular_price: 85.90,
        actual_price: 85.90,
        porcent_discount: 0
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
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],
        regular_price: 56.95,
        actual_price: 56.95,
        porcent_discount: 0
    },
    {
        id: 13,
        name: "Moletom - Escritas Japonesas",
        img: {
            front: imgPath + "Produto15_frente.webp",
            back: imgPath + "Produto15_verso.webp"
        },
        type: 'Moletom',
        keywords: ['Moletom', 'Preta', 'Preto', 'Escrita', 'Japão', 'Escritas Japonesas', 'Desconto', 'Promoção'],
        sizes: [
            {available: true, size: 'PP'},
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],
        regular_price: 89.90,
        actual_price: 58.44,
        porcent_discount: 35
    },
    {
        id: 14,
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
            {available: true, size: 'GG'}
        ],
        regular_price: 63.99,
        actual_price: 63.99,
        porcent_discount: 0
    },
    {
        id: 15,
        name: "Camisa com bolso ",
        img: {
            front: imgPath + "Produto14_frente.webp",
            back: imgPath + "Produto14_verso.webp"
        },
        type: 'Camisa',
        keywords: ['Camisa', 'Preta', 'Preto', 'Bolso', 'Manga Longa', 'Botão'],
        sizes: [
            {available: true, size: 'PP'},
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],
        regular_price: 105.99,
        actual_price: 105.99,
        porcent_discount: 0
    },
    {
        id: 17,
        name: "Moletom Figura Gráfica Fechar Revestido térmico",
        img: {
            front: imgPath + "Produto17_frente.webp",
            back: imgPath + "Produto17_verso.webp"
        },
        type: 'Moletom',
        keywords: ['Moletom', 'Preta', 'Preto', 'Cordão', 'Bolso', 'Desconto', 'Promoção'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],
        regular_price: 109.95,
        actual_price: 98.96,
        porcent_discount: 10
    },
    {
        id: 18,
        name: "Short Jeans - Marinha Bolso Simples ocasional",
        img: {
            front: imgPath + "Produto18_frente.webp",
            back: imgPath + "Produto18_verso.webp"
        },
        type: 'Short',
        keywords: ['Short Jeans', 'Jens', 'Azul', 'Short Jeans', 'Bolso', 'Short'],
        sizes: [
            {available: true, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],
        regular_price: 100.90,
        actual_price: 100.90,
        porcent_discount: 0
    },
    {
        id: 19,
        name: "Moletom de bolso com cordão - Colorido",
        img: {
            front: imgPath + "Produto19_frente.webp",
            back: imgPath + "Produto19_verso.webp"
        },
        type: 'Moletom',
        keywords: ['Moletom', 'Colorido', 'Capuz', 'Bolso', 'Desconto', 'Promoção'],
        sizes: [
            {available: false, size: 'PP'},
            {available: false, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],
        regular_price: 72.90,
        actual_price: 69.26,
        porcent_discount: 5
    },
    {
        id: 20,
        name: "Conjunto - Camisa e calça",
        img: {
            front: imgPath + "Produto20_frente.webp",
            back: imgPath + "Produto20_verso.webp"
        },
        type: 'Conjunto',
        keywords: ['Conjunto', 'Camisa', 'Calça', 'Preto', 'Preta', 'Bege', 'Casual'],
        sizes: [
            {available: true, size: 'PP'},
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: true, size: 'GG'}
        ],
        regular_price: 128.95,
        actual_price: 128.95,
        porcent_discount: 0
    },
    {
        id: 21,
        name: "Short - Paper Bag Pants Simples",
        img: {
            front: imgPath + "Produto21_frente.webp",
            back: imgPath + "Produto21_verso.webp"
        },
        type: 'Short',
        keywords: ['Short', 'Branco', 'Bolso', 'Botão'],
        sizes: [
            {available: true, size: 'PP'},
            {available: true, size: 'P'},
            {available: true, size: 'M'},
            {available: true, size: 'G'},
            {available: false, size: 'GG'}
        ],
        regular_price: 87.99,
        actual_price: 87.99,
        porcent_discount: 0
    }
   
]

export default products