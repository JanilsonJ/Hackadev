import { Link } from 'react-router-dom'
import { useState } from 'react';

import { 
    // MdClose as CloseIcon, 
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

    const exists = (name, type) => {
        name = strNormalize(name);
        type = strNormalize(type);
        
        return name.includes(input) || type.includes(input)
    }

    const clearInput = () => {
        document.getElementById('search__input').value = null;
        setInput(null);
    }

    return (
        <section className="navbar_search">
            <form autoComplete="off" className="search_form">
                <input type="text" id='search__input' onKeyUp={updateSearch} placeholder='Blusa, Camiseta, Vestido...' required/>
                <label htmlFor="search__input">O que você procura?</label>
                <SearchIcon className='search__icon'/>
                
                <section className="search_result">
                    {ProductsList.map(p => {
                        if (exists(p.name, p.type) && input !== '' && input !== ' '){
                            return (
                                <section key={p.id}>
                                    <hr />
                                    <Link to={`/product/${p.id}`} className='search-item__card' onClick={clearInput}>    
                                        <img src= {p.img[0]} alt={p.name}/>
                                        <div className='search-item__description' >
                                            <h3>{p.name}</h3>
                                            <p>R$ {p.value}</p>
                                        </div>
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