import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const stockAdapter = {
  
  followStock: (params) => {
    return axios.post('stocks', params).then(response => response.data)
  },

  unfollowStock: (params) => {
    return axios.post('unfollow_stock', params).then(response => response.data)
  },

  fetchStock: (params) => {
    return axios.get(`stocks/${params}`).then(response => response.data)
  },

  fetchStockData: (params) => {
    return axios.get(`stockdata/${params}`).then(response => response.data)
  },

  fetchStockNews: (params) => {
    return axios.get(`stocknews/${params}`).then(response => response.data)
  }
}
