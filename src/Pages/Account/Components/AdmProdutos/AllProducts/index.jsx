import { 
    FiEdit
} from 'react-icons/fi';

import { 
    GiConfirmed as ConfirmIcon
} from 'react-icons/gi'

import {
    IoRemoveCircleOutline as RemoveIcon
} from 'react-icons/io5'

import LoadBar from '../../../../../Components/LoadBar';

import './allProducts.css'

const AllProducts = ({products, reloadProducts, loadProducts, setComponent, setEditProduct}) => {

    const disableEnableProduct = async (product) => {
        const attributesOptions = {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }

        // Adicionando atributos do produto inserido anteriormente;
        await fetch(process.env.REACT_APP_API_URL.replaceAll('"', '') + 'disable_enable_product', attributesOptions)
        .then((data) => {
            // console.log(data);
            reloadProducts();
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        loadProducts ? <LoadBar title="Carregando Produtos..." />  :
        <div className="products">
            {
                products.map(product => {
                    return( 
                        <div key={product.id} className="product">
                            <h3>{product.name}</h3>
                            <hr /> 
                            <img className={product.disable ? "item_img_disable" : "item_img"} src={product.image1} alt={product.name} />
        
                            <div className='product_buttons'>
                                <button onClick={() => {setEditProduct(product); setComponent('updateProduct')}}>Editar&nbsp;<FiEdit /></button>
                                {
                                    product.disable ?
                                        <button className='product_buttons_enable' onClick={() => disableEnableProduct(product)}>Ativar&nbsp;<ConfirmIcon/></button>
                                    :
                                        <button className='product_buttons_disable' onClick={() => disableEnableProduct(product)}>Remover&nbsp;<RemoveIcon/></button>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts;