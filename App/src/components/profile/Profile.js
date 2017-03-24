import React, { Component } from 'react'
import { connect } from 'react-redux'

import IndividualProfileCard from './IndividualProfileCard'
import UserStocks from '../stocks/UserStocks'
import FollowingList from '../friends/FollowingList'

import Loading from '../Loading'

import { fetchUser, fetchOtherUser } from '../../actions/userActions'

import { Grid } from 'semantic-ui-react'

import '../../../public/stylesheets/master.css'

class Profile extends Component {

  componentWillMount() {
    let username = this.props.params.username
    this.props.fetchUser()
    this.props.fetchOtherUser(username)
  }

  componentWillUpdate() {

  }

  render() {
    const currentUser = this.props.user
    let user = this.props.viewUser

    if ( currentUser.username === user.username ) {
      user = this.props.user
    }

    if ( user === undefined || user.length === 0 || currentUser === undefined || currentUser.length === 0 ) return <Loading />

      return (
        <Grid>
          <Grid.Column width={ 5 }>
            <IndividualProfileCard currentUser={currentUser} user={ user } />
            <FollowingList following={ user } />
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
    viewUser: state.viewUser
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
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Profile )
