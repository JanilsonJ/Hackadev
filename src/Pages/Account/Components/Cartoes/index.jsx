import CampoTexto from '../CampoTexto'

import { UserContext } from '../../../../Context/user';
import { useContext } from 'react';

import Button from '../../../../Components/Button';

import './cartoes.css'

const Cartoes = () => {
    const {user} = useContext(UserContext);

    return (
        <div>
            <section className="formulario">
                <form className="Form__Cartao">
                    <h2 >Cartão</h2>
                    <CampoTexto label="Numero do cartão" placeholder=" " name='card_number' defaultValue={user.card_number} required/>
                    <CampoTexto label="Nome no cartão" placeholder=" " name='card_name' defaultValue={user.card_name} required/>
                    <CampoTexto label="Data de expiração" placeholder="MM/AAAA" type='month' name='expiry' defaultValue={user.expiry} required/>
                    <CampoTexto label="CVV" name='cvv' defaultValue={user.cvv} required/>
                    
                    <div className='formulario__botao'>
                        <Button type="submit">Salvar Alterações</Button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Cartoes;