const storeProducts = productsData =>{
  return {
    type: 'STORE_PRODUCTS',
    payload: { productsData }
  }
}

const storeFilteredProducts = filteredData => {
  return {
    type: 'STORE_FILTERED_PRODUCTS',
    payload: { filteredData }
  }
}

export {
  storeProducts,
  storeFilteredProducts
}