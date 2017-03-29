import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const searchAdapter = {

  queryStocks: (query) => {
    return axios.get(`searchstocks/${query}`).then(response => response.data)
  },

  queryUsers: (query) => {
    return axios.get(`searchusers/${query}`).then(response => response.data)
  },


}
