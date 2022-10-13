import Button from '../../../../../Components/Button';

import CampoTexto from '../../CampoTexto';

import './newProduct.css'

const NewProduct = ({setComponent, reloadProducts}) => {
    const departamentOptions = ["", "Masculino", "Feminino", "Unissex"];
    const categoryOptions = ["", "Bermuda", "Blusa", "Camisa", "Camiseta", "Conjunto", "Moletom", "Vestido", "Short"];

    const newProduct = async (e) => {
        e.preventDefault();

        const ProductFormData = new FormData(e.target);
        const productData = {};

        ProductFormData.forEach((value, key) => (productData[key] = value));
        
        //Adicionando o valor do preço atual, pois campos desabilitados não são indentificados pela função anterior
        productData.actual_price = document.getElementsByName('actual_price')[0].value;

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
        .then(() => {
            setComponent();
            reloadProducts();
        })
        .catch(err => {
            console.log(err);
        });
    }

    const getActualPrice = () => {
        const regularPrice = Number(document.getElementsByName('regular_price')[0].value || 0);
        const porcentDiscount = Number(document.getElementsByName('porcent_discount')[0].value || 0);
        const actualPrice = document.getElementsByName('actual_price')[0];

        if(porcentDiscount > 100 || porcentDiscount < 0){
            actualPrice.value = regularPrice;
            return
        }

        const price = regularPrice - ((porcentDiscount / 100) * regularPrice);

        actualPrice.value = price.toFixed(2);
    }

    return (
        <form className="Form__CadastroProduto" onSubmit={newProduct}>
            <h2 className='title'>Cadastrar novo produto</h2>
            <CampoTexto label="Nome" name='name' required/>
            <CampoTexto label="Descrição" name='description'/>
            <CampoTexto label="Categoria" type='select' name="category" id="category" selectOptions={categoryOptions} required/>
            <CampoTexto label="Departamento" type='select' name="departament" id="departament" selectOptions={departamentOptions} required/>
            <CampoTexto label="Imagem - 1 (URL)" name='image1' type="urlImage" required/>
            <CampoTexto label="Imagem - 2 (URL)" name='image2' type="urlImage" required/>
            <CampoTexto label="Preço regular" name='regular_price' type="number" onChange={() => getActualPrice()} step="0.01" min="0" required/>
            <CampoTexto label="Desconto(%)" name='porcent_discount' type="number" onChange={() => getActualPrice()} min="0" max="100" required/>
            <CampoTexto label="Preço atual" name='actual_price' type="number" step="0.01" min="0" required disabled />

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

export default NewProduct;