import axios from 'axios'
import { URL } from './index.js'

axios.defaults.baseURL = URL
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const searchAdapter = {

  queryStocks: (query) => {
    return axios.get(`searchstocks/${query}`).then(response => response.data)
  },

  queryUsers: (query) => {
    return axios.get(`searchusers/${query}`).then(response => response.data)
  },


}
