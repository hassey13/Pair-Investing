import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const stockAdapter = {
  fetchStock: (user) => {
    if (!user) { return [] }
    return axios.get(`fetchstocks/${user.email}`).then(response => response.data)
  },

  followStock: (params) => {
    return axios.post('stocks', params).then(response => response.data)
  },

  unfollowStock: (params) => {
    return axios.post('unfollow_stock', params).then(response => response.data)
  },

  fetchStockData: (params) => {
    return axios.get(`stocks/${params}`).then(response => response.data)
  }
}
