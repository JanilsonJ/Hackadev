import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [bagItems, setBagItems] = useState([]);
    const [bagItemsCount, updateItemsCount] = useState(null);

    const addBagItem = (product) => {
        if ( bagItems.includes(product) ){
            product.bagQuantity++;
            updateItemsCount(bagItemsCount + 1);
        } else{
            product.bagQuantity = 1;
            setBagItems([...bagItems, product]);
            updateItemsCount(bagItemsCount + 1);
        }
    }

    const removeBagItem = (product) => {
        product.bagQuantity === 1 ? deleteBagItem(product) : product.bagQuantity--;
        updateItemsCount(bagItemsCount - 1);
    }

    const deleteBagItem = (product) => {
        bagItemsCount - product.bagQuantity === 0 ? 
            updateItemsCount(null)
            :
            updateItemsCount(bagItemsCount - product.bagQuantity);

        setBagItems(bagItems.filter((p) => p !== product))
    }

    return (
        <CartContext.Provider value={{bagItems, setBagItems, removeBagItem, addBagItem, bagItemsCount, deleteBagItem}}>
            { children }
        </CartContext.Provider>
    )
}
