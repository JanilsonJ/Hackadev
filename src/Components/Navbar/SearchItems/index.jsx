import { Link } from 'react-router-dom'
import { useState } from 'react';

import { 
    MdSearch as SearchIcon
} from "react-icons/md";

import useFetch from '../../../hooks/useFetch';

import './searchItems.css';

const SearchItems = () => {
    const [input, setInput] = useState()

    const updateSearch = () => {
        setInput(strNormalize(document.getElementById('search__input').value))
    }

    const strNormalize = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    const { data: products, isFetching } = useFetch(`products/produto?filter=${input}`); // Pegando Produtos pela API

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
                    <img src={p.image1} alt={p.name} />
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
                      <img src={p.image1} alt={p.name} />
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
                    {isFetching ? 'Caregando...' : products?.map(p => {
                        if (p.disable)
                            return

                        return (
                            <section key={p.id}>
                                <hr />
                                <Link to={`/product/${p.id}`} className="search-item__card" onClick={clearInput} >
                                    {productCard(p)}
                                </Link>
                            </section>
                        )
                    })}
                </section>
            </form>
        </section>
    )
}

export default SearchItems