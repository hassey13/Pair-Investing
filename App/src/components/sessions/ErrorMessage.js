import React, { Component } from 'react'

import { Message } from 'semantic-ui-react'

export default class ErrorMessage extends Component {

  render(){
    if(this.props.error) {
      return (
        <Message visible compact error>
          <p>Invalid Email or Password.</p>
        </Message>
      )
    }
    else {
      return (<div></div>)
    }
  }
}
