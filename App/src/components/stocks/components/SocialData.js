import React, { Component } from 'react'

import StockRecommendButton from '../buttons/StockRecommendButton'
import StockLikeButton from '../buttons/StockLikeButton'
import StockDislikeButton from '../buttons/StockDislikeButton'
import StockBuyButton from '../buttons/StockBuyButton'
import StockSellButton from '../buttons/StockSellButton'

class SocialData extends Component {

  render() {
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
