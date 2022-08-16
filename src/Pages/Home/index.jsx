import { useEffect } from 'react';

import './home.css';

const Home = () => {
    useEffect(() => {
        document.title = 'IMA - Início';
    });

    return (
        <>
            <section className='home'>
                <img src="/assets/img/Products/10_Vestido regata com estampados florais_frente.webp" alt="" />
                <img src="/assets/img/Products/10_Vestido regata com estampados florais_frente.webp" alt="" />
                <img src="/assets/img/Products/10_Vestido regata com estampados florais_frente.webp" alt="" />
                <img src="/assets/img/Products/10_Vestido regata com estampados florais_frente.webp" alt="" />
            </section>
        </>
    )
}

export default Home