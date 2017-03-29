import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
// import { connect } from 'react-redux'

// import LinkedStockCard from '../stocks/LinkedStockCard'
// import Loading from '../Loading'


class News extends Component {

  render() {

    // const userStocks = this.props.user.stocks

    // if (!userStocks) return <Loading />

    return (
      <div>
        <div className="padding" />
        <h3>Recent Activity</h3>
        <Card.Group itemsPerRow={3}>
        </Card.Group>
      </div>
    )
  }
}

export default News
