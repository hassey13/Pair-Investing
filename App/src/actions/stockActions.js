import { stockAdapter } from '../adapters/stockAdapter'

const FETCH_STOCKS_OWNED = 'FETCH_STOCKS_OWNED'
const QUERY_STOCKS = 'QUERY_STOCKS'
const REMOVE_STOCK = 'REMOVE_STOCK'
const ADD_STOCK = 'ADD_STOCK'
const FETCH_STOCK = 'FETCH_STOCK'
const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA'
const FETCH_STOCK_NEWS = 'FETCH_STOCK_NEWS'

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

export const fetchStock = (params) => {
  const response = stockAdapter.fetchStock(params)

  return {
    type: FETCH_STOCK,
    payload: response
  }
}

export const fetchStockData = (params) => {
  const response = stockAdapter.fetchStockData(params)

  return {
    type: FETCH_STOCK_DATA,
    payload: response
  }
}

export const fetchStockNews = (params) => {
  const response = stockAdapter.fetchStockNews(params)

  return {
    type: FETCH_STOCK_NEWS,
    payload: response
  }
}
