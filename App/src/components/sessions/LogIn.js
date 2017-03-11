import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Header } from 'semantic-ui-react'

import LoginForm from './LoginForm'

export default class LogIn extends Component {
  render(){
    if(!!sessionStorage.jwt) {
      browserHistory.push('/')
      window.location.reload()
    }

    return (
      <div>
        <Header as='h2'>Log In</Header>
          <LoginForm />
        </div>
    )
  }
}
