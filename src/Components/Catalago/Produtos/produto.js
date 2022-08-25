

const Produto = ({product}) => {
    //Função para desconto de Produtos
    const price = () => {
        
        if (product.porcent_descount > 0) {
           
            product.actual_price = (product.regular_price - (product.regular_price*50/100)).toFixed(2);
            return (
                <>
                    <p className = "catalago__text--riscado">R$ {product.regular_price.toString().replace('.', ',')}</p>
                    <p className = "catalago__text--regular_price cor_desconto" >R$ {product.actual_price.toString().replace('.', ',')}</p>
                    <p className = 'catalago__tex--regular_price--sale'>{product.porcent_descount}%</p>
                </>
            );
        }
        else {
            return (
                <p className = "catalago__text--regular_price" >R$ {product.regular_price.toString().replace('.', ',')}</p>
            );
        }
    }
    return (
        
        
        <div className="catalago__produto">
            
            <img className="item_img" src={product.img.front} alt={product.name}/>
            <img className="item_img--a" src={product.img.back} alt={product.name}/>
            <div className="description__product"> 
            <h3>{product.name}</h3>
            </div>           
            
            
            {price()}
            
        </div>
       
        
    );
}
export default Produto