import React, { useEffect } from 'react'
import { fetchProducts } from '../../apiData/apiCalls'
import { Navbar } from '../Navbar/Navbar'
export const Home = () => {


  // useEffect(() => {
  //   fetchProducts()
  //     .then(data => console.log(data))
  //   // console.log(products);
  // }, [])

  return (
    <div className='Home'>
      <Navbar />
      <h1>Navbar</h1>
    </div>
  )
}