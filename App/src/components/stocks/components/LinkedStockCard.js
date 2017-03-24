import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import { Card, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { unfollowStock } from '../../../actions/stockActions'

class LinkedStockCard extends Component {
  constructor() {
    super()

    this.handleUnfollow = this.handleUnfollow.bind(this)
  }

  handleUnfollow(){
    this.props.unfollowStock(
      { ticker: this.props.stock.ticker }
    )
  }

  handleClick(){
    browserHistory.push(`/stocks/${this.props.stock.ticker}`)
  }

  render(){
    return (

        <Card>
          <div></div>
          <Icon className='circular unfollow-icon' onClick={this.handleUnfollow} corner name='delete' inverted color='red' />

          <Card.Content className={'link'} onClick={this.handleClick.bind(this)}>
            <Card.Header as='h5'>{this.props.stock.ticker}</Card.Header>
            <Card.Description >{this.props.stock.company_name}</Card.Description>

            </Card.Content>
        </Card>

        )}
        }

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}

function mapDispatchToProps(dispatch){
  return {
    unfollowStock: (params) => {
      let action = unfollowStock(params)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkedStockCard)
