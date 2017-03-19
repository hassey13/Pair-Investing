import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loading from '../Loading'

import { Card } from 'semantic-ui-react'

import stockGraph from "../../../public/images/stock.jpeg"

class StockGraph extends Component {

  render() {

    return (
      <div className='center inline'>
        <img src={stockGraph} height='250px'/>
      </div>
    )
  }
}



export default StockGraph
