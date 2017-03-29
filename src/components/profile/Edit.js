import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import { Button } from 'semantic-ui-react'

export default class Edit extends Component {

  handleClick() {
    browserHistory.push('/')
  }

  render(){
    return (
      <div>
        <h3>Edit Profile</h3>
        <p>Coming Soon...  Yes, you will have to keep your info the way it is!</p>
        <br/>
        <br/>
        <Button className={'social-button'} onClick={ this.handleClick } color='blue'>Back</Button>
      </div>
    )
  }
}
