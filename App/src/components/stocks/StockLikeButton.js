import React, { Component } from 'react'
import { Button, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'

// import { recommendStock } from '../../actions/stockActions'

class StockLikeButton extends Component {

  handleLike(stock_params) {
    // this.props.recommendStock(stock_params)
    console.log(`I like ${this.props.stock.ticker}!`)
  }

  render() {
    const user = this.props.user
    const stock = this.props.stock

    return (
      <div className={'center'}>
        <Button className={'social-button-like'} label={<Label>0</Label>} icon='thumbs up' content='Like' onClick={ this.handleLike.bind(this,{ticker: stock.ticker, company_name: stock.company_name}) } />
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

export default connect( null, null )( StockLikeButton )
