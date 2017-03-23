import React, { Component } from 'react'

import StockRecommendButton from './StockRecommendButton'
import StockLikeButton from './StockLikeButton'
import StockDislikeButton from './StockDislikeButton'
import StockBuyButton from './StockBuyButton'
import StockSellButton from './StockSellButton'

class SocialData extends Component {

  render() {
    const user = this.props.user
    const stock = this.props.stock

    return (
      <div>
        <hr className='gradient-hr' />
        <div className='social-button-container'>
          <StockRecommendButton stock={ stock } />
          <StockLikeButton stock={ stock } />
          <StockDislikeButton stock={ stock } />
          <StockBuyButton stock={ stock } />
          <StockSellButton stock={ stock } />
        </div>
        <hr className='gradient-hr'/>
      </div>
    )
  }
}



export default SocialData
