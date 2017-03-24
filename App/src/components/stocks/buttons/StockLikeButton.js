import React, { Component } from 'react'
import { Button, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'

// import { likeStock } from '../../../actions/stockActions'

class StockLikeButton extends Component {



  handleLike(stock_params) {
    console.log(`I like ${this.props.stock.ticker}!`)
    // this.props.likeStock(stock_params)
  }

  render() {
    // const user = this.props.user
    const stock = this.props.stock
    const likes = this.props.likes

    return (
      <div className={'center'}>
        <Button className={'social-button-like'} label={<Label>{ likes }</Label>} icon='thumbs up' content='Like' onClick={ this.handleLike.bind(this,{ticker: stock.ticker, company_name: stock.company_name}) } />
      </div>
    )
  }
}

// const mapDispatchToProps = ( dispatch ) => {
//   return {
//     likeStock: function(stock_params){
//       let action = likeStock(stock_params)
//       dispatch( action )
//     }
//   }
// }

export default connect( null, null )( StockLikeButton )
