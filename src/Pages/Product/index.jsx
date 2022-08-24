import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { CartContext } from '../../Context/cart';
import ProductsList from '../../data/products';

import './product.css';

const Product = () => {
    const { addBagItem } = useContext(CartContext);

    const { id } = useParams();
    const product = ProductsList.find(p => p.id === parseInt(id));

    useEffect(() => {
        document.title = 'IMA - ' + product.name;
    });

    return (
        <>
            <p>{product.name}</p>
            
            <img src={product.img.front} alt={product.name} style={{width: '300px'}}/>
            <button onClick={() => { addBagItem(product) }}>Adicionar a sacola</button>
        </>
    )
}

export default Product