import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from 'semantic-ui-react'

import Loading from '../../Loading'
import Graph from "./Graph"

import { fetchStockPriceHistory } from '../../../actions/stockActions'

class StockGraph extends Component {

  constructor() {
    super()
    this.state = {
      view: 60
    }
  }

  componentWillMount() {
    var ticker = this.props.ticker
    this.props.fetchStockPriceHistory(ticker)
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.ticker !== nextProps.ticker) {
      var ticker = nextProps.ticker
      this.props.fetchStockPriceHistory(ticker)
    }
  }

  handleClick( value ) {
    if ( value === 'change') {
      this.setState( { change:true } )
      return true
    }

    let state = this.state

    let allLabels = this.props.stock.history.labels
    let allPrices = this.props.stock.history.prices

    let labels, prices

    if ( value < allLabels.length ) {
      labels = allLabels.slice(allLabels.length - value,allLabels.length)
      prices = allPrices.slice(allPrices.length - value,allPrices.length)
    }
    else {
      labels = allLabels
      prices = allPrices
    }

    state = Object.assign( {}, state, { change: false } )
    state = Object.assign( {}, state, {labels: labels } )
    state = Object.assign( {}, state, {prices: prices } )
    this.setState( state )
  }

  render() {
    const stock = this.props.stock

    if ( !( 'history' in stock ) ) return <Loading />

    let labels = stock.history.labels
    let prices = stock.history.prices

    if ( 'labels' in this.state ) {
      labels = this.state.labels
      prices = this.state.prices
    }

    if ( 'change' in this.state && this.state.change ) {
      return (
        <div className='center'>
          <Button className={'social-button'} onClick={ this.handleClick.bind(this, 5) } color='twitter'>5 Days</Button>
          <Button className={'social-button'} onClick={ this.handleClick.bind(this, 22) } color='twitter'>30 Days</Button>
          <Button className={'social-button'} onClick={ this.handleClick.bind(this, 66) } color='twitter'>90 Days</Button>
          <Button className={'social-button'} onClick={ this.handleClick.bind(this, 252 ) } color='twitter'>Year</Button>
        </div>
      )
    }

    return (
      <div className='graph-container center'>
        <Graph prices={ { labels: labels, price: prices } } />
        <br/>
        <Button className={'social-button'} onClick={ this.handleClick.bind(this, "change") } color='twitter'>Change Timeline</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stock: state.stock
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchStockPriceHistory: (params) => {
      let action = fetchStockPriceHistory(params)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockGraph)
