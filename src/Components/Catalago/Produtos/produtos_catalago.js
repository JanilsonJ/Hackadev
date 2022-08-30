import React from "react"
import Produto from "./produto"

const PRODCatalago = (props) => {
    var produtos = []
    
    for (let x=0; x < props.produtos.length; x++){
        produtos.push(<Produto catalago__produto = {props.produtos[x]} />)
        
        //Otimizando a chamada dos produtos por
    }
    
        return (
            
            <>
                {produtos}
            </>
           
        );
    }

export default PRODCatalago