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
        // Pega os valores de sku e size do produto caso o size não seja enviado 
        const addProduct = { ...product, ...size} 

        const Exist = bagItems.find((x) => x.sku === addProduct.sku);
        if (Exist) {
            const newBagItems = bagItems.map((x) =>
                x.sku === Exist.sku
                    ? { ...Exist, quantity: Exist.quantity + 1 }
                    : x
            );
            setBagItems(newBagItems);
        } else {
            setBagItems([...bagItems, { ...addProduct, quantity: +1 }]);
        }
        updateItemsCount(bagItemsCount + 1);
    };

    const onRemove = (product) => {
        const Exist = bagItems.find((x) => x.sku === product.sku);
        if (Exist.quantity === 1) {
            if(window.confirm("Deseja retirar o produto da sacola?"))
                setBagItems(bagItems.filter((p) => p !== product))
            else
                return
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

    const emptyBagItems = async () => {
        updateItemsCount(null);
        setBagItems([]);
        setBagDisplay(false);
    }

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
                setBagDisplay,
                emptyBagItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
}