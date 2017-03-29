import React, { Component } from 'react'
import { browserHistory , Link} from 'react-router'
import { connect } from 'react-redux'

import ErrorMessage from './ErrorMessage'
import { Button, Form, Icon, Message } from 'semantic-ui-react'

import { login } from '../../actions/userActions'

class LogIn extends Component {

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

  render(){
    if(!!sessionStorage.jwt) {
      browserHistory.push('/')
    }

    var error = false
    if ( 'error' in this.props.user ) {
      error = true
    }

    return (
      <div className='center login'>
        <Message
          attached
          header='Welcome to Connected Investing!'
          color='blue'
        />

      <Form className='attached fluid segment signup' onSubmit={this.handleSubmit}>

        <ErrorMessage error={ error } />

        <div className='inline'>
          <Form.Field>
            <label>Email</label>
            <input name='email' onChange={this.handleChange} placeholder='email' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input name='password' onChange={this.handleChange} type='password' placeholder='password' />
          </Form.Field>

          <br/>
          <Button type='submit' color='blue'>Log In</Button>

        </div>
        <div className='inline'>

        </div>
      </Form>



      <Message attached='bottom' warning>
        <Icon name='help' />
        New to Connected Investing?&nbsp;<Link to='/signup'>Sign up here</Link>&nbsp;first.
      </Message>
    </div>
    )
  }
}

const mapStateToProps = ( state ) => {

  return {
    user: state.user,
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

export default connect( mapStateToProps, mapDispatchToProps )( LogIn )
