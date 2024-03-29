import React from 'react' 
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

const Products = () => {
  const productsData = useSelector(store => store.productsData)
  const filteredData = useSelector(store => store.filteredData)
  let data = filteredData.length ? filteredData : productsData
  const productCards = data.map(product => {
    return <Card 
      key={product.id}
      title={product.title}
      description={product.description}
      price={product.price}
      category={product.category}
      image={product.image}
    />
  })
  return (
    <div className='products-container'>
   {productCards}
    </div>
  )
}

export default Products