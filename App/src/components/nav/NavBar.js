import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { browserHistory, Link } from 'react-router'

import Search from '../search/Search'
// import '../../public/stylesheets/master.css'

export default class NavBar extends Component {
  constructor() {
    super()

    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleLogOut() {
    sessionStorage.removeItem('jwt')
    browserHistory.push('/login')
  }



  render() {
    if(!sessionStorage.jwt){
      return (
        <Menu secondary attached='top'>
          <Menu.Item name='home'  >
            <Link to='/login'><img id='logo-png' src={require('../../public/feather.png')} alt='logo'/></Link>
          </Menu.Item>
        </Menu>
      )
    }


    return (
      <Menu secondary attached='top'>
        <Menu.Item name='home' >
          <Link to='/home'><img id='logo-png' src={require('../../public/feather.png')} alt='logo'/></Link>
        </Menu.Item>
        <Menu.Item >
          <div className='hover'>

            <Search />

          </div>
        </Menu.Item>

        <Menu.Item position='right' name='logout' onClick={this.handleLogOut} >
          Logout
        </Menu.Item>

      </Menu>


    )
  }
}
