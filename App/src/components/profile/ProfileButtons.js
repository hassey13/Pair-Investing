import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Loading from '../Loading'

import { followUser, unfollowUser } from '../../actions/userActions'

class ProfileButtons extends Component {

  handleEdit() {
    browserHistory.push(`/edit`)
  }

  handleMessage() {
    console.log("Sending Message!")
  }

  handleFollow(username) {
    this.props.followUser(username)
    this.props.currentUser.followed = true
  }

  handleUnfollow(username) {
    this.props.unfollowUser(username)
    this.props.currentUser.followed = false
  }

  render() {
    var user = this.props.user
    if ( user === undefined || user.length === 0 ) return <Loading />

    var currentUser = undefined
    if ( this.props.currentUser !== 0 ) currentUser = this.props.currentUser

    if ( currentUser === undefined || currentUser.length === 0 || user.username === currentUser.username ) {
      return (
        <div className={'center'}>
          <Button className={'profileButton'} onClick={ this.handleEdit.bind(this, user.username) } color='yellow'>Edit Profile</Button>
        </div>
      )
    }

    for (var i = 0; i < currentUser.friends.length; i++) {
      if ( currentUser.friends[i].username === user.username) {
        currentUser.followed = true
      }
    }

    if ( !currentUser.followed ) {
      return (
        <div className={'center'}>
          <Button className={'profileButton'} onClick={ this.handleMessage.bind(this, user.username) } color='blue'>Message</Button>
          <Button className={'profileButton'} onClick={ this.handleFollow.bind(this, user.username) } color='green'>Follow</Button>
        </div>
      )
    }

    return (
      <div className={'center'}>
        <Button className={'profileButton'} onClick={ this.handleMessage.bind(this, user.username) } color='blue'>Message</Button>
        <Button className={'profileButton'} onClick={ this.handleUnfollow.bind(this, user.username) } color='red'>Unfollow</Button>
      </div>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    followUser: function(username){
      let action = followUser(username)
      dispatch( action )
    },
    unfollowUser: function(username){
      let action = unfollowUser(username)
      dispatch( action )
    }
  }
}

export default connect( null, mapDispatchToProps )( ProfileButtons )
