import { useParams } from 'react-router-dom'

import Produto from './Produtos/produto'
import useFetch from '../../hooks/useFetch'

import LoadBar from '../LoadBar'

import './catalago.css'

const Catalago = () => {
  const { filter } = useParams();
  const url = filter ? `products/produto?filter=${filter}` : `products`; // Mudando a URL caso exista o filtro

  const { data: products, isFetching: loadProducts } = useFetch(url); // Pegando Produtos na API

  return (
    <section className="catalago">
      {loadProducts ? <LoadBar title='Carregando Produtos...' /> : products?.map(product => {
        return <Produto key={product.id} product={product} />
      })}
    </section>
  )
} 

export default Catalago;
