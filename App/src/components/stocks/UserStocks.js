import React, { Component } from 'react'

import LinkedStockCard from './components/LinkedStockCard'
import Loading from '../Loading'

import { Card } from 'semantic-ui-react'

class UserStocks extends Component {

  render() {

    const user = this.props.user

    if ( !( 'stocks' in user ) ) return <Loading />

    return (
      <div>
        <h3>Followed Stocks</h3>
        <Card.Group itemsPerRow={3}>
          { user.stocks.map( ( stock, i ) => <LinkedStockCard key={i} stock={stock} /> ) }
        </Card.Group>
      </div>
    )
  }
}

export default UserStocks
