import CampoTexto from '../CampoTexto'
import './Formulario.css'

import { UserContext } from '../../../../Context/user';
import { useContext } from 'react';
import Button from '../../../../Components/Button';

const Formulario = () => {

    const {updateUserData, user} = useContext(UserContext);

    const handleChange =  (e) => {
        e.preventDefault();

        updateUserData(Array.from(e.target));
    }

    return (
        <div>
            <section className="formulario">
                <form className="Form__DadosPessoais" onSubmit={updateUserData}>
                    <h2>Dados pessoais</h2>
                    <CampoTexto label="Nome Completo" placeholder="Digite seu nome completo" name='name' defaultValue={user.name}/>
                    <CampoTexto label="CPF" placeholder="000.000.000-00" name='cpf' defaultValue={user.cpf}/>
                    <CampoTexto id="data__nasc" label="Data de Nascimento" name='birth' placeholder="DD/MM/AAAA" type="date" defaultValue={user.birth} />
                    <CampoTexto label="Email" placeholder="Digite seu Email" name='email' defaultValue={user.email}/>
                    <CampoTexto label="Senha" placeholder="Digite sua Senha" name='password' type="password" defaultValue={user.password}/>
                    <CampoTexto label="Celular" placeholder="Digite o numero do celular" name='tel' defaultValue={user.tel}/>
                    
                    <div className='formulario__botao'>
                        <Button type="submit">Salvar Alterações</Button>
                    </div>
                </form>

                <form className="Form__Endereco" onSubmit={updateUserData}>
                    <h2>Endereço</h2>
                    <CampoTexto label="CEP" placeholder="00000-000" name='cep' defaultValue={user.cep}/>
                    <CampoTexto label="Endereço" placeholder="Digite seu endereço" name='address' defaultValue={user.address}/>
                    <CampoTexto label="Complemento" placeholder="Digite o complemento" name='complement' defaultValue={user.complement}/>
                    <CampoTexto label="Bairro" placeholder="Digite seu bairro" name='district' defaultValue={user.district}/>
                    <CampoTexto label="Cidade" placeholder="Digite sua cidade" name='city' defaultValue={user.city}/>
                    <CampoTexto label="Estado" placeholder="Digite o seu estado" name='state' defaultValue={user.state}/>
                    
                    <div className='formulario__botao'>
                        <Button type="submit">Salvar Alterações</Button>
                    </div>
                </form>

                <form className="Form__Cartao" onSubmit={updateUserData}>
                    <h2 >Cartão</h2>
                    <CampoTexto label="Numero do cartão" placeholder=" " name='card_number' defaultValue={user.card_number}/>
                    <CampoTexto label="Nome no cartão" placeholder=" " name='card_name' defaultValue={user.card_name}/>
                    <CampoTexto label="Data de expiração" placeholder="MM/AAAA" name='expiry' defaultValue={user.expiry}/>
                    <CampoTexto label="Código de segurança (CVV)" placeholder="000" name='cvv' defaultValue={user.cvv}/>
                    
                    <div className='formulario__botao'>
                        <Button type="submit">Salvar Alterações</Button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Formulario