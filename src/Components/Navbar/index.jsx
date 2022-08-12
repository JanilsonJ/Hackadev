import { useState } from 'react';
import { NavLink, useLocation, Link  } from 'react-router-dom'

import { 
    MdOutlinePersonOutline as PersonIcon, 
    MdOutlineShoppingBag as BagIcon, 
    MdSearch as SearchIcon, 
    MdClose as CloseIcon,
    MdOutlineMenu as MenuIcon
} from "react-icons/md";

import Cart from './Cart'
import './navbar.css'

const Navbar = () => {
    const [cartDisplay, setCartDisplay] = useState('-400px');
    const [menuDisplay, setMenuDisplay] = useState('-400px');
    const [bagQuantity, setBagQuantity] = useState(0);
    
    const displayCart = () => {
        cartDisplay === '0px' ? setCartDisplay('-400px') : setCartDisplay('0px');
        setMenuDisplay('-400px');
        setBagQuantity(bagQuantity + 1)
    }

    const displayMenu = () => {
        menuDisplay === '0px' ? setMenuDisplay('-400px') : setMenuDisplay('0px');
    }
    
    /* Não apresentar a navbar na tela de checkou e login */
    const { pathname } = useLocation();
    if (pathname === "/register" || pathname === "/checkout") 
        return null;

    return (
        <>
            <section className='navbar'>
                <button onClick={displayMenu}  className='navbar__menu__button navbar__menu__icon'>
                    <MenuIcon className='navbar__icon'/>
                </button>

                <NavLink to="/home">
                    <img className='navbar__logo' src="/assets/Logos/Logo_Black_Transparencia.png" alt="Logo IMA" />
                </NavLink>

                <div className="navbar__search">
                    <input type="text" placeholder='busque por produto ou categoria...' />
                    <SearchIcon className='navbar__search__icon'/>
                </div>

                <div className="navbar__menu">  
                    <button onClick={displayCart}  className='navbar__menu__button'>
                        <BagIcon className='navbar__icon'/>
                        <p>Sacola de compras</p>
                        <span className='bag__quantity'>{bagQuantity}</span>
                    </button>

                    <Link to="/account" style={{ textDecoration: 'none' }}>
                        <button className='navbar__menu__button'>
                            <PersonIcon className='navbar__icon'/>
                            <p>Entrar / Cadastrar</p>
                        </button>
                    </Link>
                </div>

                <div className="menu__box" style={{left: menuDisplay}}>
                    <button onClick={displayMenu}  className='menu__button'>
                        <CloseIcon className='close__icon'/>
                    </button>
                        
                    <Link to="/account" style={{ textDecoration: 'none' }}>
                        <button className='navbar__menu__button' onClick={displayMenu}>
                            <PersonIcon className='navbar__icon'/>
                            <p>Entrar / Cadastrar</p>
                        </button>
                    </Link>

                    <button onClick={displayCart}  className='navbar__menu__button'>
                        <BagIcon className='navbar__icon'/>
                        <p>Sacola de compras</p>
                        <span className='bag__quantity'>{bagQuantity}</span>
                    </button>
                </div>

                <div className='cart__box' style={{right: cartDisplay}}>
                    <div className='cart_header'>
                        <button onClick={displayCart}  className='cart__button'>
                            <CloseIcon className='close__icon'/>
                        </button>

                        <p>SACOLA ({bagQuantity})</p>
                    </div>
                    
                    <Cart/>  
                </div>
            </section>
        </>
    )
}

export default Navbar