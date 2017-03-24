import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

// import { recommendStock } from '../../actions/stockActions'

class StockBuyButton extends Component {

  handleBuy(stock_params) {
    // this.props.recommendStock(stock_params)
    console.log(`I bought ${this.props.stock.ticker}!`)
  }

  render() {
    // const user = this.props.user
    const stock = this.props.stock

    return (
      <div className={'center'}>
        <Button className={'social-button'} onClick={ this.handleBuy.bind(this,{ticker: stock.ticker, company_name: stock.company_name}) } color='green'>Buy</Button>
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
