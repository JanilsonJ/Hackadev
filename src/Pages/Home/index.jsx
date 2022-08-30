import { useEffect } from 'react';
import Catalago from '../../Components/Catalago';
import './home.css';
import BannerTopo from '../../Components/Catalago/Banners';

const Home = () => {
    useEffect(() => {
        document.title = 'IMA - Início';
    });

    return (
            
            <section className='home'>
               
               <BannerTopo /> 
               
               <Catalago />
                
            </section>

            
            
          
            
          
        
    )
}

export default Home