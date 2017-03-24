import React, { Component } from 'react'
// import { connect } from 'react-redux'

import LinkedStockCard from './components/LinkedStockCard'
import Loading from '../Loading'

import { Card } from 'semantic-ui-react'

class UserStocks extends Component {

  render() {

    const userStocks = this.props.user.stocks

    if (!userStocks) return <Loading />

    return (
      <div>
        <h3>Followed Stocks</h3>
        <Card.Group itemsPerRow={3}>
          { userStocks.map( ( stock, i ) => <LinkedStockCard key={i} stock={stock} /> ) }
        </Card.Group>
      </div>
    )
  }
}



export default UserStocks
