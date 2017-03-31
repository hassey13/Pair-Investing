import React, { Component } from 'react'
import StockFollowButton from '../buttons/StockFollowButton'

class StockHeader extends Component {

  render() {
    const stock = this.props.stock
    const user = this.props.user

    return (
      <div className='stock-header'>
        <h1>{stock.company_name}</h1>
        <h5>Symbol: {stock.ticker}</h5>
        <StockFollowButton stock={ stock } user={ user } />
      </div>
    )
  }
}

export default StockHeader
