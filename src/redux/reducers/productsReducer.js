const productsReducer = (state = [], action) => {
  switch(action.type) {
    case 'STORE_PRODUCTS':
      return action.payload.productsData
    default:
      return state
  }
}

export default productsReducer