import { useEffect, useState } from 'react';

import Register from './Register';
import Login from './Login';

import './loginRegister.css';

const LoginRegister = () => {
    const [loginComponent, setloginComponent] = useState(true);

    useEffect(() => {
        document.title = `IMA - ${loginComponent ? 'Logar' : 'Cadastrar'} `;
    });

    return (
        <div className='login'>
            <div className="container">
                {loginComponent ? <Login /> : <Register setloginComponent={setloginComponent} /> }

                <div className='already__registered'>
                    <p onClick={() => {setloginComponent(!loginComponent)}}>
                        {loginComponent ? 'Cadastre-se agora' : 'Já Sou Cliente'}
                    </p>
                </div>  
            </div> 


            <footer className="footer__cadastro">
                <p className="footer__title__cadastro">PATROCINADORES</p>

                <section className="footer__partners__images">
                    <a className='partners_cadastro' target="_blank" rel="noreferrer" href="https://imalearningplace.com/">
                        <img className='partners_color' src='/assets/img/Partners/ima.png' alt='ÍMÃ' />
                    </a>
                    <a className='partners_cadastro' target="_blank" rel="noreferrer" href="https://www.auvo.com/">
                        <img className='partners_color' src="/assets/img/Partners/auvo.png" alt="Auvo" />
                    </a>
                    <a className='partners_cadastro' target="_blank" rel="noreferrer" href="https://nectarcrm.com.br/">
                        <img className='partners_color' src="/assets/img/Partners/nectar.png" alt="Nectar" />
                    </a>
                    <a className='partners_cadastro' target="_blank" rel="noreferrer" href="https://polichat.com.br/">
                        <img className='partners_color' src="/assets/img/Partners/poli.png" alt="Poli" />
                    </a>
                    <a className='partners_cadastro' target="_blank" rel="noreferrer" href="https://trinus.co/">
                        <img className='partners_color' src="/assets/img/Partners/trinus.png" alt="TrinusCO" />
                    </a>
                </section> 
            </footer>
        </div >
    )
}

export default LoginRegister