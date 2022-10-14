import Button from '../../../../../Components/Button';
import useFetch from '../../../../../hooks/useFetch';

import CampoTexto from '../../CampoTexto';

import './updateProduct.css'

const UpdateProduct = ({editProduct, setComponent, reloadProducts}) => {
    const departamentOptions = ["", "Masculino", "Feminino", "Unissex"];
    const categoryOptions = ["", "Bermuda", "Blusa", "Camisa", "Camiseta", "Conjunto", "Moletom", "Vestido", "Short"];

    const { data: sizes, isFetching: loadSizes } = useFetch(`products/sizes/${editProduct.id}`) // Pegando tamanhos disponiveis do produto pela API por id
    
    const updateProduct = async (e) => {
        e.preventDefault();

        const ProductFormData = new FormData(e.target);
        const productData = editProduct;

        ProductFormData.forEach((value, key) => (productData[key] = value));
        productData.product_id = editProduct.id
        
        //Adicionando o valor do preço atual, pois campos desabilitados não são indentificados pela função anterior
        productData.actual_price = document.getElementsByName('actual_price')[0].value;

        const ProductOptions = {
            method: 'PUT',
            body: JSON.stringify(productData),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }

        await fetch(process.env.REACT_APP_API_URL.replaceAll('"', '') + 'product', ProductOptions)
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
        <div>
            <div className="formulario">
                <form className="Form__CadastroProduto" onSubmit={updateProduct}>
                    <h2 className='title'>Atualizar produto</h2>
                    <CampoTexto label="Nome" placeholder="Digite o nome do produto" name='name' defaultValue={editProduct.name} required/>
                    <CampoTexto label="Descrição" placeholder="Digite o nome do produto" name='description' defaultValue={editProduct.description} />
                    <CampoTexto label="Categoria" type='select' name="category" id="category" defaultValue={editProduct.category} selectOptions={categoryOptions} required/>
                    <CampoTexto label="Departamento" type='select' name="departament" id="departament" defaultValue={editProduct.departament} selectOptions={departamentOptions} required/>
                    <CampoTexto label="Imagem - 1 (URL)" name='image1' type="urlImage" defaultValue={editProduct.image1} />
                    <CampoTexto label="Imagem - 2 (URL)" name='image2' type="urlImage" defaultValue={editProduct.image2} />
                    <CampoTexto label="Preço regular" name='regular_price' type="number" defaultValue={editProduct.regular_price} onChange={() => getActualPrice()} step="0.01" min="0" required/>
                    <CampoTexto label="Desconto(%)" name='porcent_discount' type="number" defaultValue={editProduct.porcent_discount}  onChange={() => getActualPrice()} step="0.01" min="0" required/>
                    <CampoTexto label="Preço atual" name='actual_price' type="number" defaultValue={editProduct.actual_price} disabled required/>

                    <h3 className='subtitle'>Quantidade em estoque para cada tamanho</h3>
                    {
                        loadSizes ? null :
                        <>
                            <CampoTexto name='PP' label="Tamanho PP:" defaultValue={sizes[0].stock} type="number" min="0" required/>
                            <CampoTexto name='P'label="Tamanho P:" defaultValue={sizes[1].stock} type="number" min="0" required/>
                            <CampoTexto name='M' label="Tamanho M:" defaultValue={sizes[2].stock} type="number" min="0" required/>
                            <CampoTexto name='G' label="Tamanho G:" defaultValue={sizes[3].stock} type="number" min="0" required/>
                            <CampoTexto name='GG' label="Tamanho GG:" defaultValue={sizes[4].stock} type="number" min="0" required/>
                        </>
                    }
                    
                    <div className='formulario__botao'>
                        <Button type="submit">Atualizar Produto</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct;