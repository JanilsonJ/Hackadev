import { useState } from 'react';
import { NavLink, useLocation  } from 'react-router-dom'

import { 
    MdOutlinePersonOutline as PersonIcon, 
    MdOutlineShoppingBag as BagIcon, 
    MdSearch as SearchIcon, 
    MdClose as CloseIcon
} from "react-icons/md";

import Cart from './Cart'
import './navbar.css'



const Navbar = () => {
    const [cartDisplay, setCartDisplay] = useState('-400px');
    
    const showCart = () => {
        setCartDisplay('0px')
    }
    
    const hiddenCart = () => {
        setCartDisplay('-400px')
    }
    
    /* Não apresentar a navbar na tela de checkou e login */
    const { pathname } = useLocation();
    if (pathname === "/register" || pathname === "/checkout") 
        return null;

    return (
        <>
            <section className='navbar'>
                <NavLink to="/home">
                    <img className='navbar__logo' src="/assets/Logos/Logo_Black_Transparencia.png" alt="Logo IMA" />
                </NavLink>

                <div className="navbar__menu">
                    <button className='navbar__menu__button'>
                        <SearchIcon className='navbar__icon'/>
                    </button>
                    
                    <button onClick={showCart}  className='navbar__menu__button'>
                        <BagIcon className='navbar__icon'/>
                    </button>

                    <NavLink to="/account" >
                        <PersonIcon className='navbar__icon'/>
                    </NavLink>
                </div>

                <div className='cart_visibility' style={{right: cartDisplay}}>
                    <div className='cart_header'>
                        <button onClick={hiddenCart}  className='cart__button'>
                            <CloseIcon className='cart__icon'/>
                        </button>

                        <p>CARRINHO</p>
                    </div>
                    
                    <Cart/>  
                </div>
            </section>
        </>
    )
}

export default Navbar