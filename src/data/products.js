const imgPath = "/assets/img/Products/";

const products = [
    {
        id: 1,
        name: "Blusa Verde Simples",
        img: [
            imgPath + "01_Blusaverde_frente.webp",
            imgPath + "01_Blusaverde_costa.webp"
        ],
        value: 59.90,
        sizes: [{ PP: true, P: true, M: true, G: true, GG: true }]
    },
    {
        id: 2,
        name: "Camiseta Gola Redonda",
        img: [
            imgPath + "02_Camiseta_GolaRedonda_frente.webp",
            imgPath + "02_Camiseta_GolaRedonda_verso.webp"
        ],
        value: 77.90,
        sizes: [{ PP: true, P: true, M: true, G: true, GG: true }]
    },
    {
        id: 3,
        name: "Terno e blazer - Frontal aberto - Com Gola Xale",
        img: [
            imgPath + "03_Terno_e_blazer_frontal_aberto_com_gola_xale_frente.webp",
            imgPath + "03_Terno_e_blazer_frontal_aberto_com_gola_xale_verso.webp"
        ],
        value: 186.90,
        sizes: [{ PP: true, P: true, M: true, G: true, GG: true }]
    },
    {
        id: 4,
        name: "Camiseta Ocasional Plantas",
        img: [
            imgPath + "04_Camiseta_Ocasional_Plantas_frente.webp",
            imgPath + "04_Camiseta_Ocasional_Plantas_verso.webp"
        ],
        value: 39.90,
        sizes: [{ PP: true, P: true, M: true, G: true, GG: true }]
    },
    {
        id: 5,
        name: "Camisa Listrada Formal - Masculina",
        img: [
            imgPath + "05_ Listrado_Formal_Camisa_Masculina.webp",
            imgPath + "05_ Listrad_ Formal_Camisa_Masculina.Verso.webp"
        ],
        value: 76.89,
        sizes: [{ PP: true, P: true, M: true, G: true, GG: true }]
    },
    {
        id: 6,
        name: "Moletom de bolso com cordão",
        img: [
            imgPath + "06_Moletom_de bolso_com_cordão_frente.webp",
            imgPath + "06_Moletom_de bolso_com_cordão_verso.webp"
        ],
        value: 77.90,
        sizes: [{ PP: true, P: true, M: true, G: true, GG: true }]
    },
    {
        id: 7,
        name: "Bolsa com alça superior",
        img: [
            imgPath + "07_Bolsa com alça superior Carta Gráfica_Frente.webp",
            imgPath + "07_Bolsa com alça superior Carta Gráfica_verso.webp"
        ],
        value: 182.95,
        sizes: [{ PP: true, P: true, M: true, G: true, GG: true }]
    },
    {
        id: 8,
        name: "Óculos de sol",
        img: [
            imgPath + "08_Óculos de sol com armação grande.frente.webp",
            imgPath + "08_Óculos de sol com armação grande.verso.webp"
        ],
        value: 32.90,
        sizes: [{ PP: true, P: true, M: true, G: true, GG: true }]
    },
    {
        id: 9,
        name: "Blusa Branca",
        img: [
            imgPath + "09_ Branco_Embrulhar_Geométrico_Casual_Blusas_frente.webp",
            imgPath + "09_Branco_Embrulhar_Geométrico_Casual_Blusas_verso.webp"
        ],
        value: 49.90,
        sizes: [{ PP: true, P: true, M: true, G: true, GG: true }]
    },
    {
        id: 10,
        name: "Vestido regata com estampados florais",
        img: [
            imgPath + "10_Vestido regata com estampados florais_frente.webp",
            imgPath + "10_Vestido regata com estampados florais_verso.webp"
        ],
        value: 75.90
    }
]

module.exports = products