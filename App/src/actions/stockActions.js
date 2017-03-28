import { stockAdapter } from '../adapters/stockAdapter'

const FETCH_STOCKS_OWNED = 'FETCH_STOCKS_OWNED'
const QUERY_STOCKS = 'QUERY_STOCKS'
const ADD_STOCK = 'ADD_STOCK'
const REMOVE_STOCK = 'REMOVE_STOCK'
const LIKE_STOCK = 'LIKE_STOCK'
const DISLIKE_STOCK = 'DISLIKE_STOCK'
const REMOVE_LIKE_STOCK = 'REMOVE_LIKE_STOCK'
const REMOVE_DISLIKE_STOCK = 'REMOVE_DISLIKE_STOCK'
const FETCH_STOCK = 'FETCH_STOCK'
const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA'
const FETCH_STOCK_PRICE_HISTORY = 'FETCH_STOCK_PRICE_HISTORY'
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

export const likeStock = (params) => {
  const response = stockAdapter.likeStock(params)

  return {
    type: LIKE_STOCK,
    payload: response
  }
}

export const dislikeStock = (params) => {
  const response = stockAdapter.dislikeStock(params)

  return {
    type: DISLIKE_STOCK,
    payload: response
  }
}

export const removeLikeStock = (params) => {
  const response = stockAdapter.removeLikeStock(params)

  return {
    type: REMOVE_LIKE_STOCK,
    payload: response
  }
}

export const removeDislikeStock = (params) => {
  const response = stockAdapter.removeDislikeStock(params)

  return {
    type: REMOVE_DISLIKE_STOCK,
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

export const fetchStockPriceHistory = (params) => {
  const response = stockAdapter.fetchStockPriceHistory(params)

  return {
    type: FETCH_STOCK_PRICE_HISTORY,
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
