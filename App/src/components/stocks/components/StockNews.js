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

  render() {
    const stock = this.props.stock
    console.log(stock)

    if ( stock === undefined || stock.length === 0 || !('data' in stock) ) return <Loading />

    // <div className="article">
    // <blockquote>
    // <h4><a href="http://www.investors.com/news/the-bottom-has-formed-on-under-armour-so-buy-it-says-jefferies/?src=A00220A">'Bottom Has Formed' On Under Armour - So Buy It, Says Jefferies</a></h4>
    // <p>Under Armour ( UAA) has a stronger brand than three years ago and people still love wearing activewear - those are the main take-aways from Jefferies upgrade of the Nike ( NKE) rival that are sending shares up early Friday.</p>
    // </blockquote>
    // </div>
    return (
      <div>
        <h3>StockNews</h3>
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
