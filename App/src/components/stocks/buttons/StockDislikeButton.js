import React, { Component } from 'react'
import { Button, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { dislikeStock, removeDislikeStock, removeLikeStock } from '../../../actions/stockActions'

class StockDislikeButton extends Component {

  checkForLike(user, stock) {
    for (var i = 0; i < stock.likes.length; i++) {
      if ( stock.likes[i].user_id == user.id ) {
        return true
      }
    }
    return false
  }

  checkForDislike(user, stock) {
    for (var i = 0; i < stock.dislikes.length; i++) {
      if ( stock.dislikes[i].user_id == user.id ) {
        return true
      }
    }
    return false
  }

  handleDislike(stock_params) {
    console.log(`I dislike ${this.props.stock.ticker}!`)
    if ( this.checkForLike( this.props.user, this.props.stock )) {
      this.props.removeLikeStock(stock_params)
    }
    this.props.dislikeStock(stock_params)
  }

  handleRemoveDislike(stock_params) {
    console.log(`I no longer like ${this.props.stock.ticker}!`)
    this.props.removeDislikeStock(stock_params)
  }

  render() {
    const user = this.props.user
    const stock = this.props.stock
    const dislikes = this.props.stock.dislikes.length

    if ( this.checkForDislike(user, stock) ) {
      return (
        <div className={'center'}>
          <Button className={'social-button-like'} label={<Label>{ dislikes }</Label>} icon='thumbs down' content='Dislike' color='red' onClick={ this.handleRemoveDislike.bind(this,{ticker: stock.ticker}) } />
        </div>
      )
    }

    return (
      <div className={'center'}>
        <Button className={'social-button-like'} label={<Label>{ dislikes }</Label>} icon='thumbs down' content='Dislike' onClick={ this.handleDislike.bind(this,{ticker: stock.ticker}) } />
      </div>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    dislikeStock: function(stock_params){
      let action = dislikeStock(stock_params)
      dispatch( action )
    },
    removeDislikeStock: function(stock_params){
      let action = removeDislikeStock(stock_params)
      dispatch( action )
    },
    removeLikeStock: function(stock_params){
      let action = removeLikeStock(stock_params)
      dispatch( action )
    }
  }
}

export default connect( null, mapDispatchToProps )( StockDislikeButton )
