import React, { Component } from 'react'
import { connect } from 'react-redux'

import IndividualProfileCard from './IndividualProfileCard'
import UserStocks from '../stocks/UserStocks'
import FollowingList from '../friends/FollowingList'

import { fetchUser, fetchOtherUser } from '../../actions/userActions'

import { Grid } from 'semantic-ui-react'

import '../../../public/stylesheets/master.css'

class Profile extends Component {

  componentWillMount() {
    let username = this.props.params.username
    this.props.fetchUser()
    this.props.fetchOtherUser(username)
  }

  render() {
    const currentUser = this.props.user
    const user = this.props.viewUser

      return (
        <Grid>
          <Grid.Column width={ 5 }>
            <IndividualProfileCard currentUser={currentUser} user={ user } />
            <FollowingList user={ user }/>
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
