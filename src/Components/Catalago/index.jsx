import React from "react"; 

import './catalago.css'
import ProductList from "../../data/products"
import Produto from "./Produtos/produto";

const Catalago = () => {
       return (
       
            <section className='catalago'>
              {ProductList.map(product => {
                return (
                    <Produto product = {product} />
                );
              })}  
              
             </section>
        
    )
}

export default Catalago