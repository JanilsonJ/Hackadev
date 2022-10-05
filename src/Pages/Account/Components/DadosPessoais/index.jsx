import CampoTexto from '../CampoTexto'

import { UserContext } from '../../../../Context/user';
import { useContext, useState } from 'react';

import { IoLogOut } from 'react-icons/io5'

import Button from '../../../../Components/Button';

import './dadosPessoais.css'

const DadosPessoais = () => {
    const { user, setUserData, logoutUser } = useContext(UserContext);

    const [buttonStyle, setButtonStyle] = useState();
    const [updating, setUpdating] = useState(false);

    const updateUserData = async (e) => {
        e.preventDefault();
        setUpdating(true);

        const userData = user; // Pega os dados base do usuario
        
        const UserFormData = new FormData(e.target);
        UserFormData.forEach((value, key) => (userData[key] = value)); // Atualiza os dados base do usuario com os dados do formulario

        const updateOptions = {
            method: 'PUT',
            body: JSON.stringify(userData),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }

        await fetch(process.env.REACT_APP_API_URL.replaceAll('"', '') + `customer/${user.id}`, updateOptions)
        .then(data => {
            setUserData(userData);
            setButtonStyle({backgroundColor: "#4FA04D", color: "#fefefe"});
            setTimeout(() => {setButtonStyle()}, 1500);
        }).catch(err => {
            console.log(err);

            setButtonStyle({backgroundColor: "#CE5B49", color: "#fefefe"});
            setTimeout(() => {setButtonStyle()}, 1500);
        }).finally(() => {
            setUpdating(false);
        });

    }

    return (
        <div>
            <div className="dados__pessoais">
                <form className="dados__pessoais__form" onSubmit={updateUserData}>
                    <h2>Dados pessoais</h2>
                    <CampoTexto label="Nome Completo" placeholder="Digite seu nome completo" name='name' defaultValue={user.name} required/>
                    <CampoTexto label="CPF" placeholder="000.000.000-00" name='cpf' defaultValue={user.cpf} disabled required/>
                    <CampoTexto id="data__nasc" label="Data de Nascimento" name='birth' placeholder="DD/MM/AAAA" type="date" defaultValue={user.birth} required/>
                    <CampoTexto label="Email" placeholder="Digite seu Email" name='email' defaultValue={user.email} disabled required/>
                    <CampoTexto label="Senha" placeholder="Digite sua Senha" name='password' type="password" defaultValue={user.password} required/>
                    <CampoTexto label="Celular" placeholder="Digite o numero do celular" name='tel' defaultValue={user.tel} required/>
                    <CampoTexto type="checkbox" label="Administrador?" name='adm' disabled checked={user.adm}/>

                    <div className='formulario__botao'>
                        <Button type="submit" styles={buttonStyle}>{updating ? 'Atualizando...' : 'Salvar Alterações'}</Button>
                    </div>
                </form>
                    
                <div className='logout__botao'>
                    <div onClick={() => {if(window.confirm('Deseja sair da conta?'))logoutUser()}}>
                        <Button>Deslogar <IoLogOut /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DadosPessoais;