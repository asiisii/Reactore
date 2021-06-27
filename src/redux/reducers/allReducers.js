import { productsReducer, filteredReducer } from "./productsReducer"
import { combineReducers } from 'redux'


const allReducers = combineReducers({
  productsData: productsReducer,
  filteredData: filteredReducer
})

export default allReducers