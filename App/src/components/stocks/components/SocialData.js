import React, { Component } from 'react'
import { connect } from 'react-redux'

import StockRecommendButton from '../buttons/StockRecommendButton'
import StockLikeButton from '../buttons/StockLikeButton'
import StockDislikeButton from '../buttons/StockDislikeButton'
import StockBuyButton from '../buttons/StockBuyButton'
import StockSellButton from '../buttons/StockSellButton'

import Loading from '../../Loading'

import { fetchStockSocialData } from '../../../actions/stockActions'

class SocialData extends Component {

  componentWillReceiveProps(nextProps) {
    if ( this.props.ticker !== nextProps.ticker || !('social' in nextProps.stock) ) {
      var ticker = nextProps.stock.ticker
      this.props.fetchStockSocialData(ticker)
    }
  }

  render() {
    const stock = this.props.stock

    if ( !('social' in stock) ) return <Loading />

    return (
      <div>
        <hr className='gradient-hr' />
        <div className='social-button-container'>
          <StockRecommendButton stock={ stock } />
          <StockLikeButton stock={ stock } likes={ stock.social.likes } />
          <StockDislikeButton stock={ stock } dislikes={ stock.social.dislikes } />
          <StockBuyButton stock={ stock } />
          <StockSellButton stock={ stock } />
        </div>
        <hr className='gradient-hr'/>
      </div>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchStockSocialData: function(stock_params){
      let action = fetchStockSocialData(stock_params)
      dispatch( action )
    }
  }
}

export default connect(null , mapDispatchToProps)( SocialData )
