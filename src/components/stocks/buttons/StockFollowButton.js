import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { followStock, unfollowStock } from '../../../actions/stockActions'

class StockFollowButton extends Component {

  constructor() {
    super()
    this.state = {
      followed: undefined
    }
  }

  componentWillMount() {
    this.checkFollowing(this.props.user, this.props.stock)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.stock.ticker !== nextProps.stock.ticker) {
      this.checkFollowing(this.props.user, nextProps.stock)
    }
  }

  handleFollow(stock_params) {
    this.props.followStock(stock_params)
    this.setState({ followed: true })
  }

  handleUnfollow(stock_params) {
    this.props.unfollowStock(stock_params)
    this.setState({ followed: false })
  }

  checkFollowing(user, stock) {
    let i = 0
    while ( i < stock.users.length ) {
      if ( stock.users[i].username === user.username  ) {
        this.setState({ followed: true })
        return true
      }
      i += 1
    }
    this.setState({ followed: false })
  }

  render() {
    const stock = this.props.stock

    if ( this.state.followed ) {
      return (
        <div>
          <Button className={'social-button-follow'} onClick={ this.handleUnfollow.bind(this,{ticker: stock.ticker, company_name: stock.company_name}) } color='red'>Unfollow</Button>
        </div>
      )
    }

    return (
      <div>
        <Button className={'social-button-follow'} onClick={ this.handleFollow.bind(this,{ticker: stock.ticker, company_name: stock.company_name}) } color='green'>Follow</Button>
      </div>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    followStock: function(stock_params){
      let action = followStock(stock_params)
      dispatch( action )
    },
    unfollowStock: function(stock_params){
      let action = unfollowStock(stock_params)
      dispatch( action )
    }
  }
}

export default connect( null, mapDispatchToProps )( StockFollowButton )
