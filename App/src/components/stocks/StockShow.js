import React, { Component } from 'react'
import { connect } from 'react-redux'

import FollowingList from '../friends/FollowingList'

import StockHeader from './components/StockHeader'
import StockData from './components/StockData'
import SocialData from './components/SocialData'
import StockGraph from './components/StockGraph'
import StockNews from './components/StockNews'
import StockComments from './components/StockComments'
import Loading from '../Loading'

import { fetchUser } from '../../actions/userActions'

import { fetchStockData } from '../../actions/stockActions'
import StockFollowButton from './buttons/StockFollowButton'
import StockFollowingList from './components/StockFollowingList'

import '../../../public/stylesheets/master.css'

class StockShow extends Component {

  componentWillMount() {
    var stock = this.props.params.stock
    this.props.fetchStockData(stock)
    this.props.fetchUser()
  }

  render() {
    const user = this.props.user
    const stock = this.props.stock

    if ( stock === undefined || stock.length === 0 || user === undefined || user.length === 0 ) return <Loading />

    return (
      <div>
        <StockHeader stock={stock}/>
        <br/>
        <StockFollowButton stock={ stock } user={ user } />
        <br/>
        <SocialData user={ user } stock={ stock }/>
        <div className='padding'></div>

        <div className='inline following-list'>
          <FollowingList following={ stock } />
          <div className='padding'></div>
          <StockFollowingList user={ user } />
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
    stock: state.stock,
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchStockData: (params) => {
      let action = fetchStockData(params)
      dispatch(action)
    },
    fetchUser: function(){
      let action = fetchUser()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockShow)
