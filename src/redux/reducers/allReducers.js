import { productsReducer } from "./productsReducer"
import { combineReducers } from 'redux'


const allReducers = combineReducers({
  productsData: productsReducer
})

export default allReducers