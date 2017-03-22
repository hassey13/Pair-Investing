import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { Card } from 'semantic-ui-react'

import FollowingList from '../friends/FollowingList'

import StockHeader from './StockHeader'
import StockData from './StockData'
import SocialData from './SocialData'
import StockGraph from './StockGraph'

import StockNews from './StockNews'
import StockComments from './StockComments'
import Loading from '../Loading'

import { fetchStockData } from '../../actions/stockActions'

import '../../../public/stylesheets/master.css'

class StockShow extends Component {

  componentWillMount() {
    var stock = this.props.params.stock
    this.props.fetchStockData(stock)
  }

  render() {
    const stock = this.props.stock
    const followingList = {followers: []}

    if ( stock === undefined || stock.length === 0 ) return <Loading />

    return (
      <div>
        <StockHeader stock={stock}/>

        <br></br>
        <SocialData />
        <div className='padding'></div>

        <div className='inline following-list'>
          <FollowingList following={followingList} />
          <div className='padding'></div>
          <h3 className='center'>See Stocks You Follow:</h3>
        </div>

        <div className='inline'>
          <StockData />
          <div className='padding'></div>
          <StockGraph />
          <div className='padding'></div>
          <StockNews />
          <div className='padding'></div>
          <StockComments />
        </div>

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
    fetchStockData: (params) => {
      let action = fetchStockData(params)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockShow)