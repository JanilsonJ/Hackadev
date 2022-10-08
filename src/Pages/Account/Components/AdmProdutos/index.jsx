import { useState } from 'react';
import useFetch from '../../../../hooks/useFetch';

import CampoTexto from '../CampoTexto'

import './admProdutos.css';

import AllProducts from './AllProducts';
import NewProduct from './NewProduct';
import UpdateProduct from './UpdateProduct';

const AdmProdutos = () => {
    const [filter, setFilter] = useState();
    const [component, setComponent] = useState();
    const [editProduct, setEditProduct] = useState();

    const url = filter ? `products/produto?filter=${filter}` : `products`; // Mudando a URL caso exista o filtro
    const { data: products, isFetching: loadProducts, refetch: reloadProducts } = useFetch(url); // Pegando Produtos na API

    const showComponent = () => {
        switch (component) {
            case 'newProduct': return <NewProduct setComponent={setComponent} reloadProducts={reloadProducts}/>;
            case 'updateProduct': return <UpdateProduct editProduct={editProduct} setComponent={setComponent} reloadProducts={reloadProducts}/>;
            default: return <AllProducts products={products} setEditProduct={setEditProduct} reloadProducts={reloadProducts} loadProducts={loadProducts} setComponent={setComponent}/>;
        }
    }

    return (
        <div className='accountProducts'>
            <div className='accountProducts_navbar'>
                {component ? null : <CampoTexto label="Filtrar" style={{width: "300px"}} onChange={(e) => {setFilter(e.target.value)}} type="text"/> }
                <button className='newProduct_button' onClick={() => {component !== undefined ? setComponent() : setComponent('newProduct') }}>
                    {component ? 'Voltar para produtos' : 'Adicionar Produto' }
                </button>
            </div>

            {showComponent()}    
        </div>
    ) 
}

export default AdmProdutos