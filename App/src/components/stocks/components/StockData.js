import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchStockData } from '../../../actions/stockActions'

import Loading from '../../Loading'

class StockData extends Component {

  componentWillMount() {
    var ticker = this.props.ticker
    this.props.fetchStockData(ticker)
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.ticker !== nextProps.ticker) {
      var ticker = nextProps.ticker
      this.props.fetchStockData(ticker)
    }
  }

  render() {
    const stock = this.props.stock

    if ( 'data' in stock ) {

      let marketCap = this.props.stock.data[0].market_cap
      let dividendyield = ((this.props.stock.data[0].dividendyield)*100).toFixed(2)

      if ( isNaN(dividendyield) ) {
        dividendyield = "0.00"
      }

      if ( marketCap / 1000000000 > 1 ) {
        marketCap = `${(this.props.stock.data[0].market_cap/1000000000).toFixed(2)} Bil`
      }
      else if ( marketCap / 1000000 > 1 ) {
        marketCap = `${(this.props.stock.data[0].market_cap/1000000).toFixed(2)} Mil`
      }
      else {
        marketCap = "< 1 Mil"
      }
      return (
        <div className='center'>
        <h3>Summary</h3>
        <br></br>
        <table className='inline'>
        <tbody>
        <tr>
        <td className='left'>Open:</td>
        <td className='right'>{ this.props.stock.data[0].open }</td>
        </tr>
        <tr>
        <td className='left'>Close:</td>
        <td className='right'>{ this.props.stock.data[0].close }</td>
        </tr>
        <tr>
        <td className='left'>Market Cap:</td>
        <td className='right'>{ marketCap }</td>
        </tr>
        </tbody>
        </table>
        <table className='inline'>
        <tbody>
        <tr>
        <td className='left'>52 Week Low:</td>
        <td className='right'>{ this.props.stock.data[0].low_52_week }</td>
        </tr>
        <tr>
        <td className='left'>52 Week High:</td>
        <td className='right'>{ this.props.stock.data[0].high_52_week }</td>
        </tr>
        <tr>
        <td className='left'>Dividend/ Yield:</td>
        <td className='right'>{ `${dividendyield} %` }</td>
        </tr>
        </tbody>
        </table>
        </div>
      )
    }

    return ( <Loading /> )

  }
}

const mapStateToProps = (state) => {
  return {
    stock: state.stock
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchStockData: (params) => {
      let action = fetchStockData(params)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockData)
