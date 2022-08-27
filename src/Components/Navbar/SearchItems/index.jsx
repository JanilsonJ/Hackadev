import { Link } from 'react-router-dom'
import { useState } from 'react';

import { 
    MdSearch as SearchIcon
} from "react-icons/md";

import ProductsList from '../../../data/products';
import './searchItems.css';

const SearchItems = () => {
    const [input, setInput] = useState()

    const updateSearch = () => {
        setInput(strNormalize(document.getElementById('search__input').value))
    }

    const strNormalize = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    const exists = (name, type, keyword) => {
        name = strNormalize(name);
        type = strNormalize(type);
        keyword = keyword.find(k => strNormalize(k).includes(input))

        return (keyword || type.includes(input) || name.includes(input))
    }

    const clearInput = () => {
        document.getElementById('search__input').value = null;
        setInput(null);
    }

    const BRL = (price) => {
        return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price)
    }

    const productCard = (p) => {
        if (p.porcent_discount > 0){
            return (
                <>
                  <div className="card__image">
                    <img src={p.img.front} alt={p.name} />
                    <p> -{p.porcent_discount}% </p>
                  </div>
                  <div className="search-item__description">
                    <h3>{p.name}</h3>
                    <div className="prices">
                        <p className='old__price'>&nbsp;{BRL(p.regular_price)}&nbsp; </p>
                        <p className='actual__price'>{BRL(p.actual_price)}</p>
                    </div>
                  </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="card__image">
                      <img src={p.img.front} alt={p.name} />
                    </div>
                    <div className="search-item__description">
                      <h3>{p.name}</h3>
                      <div className="prices">
                        <p className='actual__price'>{BRL(p.actual_price)}</p>
                      </div>
                    </div>
                </>
              );
        }
    }


    return (
        <section className="navbar_search">
            <form autoComplete="off" className="search_form">
                <input type="text" id='search__input' onKeyUp={updateSearch} placeholder='Blusa, Camiseta, Vestido...' required/>
                <label htmlFor="search__input">O que você procura?</label>
                <SearchIcon className='search__icon'/>
                
                <section className="search_result">
                    {ProductsList.map(p => {
                        if (exists(p.name, p.type, p.keywords) && input !== '' && input !== ' '){
                            return (
                                <section key={p.id}>
                                    <hr />
                                    <Link to={`/product/${p.id}`} className="search-item__card" onClick={clearInput} >
                                        {productCard(p)}
                                    </Link>
                                </section>
                            )
                        } else
                            return null
                    })}

                </section>
            </form>
        </section>
    )
}

export default SearchItems