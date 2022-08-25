

const Produto = ({product}) => {
    //Função para desconto de Produtos
    const price = () => {
        
        if (product.porcent_descount > 0) {
            /*Desconto de 50% */
            product.actual_price = (product.regular_price - (product.regular_price*50/100)).toFixed(2)
            return (
                <>
                    <p className = "catalago__text--riscado">R$ {product.regular_price}</p>
                    <p className = "catalago__text--regular_price cor_desconto" >R$ {product.actual_price}</p>
                    <p className = 'catalago__tex--regular_price--sale'>{product.porcent_descount}%</p>
                </>
            );
        }
        else {
            return (
                <p className = "catalago__text--regular_price" >R$ {product.regular_price}</p>
            );
        }
    }
//Função Produto Esgotado
   const soldof = () => {
        
         if(product.name === 'Bolsa com Alça Superior') {
            return (
                <>
                     <img className="item_img img_gray" src={product.front} alt={product.name}/>
                     <img className="item_img--a img_gray" src={product.back} alt={product.name}/>
                     <p className="catalago__tex produto_esgotado" >Esgotado</p>
                </>
               
            );
            
         }
         else {
            return (
                <>
                    <img className="item_img" src={product.img.front} alt={product.name}/>
                     <img className="item_img--a" src={product.img.back} alt={product.name}/>
                </>
            );
         }
    }
   
    return (
        
        
        <div className="catalago__produto">
            {soldof()}
           
            <p className="catalago__text">{product.name}</p>
            
            {price()}
            
        </div>
       
        
    );
}
export default Produto