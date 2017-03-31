import React, { Component } from 'react'
import { connect } from 'react-redux'

import IndividualProfileCard from './IndividualProfileCard'
import UserStocks from '../stocks/UserStocks'
import FollowingList from '../friends/FollowingList'

import Loading from '../Loading'

import { fetchUser, fetchOtherUser, removeViewUser } from '../../actions/userActions'

import { Grid } from 'semantic-ui-react'

import '../../../public/stylesheets/master.css'

class Profile extends Component {

  componentWillMount() {
    let username = this.props.params.username

    if ( !( 'user' in this.props ) || this.props.user.length === 0 ) {
      this.props.fetchUser()
    }

    this.props.fetchOtherUser(username)
  }

  componentWillUnmount() {
    this.props.removeViewUser()
  }

  render() {
    const user = this.props.user

    if ( user === undefined || user.length === 0 || !('view' in user) ) return <Loading />

      return (
        <Grid>
          <Grid.Column width={ 5 }>
            <IndividualProfileCard user={ user } />
            <FollowingList following={ user.view } />
          </Grid.Column>

          <Grid.Column width={ 11 }>
            <UserStocks user={ user }/>
          </Grid.Column >
        </Grid>
      )
    }
  }

const mapStateToProps = ( state ) => {

  return {
    user: state.user,
  }
}

const mapDispatchToProps = ( dispatch ) => {

  return {
    fetchUser: function() {
      let action = fetchUser()
      dispatch( action )
    },
    fetchOtherUser: function(username){
      let action = fetchOtherUser(username)
      dispatch( action )
    },
    removeViewUser: function(){
      let action = removeViewUser()
      dispatch( action )
    },
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Profile )
