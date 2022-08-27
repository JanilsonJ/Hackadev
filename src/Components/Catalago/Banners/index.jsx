import React from "react";
import SliderData from "./bannerTopo/slideData";
import Bannerslider from "./bannerTopo/bannerSlide";
import './banners.css'

const BannerTopo = () => {
    return (
        
            <Bannerslider slides={SliderData}/>  
        
       
        
    );
}
export default BannerTopo;