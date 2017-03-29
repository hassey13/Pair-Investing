import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Popup, Button } from 'semantic-ui-react'

// import { recommendStock } from '../../actions/stockActions'

class StockSellButton extends Component {

  handleSell(stock_params) {
    // this.props.recommendStock(stock_params)
    console.log(`I sold ${this.props.stock.ticker}!`)
  }

  render() {
    // const user = this.props.user
    const stock = this.props.stock

    return (
      <div className={'center'}>
        <Popup
          trigger={ <Button className={'social-button'} onClick={ this.handleSell.bind(this,{ticker: stock.ticker, company_name: stock.company_name}) } color='red'>Sell</Button> }
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

export default connect( null, null )( StockSellButton )
