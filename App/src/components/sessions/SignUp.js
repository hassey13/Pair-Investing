import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Header } from 'semantic-ui-react'

import SignUpForm from './SignUpForm'

export default class SignUp extends Component {
  render(){
    if(!!sessionStorage.jwt) browserHistory.push('/')

    return (
      <div>
        <Header as='h2'>Sign Up</Header>
        <SignUpForm />
      </div>
    )
  }
}
