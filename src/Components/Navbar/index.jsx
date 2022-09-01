import { useContext, useEffect, useState } from 'react';
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
    const [backgroundDisplay, setBackgroundDisplay] = useState({opacity: 0, zIndex: -1});
    
    const {bagItemsCount, bagDisplay, setBagDisplay} = useContext(CartContext);

    const displayBag = () => {
        setBagDisplay(!bagDisplay)
    }
    
    useEffect(() => {
        setBackgroundDisplay(!bagDisplay)
    }, [bagDisplay]);

    /* Não apresentar a navbar na tela de checkou e login */
    const { pathname } = useLocation();
    if (pathname === "/login" || pathname === "/checkout") {
        return (
            <header className='navbar' style={{justifyContent: 'center'}}>
                <NavLink to="/home"  className='navbar__logo'>
                    <img src="/assets/Logos/Logo_Black_Transparencia.png" alt="IMA logo" />
                </NavLink >
                <h2>IMPÉRIO DA MODA AMERICANA</h2>
            </header>
        )
    }
    
    return (
        <>
            <header className='navbar'>
                <NavLink to="/home"  className='navbar__logo'>
                    <img src="/assets/Logos/Logo_Black_Transparencia.png" alt="IMA logo" />
                </NavLink >

                <SearchItems />

                <div className='navbar__menu'>
                    <button className='navbar__menu__button menu__button__bag' onClick={displayBag}>
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
                    onClick={displayBag}
                    style={backgroundDisplay ? ({opacity: 0, zIndex: -1}) : ({opacity: 1, zIndex: 998})}>
                </section>

                <div className='cart__box' style={bagDisplay ? {right: '15px'} : {right: '-400px'}}>
                    <div className='cart_header'>
                        <button onClick={displayBag}  className='cart__button'>
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