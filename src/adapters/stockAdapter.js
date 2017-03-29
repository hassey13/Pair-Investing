import axios from 'axios'
import { URL } from './index.js'

axios.defaults.baseURL = URL
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const stockAdapter = {

  followStock: (params) => {
    return axios.post('stocks', params).then(response => response.data)
  },

  unfollowStock: (params) => {
    return axios.post('unfollow_stock', params).then(response => response.data)
  },

  likeStock: (params) => {
    return axios.post('like_stock', params).then(response => response.data)
  },

  dislikeStock: (params) => {
    return axios.post('dislike_stock', params).then(response => response.data)
  },

  removeLikeStock: (params) => {
    return axios.post('remove_like_stock', params).then(response => response.data)
  },

  removeDislikeStock: (params) => {
    return axios.post('remove_dislike_stock', params).then(response => response.data)
  },

  fetchStock: (params) => {
    return axios.get(`stocks/${params}`).then(response => response.data)
  },

  fetchStockData: (params) => {
    return axios.get(`stockdata/${params}`).then(response => response.data)
  },

  fetchStockPriceHistory: (params) => {
    return axios.get(`stockprices/${params}`).then(response => response.data)
  },

  fetchStockNews: (params) => {
    return axios.get(`stocknews/${params}`).then(response => response.data)
  }
}
