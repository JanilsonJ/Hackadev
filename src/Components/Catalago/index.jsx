import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './catalago.css'
import ProductList from '../../data/products'
import Produto from './Produtos/produto'

const Catalago = () => {
  const [products, setProducts] = useState(ProductList);
  
  const { filter } = useParams()
  useEffect(() => {
    const filteredList = ProductList.filter(p => p.keywords.includes(filter))
    if (filteredList.length > 0)
      setProducts(filteredList)
    else
      setProducts(ProductList)

  }, [filter]);

  return (
    <section className="catalago">
      {products.map(product => {
        return <Produto key={product.id} product={product} />
      })}
    </section>
  )
}

export default Catalago