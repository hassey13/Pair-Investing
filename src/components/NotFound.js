import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class NotFound extends Component {

  handleClick() {
    browserHistory.push('/')
  }

  render(){
    return (
      <div>
        <h3>404</h3>
        <h3>Page not found!</h3>
        <br/>
        <br/>
        <Button className={'social-button'} onClick={ this.handleClick } color='blue'>Home</Button>
      </div>
    )
  }
}
