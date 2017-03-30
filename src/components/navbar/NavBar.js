import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { browserHistory, Link } from 'react-router'

import SearchContainer from '../search/SearchContainer'
import '../../../public/stylesheets/master.css'

export default class NavBar extends Component {
  constructor() {
    super()

    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleLogOut() {
    sessionStorage.removeItem('jwt')
    browserHistory.push('/login')
  }

  handleLoginClick() {
    browserHistory.push('/login')
  }

  handleSignupClick() {
    browserHistory.push('/signup')
  }

  render() {
    if(!sessionStorage.jwt){
      return (
        <Menu secondary attached='top'>
          <Menu.Item name='home'  >
            <Link to='/login'><img id='logo-png' src={require('../../../public/feather.png')} alt='logo'/></Link>
          </Menu.Item>
          <Menu.Item position='right' name='Sessions' >
            <Menu.Item position='left' name='Login' onClick={this.handleLoginClick} >
            Login
            </Menu.Item>
            /
            <Menu.Item position='right' name='Login' onClick={this.handleSignupClick} >
            Signup
            </Menu.Item>
          </Menu.Item>
        </Menu>
      )
    }


    return (
      <div>

        <Menu secondary attached='top'>
          <Menu.Item name='home' >
            <Link to='/'><img id='logo-png' src={require('../../../public/feather.png')} alt='logo'/></Link>
          </Menu.Item>
          <Menu.Item >
            <div className='hover'>

              <SearchContainer />

            </div>
          </Menu.Item>

          <Menu.Item position='right' name='logout' onClick={this.handleLogOut} >
            Logout
          </Menu.Item>

        </Menu>
      </div>


    )
  }
}
