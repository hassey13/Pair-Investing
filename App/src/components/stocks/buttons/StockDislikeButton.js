import React, { Component } from 'react'
import { Button, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'

class StockDislikeButton extends Component {

  handleDislike(stock_params) {
    console.log(`I dislike ${this.props.stock.ticker}!`)
  }

  render() {
    // const user = this.props.user
    const stock = this.props.stock
    const dislikes = this.props.dislikes

    return (
      <div className={'center'}>
        <Button className={'social-button-like'} label={<Label>{ dislikes }</Label>} icon='thumbs down' content='Dislike' onClick={ this.handleDislike.bind(this,{ticker: stock.ticker, company_name: stock.company_name}) } />
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

export default connect( null, null )( StockDislikeButton )
