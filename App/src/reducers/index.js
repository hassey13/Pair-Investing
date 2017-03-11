import { combineReducers } from 'redux'
import userReducer from './userReducer'
import stockReducer from './stockReducer'
import searchReducer from './searchReducer'
import userSearchReducer from './userSearchReducer'
import viewUserReducer from './viewUserReducer'

const rootReducer = combineReducers({
  user: userReducer,
  stocks: stockReducer,
  search: searchReducer,
  userSearch: userSearchReducer,
  viewUser: viewUserReducer
})

export default rootReducer
