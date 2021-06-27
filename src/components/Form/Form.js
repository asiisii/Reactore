import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../apiData/apiCalls'
import { storeFilteredProducts} from '../../redux/actions'
import './Form.css'

const Form = () => {

  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()
  const productsData = useSelector(store => store.productsData)

  const handleChange = e => {
    e.preventDefault()
    let query = (e.target.value).toLowerCase()
    setSearchText(query)
    getProducts().then(items => {
      let filteredItems = filterItems()
      dispatch(storeFilteredProducts(filteredItems))
    })
  }

  // const handleClick = e => {
  //   console.log(searchText);
  //   getProducts().then(items => {
  //     let filteredItems = filterItems()
  //     dispatch(storeFilteredProducts(filteredItems))
  //   })
  // }
  const filterItems = () => {
    if(searchText) {
      const filtered = productsData.filter(product => {
        if (product.title.toLowerCase().includes(searchText) ||
          product.description.toLowerCase().includes(searchText) ||
          product.category.toLowerCase().includes(searchText)
        ) {
          return true
        } else {
          return false
        }
      })
      return filtered
    } else {
      return productsData
    }
  }
  const getProducts = async() => {
    const res = await fetchProducts()
    const productsData = await res.json();
    return productsData
  }

  return (
    <div className='Form'>
      <div className="input-container">
        <i className="fas fa-search"></i>
        <input 
          type='search'
          name='search'
          autoComplete='off'
          placeholder='Ex: jacket'
          value={ searchText }
          onChange={e => handleChange(e)}
        />
        {/* <div className="button-container">
          <span onClick={handleClick}>Find Job</span>
        </div> */}
      </div>
    </div>
  )
}

export default Form