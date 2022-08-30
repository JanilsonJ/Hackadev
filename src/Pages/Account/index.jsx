import { useContext, useEffect } from 'react';
import './account.css';
import Formulario from './Components/Formulario';
import { VscAccount } from "react-icons/vsc";
import { UserContext } from '../../Context/user';
import { Navigate } from 'react-router-dom';


const Account = () => {
    useEffect(() => {
        document.title = 'IMA - Minha Conta';
    });

    const {isLoggedIn} = useContext(UserContext);

    if (!isLoggedIn)
        return <Navigate to="/login" />;

    return (
        <>    
        <h1 className='Subtitulo'><VscAccount/>Sua Conta</h1>
        <Formulario />
        </>
    )
}

export default Account