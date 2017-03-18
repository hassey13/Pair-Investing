import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loading from '../Loading'

import { Card } from 'semantic-ui-react'

class SocialData extends Component {

  render() {

    return (
      <div>
        <hr></hr>
        <h5>Like   Dislike   Following   Comments</h5>
        <hr></hr>
      </div>
    )
  }
}



export default SocialData
