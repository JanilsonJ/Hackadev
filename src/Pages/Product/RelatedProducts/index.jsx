import useFetch from '../../../hooks/useFetch';
import LoadBar from '../../../Components/LoadBar';

import { 
    FiChevronLeft as LeftArrow,
    FiChevronRight as RightArrow
} from 'react-icons/fi'

import './relatedProducts.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const RelatedProducts = ({product}) => {
    const { data: products, isFetching: loadProducts } = useFetch(`products/related/${product?.id}`) // Pegando produto na API por id

    useEffect(() => {
        if(document.getElementById('carousel')){
            const carousel = document.getElementById('carousel');
            if (carousel.scrollWidth === carousel.offsetWidth){
                document.getElementById('right_button').style.display = "none";
                document.getElementById('left_button').style.display = "none";
            }
        }
    }, [products]);

    const BRL = (price) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price)
    }

    const reduceStr = (str, qntd) => {
        return str.length > qntd ? str.substring(0,qntd) + '...' : str.substring(0,qntd)
    }

    const slideRight = () => {
        const carousel = document.getElementById('carousel');

        carousel.scrollLeft += carousel.offsetWidth / 2;
    }

    const slideLeft = () => {
        const carousel = document.getElementById('carousel');

        carousel.scrollLeft -= carousel.offsetWidth / 2;
    }

    if (loadProducts)
        return <LoadBar title='Carregando produtos relacionados...' />

    if (products.length === 0)
        return

    return (
        <div className='related_products'>
            <div className='related_products--title'>
                <hr />
                <h3>Veja mais produtos relacionados a categoria <strong>{product.category}</strong></h3>
            </div>

            <button id='left_button' className='button left_button' onClick={() => {slideLeft()}}><LeftArrow /></button>
            <div className='carousel' id='carousel'>
                {products.map(p => {
                    return(
                        <Link to={`/product/${p.id}`} className='carousel_product' key={p.id}>
                            <img src={p.image1} alt={p.name} />
                            <p className='name'>{reduceStr(p.name, 24)}</p>
                            {p.porcent_discount > 0 ? <p className='regular_price'>&nbsp;{BRL(p.regular_price)}&nbsp;</p> : null}
                            <p className='actual_price'>{BRL(p.actual_price)}</p>
                            {p.porcent_discount > 0 ? <p className='carousel_product--discount'>{p.porcent_discount}%</p> : null}
                        </Link> 
                    )
                })}
            </div>
            <button id='right_button' className='button right_button' onClick={() => {slideRight()}}><RightArrow /></button>
        </div>
    )
}

export default RelatedProducts;

