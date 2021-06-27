export const productsReducer = (state = [], action) => {
  switch(action.type) {
    case 'STORE_PRODUCTS':
      return action.payload.productsData
    default:
      return state
  }
}

export const filteredReducer = (state = [], action) => {
  switch(action.type) {
    case 'STORE_FILTERED_PRODUCTS':
      return action.payload.filteredData
    default:
      return state
  }
}