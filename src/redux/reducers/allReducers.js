import productsReducer from "./repoReducer"
import { combineReducers } from 'redux'


const allReducers = combineReducers({
  productsData: productsReducer
})

export default allReducers