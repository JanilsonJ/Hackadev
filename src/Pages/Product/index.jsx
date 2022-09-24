import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CartContext } from '../../Context/cart'

import Button from '../../Components/Button'
import useFetch from '../../hooks/useFetch'

import './product.css'

const Product = () => {
  const { addBagItem } = useContext(CartContext)
  
  const { id } = useParams()
  const { data: product, isFetching: loadProduct } = useFetch(`produto/${id}`) // Pegando produto na API por id
  const { data: sizes, isFetching: loadSizes } = useFetch(`produto/sizes/${id}`) // Pegando tamanhos disponiveis do produto pela API por id

  const [mainImage, setMainImage] = useState(product?.image1)
  const [size, setSize] = useState(null)
  const [sizeAlert, setSizeAlert] = useState(false)

  const shakeButtonSizes = () => {
    setSizeAlert(true)

    let btns = document.getElementsByClassName('button__product-size')

    Array.from(btns).map(btn => (btn.className += ' vai-tremer'))

    setTimeout(() => {
      Array.from(btns).map(
        btn => (btn.className = btn.className.replace(' vai-tremer', ''))
      )
    }, 800)
  }

  function payment() {
    return product.actual_price / 3
  }

  useEffect(() => {
    document.title = `IMA - ${product?.name}`

    //Subindo a página no inicio da ao entrar nela;
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Reiniciando o componente
    setMainImage(product?.image1)
    setSizeAlert(false)
    setSize(null)

    //Reiniciando dados
    document
      .getElementsByClassName('buttonActive')[0]
      ?.classList.remove('buttonActive')
  }, [product])

  const buttonSelected = (e, size) => {
    setSizeAlert(false)
    setSize(size)

    let btns = document.getElementsByClassName('button__product-size')

    Array.from(btns).map(
      btn => (btn.className = btn.className.replace(' buttonActive', ''))
    )

    e.target.className += ' buttonActive'
  }

  const sizeButtons = () => {
    return loadSizes ? 'Carregando...' : sizes?.map(s => {
      return s.available ? (
        <button
          className="button__product-size"
          onClick={e => buttonSelected(e, s)}
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
    <> {loadProduct ? 'Caregando...' : 
      <div className="container--product">
        <div className="products--images">
          <div className="main--product--image">
            <div className="product--image--zoom">
              <img id="main--image" src={mainImage} alt={product.name} />
            </div>
            <div className="image--product--preview">
              <img
                onClick={() => {
                  setMainImage(product.image1)
                }}
                src={product.image1}
                alt={product.name}
              />
              <img
                onClick={() => {
                  setMainImage(product.image2)
                }}
                src={product.image2}
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
                : { margin: '50px 0 0 0' }
            }
          >
            {BRL(product.actual_price)}
          </span>
          <p className="payment--info">em até 3x {BRL(payment())}</p>

          <div className="product--size">
            <p>Escolha o tamanho:</p>

            {sizeButtons()}
          </div>
          <span
            className="product--size--alert"
            style={sizeAlert ? { display: 'unset' } : { display: 'none' }}
          >
            Selecione o tamanho desejado
          </span>

          <div
            className="addBag__button"
            onClick={() => {
              size ? addBagItem(product, size) : shakeButtonSizes()
            }}
          >
            <Button>Adicionar a sacola</Button>
          </div>
        </div>
      </div>
    } </>
  )
}

export default Product
