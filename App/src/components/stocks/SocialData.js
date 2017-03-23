import React, { Component } from 'react'

// import { connect } from 'react-redux'

import Loading from '../Loading'
import StockFollowButton from './StockFollowButton'

class SocialData extends Component {

  render() {
    const user = this.props.user
    const stock = this.props.stock
    // <h5>Follow/Unfollow   Recommend to Friend   Like   Dislike   Following   Comments</h5>

    if ( user === undefined || user.length === 0 ) return (<Loading />)

    return (
      <div>
        <hr/>
        <div>
          <StockFollowButton followed={false} stock={ stock } user={ user } />
        </div>
        <hr/>
      </div>
    )
  }
}



export default SocialData
