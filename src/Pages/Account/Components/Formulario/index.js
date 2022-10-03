import CampoTexto from '../CampoTexto'
import './Formulario.css'

import { UserContext } from '../../../../Context/user';
import { useContext } from 'react';
import Button from '../../../../Components/Button';

const Formulario = () => {

    const {updateUserData, user} = useContext(UserContext);

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
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });

        console.log(productData);
    }

    return (
        <div>
            <section className="formulario">
                <form className="Form__DadosPessoais" onSubmit={updateUserData}>
                    <h2>Dados pessoais</h2>
                    <CampoTexto label="Nome Completo" placeholder="Digite seu nome completo" name='name' defaultValue={user.name} required/>
                    <CampoTexto label="CPF" placeholder="000.000.000-00" name='cpf' defaultValue={user.cpf} required/>
                    <CampoTexto id="data__nasc" label="Data de Nascimento" name='birth' placeholder="DD/MM/AAAA" type="date" defaultValue={user.birth} required/>
                    <CampoTexto label="Email" placeholder="Digite seu Email" name='email' defaultValue={user.email} required/>
                    <CampoTexto label="Senha" placeholder="Digite sua Senha" name='password' type="password" defaultValue={user.password} required/>
                    <CampoTexto label="Celular" placeholder="Digite o numero do celular" name='tel' defaultValue={user.tel} required/>
                    
                    <div className='formulario__botao'>
                        <Button type="submit">Salvar Alterações</Button>
                    </div>
                </form>

                <form className="Form__Endereco" onSubmit={updateUserData}>
                    <h2>Endereço</h2>
                    <CampoTexto label="CEP" placeholder="00000-000" name='cep' defaultValue={user.cep} required/>
                    <CampoTexto label="Endereço" placeholder="Digite seu endereço" name='address' defaultValue={user.address} required/>
                    <CampoTexto label="Complemento" placeholder="Digite o complemento" name='complement' defaultValue={user.complement} required/>
                    <CampoTexto label="Bairro" placeholder="Digite seu bairro" name='district' defaultValue={user.district} required/>
                    <CampoTexto label="Cidade" placeholder="Digite sua cidade" name='city' defaultValue={user.city} required/>
                    <CampoTexto label="Estado" placeholder="Digite o seu estado" name='state' defaultValue={user.state} required/>
                    
                    <div className='formulario__botao'>
                        <Button type="submit">Salvar Alterações</Button>
                    </div>
                </form>

                <form className="Form__Cartao" onSubmit={updateUserData}>
                    <h2 >Cartão</h2>
                    <CampoTexto label="Numero do cartão" placeholder=" " name='card_number' defaultValue={user.card_number} required/>
                    <CampoTexto label="Nome no cartão" placeholder=" " name='card_name' defaultValue={user.card_name} required/>
                    <CampoTexto label="Data de expiração" placeholder="MM/AAAA" type='month' name='expiry' defaultValue={user.expiry} required/>
                    <CampoTexto label="Código de segurança (CVV)" name='cvv' defaultValue={user.cvv} required/>
                    
                    <div className='formulario__botao'>
                        <Button type="submit">Salvar Alterações</Button>
                    </div>
                </form>

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
                    <CampoTexto name='M'Vlabel="Tamanho: M" type="number" min="0" required/>
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

export default Formulario