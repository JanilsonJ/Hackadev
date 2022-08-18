import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

import './product.css';

import ProductsList from '../../data/products';

const Product = (props) => {

    const { id } = useParams();
    const product = ProductsList.find(p => p.id === parseInt(id));

    useEffect(() => {
        document.title = 'IMA - ' + product.name;
    });

    const addtoCart = () => {
        props.setBagItems([...props.bagItems, product])
    }

    return (
        <>
            <p>{product.name}</p>
            <p>{JSON.stringify(product.sizes)}</p>
            <img src={product.img[0]} alt={product.name} style={{width: '300px'}}/>
            <button onClick={addtoCart}>Adicionar a sacola</button>
        </>
    )
}

export default Product