import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { VscAccount } from "react-icons/vsc";

import './account.css';

import { UserContext } from '../../Context/user';

import DadosPessoais from './Components/DadosPessoais';
import CadastroProduto from './Components/CadastroProduto';
import Cartoes from './Components/Cartoes';
import Enderecos from './Components/Enderecos';
import Historico from './Components/Historico';

const Account = () => {
    useEffect(() => {
        document.title = 'IMA - Minha Conta';
    });

    const [component, setComponent] = useState('DadosPessoais');

    const {isLoggedIn, user} = useContext(UserContext);

    if (!isLoggedIn)
        return <Navigate to="/login" />;

    const showComponent = () => {
        switch (component) {
            case 'DadosPessoais': return <DadosPessoais />;
            case 'Historico': return <Historico />;
            case 'Enderecos': return <Enderecos />;
            case 'Cartoes': return <Cartoes />;
            case 'CadastroProduto': return <CadastroProduto />;
            default: break;
        }
    }

    return (
        <div className='account'>    
            
            <h1 className='subtitulo'><VscAccount/>Minha Conta</h1>

            <div className='menu-form'>
                <div className='left-menu'>
                    <button onClick={() => setComponent('DadosPessoais')}>Dados Pessoais</button>
                    <button onClick={() => setComponent('Historico')}>Historico de compras</button>
                    <button onClick={() => setComponent('Enderecos')}>Endereços</button>
                    <button onClick={() => setComponent('Cartoes')}>Cartões</button>
                    {
                    user.adm === true ?
                        <button onClick={() => setComponent('CadastroProduto')}>Cadastro de produtos</button>
                    :
                        null
                    }
                    
                </div>

                <div className='right-form'>
                    {showComponent()}
                </div>
            </div>
        </div>
    )
}

export default Account