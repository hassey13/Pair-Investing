import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar className='nav'/>
        <div className='ui container body-container'>
          { this.props.children }
        </div>
      </div>
    )
  }
}
