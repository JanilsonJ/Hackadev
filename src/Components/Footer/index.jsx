import { useLocation  } from 'react-router-dom'

import { 
    IoLogoInstagram as InstagramIcon, 
    IoLogoFacebook as FacebookIcon,
    IoLogoYoutube as YoutubeIcon,
    IoLogoLinkedin as LinkedinIcon,
    IoLogoGithub as GithubIcon
} from "react-icons/io5";

import './footer.css'

const Footer = () => {
    /* Não apresentar o footer na tela de checkou e login */
    const { pathname } = useLocation();
    if (pathname === "/register" || pathname === "/checkout") 
        return null;

    return (
        <footer className='footer'>
            <section className='footer_social-links'> 
                <p className='footer_social-links__title'>REDES SOCIAIS</p> 

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
            </section>

            <section className='footer_about'> 
                <p className='footer_about__title'>SOBRE</p> 

                <p className='footer_about__description'>Projeto de estudo realizado pela primeria turma do programa #GoDev pela <a href='https://imalearningplace.com/' target="_blank" rel="noreferrer">Ímã Learning Place</a> com o objetivo de desenvolver um e-commerce de modas. 
                </p>
            </section>

            <section className='footer__team'> 
                <p className='footer__team__title'>EQUIPE &nbsp;<GithubIcon /></p> 

                <section className='footer__team__links'>
                    <div className='card'>
                        <img src="https://github.com/allagyn.png" alt='Foto integrante'/>
                        <a href="https://github.com/allagyn" target="_blank" rel="noreferrer">André</a>
                    </div>
                    <div className='card'>
                        <img src="https://github.com/ArturDiego.png" alt='Foto integrante'/>
                        <a href="https://github.com/ArturDiego" target="_blank" rel="noreferrer">Artur</a>
                    </div>
                    <div className='card'>
                        <img src="https://github.com/ezcmacedo.png" alt='Foto integrante'/>
                        <a href="https://github.com/ezcmacedo" target="_blank" rel="noreferrer">Enzo</a>
                    </div>
                    <div className='card'>
                        <img src="https://github.com/estevaosampaio.png" alt='Foto integrante'/>
                        <a href="https://github.com/estevaosampaio" target="_blank" rel="noreferrer">Estevão</a>
                    </div>
                    <div className='card'>
                        <img src="https://github.com/Fabioazevedojr.png" alt='Foto integrante'/>
                        <a href="https://github.com/Fabioazevedojr" target="_blank" rel="noreferrer">Fábio</a>
                    </div>
                    <div className='card'>
                        <img src="https://github.com/JanilsonJ.png" alt='Foto integrante'/>
                        <a href="https://github.com/JanilsonJ" target="_blank" rel="noreferrer">Janilson</a>
                    </div>
                    <div className='card'>
                        <img src="https://github.com/mateus-asouza.png" alt='Foto integrante'/>
                        <a href="https://github.com/mateus-asouza" target="_blank" rel="noreferrer">Mateus</a>
                    </div>
                    <div className='card'>
                        <img src="https://github.com/PauloHenryck.png" alt='Foto integrante'/>
                        <a href="https://github.com/PauloHenryck" target="_blank" rel="noreferrer">Paulo</a>  
                    </div>       
                </section>
            </section>

            <section className='footer__copyright'>
                <p>© 2022 Copyright: <span>IMA E-commerce</span> - Todos os Direitos Reservados</p>
            </section>
        </footer>
    )
}

export default Footer