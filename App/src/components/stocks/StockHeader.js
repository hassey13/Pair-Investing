import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loading from '../Loading'

import { Card } from 'semantic-ui-react'

class StockHeader extends Component {

  render() {
    const stock = this.props.stock

    if ( stock === undefined || stock.length === 0 ) return <Loading />

    return (
      <div>
        <h1>{stock.name}</h1>
        <p>Symbol: {stock.ticker}</p>
      </div>
    )
  }
}



export default StockHeader
