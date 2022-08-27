import './cart.css';
import React, { useContext } from 'react';
import { FaMinusSquare, FaTrashAlt, FaPlusSquare } from "react-icons/fa";
import { CartContext } from '../../../Context/cart';
import { Link  } from 'react-router-dom'

    export default function Cart () {
        const { bagItems, addBagItem, onRemove, setBagItems, updateItemsCount, bagItemsCount } = useContext(CartContext)
        const itemsValue = bagItems.reduce((a, c) => a + c.quantity * c.actual_price, 0);
        const frete = itemsValue > 250 ? 0  : 25;
        const totalValue = itemsValue + frete;
    
        return (
            <aside>
            <section className="cart__products">
              {bagItems.length === 0 && <div><img className='empty-cart' src="/assets/img/Products/empty-cart.jpg" alt="empty-cart"/>
                <p className='cart__text'>Seu carrinho está vazio!</p></div>}
              
              {bagItems.map((item) => (
                <div key={item.id} className="cart__product-description">
                  <img className='cart__product-image' key={item.id} src={item.img.front} alt={item.name} style={{width: '130px'}} />
                  <div className="cart__product-name">{item.name}
                  <div className='regular_price' style={item.porcent_descount !== 0
                                                        ? {display: 'unset'}
                                                        : {display: 'none'}}
                  >R$ {item.regular_price.toFixed(2).toString().replace('.', ',')}</div>
                  <div className="cart_product-price">
                    {item.quantity} x R$ {item.actual_price.toFixed(2).toString().replace('.', ',')}
                  </div>
                    <div className="minus__plus">
                        <FaMinusSquare onClick={() => onRemove(item)} className="minus" size="1.6rem" color= "var(--DustyGray)" />
                          {' '}
                        <FaPlusSquare onClick={() => addBagItem(item)} className="plus" size="1.6rem" color= "var(--DustyGray)" />
                    </div>
                    <button onClick={() => {updateItemsCount(bagItemsCount - item.quantity)
                                            setBagItems(bagItems.filter(p => p !== item))
                                            if (bagItemsCount === 1)
                                              updateItemsCount(null)
                                        }
                                    } 
                              className="cart__product-remove"> <FaTrashAlt/> Remover</button>
                  </div>
                  
                </div>
              ))}

                  {bagItems.length !== 0 && (
                
                <section className="resume">
                  {/* <div className="item__price">
                    <div className="item__price-fix">Preço dos Items</div>
                    <div className="titem__price-total">R$ {itemsValue.toFixed(2).toString().replace('.', ',')}</div>
                  </div>
                  <span className='cart__product-line'></span> */}
                  <div className="total__value">
                    <div className="total__value-fix">
                      <strong>Preço total</strong>
                    </div>
                    <div className="total__value-p">
                      <strong>R$ {totalValue.toFixed(2).toString().replace('.', ',')}</strong>
                    </div>
                  </div>
                  <span className='cart__product-line'></span>
                  <div className="frete__price">
                    <div className="frete__price-fix">Valor do frete</div>
                    <div className="frete__total-value">
                      R$ {frete.toFixed(2).toString().replace('.', ',')}
                    </div>
                  </div>
               
                  <div>
                  <Link to="/checkout" className="checkout-button">Ir Para Pagamento</Link>
                  </div>
                </section>
              )} 
                             
            </section>          
          </aside>
        );
      }