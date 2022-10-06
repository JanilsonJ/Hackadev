import { useState } from 'react';

import { 
    FiEdit
} from 'react-icons/fi';

import { 
    GiConfirmed as ConfirmIcon
} from 'react-icons/gi'

import {
    IoRemoveCircleOutline as RemoveIcon
} from 'react-icons/io5'

import CampoTexto from '../CampoTexto'
import Button from '../../../../Components/Button';

import './cadastroProduto.css';

import LoadBar from '../../../../Components/LoadBar';
import useFetch from '../../../../hooks/useFetch';

const CadastroProduto = () => {
    const departamentOptions = ["", "Masculino", "Feminino", "Unissex"];
    const categoryOptions = ["", "Bermuda", "Blusa", "Camisa", "Camiseta", "Conjunto", "Moletom", "Vestido", "Short"];
    
    const [showNewProductForm, setShowNewProductForm] = useState(false);
    const [filter, setFilter] = useState();

    const url = filter ? `products/produto?filter=${filter}` : `products`; // Mudando a URL caso exista o filtro
    const { data: products, isFetching: loadProducts, refetch: reloadProducts } = useFetch(url); // Pegando Produtos na API

    const newProduct = async (e) => {
        e.preventDefault();

        const ProductFormData = new FormData(e.target);
        const productData = {};

        ProductFormData.forEach((value, key) => (productData[key] = value));

        const ProductOptions = {
            method: 'POST',
            body: JSON.stringify(productData),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }

        //Adicionando dados base do produto ao banco
        await fetch(process.env.REACT_APP_API_URL.replaceAll('"', '') + 'products', ProductOptions)
        .then((response) => response.json())
        .then((data) => {
            //Adicioanando ao productData o id em que foi inserido o novo produto;
            productData.product_id = data[0].id
        })
        .catch(err => {
            console.log(err);
        });

        const attributesOptions = {
            method: 'POST',
            body: JSON.stringify(productData),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }

        // Adicionando atributos do produto inserido anteriormente;
        await fetch(process.env.REACT_APP_API_URL.replaceAll('"', '') + 'products_attributes', attributesOptions)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            setShowNewProductForm(false);
            reloadProducts();
        })
        .catch(err => {
            console.log(err);
        }); 
    }

    const updateProdutctForm = (product) => {
        return (
            <div>
                <div className="formulario">
                    <form className="Form__CadastroProduto" onSubmit={newProduct}>
                        <h2>Cadastrar novo produto</h2>
                        <CampoTexto label="Nome" placeholder="Digite o nome do produto" name='name' defaultValue={product.name} required/>
                        <CampoTexto label="Descrição" placeholder="Digite o nome do produto" name='description' defaultValue={product.description} />
                        <CampoTexto label="Categoria" type='select' name="category" id="category" selectOptions={categoryOptions} required/>
                        <CampoTexto label="Departamento" type='select' name="departament" id="departament" selectOptions={departamentOptions} required/>
                        <CampoTexto label="Imagem - 1 (URL)" name='image1' type="urlImage" defaultValue={product.image1} required/>
                        <CampoTexto label="Imagem - 2 (URL)" name='image2' type="urlImage" defaultValue={product.image2} required/>
                        <CampoTexto label="Preço regular" name='regular_price' type="number" defaultValue={product.regular_price} step="0.01" required/>
                        <CampoTexto label="Preço atual" name='actual_price' type="number" defaultValue={product.actual_price} step="0.01" required/>
                        <CampoTexto label="Desconto(%)" name='porcent_discount' type="number" defaultValue={product.porcent_discount} required/>

                        <h3 style={{marginBottom: '15px', textAlign: 'center'}}>Quantidade em estoque para cada tamanho</h3>
                        <CampoTexto name='PP' label="Tamanho PP:" size="50" type="number" min="0" required/>
                        <CampoTexto name='P'label="Tamanho P:" type="number" min="0" required/>
                        <CampoTexto name='M' label="Tamanho M:" type="number" min="0" required/>
                        <CampoTexto name='G' label="Tamanho G:" type="number" min="0" required/>
                        <CampoTexto name='GG' label="Tamanho GG:" type="number" min="0" required/>
                        
                        <div className='formulario__botao'>
                            <Button type="submit">Adicionar novo produto</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    const deleteProduct = async (product) => {
        const attributesOptions = {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }

        // Adicionando atributos do produto inserido anteriormente;
        await fetch(process.env.REACT_APP_API_URL.replaceAll('"', '') + 'products', attributesOptions)
        .then((data) => {
            // console.log(data);
            reloadProducts();
        })
        .catch(err => {
            console.log(err);
        });
    }

    const allProducts = () => {
        if (loadProducts) 
            return <LoadBar title="Carregando Produtos..." />
        else {
            return (
                <div className="products">
                    {
                        products.map(product => {
                            return( 
                                <div key={product.id} className="product">
                                    <h3>{product.name}</h3>
                                    <hr /> 
                                    <img className={product.disable ? "item_img_disable" : "item_img"} src={product.image1} alt={product.name} />
                
                                    <div className='product_buttons'>
                                        <button onClick={() => updateProdutctForm(product)}>Editar&nbsp;<FiEdit /></button>
                                        {
                                            product.disable ?
                                                <button className='product_buttons_enable' onClick={() => deleteProduct(product)}>Ativar&nbsp;<ConfirmIcon/></button>
                                            :
                                                <button className='product_buttons_disable' onClick={() => deleteProduct(product)}>Remover&nbsp;<RemoveIcon/></button>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

    const newProductForm = () => {
        return (
                <form className="Form__CadastroProduto" onSubmit={newProduct}>
                    <h2 className='title'>Cadastrar novo produto</h2>
                    <CampoTexto label="Nome" name='name' required/>
                    <CampoTexto label="Descrição" name='description'/>
                    <CampoTexto label="Categoria" type='select' name="category" id="category" selectOptions={categoryOptions} required/>
                    <CampoTexto label="Departamento" type='select' name="departament" id="departament" selectOptions={departamentOptions} required/>
                    <CampoTexto label="Imagem - 1 (URL)" name='image1' type="urlImage" required/>
                    <CampoTexto label="Imagem - 2 (URL)" name='image2' type="urlImage" required/>
                    <CampoTexto label="Preço regular" name='regular_price' type="number" step="0.01" min="0" required/>
                    <CampoTexto label="Preço atual" name='actual_price' type="number" step="0.01" min="0" required/>
                    <CampoTexto label="Desconto(%)" name='porcent_discount' type="number" min="0" required/>

                    <h3 className='subtitle'>Quantidade em estoque para cada tamanho</h3>
                    <CampoTexto name='PP' label="Tamanho PP:" size="50" type="number" min="0" required/>
                    <CampoTexto name='P'label="Tamanho P:" type="number" min="0" required/>
                    <CampoTexto name='M' label="Tamanho M:" type="number" min="0" required/>
                    <CampoTexto name='G' label="Tamanho G:" type="number" min="0" required/>
                    <CampoTexto name='GG' label="Tamanho GG:" type="number" min="0" required/>
                    
                    <div className='formulario__botao'>
                        <Button type="submit">Adicionar novo produto</Button>
                    </div>
                </form>
        )
    }

    return (
        <div className='accountProducts'>
            <div className='accountProducts_navbar'>
                {showNewProductForm ? null : <CampoTexto label="Filtrar" style={{width: "300px"}} onChange={(e) => {setFilter(e.target.value)}} type="text"/> }
                <button className='newProduct_button' onClick={() => setShowNewProductForm(!showNewProductForm)}>
                    {showNewProductForm ? 'Voltar para produtos' : 'Adicionar Produto' }
                </button>
            </div>

            {showNewProductForm ? newProductForm() : allProducts()}      
        </div>
    ) 
}

export default CadastroProduto