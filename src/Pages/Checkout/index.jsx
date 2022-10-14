import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MdLocationPin } from 'react-icons/md'

import ItemAndValue from './components/ItemAndValue/ItemAndValue'
import Title from './components/Title/Title'
import Button from './components/Button'
import RadioOption from './components/RadioOption/RadioOption'
import Label from './components/Label/Label'
import AddreessInfo from './components/AddreessInfo/AddreessInfo'
import ProductInfo from './components/ProductInfo/ProductInfo'
import PaymentsMethod from './components/PaymentsMethod/PaymentsMethod'

import './checkout.css'

import { CartContext } from '../../Context/cart.js'
import { UserContext } from '../../Context/user.js'

import useFetch from '../../hooks/useFetch'

const Checkout = () => {
  const navigate = useNavigate();
  
  const { bagItems, emptyBagItems } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const [freteValue, setFreteValue] = useState(0);
  const [freteIsSelected, setFreteIsSelected] = useState(false);

  const {data: address, isFetching: loadAddress} = useFetch(`customer/address/delivery/${user.id}`);

  useEffect(() => {
    document.title = 'IMA - Checkout'
  })

  const BRL = (price) => {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price)
  }

  const subtotal = (bagItems.reduce((sum, bag) => {
    return sum + (Number(bag.actual_price) * Number(bag.quantity));
  }, 0)).toFixed(2);

  const finishPurchase = async () => {
    if (!address)
      return window.alert('POR FAVOR! Adicione um endereço.')

    if (!freteIsSelected)
      return window.alert('POR FAVOR! Selecione o modo de entrega.')

    // Body da requisição fecth
    const body = [];

    // Adicionando detalhes da compra ao body
    body[0] = {
      customer_id: user.id,
      addressee: address.addressee,
      total_price: Number(subtotal) + Number(subtotal >= 200 ? 0 : freteValue),
      installments: 0,
      order_address: `${address.address}, ${address.complement}, ${address.district}, ${address.city}, ${address.state}`
    }

    //Adicionando items comprados ao body
    Array.from(bagItems).forEach((item, index) => {
      body[index + 1] = {
        product_sku: item.sku,
        order_item_quantity: item.quantity,
        order_item_price: item.actual_price
      }
    })

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    await fetch(`${process.env.REACT_APP_API_URL.replaceAll('"', '')}order`, requestOptions)
    .then((data) => {
      emptyBagItems();
      navigate('/home');
    }) 
    .catch(err => {
      console.log(err)
    });
  }

  return (
    <div className="checkout-container">
      <div className="main-container_session-container">
        <Title>DETALHES DA ENTREGA</Title>
        <div className="main-container_session-container_order-description">
          <div className="line-botton-container">
            <div style={{ display: 'flex' }}>
              <MdLocationPin />
              <div style={{width: "100%"}}>
                <p className="bold">
                  <b>RESIDENCIAL</b>
                </p>
                <p className="main-container_session-container_label-subtitle">
                  {loadAddress || address?.address === undefined ? 'Nenhum endereço encontrado' : `Destinátario: ${address.addressee}, ${address?.address}, ${address?.complement}, ${address?.district}, ${address?.city}, ${address?.state}`}
                </p>
              </div>
            </div>
            <AddreessInfo />
          </div>

          <div className="line-botton-container" onClick={() => {setFreteValue(6.99); setFreteIsSelected(true)}}>
            <RadioOption id="standard" name="price" value="standard">
              <Label class="main-container_session-container_label-title bold">
                Entrega Normal
              </Label>
              <Label class="main-container_session-container_label-subtitle">
                Até 13 dias úteis após a aprovação do pagamento.
              </Label>
            </RadioOption>
            <p className="main-container_session-container_price">{subtotal >= 200 ? 'GRÁTIS' : BRL(6.99)}</p>
          </div>
          <div className="line-botton-container" onClick={() => {setFreteValue(19.99); setFreteIsSelected(true)}}>
            <RadioOption id="express" name="price" value="express">
              <Label class="main-container_session-container_label-title bold">
                Entrega Express
              </Label>
              <Label class="main-container_session-container_label-subtitle">
                Até 5 dias úteis após a aprovação do pagamento.
              </Label>
            </RadioOption>
            <p className="main-container_session-container_price">{subtotal >= 200 ? 'GRÁTIS' : BRL(19.99)}</p>
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
            <p>{BRL(subtotal)}</p>
          </ItemAndValue>
          <ItemAndValue class="main-container_session-container_item">
            <p>Desconto</p>
            <p>{BRL(0)}</p>
          </ItemAndValue>
          <ItemAndValue class="main-container_session-container_item">
            <p>Entrega</p>
            <p>{subtotal >= 200 ? 'GRÁTIS' : BRL(freteValue)}</p>
          </ItemAndValue>
          <ItemAndValue class="main-container_session-container_item">
            <p style={{ color: 'var(--HeavyMetal)', fontWeight: 'bold' }}>
              Total
            </p>
            <p>{BRL(Number(subtotal) + Number(subtotal >= 200 ? 0 : freteValue))}</p>
          </ItemAndValue>
          <div className="main-container_session-container_div-button">
            <div onClick={() => finishPurchase()}>
              <Button>FINALIZAR COMPRA</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
