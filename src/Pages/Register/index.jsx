import { useEffect } from 'react';
import Form from './Form';
import './register.css';



const Register = () => {
    useEffect(() => {
        document.title = 'IMA - Cadastro';
    });


    return (
        
        <>
        <div className="container">
            <Form/>
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
        </>
    )
}

export default Register