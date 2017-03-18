import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card } from 'semantic-ui-react'

import FollowingList from '../friends/FollowingList'

import StockHeader from './StockHeader'
import StockData from './StockData'
import SocialData from './SocialData'
import StockGraph from './StockGraph'
import FriendsFollowing from './FriendsFollowing'
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
    const followingList = []

    if ( stock === undefined || stock.length === 0 ) return <Loading />

    return (
      <div>
        <StockHeader stock={stock}/>
        
        <SocialData />

        <FollowingList userFollowing={followingList} />
        <StockGraph />
        <StockData />
        <StockNews />
        <StockComments />
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
