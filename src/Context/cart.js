import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [bagItems, setBagItems] = useState([]);
    const [bagItemsCount, updateItemsCount] = useState(null);

    
    const addBagItem = (product) => {
        const Exist = bagItems.find((x) => x.id === product.id);
        if (Exist) {
            const newBagItems = bagItems.map((x) =>
                x.id === product.id
                    ? { ...Exist, quantity: Exist.quantity + 1 }
                    : x
            );
            setBagItems(newBagItems);
        } else {
            const newBagItems = [...bagItems, { ...product, quantity: +1 }];
            setBagItems(newBagItems);
        }
        updateItemsCount(bagItemsCount + 1);
    };

    const onRemove = (product) => {
        const Exist = bagItems.find((x) => x.id === product.id);
        if (Exist.quantity === 1) {
            setBagItems(bagItems.filter((p) => p !== product));
        } else {
            const newBagItems = bagItems.map((x) =>
                x.id === product.id
                    ? { ...Exist, quantity: Exist.quantity - 1 }
                    : x
            );
            setBagItems(newBagItems);
        }
        updateItemsCount(bagItemsCount - 1);
        if (bagItemsCount === 1) updateItemsCount(null);
    };

    return (
        <CartContext.Provider
            value={{
                bagItems,
                setBagItems,
                onRemove,
                addBagItem,
                bagItemsCount,
                updateItemsCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
