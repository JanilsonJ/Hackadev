import { createContext, useEffect, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [bagItems, setBagItems] = useState(JSON.parse(window.localStorage.getItem('bagItemsStorage')) || []);
    const [bagItemsCount, updateItemsCount] = useState(window.localStorage.getItem('bagItemsCountStorage') || null );
    const [bagDisplay, setBagDisplay] = useState(false);

    useEffect(() => {
        setBagItems(JSON.parse(window.localStorage.getItem('bagItemsStorage')))
        updateItemsCount(JSON.parse(window.localStorage.getItem('bagItemsCountStorage')))
    }, []);
    
    useEffect(() => {
        window.localStorage.setItem('bagItemsStorage', JSON.stringify(bagItems));
        window.localStorage.setItem('bagItemsCountStorage', bagItemsCount);
    }, [bagItems, bagItemsCount]);
    
    const addBagItem = (product, size) => {
        const sku = `${product.id}${size}`
        const bagProduct = Object.assign({}, product);
        bagProduct.sku = sku;
        
        const Exist = bagItems.find((x) => x.sku === bagProduct.sku);
        if (Exist) {
            const newBagItems = bagItems.map((x) =>
                x.sku === Exist.sku
                    ? { ...Exist, quantity: Exist.quantity + 1 }
                    : x
            );
            setBagItems(newBagItems);
        } else {
            bagProduct.productSize = size
            const newBagItems = [...bagItems, { ...bagProduct, quantity: +1 }];
            setBagItems(newBagItems);
        }
        updateItemsCount(bagItemsCount + 1);
    };

    const onRemove = (product) => {
        const Exist = bagItems.find((x) => x.sku === product.sku);
        if (Exist.quantity === 1) {
            setBagItems(bagItems.filter((p) => p !== product));
        } else {
            const newBagItems = bagItems.map((x) =>
                x.sku === product.sku
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
                bagDisplay, 
                setBagDisplay
            }}
        >
            {children}
        </CartContext.Provider>
    );
}