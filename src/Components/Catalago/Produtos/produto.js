import { Link } from 'react-router-dom'

const Produto = ({ product }) => {
  //Função para desconto de Produtos
  const price = () => {
    if (product.porcent_descount > 0) {
      product.actual_price =
        product.regular_price -
        (product.regular_price * product.porcent_descount) / 100
      return (
        <>
          <p className="catalago__text--riscado">
            {BRL(product.regular_price)}
          </p>
          <p className="catalago__text--regular_price cor_desconto">
            {BRL(product.actual_price)}
          </p>
          <p className="catalago__tex--regular_price--sale">
            {product.porcent_descount}%
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
    <Link to={`/product/${product.id}`} className="catalago__produto">
      <img className="item_img" src={product.img.front} alt={product.name} />
      <img className="item_img--a" src={product.img.back} alt={product.name} />

      <div className="description__product">
        <h3>{product.name}</h3>
      </div>

      {price()}
    </Link>
  )
}
export default Produto
