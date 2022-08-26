import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/cart'
import './product.css'
import ProductList from '../../data/products'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()
  const product = ProductList.find(p => p.id === parseInt(id))

  const [mainImage, setMainImage] = useState(product.img.front)

  const { addBagItem } = useContext(CartContext)

  function payment() {
    return product.actual_price / 3
  }

  useEffect(() => {
    document.title = `IMA - ${product.name}`
  })

  return (
    <>
      <div className="container">
        <div className="products--images">
          <div className="main--product--image">
            <img id="image_test" src={mainImage} alt={product.name} />
          </div>
          <div className="image--product--preview">
            <img
              onClick={() => {
                setMainImage(product.img.front)
              }}
              src={product.img.front}
              alt={product.name}
            />
            <img
              onClick={() => {
                setMainImage(product.img.back)
              }}
              src={product.img.back}
              alt={product.name}
            />
          </div>
        </div>
        <div className="info--product--container">
          <p className="product--name">{product.name}</p>
          <span
            className="regular--price"
            style={
              product.porcent_descount !== 0
                ? { display: 'unset' }
                : { display: 'none' }
            }
          >
            {' '}
            De: R${' '}
            {product.regular_price.toFixed(2).toString().replace('.', ',')}
          </span>
          <span
            className="product--price"
            style={
              product.porcent_descount !== 0
                ? { margin: '10px 0 0 0' }
                : { margin: '120px 0 0 0' }
            }
          >
            R$ {product.actual_price.toFixed(2).toString().replace('.', ',')}
          </span>
          <p className="payment--info">
            em até 3x {payment().toFixed(2).toString().replace('.', ',')}
          </p>

          <div className="product--size">
            <p>Escolha o tamanho:</p>
            <button
              style={
                !product.sizes.PP
                  ? { cursor: 'default', color: 'grey' }
                  : { cursor: 'pointer' }
              }
            >
              PP
            </button>
            <button
              style={
                !product.sizes.P
                  ? { cursor: 'default', color: 'grey' }
                  : { cursor: 'pointer' }
              }
            >
              P
            </button>
            <button
              style={
                !product.sizes.M
                  ? { cursor: 'default', color: 'grey' }
                  : { cursor: 'pointer' }
              }
            >
              M
            </button>
            <button
              style={
                !product.sizes.G
                  ? { cursor: 'default', color: 'grey' }
                  : { cursor: 'pointer' }
              }
            >
              G
            </button>
            <button
              style={
                !product.sizes.GG
                  ? { cursor: 'default' }
                  : { cursor: 'pointer' }
              }
            >
              GG
            </button>
          </div>
          <button
            onClick={() => {
              addBagItem(product)
            }}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </>
  )
}

export default Product
