import { stockAdapter } from '../adapters/stockAdapter'

const FETCH_STOCKS_OWNED = 'FETCH_STOCKS_OWNED'
const QUERY_STOCKS = 'QUERY_STOCKS'
const REMOVE_STOCK = 'REMOVE_STOCK'
const ADD_STOCK = 'ADD_STOCK'

export const fetchStocksOwned = (user) => {
  const response = stockAdapter.fetchStock(user)

  return {
    type: FETCH_STOCKS_OWNED,
    payload: response
  }
}

export const queryStocks = (query) => {
  const response = stockAdapter.queryStocks(query)

  return {
    type: QUERY_STOCKS,
    payload: response
  }
}

export const followStock = (params) => {
  const response = stockAdapter.followStock(params)

  return {
    type: ADD_STOCK,
    payload: response
  }
}

export const unfollowStock = (params) => {
  const response = stockAdapter.unfollowStock(params)

  return {
    type: REMOVE_STOCK,
    payload: response
  }
}
