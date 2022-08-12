import { useEffect } from 'react';

import './home.css';

const Home = () => {
    useEffect(() => {
        document.title = 'IMA - Início';
    });

    return (
        <section className='home'>
        </section>
    )
}

export default Home