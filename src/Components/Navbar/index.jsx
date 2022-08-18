import { useState } from 'react';
import { NavLink, useLocation, Link  } from 'react-router-dom'

import { 
    MdSearch as SearchIcon, 
    MdClose as CloseIcon
} from "react-icons/md";

import {
    AiOutlineShopping as BagIcon,
    AiOutlineUser as UserIcon
} from "react-icons/ai";

import Cart from './Cart'
import './navbar.css'

const Navbar = (props) => {
    const [cartDisplay, setCartDisplay] = useState('-400px');
    const [backgroundDisplay, setBackgroundDisplay] = useState({opacity: 0, zIndex: -1});
    
    const displayCart = () => {
        if (cartDisplay === '15px') {
            setCartDisplay('-400px')
            setBackgroundDisplay({opacity: 0, zIndex: -1})
        } else {
            setCartDisplay('15px');
            setBackgroundDisplay({opacity: 1, zIndex: 998})
        }    
    }

    const disabledButton = () => {
        const button = document.getElementById('search__button');
        const input = document.getElementById('search__input');

        input.value === '' ? button.disabled = true : button.disabled = false
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

                <section className="navbar_search">
                    <form className="search_form">
                        <input type="text" id='search__input' onKeyUp={disabledButton} placeholder='Camisa, Vestido, Calça...' required/>
                        <label htmlFor="search__input">O que você procura?</label>
                        <button disabled id='search__button'>
                            <SearchIcon className='search__button__icon'/>
                        </button>
                    </form>
                </section>

                <div className='navbar__menu'>
                    <button className='navbar__menu__button' onClick={displayCart}>
                        <BagIcon className='navbar__button__icon'/>
                        <span className='bag__items-count'>{props.bagItems.length}</span>
                    </button>

                    <Link to="/account" style={{textDecoration: 'none'}}>
                        <button className='navbar__menu__button'>
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

                        <p>SACOLA ({props.bagItems.length})</p>
                    </div>
                    
                    <Cart  bagItems={props.bagItems} setBagItems={props.setBagItems}/>  
                </div>
            </header>
        </>
    )
}

export default Navbar