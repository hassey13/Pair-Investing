import React, { Component } from 'react'
import { Card, List } from 'semantic-ui-react'

import LinkedSmallStockCard from './LinkedSmallStockCard'

export default class StockFollowingList extends Component {

  render() {
    const user = this.props.user

    if ( user.stocks.length === 0 ) {
      return (
        <div className="following-list">
          <Card>
            <h5>Stocks You Follow</h5>
            <h5>You dont follow any stocks</h5>
            <br></br>
          </Card>
        </div>
      )
    }

    return (
      <div className="following-list">
        <Card>
          <h5>Stocks You Follow</h5>
          <List animated verticalAlign='middle'>
            { user.stocks.map( ( stock, i ) => <LinkedSmallStockCard key={i} stock={ stock } /> ) }
          </List>
        </Card>
      </div>
    )
  }
}
