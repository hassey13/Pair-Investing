import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Popup } from 'semantic-ui-react'

// import { recommendStock } from '../../actions/stockActions'

class StockBuyButton extends Component {

  handleBuy(stock_params) {
    console.log(`I bought ${this.props.stock.ticker}!`)
    // this.props.recommendStock(stock_params)
  }

  render() {
    // const user = this.props.user
    const stock = this.props.stock

    return (
      <div className={'center'}>
        <Popup
          trigger={ <Button className={'social-button'} onClick={ this.handleBuy.bind(this,{ticker: stock.ticker, company_name: stock.company_name}) } color='green'>Buy</Button> }
          content='Coming Soon...'
        />

      </div>
    )
  }
}
//
// const mapDispatchToProps = ( dispatch ) => {
//   return {
//     recommendStock: function(stock_params){
//       let action = recommendStock(stock_params)
//       dispatch( action )
//     }
//   }
// }

export default connect( null, null )( StockBuyButton )
