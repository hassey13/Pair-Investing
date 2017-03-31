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

import { fetchStock } from '../../actions/stockActions'
import StockFollowButton from './buttons/StockFollowButton'
import StockFollowingList from './components/StockFollowingList'

import '../../../public/stylesheets/master.css'

class StockShow extends Component {

  componentWillMount() {

    if ( !( 'user' in this.props ) || this.props.user.length === 0 ) {
      this.props.fetchUser()
    }

    var stock = this.props.params.stock
    this.props.fetchStock(stock)
  }

  render() {
    const user = this.props.user
    const stock = this.props.stock

    if ( stock === undefined || stock.length === 0 || user === undefined || user.length === 0 ) return <Loading />

    return (
      <div className='stock-container'>
        <StockHeader stock={stock} user={ user } />
        <SocialData user={ user } stock={ stock }/>

        <div className='stock-left-column'>
          <FollowingList following={ stock } />

          <StockFollowingList user={ user } />
        </div>

        <div className='stock-main-column'>
          <StockData ticker={ stock.ticker } />

          <StockGraph ticker={ stock.ticker } />

          <StockNews ticker={ stock.ticker } />

          <StockComments stock={ stock } />
        </div>

        <div className='inline following-list'>
        </div>

        <div className='inline'>
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
    fetchStock: (params) => {
      let action = fetchStock(params)
      dispatch(action)
    },
    fetchUser: function(){
      let action = fetchUser()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockShow)
