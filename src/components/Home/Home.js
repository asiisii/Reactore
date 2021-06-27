import React, { useEffect } from 'react'
import { fetchProducts } from '../../apiData/apiCalls'
import { Navbar } from '../Navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import storeProducts from '../../redux/actions'

export const Home = () => {

  const dispatch = useDispatch()
  const productsData = useSelector(store => store.productsData)

  useEffect(() => {
    const getProducts = async() => {
      const res = await fetchProducts()
      const productsData = await res.json();
      dispatch(storeProducts(productsData))
    }

    getProducts()
  
  }, [])

  console.log(productsData);
  return (
    <div className='Home'>
      <Navbar />
      {!productsData.length ? 
        <h1>Loading...</h1>  : 
        <h1>got data</h1>  
      }
    </div>
  )
}