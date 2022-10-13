import React, { useContext } from 'react';
import { Link, useNavigate  } from 'react-router-dom'

import { FaMinusSquare, FaTrashAlt, FaPlusSquare } from "react-icons/fa";

import { CartContext } from '../../../Context/cart';
import { UserContext } from '../../../Context/user';

import './cart.css';

    export default function Cart () {
        const { bagItems, addBagItem, onRemove, setBagItems, updateItemsCount, bagItemsCount, setBagDisplay } = useContext(CartContext)
        const { isLoggedIn } = useContext(UserContext)
        
        const navigate = useNavigate();

        const itemsValue = bagItems.reduce((a, c) => a + c.quantity * c.actual_price, 0);
        
        return (
            <aside>
            <section className="cart__products">
              {bagItems.length === 0 && <div><img className='empty-cart' src="/assets/img/Products/empty-cart.jpg" alt="empty-cart"/>
                <p className='cart__text'>Seu carrinho está vazio!</p></div>}
              
              {bagItems.map((item) => {
                // console.log(item);
                return <div key={item.sku} className="cart__product-description">
                  <img className='cart__product-image' src={item.image1} alt={item.name} style={{width: '130px'}} onError={e => e.target.src = '/assets/img/Products/no_product_image.png'} />
                  <div className="cart__product-name"> <span className='product__name' >{item.name}</span>  <span className='product_size' >({item.size})</span>
                  <div className='regular_price' style={item.porcent_discount !== 0
                                                        ? {display: 'unset'}
                                                        : {display: 'none'}}
                  >R$ {Number(item.regular_price).toFixed(2).toString().replace('.', ',')}</div>
                  <div className="cart_product-price">
                    R$ {Number(item.actual_price).toFixed(2).toString().replace('.', ',')}
                  </div>
                    <div className="minus__plus">
                        <FaMinusSquare onClick={() => onRemove(item)} className="minus" size="1.6rem" color= "var(--DustyGray)" />
                        &nbsp;<span className='item_quantity' >{item.quantity}</span>&nbsp;
                        <FaPlusSquare onClick={() => addBagItem(item, null)} className="plus" size="1.6rem" color= "var(--DustyGray)" />
                    </div>
                    <button onClick={() => {updateItemsCount(bagItemsCount - item.quantity)
                                            setBagItems(bagItems.filter(p => p !== item))
                                            if (bagItemsCount === 1)
                                              updateItemsCount(null)
                                        }
                                    } 
                              className="cart__product-remove"> <FaTrashAlt/>&nbsp; <span className='hide_remove'>Remover</span> </button>
                  </div>
                  
                </div>
              })}

                  {bagItems.length !== 0 && (
                
                <section className="resume">
                  <p className="total__value">
                    <strong>Subtotal:</strong> R$ {itemsValue.toFixed(2).toString().replace('.', ',')}
                  </p>
                  <p className="frete_msg">
                    Frete grátis para compra acima de <strong>R$200,00</strong>
                  </p>
                  <hr className="resume_divider"/>

                  <div>
                    {isLoggedIn ? 
                        <Link to="/checkout" onClick={() => setBagDisplay(false)} className="checkout-button">Ir Para Pagamento</Link>
                      :
                        <div onClick={() => window.confirm('Faça o login antes de prosseguir') ? navigate("/account") : null} className="checkout-button">Ir Para Pagamento</div>}
                  </div>
                </section>
              )} 
                             
            </section>          
          </aside>
        );
      }