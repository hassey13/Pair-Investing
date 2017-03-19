import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { Button, Form, Icon } from 'semantic-ui-react'

import { login } from '../../actions/userActions'

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleChange( event ){
    const field = event.target.name
    const credentials = this.state.credentials
    credentials[field] = event.target.value
    return this.setState( credentials )
  }

  handleSubmit( event ){
    const credentials = this.state.credentials
    event.preventDefault()
    this.props.login( credentials )
  }

  handleSignUp(){
    browserHistory.push('/signup')
  }

  render() {
    return (

        <Form onSubmit={this.handleSubmit}>
          <Form.Field width='4'>
            <label>Email</label>
            <input name='email' onChange={this.handleChange} placeholder='email' />
          </Form.Field>
          <Form.Field width='4'>
            <label>Password</label>
            <input name='password' onChange={this.handleChange} type='password' placeholder='password' />
          </Form.Field>
          <Button type='submit' color='blue'>Log In</Button>

          <Button onClick={ this.handleSignUp } animated>
            <Button.Content visible>Sign Up</Button.Content>
            <Button.Content hidden>
              <Icon name='right arrow' />
            </Button.Content>
          </Button>

        </Form>

    )
  }
}

const mapDispatchToProps = ( dispatch ) => {

  return {

    login: function( credentials ){
      let action = login( credentials )
      dispatch( action )
    }
  }
}


export default connect( null, mapDispatchToProps )( LoginForm )
