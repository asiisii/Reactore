import React, { useEffect } from 'react'
import { fetchProducts } from '../../apiData/apiCalls'
import { Navbar } from '../Navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import {storeProducts} from '../../redux/actions'
import Products from '../Products/Products'
import Form from '../Form/Form'

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
  
  }, [dispatch])

  return (
    <div className='Home'>
      <Navbar />
      <Form />
      <div className="wrapper">
        {!productsData.length ? 
          <h1 className='loading'>Loading...</h1>  : 
          <Products />  
        }
      </div>
    </div>
  )
}