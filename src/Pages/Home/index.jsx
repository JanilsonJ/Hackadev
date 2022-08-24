import { useEffect } from 'react';
import { Link  } from 'react-router-dom'

import './home.css';
import ProductsList from '../../data/products';

const Home = () => {
    useEffect(() => {
        document.title = 'IMA - Início';
    });

    return (
        <>
            <section className='home'>
                {ProductsList.map(p => {
                    return (
                        <Link key={p.id} to={`/product/${p.id}`} >    
                            <img src= {p.img.front} alt={p.name}/>
                        </Link> 
                    )
                })}    
            </section>
        </>
    )
}

export default Home