import { useContext, useState } from 'react';
import { NavLink, useLocation, Link  } from 'react-router-dom'

import { 
    MdClose as CloseIcon
} from "react-icons/md";

import {
    AiOutlineShopping as BagIcon,
    AiOutlineUser as UserIcon
} from "react-icons/ai";

import Cart from './Cart'
import SearchItems from './SearchItems'
import './navbar.css'

import { CartContext } from '../../Context/cart';

const Navbar = () => {
    const [cartDisplay, setCartDisplay] = useState('-400px');
    const [backgroundDisplay, setBackgroundDisplay] = useState({opacity: 0, zIndex: -1});
    
    const {bagItemsCount} = useContext(CartContext);

    const displayCart = () => {
        if (cartDisplay === '15px') {
            setCartDisplay('-400px')
            setBackgroundDisplay({opacity: 0, zIndex: -1})
        } else {
            setCartDisplay('15px');
            setBackgroundDisplay({opacity: 1, zIndex: 998})
        }    
    }
    
    /* Não apresentar a navbar na tela de checkou e login */
    const { pathname } = useLocation();
    if (pathname === "/register" || pathname === "/checkout") 
        return null;

    return (
        <>
            <header className='navbar'>
                <NavLink to="/home"  className='navbar__logo'>
                    <img src="/assets/Logos/Logo_Black_Transparencia.png" alt="IMA logo" />
                </NavLink >

                <SearchItems />

                <div className='navbar__menu'>
                    <button className='navbar__menu__button menu__button__bag' onClick={displayCart}>
                        <BagIcon className='navbar__button__icon'/>
                        <span className='bag__items-count'>{bagItemsCount}</span>
                    </button>

                    <Link to="/account" style={{textDecoration: 'none'}}>
                        <button className='navbar__menu__button menu__button__account'>
                            <UserIcon className='navbar__button__icon'/>
                        </button>
                    </Link>
                </div>

                <section 
                    className='background_hover' 
                    onClick={displayCart}
                    style={backgroundDisplay}>
                </section>

                <div className='cart__box' style={{right: cartDisplay}}>
                    <div className='cart_header'>
                        <button onClick={displayCart}  className='cart__button'>
                            <CloseIcon className='close__icon'/>
                        </button>

                        <p>SACOLA {bagItemsCount ? `( ${bagItemsCount} )`: ''}</p>
                    </div>
                    
                    <Cart />  
                </div>
            </header>
        </>
    )
}

export default Navbar