import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchStockNews } from '../../../actions/stockActions'

import Loading from '../../Loading'
import LinkedNewsCard from './LinkedNewsCard'

class StockNews extends Component {

  componentWillMount() {
    var ticker = this.props.ticker
    this.props.fetchStockNews(ticker)
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.ticker !== nextProps.ticker) {
      var ticker = nextProps.ticker
      this.props.fetchStockNews(ticker)
    }
  }


  render() {
    const stock = this.props.stock

    if ( stock === undefined || stock.length === 0 || !('news' in stock) ) return <Loading />

    return (
      <div>
        <h3>Recent Headlines</h3>
        { stock.news.map( ( story, i ) => <LinkedNewsCard key={i} data={ story } /> ) }
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
    fetchStockNews: (params) => {
      let action = fetchStockNews(params)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockNews)
