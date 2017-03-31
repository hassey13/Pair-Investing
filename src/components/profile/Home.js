import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import IndividualProfileCard from './IndividualProfileCard'
import News from './News'
import FollowingList from '../friends/FollowingList'
import UserStocks from '../stocks/UserStocks'

import { fetchUser } from '../../actions/userActions'

import Loading from '../Loading'

class Home extends Component {

  componentWillMount(){
    if ( !( 'user' in this.props ) || this.props.user.length === 0 ) {
      this.props.fetchUser()
    }
  }

  render() {
    const user = this.props.user

    if ( user === undefined || user.length === 0 ) return <Loading />

    return (
      <div className='profile-container'>
        <div className='profile-left-column'>
          <IndividualProfileCard user={ user } />
          <FollowingList following={ user }/>
        </div>

        <div className='profile-main-column'>
          <UserStocks user={ user } />
          <News user={ user } />
        </div >
      </div>
    )

    return (
      <Grid>
        <Grid.Column width={ 5 }>
          <IndividualProfileCard user={ user } />
          <FollowingList following={ user }/>
        </Grid.Column>

        <Grid.Column width={ 11 }>
          <UserStocks user={ user } />
          <News user={ user } />
        </Grid.Column >
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {

  return {

    fetchUser: function(){
      let action = fetchUser()
      dispatch(action)
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Home)
