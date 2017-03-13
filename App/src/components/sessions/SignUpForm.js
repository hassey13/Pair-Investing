import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { Form, Button, Icon } from 'semantic-ui-react'

import { createUser } from '../../actions/userActions'

class SignUpForm extends Component {
  constructor() {
    super()
    this.state = {
      credentials: {
        username: '',
        password: '',
        password_confirmation: '',
        email: '',
        first_name: '',
        last_name: '',
        avatar: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
  }

  handleChange(event){
    const field = event.target.name
    const credentials = this.state.credentials
    credentials[field] = event.target.value
    return this.setState({ credentials })
  }

  handleSubmit(event){
    event.preventDefault()
    const credentials = this.state.credentials
    this.props.createUser(credentials)
  }

  handleLogIn(){
    browserHistory.push('/login')
  }

  render(){
    return (
      <div>

        <Form onSubmit={this.handleSubmit}>

          <Form.Field width='4'>
            <label>Username</label>
            <input name='username' onChange={this.handleChange} placeholder='username' />
          </Form.Field>

          <Form.Field width='4'>
            <label>Password</label>
            <input name='password' onChange={this.handleChange} type='password' placeholder='password' />
          </Form.Field>

          <Form.Field width='4'>
            <label>Password Confirmation</label>
            <input name='password_confirmation' onChange={this.handleChange} type='password' placeholder='password confirmation' />
          </Form.Field>

          <Form.Field width='4'>
            <label>Email</label>
            <input name='email' onChange={this.handleChange} placeholder='email' />
          </Form.Field>

          <Form.Field width='4'>
            <label>First Name</label>
            <input name='first_name' onChange={this.handleChange} placeholder='first name' />
          </Form.Field>

          <Form.Field width='4'>
            <label>Last Name</label>
            <input name='last_name' onChange={this.handleChange} placeholder='last name' />
          </Form.Field>

          <Form.Field width='4'>
            <label>Avatar</label>
            <input name='avatar' onChange={this.handleChange} placeholder='avatar' />
          </Form.Field>

          <Button type='submit' color='green'>Sign Up</Button>


          <Button onClick={ this.handleLogIn } type='submit' animated>
            <Button.Content visible>Log In</Button.Content>
            <Button.Content hidden>
              <Icon name='left arrow' />
            </Button.Content>
          </Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      createUser: (credentials) => {
      let action = createUser(credentials)
      dispatch(action)
    }
  }
}

export default connect( null, mapDispatchToProps )( SignUpForm )
