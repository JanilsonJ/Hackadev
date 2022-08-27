import { createContext, useState } from "react";
const imgPath = "/assets/img/Products/";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [bagItems, setBagItems] = useState([
    {
      id: 1,
      name: "Blusa Verde Simples",
      img: {
        front: imgPath + "Produto01_frente.webp",
        back: imgPath + "Produto01_verso.webp",
      },
      type: "Blusa",
      keywords: ["Blusa", "Verde", "Simples"],
      sizes: { PP: true, P: true, M: true, G: true, GG: true },
      regular_price: 59.9,
      actual_price: 53.91,
      porcent_descount: 10,
    },
  ]);
  const [bagItemsCount, updateItemsCount] = useState(null);

  const addBagItem = (product) => {
    if (bagItems.includes(product)) {
      product.bagQuantity++;
      updateItemsCount(bagItemsCount + 1);
    } else {
      product.bagQuantity = 1;
      setBagItems([...bagItems, product]);
      updateItemsCount(bagItemsCount + 1);
    }
  };

  const removeBagItem = (product) => {
    product.bagQuantity === 1 ? deleteBagItem(product) : product.bagQuantity--;
    updateItemsCount(bagItemsCount - 1);
  };

  const deleteBagItem = (product) => {
    bagItemsCount - product.bagQuantity === 0
      ? updateItemsCount(null)
      : updateItemsCount(bagItemsCount - product.bagQuantity);

    setBagItems(bagItems.filter((p) => p !== product));
  };

  return (
    <CartContext.Provider
      value={{
        bagItems,
        setBagItems,
        removeBagItem,
        addBagItem,
        bagItemsCount,
        deleteBagItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
