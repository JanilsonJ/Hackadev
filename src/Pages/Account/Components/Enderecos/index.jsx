import { UserContext } from '../../../../Context/user';
import { useContext } from 'react';

import CampoTexto from '../CampoTexto'
import Button from '../../../../Components/Button';

import './enderecos.css'

const Enderecos = () => {
    const {updateUserData, user} = useContext(UserContext);

    return (
        <div>
            <section className="formulario">
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
            </section>
        </div>
    )
}

export default Enderecos