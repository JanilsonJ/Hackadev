import { Link } from 'react-router-dom'

const Produto = ({ product }) => {
  //Função para desconto de Produtos
  const price = () => {
    if (product.porcent_discount > 0) {
      product.actual_price =
        product.regular_price -
        (product.regular_price * product.porcent_discount) / 100
      return (
        <>
          <p className="catalago__text--riscado">
            {BRL(product.regular_price)}
          </p>
          <p className="catalago__text--regular_price cor_desconto">
            {BRL(product.actual_price)}
          </p>
          <p className="catalago__tex--regular_price--sale">
            {product.porcent_discount}%
          </p>
        </>
      )
    } else {
      return (
        <p className="catalago__text--regular_price">
          {BRL(product.regular_price)}
        </p>
      )
    }
  }

  const BRL = price => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <Link to={product.disable ? '' : `/product/${product.id}`} className="catalago__produto">
      <div className="catalago__produto--image">
        <div className={product.disable? 'produto__disable' : ''}>
          <img className="item_img" src={product.image1} alt={product.name} />
          <img className="item_img--a" src={product.image2} alt={product.name} />
        </div>
      </div>
      <h3>{product.name}</h3> 
      <div className="description__product">
         {product.disable ? 'Produto indisponível' : price()}
      </div>
    </Link>
  )
}
export default Produto
