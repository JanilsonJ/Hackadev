import { useLocation  } from 'react-router-dom'

import { 
    IoLogoInstagram as InstagramIcon, 
    IoLogoFacebook as FacebookIcon,
    IoLogoYoutube as YoutubeIcon,
    IoLogoLinkedin as LinkedinIcon,
    IoLogoGithub as GithubIcon
} from "react-icons/io5";

import {
    BsFillCaretRightFill as RightArrowIcon
} from 'react-icons/bs'

import './footer.css'

const Footer = () => {
    /* Não apresentar o footer na tela de checkou e login */
    const { pathname } = useLocation();
    if (pathname === "/register" || pathname === "/checkout") 
        return null;

    return (
        <footer className='footer'>
   
            <section className='footer__team'> 
                <p className='footer__title'>DESENVOLVEDORES &nbsp;<GithubIcon /></p> 

                <section className='footer__team__links'>
                    <a href="https://github.com/allagyn" target="_blank" rel="noreferrer">André Lima</a>
                    <a href="https://github.com/ArturDiego" target="_blank" rel="noreferrer">Artur Diego</a>
                    <a href="https://github.com/ezcmacedo" target="_blank" rel="noreferrer">Enzo Macedo</a>
                    <a href="https://github.com/estevaosampaio" target="_blank" rel="noreferrer">Estevão Sampaio</a>
                    <a href="https://github.com/Fabioazevedojr" target="_blank" rel="noreferrer">Fábio Junior</a>
                    <a href="https://github.com/JanilsonJ" target="_blank" rel="noreferrer">Janilson Junior</a>
                    <a href="https://github.com/mateus-asouza" target="_blank" rel="noreferrer">Mateus Alves</a>
                    <a href="https://github.com/PauloHenryck" target="_blank" rel="noreferrer">Paulo Henryck</a>      
                </section>
            </section>
    
            <section className='footer__partners'> 
                <p className='footer__title'>PATROCINADORES</p> 

                <div className='footer__partners__links'>
                    <a className='partners' target="_blank" rel="noreferrer" href="https://imalearningplace.com/">
                        <img className='partners_gray' src='/assets/img/Partners/ima_GrayScale.png' alt='ÍMÃ' />
                        <img className='partners_colored' src='/assets/img/Partners/ima.png' alt='ÍMÃ' />
                    </a>
                    <a className='partners' target="_blank" rel="noreferrer" href="https://www.auvo.com/">
                        <img className='partners_gray' src="/assets/img/Partners/auvo_GrayScale.png" alt="Auvo" />
                        <img className='partners_colored' src="/assets/img/Partners/auvo.png" alt="Auvo" />
                    </a>
                    <a className='partners' target="_blank" rel="noreferrer" href="https://nectarcrm.com.br/">
                        <img className='partners_gray' src="/assets/img/Partners/nectar_GrayScale.png" alt="Nectar" />
                        <img className='partners_colored' src="/assets/img/Partners/nectar.png" alt="Nectar" />
                    </a>
                    <a className='partners' target="_blank" rel="noreferrer" href="https://polichat.com.br/">
                        <img className='partners_gray' src="/assets/img/Partners/poli_GrayScale.png" alt="Poli" />
                        <img className='partners_colored' src="/assets/img/Partners/poli.png" alt="Poli" />
                    </a>
                    <a className='partners' target="_blank" rel="noreferrer" href="https://trinus.co/">
                        <img className='partners_gray' src="/assets/img/Partners/trinus_GrayScale.png" alt="TrinusCO" />
                        <img className='partners_colored' src="/assets/img/Partners/trinus.png" alt="TrinusCO" />
                    </a>
                </div>
            </section>
            
            <hr />

            <section className='footer__email'>
                <label htmlFor="footer__email__input">Cadastre-se para mais novidades</label>
                <input id='footer__email__input' type="email" placeholder='E-mail' />
                <button className='footer__email__buton'> <RightArrowIcon /> </button>
            </section>

            <section className='footer_social-links'> 
                <a href='https://www.instagram.com/imalearningplace/' target="_blank" rel="noreferrer">
                    <InstagramIcon className='social__icons instagram_icon' />
                </a>
                <a href="https://www.youtube.com/channel/UCTPTRwci77bS8Uk0s4hNU2g" target="_blank" rel="noreferrer">
                    <YoutubeIcon className='social__icons youtube_icon' />
                </a>
                <a href="https://www.facebook.com/imalearningplace" target="_blank" rel="noreferrer">
                    <FacebookIcon className='social__icons facebook_icon' />
                </a>
                <a href="https://www.linkedin.com/company/im%C3%A3-learning-place/mycompany/" target="_blank" rel="noreferrer">
                    <LinkedinIcon className='social__icons linkedin_icon' />
                </a>
                <a href="https://github.com/JanilsonJ/Hackadev" target="_blank" rel="noreferrer">
                    <GithubIcon className='social__icons github_icon' />
                </a>
            </section>

            <section className='footer__copyright'>
                <p>© 2022 Copyright: <span>IMA E-commerce</span> - Todos os Direitos Reservados</p>
            </section>
        </footer>
    )
}

export default Footer