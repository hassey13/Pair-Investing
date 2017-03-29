import React, { Component } from 'react'
import { Button, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { likeStock, removeLikeStock, removeDislikeStock } from '../../../actions/stockActions'

class StockLikeButton extends Component {

  checkForLike(user, stock) {
    for (var i = 0; i < stock.likes.length; i++) {
      if ( stock.likes[i].user_id === user.id ) {
        return true
      }
    }
    return false
  }

  checkForDislike(user, stock) {
    for (var i = 0; i < stock.dislikes.length; i++) {
      if ( stock.dislikes[i].user_id === user.id ) {
        return true
      }
    }
    return false
  }

  handleLike(stock_params) {
    console.log(`I like ${this.props.stock.ticker}!`)
    if ( this.checkForDislike( this.props.user, this.props.stock )) {
      this.props.removeDislikeStock(stock_params)
    }
    this.props.likeStock(stock_params)
  }

  handleRemoveLike(stock_params) {
    console.log(`I no longer like ${this.props.stock.ticker}!`)
    this.props.removeLikeStock(stock_params)
  }

  render() {
    const user = this.props.user
    const stock = this.props.stock
    const likes = this.props.stock.likes.length

    if ( this.checkForLike(user, stock) ) {
      return (
        <div className={'center'}>
          <Button className={'social-button-like'} label={<Label>{ likes }</Label>} icon='thumbs up' content='Like' color='twitter' onClick={ this.handleRemoveLike.bind(this,{ticker: stock.ticker}) } />
        </div>
      )
    }

    return (
      <div className={'center'}>
        <Button className={'social-button-like'} label={<Label>{ likes }</Label>} icon='thumbs up' content='Like' onClick={ this.handleLike.bind(this,{ticker: stock.ticker}) } />
      </div>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    likeStock: function(stock_params){
      let action = likeStock(stock_params)
      dispatch( action )
    },
    removeLikeStock: function(stock_params){
      let action = removeLikeStock(stock_params)
      dispatch( action )
    },
    removeDislikeStock: function(stock_params){
      let action = removeDislikeStock(stock_params)
      dispatch( action )
    }
  }
}

export default connect( null, mapDispatchToProps )( StockLikeButton )
