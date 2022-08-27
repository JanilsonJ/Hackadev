import { useEffect } from 'react';
import './account.css';
import Formulario from './Components/Formulario';
import { VscAccount } from "react-icons/vsc";


const Account = () => {
    useEffect(() => {
        document.title = 'IMA - Minha Conta';
    });

    return (
        <>    
        <h1 className='Subtitulo'><VscAccount/>Sua Conta</h1>
        <Formulario />
        </>
    )
}

export default Account