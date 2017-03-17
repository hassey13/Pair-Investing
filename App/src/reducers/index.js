import { combineReducers } from 'redux'
import userReducer from './userReducer'
import stockReducer from './stockReducer'
import searchReducer from './searchReducer'
import viewUserReducer from './viewUserReducer'

const rootReducer = combineReducers({
  user: userReducer,
  stocks: stockReducer,
  search: searchReducer,
  viewUser: viewUserReducer
})

export default rootReducer
