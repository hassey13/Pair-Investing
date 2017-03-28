import React, { Component } from 'react'
import { connect } from 'react-redux'

import StockRecommendButton from '../buttons/StockRecommendButton'
import StockLikeButton from '../buttons/StockLikeButton'
import StockDislikeButton from '../buttons/StockDislikeButton'
import StockBuyButton from '../buttons/StockBuyButton'
import StockSellButton from '../buttons/StockSellButton'

import Loading from '../../Loading'

class SocialData extends Component {

  render() {
    const stock = this.props.stock
    const user = this.props.user

    return (
      <div>
        <hr className='gradient-hr' />
        <div className='social-button-container'>
          <StockRecommendButton stock={ stock } />
          <StockLikeButton user={ user } stock={ stock } />
          <StockDislikeButton user={ user } stock={ stock } />
          <StockBuyButton stock={ stock } />
          <StockSellButton stock={ stock } />
        </div>
        <hr className='gradient-hr'/>
      </div>
    )
  }
}

export default connect(null , null)( SocialData )
