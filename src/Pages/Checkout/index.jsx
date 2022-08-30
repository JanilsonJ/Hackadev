import React from 'react'
import { useEffect } from 'react'
import ItemAndValue from './components/ItemAndValue/ItemAndValue'
import Title from './components/Title/Title'
import './checkout.css'
import Button from './components/Button'
import RadioOption from './components/RadioOption/RadioOption'
import Label from './components/Label/Label'
import AddreessInfo from './components/AddreessInfo/AddreessInfo'
import ProductInfo from './components/ProductInfo/ProductInfo'
import { MdLocationPin } from 'react-icons/md'
import PaymentsMethod from './components/PaymentsMethod/PaymentsMethod'

const Checkout = () => {
  useEffect(() => {
    document.title = 'IMA - Checkout'
  })

  return (
    <div className="checkout-container">
      <div className="main-container_session-container">
        <Title>DETALHES DA ENTREGA</Title>
        <div className="main-container_session-container_order-description">
          <div className="line-botton-container">
            <div style={{ display: 'flex' }}>
              <MdLocationPin />
              <div>
                <p className="bold">
                  <b>RESIDENCIAL</b>
                </p>
                <p className="main-container_session-container_label-subtitle">
                  Rua das Camélias, numero 475, ap 801, tr 2, Parque Oeste
                  Industrial
                </p>
              </div>
            </div>
            <AddreessInfo />
          </div>

          <div className="line-botton-container">
            <RadioOption id="standard" name="price" value="standard">
              <Label class="main-container_session-container_label-title bold">
                Entrega Normal
              </Label>
              <Label class="main-container_session-container_label-subtitle">
                Até 13 dias úteis após a aprovação do pagamento.
              </Label>
            </RadioOption>
            <p className="main-container_session-container_price">R$ 6,99</p>
          </div>
          <div className="line-botton-container">
            <RadioOption id="express" name="price" value="express">
              <Label class="main-container_session-container_label-title bold">
                Entrega Express
              </Label>
              <Label class="main-container_session-container_label-subtitle">
                Até 5 dias úteis após a aprovação do pagamento.
              </Label>
            </RadioOption>
            <p className="main-container_session-container_price">R$ 19,99</p>
          </div>
        </div>
        <Title>LISTA DE PRODUTOS</Title>
        <div className="main-container_session-container_order-description">
          <ProductInfo />
        </div>
      </div>

      <div className="main-container_session-container">
        <Title>FORMA DE PAGAMENTO</Title>
        <div className="main-container_session-container_order-description forma-de-pagamento">
          <PaymentsMethod />
        </div>
        <Title>DETALHES DA COMPRA</Title>
        <div className="main-container_session-container_order-summary">
          <p className="main-container_session-container_order_subtitle">
            Resumo do Pedido
          </p>
          <ItemAndValue class="main-container_session-container_item">
            <p>Subtotal</p>
            <p>R$ 135,99</p>
          </ItemAndValue>
          <ItemAndValue class="main-container_session-container_item">
            <p>Vale Troca</p>
            <p>RS$ 0,00</p>
          </ItemAndValue>
          <ItemAndValue class="main-container_session-container_item">
            <p>Desconto</p>
            <p>R$ 0,00</p>
          </ItemAndValue>
          <ItemAndValue class="main-container_session-container_item">
            <p>Entrega</p>
            <p>R$ 0,00</p>
          </ItemAndValue>
          <ItemAndValue class="main-container_session-container_item">
            <p style={{ color: 'var(--HeavyMetal)', fontWeight: 'bold' }}>
              Total
            </p>
            <p>R$ 135,99</p>
          </ItemAndValue>
          <div className="main-container_session-container_div-button">
            <Button>FINALIZAR COMPRA</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
