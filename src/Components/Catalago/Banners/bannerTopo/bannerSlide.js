import React, {useState} from "react";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import SliderData from "./slideData";

const Bannerslider = ( { slides } ) => {
    const [valor_atual, setValor_atual] = useState(0);
    const length = slides.length;
/*Constante para o proximo elemento - img */
const nextSlide = () => {
    setValor_atual(valor_atual === length - 1 ? 0 : valor_atual + 1);
    
  };
/*Constante para o elemento anterior - img */
const prevSlide = () => {
    setValor_atual(valor_atual === 0 ? length - 1 : valor_atual - 1);
  };

 /*Verifca se o Array está vazio */ 
 if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  //setInterval (nextSlide, 7000); /*Passagem automática de img */
    return (
       
        <section className="banner">
        <BsChevronLeft className='left-arrow arrow' onClick={prevSlide} />
        <BsChevronRight className='right-arrow arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === valor_atual ? 'slide active' : 'slide'}
              key={index}
            >
              {index === valor_atual && (
                <img src={slide.image} alt='' className='banner__img' />
              )}
            </div>
          );
        })}
      </section>
              
        
    );
}
 export default Bannerslider;