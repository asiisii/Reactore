const storeProducts = productsData =>{
  return {
    type: 'STORE_PRODUCTS',
    payload: { productsData }
  }
}

export default storeProducts