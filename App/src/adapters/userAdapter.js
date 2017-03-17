import axios from 'axios'
import { browserHistory } from 'react-router'

axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const userAdapter = {
  login: (credentials) => {
    return axios.post('/login', credentials)
      .then((response) => {
        sessionStorage.setItem('jwt', response.data.jwt)
        axios.defaults.headers.common['AUTHORIZATION'] = response.data.jwt

        return response.data
      }).catch((error) => {
        console.log('Failed to login')
        console.log(error)
        return error
      })
  },

  fetchUser: () => {
    return axios.get('/user')
    .then( response => response.data )
    .catch((error) => {
      console.log('Failed to get user info')
      console.log(error)

      return error
    })
  },

  fetchOtherUser: (username) => {
    return axios.get(`/user/${username}`)
    .then( response => response )
    .catch((error) => {
      console.log('Failed to get other user info')
      console.log(error)

      return error
    })
  },

  createUser: (credentials) => {
    return axios.post('/signup', credentials)
      .then((response) => {
        sessionStorage.setItem('jwt', response.data.jwt)
        axios.defaults.headers.common['AUTHORIZATION'] = response.data.jwt
        browserHistory.push('/home')

        return response.data
      }).catch((error) => {
        console.log('Failed to sign up')
        console.log(error)
        return error
      })
  },

  followUser: (username) => {
    return axios.post('/follow_user', {username: username})
      .then((response) => {
        return response.data
      }).catch((error) => {
        console.log('Failed to follow user')
        console.log(error)
        return error
      })
  },

  unfollowUser: (username) => {
    return axios.post('/unfollow_user', {username: username})
      .then((response) => {
        return response.data
      }).catch((error) => {
        console.log('Failed to unfollow user')
        console.log(error)
        return error
      })
  }
}
