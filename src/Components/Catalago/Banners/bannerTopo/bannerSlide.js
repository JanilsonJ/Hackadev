import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SliderData from "./slideData";

const Bannerslider = () => {
  const [slideTranslate, setSlideTranslate] = useState(0);
  const timer = useRef(null);

  const slideLength = SliderData.image.length - 1;

  // Foi necessario usar o useCallback do react pq essa função está sendo chamada no useEffect
  const nextSlide = useCallback(() => {
    setSlideTranslate(slideTranslate => slideTranslate - 1);
     
    if (slideTranslate <= -slideLength )
      setSlideTranslate (0)

    clearTimeout(timer.current); //Zerar o timer apos o usuario mudar o slide
  }, [slideLength, slideTranslate]);
  
  const prevSlide = () => {
    setSlideTranslate(slideTranslate => slideTranslate + 1);

    if (slideTranslate >= 0)
      setSlideTranslate(-slideLength)

    clearTimeout(timer.current); //Zerar o timer apos o usuario mudar o slide
  };
  
  useEffect(() => {
    timer.current = setTimeout(() => nextSlide(), 10000)
    return () => clearTimeout(timer.current)
   }, [nextSlide])
  
  return (
    <section className="banner">
      <BsChevronLeft className="left-arrow arrow" onClick={prevSlide} />
      <BsChevronRight className="right-arrow arrow" onClick={nextSlide} />
      
      <div className="slides">
        { SliderData.image.map(
          (banner, index) => {
            return (
                <img src={banner} alt="Banner" key={index} style={{transform: `translate(${slideTranslate * 100}vw, 0)`}} className="banner__img"></img>
            )
          }
        )}
      </div>
    </section>
  );
};
export default Bannerslider;
