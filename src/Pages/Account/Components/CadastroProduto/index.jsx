import CampoTexto from '../CampoTexto'

import Button from '../../../../Components/Button';

import './cadastroProduto.css';

const CadastroProduto = () => {

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
        })
        .catch(err => {
            console.log(err);
        }); 
    }

    return (
        <div>
            <section className="formulario">
                <form className="Form__CadastroProduto" onSubmit={newProduct}>
                    <h2>Cadastrar novo produto</h2>
                    <CampoTexto label="Nome" placeholder="Digite o nome do produto" name='name' required/>
                    <CampoTexto label="Descrição" placeholder="Digite o nome do produto" name='description'/>
                    
                    <select name="category" id="category">
                        <option value="Bermuda">Bermuda</option>
                        <option value="Blusa">Blusa</option>
                        <option value="Camisa">Camisa</option>
                        <option value="Camiseta">Camiseta</option>
                        <option value="Conjunto">Conjunto</option>
                        <option value="Moletom">Moletom</option>
                        <option value="Vestido">Vestido</option>
                        <option value="Short">Short</option>
                    </select>

                    <CampoTexto label="Imagem - 1 (URL)" name='image1' type="url" required/>
                    <CampoTexto label="Imagem - 2 (URL)" name='image2' type="url" required/>
                    <CampoTexto label="Preço regular" placeholder="R$" name='regular_price' type="number" step="0.01" required/>
                    <CampoTexto label="Preço atual" placeholder="R$" name='actual_price' type="number" step="0.01" required/>
                    <CampoTexto label="Desconto(%)" placeholder="%" name='porcent_discount' type="number" step="0.01" required/>

                    <h3 style={{marginBottom: '15px', textAlign: 'center'}}>Quantidade em estoque para cada tamanho</h3>
                    <CampoTexto name='PP' label="Tamanho: PP" type="number" min="0" required/>
                    <CampoTexto name='P'label="Tamanho: P" type="number" min="0" required/>
                    <CampoTexto name='M' label="Tamanho: M" type="number" min="0" required/>
                    <CampoTexto name='G' label="Tamanho: G" type="number" min="0" required/>
                    <CampoTexto name='GG' label="Tamanho: GG" type="number" min="0" required/>
                    
                    <div className='formulario__botao'>
                        <Button type="submit">Salvar Alterações</Button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default CadastroProduto