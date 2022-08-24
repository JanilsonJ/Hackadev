import { useContext } from 'react';

import { CartContext } from '../../../Context/cart';

import './cart.css';

const Cart = () => {
    const {bagItems, deleteBagItem, removeBagItem, addBagItem} = useContext(CartContext);

    return (
        <section className='cart'>
            {bagItems.map( (items) => { 
                return(
                    <div key={items.id}  style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                        <img src={items.img.front} alt={items.name} style={{width: '100px'}} />
                        <button onClick={() => deleteBagItem(items)}> delete </button>
                        <button onClick={() => removeBagItem(items)}> - </button>
                        <p> {items.bagQuantity} </p>
                        <button onClick={() => addBagItem(items)}> + </button>
                    </div>
                )
            })}
        </section>
    )
}

export default Cart