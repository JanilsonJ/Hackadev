import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/cart'
import './product.css'
import ProductList from '../../data/products'
import { useParams } from 'react-router-dom'
import Button from '../../Components/Button'

const Product = () => {
  const { id } = useParams()
  const product = ProductList.find(p => p.id === parseInt(id))

  const [mainImage, setMainImage] = useState(product.img.front)

  const { addBagItem } = useContext(CartContext)

  const [size, setSize] = useState(null)

  function payment() {
    return product.actual_price / 3
  }

  useEffect(() => {
    document.title = `IMA - ${product.name}`

    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  const buttonSelected = (e, size) => {
    setSize(size)

    let btns = document.getElementsByClassName('button__product-size')

    Array.from(btns).map(
      btn => (btn.className = btn.className.replace(' buttonActive', ''))
    )

    e.target.className += ' buttonActive'
  }

  const sizeButtons = () => {
    return product.sizes.map(s => {
      return s.available ? (
        <button
          className="button__product-size"
          onClick={e => buttonSelected(e, s.size)}
          key={s.size}
        >
          {s.size}
        </button>
      ) : (
        <button className="button__product-size-disabled" disabled key={s.size}>
          {s.size}
        </button>
      )
    })
  }

  const BRL = price => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <>
      <div className="container--product">
        <div className="products--images">
          <div className="main--product--image">
            <div className="product--image--zoom">
              <img id="main--image" src={mainImage} alt={product.name} />
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
        </div>
        <div className="info--product--container">
          <p className="product--name">{product.name}</p>
          <span
            className="regular--price"
            style={
              product.porcent_discount !== 0
                ? { display: 'unset' }
                : { display: 'none' }
            }
          >
            De: {BRL(product.regular_price)}
          </span>
          <span
            className="product--price"
            style={
              product.porcent_discount !== 0
                ? { margin: '10px 0 0 0' }
                : { margin: '30px 0 0 0' }
            }
          >
            {BRL(product.actual_price)}
          </span>
          <p className="payment--info">em até 3x {BRL(payment())}</p>

          <div className="product--size">
            <p>Escolha o tamanho:</p>

            {sizeButtons()}
          </div>



          <div 
            className='addBag__button' 
            onClick={() => {size ? addBagItem(product, size) : alert('Selecione um tamanho')}}
          >  
            <Button >Adicionar a sacola</Button>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Product
