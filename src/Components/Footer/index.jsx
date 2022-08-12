import { useLocation  } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    /* Não apresentar o footer na tela de checkou e login */
    const { pathname } = useLocation();
    if (pathname === "/register" || pathname === "/checkout") 
        return null;

    return (
        <>
        
        </>
    )
}

export default Footer