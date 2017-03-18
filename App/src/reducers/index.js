import { combineReducers } from 'redux'
import userReducer from './userReducer'
import stockShowReducer from './stockShowReducer'
import stockReducer from './stockReducer'
import searchReducer from './searchReducer'
import viewUserReducer from './viewUserReducer'

const rootReducer = combineReducers({
  user: userReducer,
  stock: stockShowReducer,
  stocks: stockReducer,
  search: searchReducer,
  viewUser: viewUserReducer
})

export default rootReducer
