import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { fetchStock } from '../../../actions/stockActions'

class LinkedSmallStockCard extends Component {

  handleClick(stock) {
    browserHistory.push(`/stocks/${stock}`)
    this.props.fetchStock(stock)
  }

  render() {
    const stock = this.props.stock

    return (
      <List.Item className='link' onClick={ this.handleClick.bind(this, stock.ticker) }>
        <List.Content>
          <List.Header>{`${stock.ticker}`}</List.Header>
          <List.Description>{stock.company_name}</List.Description>
        </List.Content>
      </List.Item>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchStock: ( stock ) => {
      let action = fetchStock( stock )
      dispatch(action)
    }
  }
}

export default connect( null, mapDispatchToProps )( LinkedSmallStockCard )
