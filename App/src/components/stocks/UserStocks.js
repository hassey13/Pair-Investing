import React, { Component } from 'react'

import LinkedStockCard from './components/LinkedStockCard'
import Loading from '../Loading'

import { Card } from 'semantic-ui-react'

class UserStocks extends Component {

  sameUser(user) {
    return ('view' in user && user.username === user.view.username || !('view' in user))
  }

  render() {
    const user = this.props.user

    if ( !( 'stocks' in user ) ) return <Loading />

    // DISPLAY STOCKS FOR PROFILE PAGE
    if ( 'view' in user ) {
      return (
        <div>
          <h3>Followed Stocks</h3>
          <Card.Group itemsPerRow={3}>
            { user.view.stocks.map( ( stock, i ) => <LinkedStockCard key={i} stock={ stock } show={ this.sameUser(user) }/> ) }
          </Card.Group>
        </div>
      )
    }

    // DISPLAY STOCKS FOR HOME PAGE
    return (
      <div>
        <h3>Followed Stocks</h3>
        <Card.Group itemsPerRow={3}>
          { user.stocks.map( ( stock, i ) => <LinkedStockCard key={i} stock={ stock } show={ this.sameUser(user) }/> ) }
        </Card.Group>
      </div>
    )
  }
}

export default UserStocks
