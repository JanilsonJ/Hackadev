import { useEffect } from 'react';
import Catalago from '../../Components/Catalago';
import './home.css';
import BannerTopo from '../../Components/Catalago/Banners';
import { useParams } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        document.title = 'IMA - Início';
    });
  
    const { filter } = useParams()

    return (
            
            <section className='home'>
               {filter ? null : <BannerTopo /> } 
               
               <Catalago />
                
            </section>

            
            
          
            
          
        
    )
}

export default Home